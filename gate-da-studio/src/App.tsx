import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { CALCULUS_CHAPTERS } from './data/calculus'
import {
  ALL_STUDY_MODULES,
  getModuleMetaById,
  loadAllModulesWithChapters,
} from './data/modulesRegistry'
import {
  getChapterRefById,
  getTrackById,
  getTrackForChapter,
  getRequiredModuleIdsForTrack,
  type SubjectTrackId,
} from './data/subjectTracks'
import type { ChapterData, PilotFeedbackItem, UserProgressState } from './types/curriculum'
import { SubjectMap } from './components/SubjectMap'
import { ChapterDeck } from './components/ChapterDeck'
import { PlanDashboard } from './components/PlanDashboard'
import { GlobalArsenalView, MistakeVaultView } from './components/GlobalArsenalAndVault'
import { GateCalculator } from './components/GateCalculator'
import { FeedbackModal } from './components/FeedbackDrawer'
import { SyncModal, type SyncStatus } from './components/SyncModal'
import { STUDY_THEMES, type StudyThemeId } from './themes/studyThemes'
import {
  loadSyncConfig,
  saveSyncConfig,
  clearSyncConfig,
  connectWithGithubToken,
  pullProgressFromGist,
  pushProgressToGist,
  mergeSyncedProgress,
  type CloudSyncConfig,
  type SyncedPayload,
} from './utils/cloudSync'
import {
  Compass,
  BookOpen,
  Zap,
  Bookmark,
  Calculator,
  MessageSquarePlus,
  GraduationCap,
  Palette,
  Check,
  Cloud,
} from 'lucide-react'

const EMPTY_PROGRESS: UserProgressState = {
  completedConcepts: {},
  completedChapters: {},
  questionAttempts: {},
  bookmarkedQuestions: {},
  questionNotes: {},
  chapterConfidence: {},
  completedPlanModules: {},
  chapterCardCursor: {},
}

const THEME_STORAGE_KEY = 'gate_da_2027_study_theme'

export const App: React.FC = () => {
  const [mainView, setMainView] = useState<'studio' | 'plan' | 'arsenal' | 'vault'>('studio')
  const [inChapterView, setInChapterView] = useState<boolean>(false)
  const [activeTrackId, setActiveTrackId] = useState<SubjectTrackId>('calc')
  const [activeChapterId, setActiveChapterId] = useState<string>(
    CALCULUS_CHAPTERS[0]?.id || 'calc-ch1'
  )
  const [moduleCache, setModuleCache] = useState<Record<string, ChapterData[]>>({
    'w1-m1': CALCULUS_CHAPTERS,
  })
  const [loadingTrack, setLoadingTrack] = useState(false)
  const [loadingChapter, setLoadingChapter] = useState(false)
  const [loadingLabel, setLoadingLabel] = useState<string | null>(null)

  const [progress, setProgress] = useState<UserProgressState>(EMPTY_PROGRESS)
  const [feedbackItems, setFeedbackItems] = useState<PilotFeedbackItem[]>([])
  const [calcOpen, setCalcOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [syncOpen, setSyncOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)

  // Cross-device private GitHub Gist sync state
  const [syncConfig, setSyncConfig] = useState<CloudSyncConfig | null>(() => loadSyncConfig())
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() =>
    loadSyncConfig() ? 'synced' : 'local'
  )
  const [syncError, setSyncError] = useState<string | null>(null)
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null)
  const [syncRevision, setSyncRevision] = useState(0)
  const [syncToast, setSyncToast] = useState<string | null>(null)

  const themeMenuRef = useRef<HTMLDivElement>(null)
  const moduleCacheRef = useRef(moduleCache)
  moduleCacheRef.current = moduleCache
  const progressRef = useRef(progress)
  progressRef.current = progress
  const feedbackRef = useRef(feedbackItems)
  feedbackRef.current = feedbackItems
  const syncConfigRef = useRef(syncConfig)
  syncConfigRef.current = syncConfig
  const pushTimerRef = useRef<number | null>(null)
  const pendingPushPayloadRef = useRef<SyncedPayload | null>(null)
  const lastPullAttemptRef = useRef<number>(0)
  const toastTimerRef = useRef<number | null>(null)

  const [studyTheme, setStudyTheme] = useState<StudyThemeId>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as StudyThemeId | null
    return STUDY_THEMES.some((t) => t.id === saved) && saved ? saved : 'copper-paper'
  })

  const [feedbackCtx, setFeedbackCtx] = useState<{
    contextType: PilotFeedbackItem['contextType']
    contextTitle: string
  }>({
    contextType: 'general',
    contextTitle: 'GATE DA 2027 Studio Overall',
  })

  // Apply study theme attribute on <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-study-theme', studyTheme)
    localStorage.setItem(THEME_STORAGE_KEY, studyTheme)
  }, [studyTheme])

  // Background-load all 17 modules once so SubjectMap, Direct Arsenal & Mistake Vault have instant data
  useEffect(() => {
    let cancelled = false
    loadAllModulesWithChapters()
      .then((list) => {
        if (cancelled) return
        setModuleCache((prev) => {
          const next = { ...prev }
          for (const item of list) next[item.meta.id] = item.chapters
          return next
        })
      })
      .catch(() => {
        // Demand-loading inside selectTrack / openChapter still handles any uncached module
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Close theme popover on outside click
  useEffect(() => {
    if (!themeMenuOpen) return
    const handler = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setThemeMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [themeMenuOpen])

  const showSyncToast = useCallback((msg: string) => {
    setSyncToast(msg)
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => {
      setSyncToast(null)
    }, 3600)
  }, [])

  const ensureModulesLoaded = useCallback(async (moduleIds: string[]) => {
    const missing = moduleIds.filter(
      (id) => !moduleCacheRef.current[id] || moduleCacheRef.current[id].length === 0
    )
    if (missing.length === 0) return

    const loaded = await Promise.all(
      missing.map(async (id) => {
        const meta = getModuleMetaById(id)
        const chapters = await meta.loadChapters()
        return { id: meta.id, chapters }
      })
    )

    setModuleCache((prev) => {
      const next = { ...prev }
      for (const item of loaded) {
        next[item.id] = item.chapters
      }
      moduleCacheRef.current = next
      return next
    })
  }, [])

  const resumeToChapterSilently = useCallback(
    async (chapterId: string) => {
      const ref = getChapterRefById(chapterId)
      setActiveTrackId(ref.trackId)
      setActiveChapterId(ref.chapterId)
      setMainView('studio')
      setInChapterView(true)

      const alreadyLoaded = moduleCacheRef.current[ref.moduleId]?.some(
        (c) => c.id === ref.chapterId
      )
      if (alreadyLoaded) return

      const track = getTrackById(ref.trackId)
      setLoadingLabel(`Resuming ${track.shortTitle} · Ch.${ref.trackChapterNumber}…`)
      setLoadingChapter(true)
      try {
        await ensureModulesLoaded([ref.moduleId])
      } finally {
        setLoadingChapter(false)
        setLoadingLabel(null)
      }
    },
    [ensureModulesLoaded]
  )

  const scheduleCloudPush = useCallback(
    (nextProgress: UserProgressState, nextFeedback?: PilotFeedbackItem[]) => {
      const cfg = syncConfigRef.current
      if (!cfg) return
      const payload: SyncedPayload = {
        version: 1,
        updatedAt: nextProgress.updatedAt || new Date().toISOString(),
        progress: nextProgress,
        feedbackItems: nextFeedback ?? feedbackRef.current,
      }
      pendingPushPayloadRef.current = payload
      if (pushTimerRef.current) window.clearTimeout(pushTimerRef.current)
      pushTimerRef.current = window.setTimeout(async () => {
        const activeCfg = syncConfigRef.current
        const toSend = pendingPushPayloadRef.current
        if (!activeCfg || !toSend) return
        pendingPushPayloadRef.current = null
        pushTimerRef.current = null
        setSyncStatus('syncing')
        try {
          await pushProgressToGist(activeCfg.token, activeCfg.gistId, toSend)
          setSyncStatus('synced')
          setSyncError(null)
          setLastSyncedAt(new Date().toISOString())
        } catch (err: unknown) {
          setSyncStatus('error')
          setSyncError(err instanceof Error ? err.message : 'Cloud sync failed.')
        }
      }, 1200)
    },
    []
  )

  const applyHydratedState = useCallback(
    (hydrated: UserProgressState, fromCloud: boolean) => {
      progressRef.current = hydrated
      setProgress(hydrated)
      localStorage.setItem('gate_da_2027_progress', JSON.stringify(hydrated))

      if (hydrated.lastVisitedChapterId) {
        const ref = getChapterRefById(hydrated.lastVisitedChapterId)
        void resumeToChapterSilently(ref.chapterId)
        if (fromCloud) {
          setSyncRevision((r) => r + 1)
          const track = getTrackById(ref.trackId)
          const cardNum = (hydrated.chapterCardCursor?.[ref.chapterId] ?? 0) + 1
          showSyncToast(`Synced · Resumed ${track.shortTitle} Ch.${ref.trackChapterNumber} (Card ${cardNum})`)
        }
      }
    },
    [resumeToChapterSilently, showSyncToast]
  )

  const pullFromCloud = useCallback(
    async (force = false) => {
      const cfg = syncConfigRef.current
      if (!cfg) return
      const now = Date.now()
      if (!force && now - lastPullAttemptRef.current < 8000) return
      lastPullAttemptRef.current = now

      setSyncStatus('syncing')
      try {
        const remote = await pullProgressFromGist(cfg.token, cfg.gistId)
        if (remote?.progress) {
          const { merged, adoptedRemote } = mergeSyncedProgress(progressRef.current, remote.progress)
          if (adoptedRemote) {
            applyHydratedState(merged, true)
            if (Array.isArray(remote.feedbackItems)) {
              setFeedbackItems(remote.feedbackItems)
              localStorage.setItem('gate_da_2027_feedback', JSON.stringify(remote.feedbackItems))
            }
          } else if (progressRef.current.updatedAt) {
            // Local is newer than cloud — push local up so other devices receive it
            await pushProgressToGist(cfg.token, cfg.gistId, {
              version: 1,
              updatedAt: merged.updatedAt || new Date().toISOString(),
              progress: merged,
              feedbackItems: feedbackRef.current,
            })
          }
        }
        setSyncStatus('synced')
        setSyncError(null)
        setLastSyncedAt(new Date().toISOString())
      } catch (err: unknown) {
        setSyncStatus('error')
        setSyncError(err instanceof Error ? err.message : 'Cloud sync pull failed.')
      }
    },
    [applyHydratedState]
  )

  // Load persisted progress & feedback (from localStorage always; synced with disk in dev + GitHub Gist if connected)
  useEffect(() => {
    const hydrateFromLocal = () => {
      try {
        const local = localStorage.getItem('gate_da_2027_progress')
        if (local) {
          const hydrated: UserProgressState = { ...EMPTY_PROGRESS, ...JSON.parse(local) }
          applyHydratedState(hydrated, false)
        }
      } catch {
        // Ignore malformed localStorage
      }
      try {
        const localFb = localStorage.getItem('gate_da_2027_feedback')
        if (localFb) {
          const parsed = JSON.parse(localFb)
          if (Array.isArray(parsed)) setFeedbackItems(parsed)
        }
      } catch {
        // Ignore malformed localStorage
      }
    }

    if (!import.meta.env.DEV) {
      hydrateFromLocal()
      if (syncConfigRef.current) {
        void pullFromCloud(true)
      }
      return
    }

    fetch('/api/progress')
      .then((r) => {
        if (!r.ok) throw new Error('No local API')
        return r.json()
      })
      .then((data) => {
        if (data && typeof data === 'object' && Object.keys(data).length > 0) {
          const hydrated: UserProgressState = { ...EMPTY_PROGRESS, ...data }
          applyHydratedState(hydrated, false)
        } else {
          hydrateFromLocal()
        }
      })
      .catch(hydrateFromLocal)
      .finally(() => {
        if (syncConfigRef.current) {
          void pullFromCloud(true)
        }
      })

    fetch('/api/feedback')
      .then((r) => {
        if (!r.ok) throw new Error('No local API')
        return r.json()
      })
      .then((data) => {
        if (Array.isArray(data?.items)) setFeedbackItems(data.items)
      })
      .catch(() => {})
  }, [applyHydratedState, pullFromCloud])

  // Auto-pull when returning to tab on iPhone / iPad / Mac, and flush pending push when leaving
  useEffect(() => {
    const flushPendingPush = () => {
      const cfg = syncConfigRef.current
      const pending = pendingPushPayloadRef.current
      if (!cfg || !pending) return
      pendingPushPayloadRef.current = null
      if (pushTimerRef.current) {
        window.clearTimeout(pushTimerRef.current)
        pushTimerRef.current = null
      }
      fetch(`https://api.github.com/gists/${encodeURIComponent(cfg.gistId)}`, {
        method: 'PATCH',
        keepalive: true,
        headers: {
          Authorization: `Bearer ${cfg.token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          files: {
            'gate-da-2027-studio-progress.json': {
              content: JSON.stringify(pending, null, 2),
            },
          },
        }),
      }).catch(() => {})
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        flushPendingPush()
      } else if (document.visibilityState === 'visible' && syncConfigRef.current) {
        void pullFromCloud(false)
      }
    }
    const handleFocus = () => {
      if (syncConfigRef.current) {
        void pullFromCloud(false)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('pagehide', flushPendingPush)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('pagehide', flushPendingPush)
    }
  }, [pullFromCloud])

  const updateProgress = useCallback(
    (updater: (prev: UserProgressState) => UserProgressState) => {
      setProgress((prev) => {
        const next: UserProgressState = {
          ...updater(prev),
          updatedAt: new Date().toISOString(),
        }
        progressRef.current = next
        localStorage.setItem('gate_da_2027_progress', JSON.stringify(next))
        if (import.meta.env.DEV) {
          fetch('/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(next),
          }).catch(() => {})
        }
        scheduleCloudPush(next)
        return next
      })
    },
    [scheduleCloudPush]
  )

  const persistFeedback = useCallback(
    (nextItems: PilotFeedbackItem[]) => {
      setFeedbackItems(nextItems)
      feedbackRef.current = nextItems
      localStorage.setItem('gate_da_2027_feedback', JSON.stringify(nextItems))
      if (import.meta.env.DEV) {
        fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: nextItems }),
        }).catch(() => {})
      }
      scheduleCloudPush(progressRef.current, nextItems)
    },
    [scheduleCloudPush]
  )

  const handleConnectSyncToken = useCallback(
    async (token: string) => {
      setSyncStatus('syncing')
      const currentProgress: UserProgressState = {
        ...progressRef.current,
        updatedAt: progressRef.current.updatedAt || new Date().toISOString(),
      }
      const { config, remotePayload } = await connectWithGithubToken(token, {
        version: 1,
        updatedAt: currentProgress.updatedAt!,
        progress: currentProgress,
        feedbackItems: feedbackRef.current,
      })
      saveSyncConfig(config)
      syncConfigRef.current = config
      setSyncConfig(config)

      if (remotePayload?.progress) {
        const { merged, adoptedRemote } = mergeSyncedProgress(progressRef.current, remotePayload.progress)
        if (adoptedRemote) {
          applyHydratedState(merged, true)
          if (Array.isArray(remotePayload.feedbackItems)) {
            setFeedbackItems(remotePayload.feedbackItems)
            localStorage.setItem('gate_da_2027_feedback', JSON.stringify(remotePayload.feedbackItems))
          }
        } else {
          await pushProgressToGist(config.token, config.gistId, {
            version: 1,
            updatedAt: merged.updatedAt || new Date().toISOString(),
            progress: merged,
            feedbackItems: feedbackRef.current,
          })
          showSyncToast('Cloud Sync connected · Progress backed up!')
        }
      } else {
        showSyncToast('Cloud Sync connected · Private Gist created!')
      }

      setSyncStatus('synced')
      setSyncError(null)
      setLastSyncedAt(new Date().toISOString())
    },
    [applyHydratedState, showSyncToast]
  )

  const handleDisconnectSync = useCallback(() => {
    clearSyncConfig()
    syncConfigRef.current = null
    setSyncConfig(null)
    setSyncStatus('local')
    setSyncError(null)
    setLastSyncedAt(null)
  }, [])

  const handleExportProgressJson = useCallback(() => {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 1,
            exportedAt: new Date().toISOString(),
            progress: progressRef.current,
            feedbackItems: feedbackRef.current,
          },
          null,
          2
        ),
      ],
      { type: 'application/json' }
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gate-da-2027-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const handleImportProgressJson = useCallback(
    (fileText: string) => {
      const parsed = JSON.parse(fileText)
      const incoming = parsed?.progress && typeof parsed.progress === 'object' ? parsed.progress : parsed
      if (!incoming || typeof incoming !== 'object') {
        throw new Error('Could not find valid progress data in this JSON file.')
      }
      const hydrated: UserProgressState = {
        ...EMPTY_PROGRESS,
        ...incoming,
        updatedAt: new Date().toISOString(),
      }
      applyHydratedState(hydrated, true)
      if (Array.isArray(parsed?.feedbackItems)) {
        persistFeedback(parsed.feedbackItems)
      }
      scheduleCloudPush(hydrated)
    },
    [applyHydratedState, persistFeedback, scheduleCloudPush]
  )

  const selectTrack = useCallback(
    async (trackId: SubjectTrackId) => {
      setActiveTrackId(trackId)
      const requiredIds = getRequiredModuleIdsForTrack(trackId)
      const hasMissing = requiredIds.some(
        (id) => !moduleCacheRef.current[id] || moduleCacheRef.current[id].length === 0
      )
      if (!hasMissing) return

      setLoadingTrack(true)
      try {
        await ensureModulesLoaded(requiredIds)
      } finally {
        setLoadingTrack(false)
      }
    },
    [ensureModulesLoaded]
  )

  const openChapter = useCallback(
    async (chapterId: string) => {
      const ref = getChapterRefById(chapterId)
      setActiveTrackId(ref.trackId)
      setActiveChapterId(ref.chapterId)
      setMainView('studio')
      setInChapterView(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })

      updateProgress((prev) => ({
        ...prev,
        lastVisitedChapterId: ref.chapterId,
      }))

      const alreadyLoaded = moduleCacheRef.current[ref.moduleId]?.some(
        (c) => c.id === ref.chapterId
      )
      if (alreadyLoaded) return

      const track = getTrackById(ref.trackId)
      setLoadingLabel(`Loading ${track.shortTitle} · Ch.${ref.trackChapterNumber}…`)
      setLoadingChapter(true)
      try {
        await ensureModulesLoaded([ref.moduleId])
      } finally {
        setLoadingChapter(false)
        setLoadingLabel(null)
      }
    },
    [ensureModulesLoaded, updateProgress]
  )

  const selectModule = useCallback(
    async (modId: string) => {
      const meta = getModuleMetaById(modId)
      setMainView('studio')
      setInChapterView(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })

      let chapters = moduleCacheRef.current[meta.id]
      if (!chapters || chapters.length === 0) {
        setLoadingLabel(`Loading Module ${meta.moduleNumber}: ${meta.shortTitle}…`)
        setLoadingChapter(true)
        try {
          chapters = await meta.loadChapters()
          setModuleCache((prev) => {
            const next = { ...prev, [meta.id]: chapters }
            moduleCacheRef.current = next
            return next
          })
        } finally {
          setLoadingChapter(false)
          setLoadingLabel(null)
        }
      }

      if (chapters && chapters[0]) {
        await openChapter(chapters[0].id)
      }
    },
    [openChapter]
  )

  const updateCardCursor = useCallback(
    (chapterId: string, cardIndex: number) => {
      updateProgress((prev) => ({
        ...prev,
        lastVisitedChapterId: chapterId,
        chapterCardCursor: {
          ...(prev.chapterCardCursor || {}),
          [chapterId]: cardIndex,
        },
      }))
    },
    [updateProgress]
  )

  const toggleConcept = useCallback(
    (conceptId: string) => {
      updateProgress((prev) => ({
        ...prev,
        completedConcepts: {
          ...prev.completedConcepts,
          [conceptId]: !prev.completedConcepts[conceptId],
        },
      }))
    },
    [updateProgress]
  )

  const toggleChapterComplete = useCallback(
    (chapterId: string) => {
      updateProgress((prev) => ({
        ...prev,
        completedChapters: {
          ...prev.completedChapters,
          [chapterId]: !prev.completedChapters[chapterId],
        },
      }))
    },
    [updateProgress]
  )

  const setConfidence = useCallback(
    (chapterId: string, stars: 1 | 2 | 3 | 4 | 5) => {
      updateProgress((prev) => ({
        ...prev,
        chapterConfidence: {
          ...prev.chapterConfidence,
          [chapterId]: stars,
        },
      }))
    },
    [updateProgress]
  )

  const recordAttempt = useCallback(
    (qId: string, correct: boolean, userAnswer: string) => {
      updateProgress((prev) => {
        const prevAttempt = prev.questionAttempts[qId]
        return {
          ...prev,
          questionAttempts: {
            ...prev.questionAttempts,
            [qId]: {
              correct,
              userAnswer,
              attempts: (prevAttempt?.attempts || 0) + 1,
              lastAttemptAt: new Date().toISOString(),
            },
          },
        }
      })
    },
    [updateProgress]
  )

  const toggleBookmark = useCallback(
    (qId: string) => {
      updateProgress((prev) => ({
        ...prev,
        bookmarkedQuestions: {
          ...prev.bookmarkedQuestions,
          [qId]: !prev.bookmarkedQuestions[qId],
        },
      }))
    },
    [updateProgress]
  )

  const saveNote = useCallback(
    (qId: string, note: string) => {
      updateProgress((prev) => ({
        ...prev,
        questionNotes: {
          ...prev.questionNotes,
          [qId]: note,
        },
      }))
    },
    [updateProgress]
  )

  const togglePlanModule = useCallback(
    (modId: string) => {
      updateProgress((prev) => ({
        ...prev,
        completedPlanModules: {
          ...prev.completedPlanModules,
          [modId]: !prev.completedPlanModules[modId],
        },
      }))
    },
    [updateProgress]
  )

  const addFeedback = useCallback(
    (item: Omit<PilotFeedbackItem, 'id' | 'createdAt'>) => {
      const entry: PilotFeedbackItem = {
        ...item,
        id: `fb-${Date.now()}`,
        createdAt: new Date().toISOString(),
      }
      persistFeedback([entry, ...feedbackItems])
    },
    [feedbackItems, persistFeedback]
  )

  const deleteFeedback = useCallback(
    (id: string) => {
      persistFeedback(feedbackItems.filter((x) => x.id !== id))
    },
    [feedbackItems, persistFeedback]
  )

  const chaptersById = useMemo(() => {
    const map: Record<string, ChapterData> = {}
    for (const chapters of Object.values(moduleCache)) {
      for (const ch of chapters) {
        map[ch.id] = ch
      }
    }
    return map
  }, [moduleCache])

  const allModulesWithChapters = useMemo(
    () =>
      ALL_STUDY_MODULES.map((meta) => ({
        meta,
        chapters: moduleCache[meta.id] || [],
      })).filter((x) => x.chapters.length > 0),
    [moduleCache]
  )

  const allLoadedChapters = useMemo(
    () => allModulesWithChapters.flatMap((x) => x.chapters),
    [allModulesWithChapters]
  )

  const activeChapter = chaptersById[activeChapterId]
  const activeChapterRef = getChapterRefById(activeChapterId)
  const activeChapterTrack = getTrackForChapter(activeChapterId)
  const currentThemeMeta = STUDY_THEMES.find((t) => t.id === studyTheme) || STUDY_THEMES[0]
  const isFullBleedDeck = mainView === 'studio' && inChapterView

  const goHomeToSubjects = () => {
    setMainView('studio')
    setInChapterView(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen s-canvas flex flex-col">
      {/* Slim 48px Sticky Top Header */}
      <header className="sticky top-0 z-40 border-b s-header backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-12 flex items-center justify-between gap-2">
          {/* Brand — returns to Subjects Home */}
          <button
            type="button"
            onClick={goHomeToSubjects}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div
              className="w-7 h-7 rounded-lg border flex items-center justify-center transition"
              style={{
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'var(--accent-border)',
                color: 'var(--accent-text)',
              }}
            >
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold tracking-tight s-text-primary leading-none hidden sm:inline">
              GATE DA 2027 Studio
            </span>
          </button>

          {/* 4 Clean Primary Nav Buttons */}
          <nav className="flex items-center gap-0.5 text-xs p-0.5 rounded-xl border s-surface">
            {(
              [
                ['studio', BookOpen, 'Subjects', 'Study', false],
                ['plan', Compass, '8-Week Plan', 'Plan', false],
                ['arsenal', Zap, 'Direct Arsenal', 'Arsenal', true],
                ['vault', Bookmark, 'Vault', 'Vault', true],
              ] as const
            ).map(([viewKey, Icon, label, mobileLabel, hideSm]) => {
              const active = mainView === viewKey
              return (
                <button
                  key={viewKey}
                  type="button"
                  title={label}
                  aria-label={label}
                  onClick={() => {
                    if (viewKey === 'studio') {
                      goHomeToSubjects()
                    } else {
                      setMainView(viewKey)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                  className={`px-2 sm:px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5 cursor-pointer transition ${
                    active
                      ? 's-btn-primary font-semibold'
                      : 's-text-secondary hover:bg-[var(--bg-hover)]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {hideSm ? (
                    <span className="hidden md:inline">{label}</span>
                  ) : (
                    <>
                      <span className="sm:hidden">{mobileLabel}</span>
                      <span className="hidden sm:inline">{label}</span>
                    </>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Compact Utilities: Theme · Calc · Style Log */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Study Accent Switcher */}
            <div className="sm:relative" ref={themeMenuRef}>
              <button
                type="button"
                onClick={() => setThemeMenuOpen((o) => !o)}
                title="Switch dark study color accent"
                className="px-2 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 cursor-pointer s-btn-ghost transition"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: currentThemeMeta.swatchAccent }}
                />
                <Palette className="w-3.5 h-3.5 s-text-muted hidden sm:block" />
                <span className="hidden lg:inline s-text-primary">Theme</span>
              </button>

              {themeMenuOpen && (
                <div className="absolute right-3 top-full mt-1.5 sm:right-0 sm:mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-xl border s-surface shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-2.5 py-1.5 border-b s-border flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider s-text-muted">
                      Dark Study Accents
                    </span>
                    <span className="text-[10px] font-mono s-text-muted">
                      Low-Glare Calibrated
                    </span>
                  </div>
                  {STUDY_THEMES.map((t) => {
                    const selected = t.id === studyTheme
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setStudyTheme(t.id)
                          setThemeMenuOpen(false)
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg border flex items-center justify-between gap-2.5 cursor-pointer transition ${
                          selected
                            ? 's-pill-accent'
                            : 'border-transparent hover:bg-[var(--bg-hover)] s-text-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className="w-6 h-6 rounded-md border flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: t.swatchBg,
                              borderColor: 'var(--border-strong)',
                            }}
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: t.swatchAccent }}
                            />
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold s-text-primary flex items-center gap-1.5">
                              <span>{t.name}</span>
                              {t.recommended && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded border s-pill-formula font-mono">
                                  Optimal
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] s-text-muted truncate">{t.subtitle}</div>
                          </div>
                        </div>
                        {selected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSyncOpen(true)}
              title={
                syncConfig
                  ? syncStatus === 'error'
                    ? 'Cloud Sync error — click to inspect'
                    : 'Cloud Sync active across Mac, iPad & iPhone'
                  : 'Set up Cross-Device Cloud Sync'
              }
              className={`px-2 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 cursor-pointer transition ${
                syncStatus === 'error'
                  ? 's-pill-bad'
                  : syncConfig
                    ? 's-pill-ok'
                    : 's-btn-ghost'
              }`}
            >
              <Cloud className={`w-3.5 h-3.5 shrink-0 ${syncStatus === 'syncing' ? 'animate-pulse' : ''}`} />
              <span className="hidden lg:inline">
                {syncConfig ? (syncStatus === 'syncing' ? 'Syncing' : 'Synced') : 'Sync'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCalcOpen((o) => !o)}
              title="Toggle GATE Virtual Scientific Calculator"
              className={`px-2 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 cursor-pointer transition ${
                calcOpen ? 's-pill-accent' : 's-btn-ghost'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Calc</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFeedbackCtx({
                  contextType: 'general',
                  contextTitle: 'GATE DA 2027 Studio Overall',
                })
                setFeedbackOpen(true)
              }}
              title={`Style Log (${feedbackItems.length})`}
              className="hidden sm:flex px-2 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium items-center gap-1 cursor-pointer transition"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} />
              {feedbackItems.length > 0 && (
                <span className="font-mono text-[11px] s-text-secondary">
                  {feedbackItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Full-Bleed for Horizontal Deck, Centered max-w-5xl for Secondary Views */}
      <main
        className={
          isFullBleedDeck ? 'w-full flex-1' : 'max-w-5xl w-full mx-auto px-4 py-6 flex-1'
        }
      >
        {mainView === 'studio' && !inChapterView && (
          <SubjectMap
            activeTrackId={activeTrackId}
            onSelectTrack={selectTrack}
            chaptersById={chaptersById}
            loadingTrack={loadingTrack}
            progress={progress}
            onOpenChapter={openChapter}
          />
        )}

        {mainView === 'studio' && inChapterView && (
          loadingChapter || !activeChapter ? (
            <div className="max-w-3xl mx-auto px-4 py-12">
              <div className="rounded-2xl border s-surface p-10 text-center text-sm s-text-muted">
                {loadingLabel || 'Loading module…'}
              </div>
            </div>
          ) : (
            <ChapterDeck
              key={activeChapter.id}
              chapter={activeChapter}
              track={activeChapterTrack}
              trackChapterNumber={activeChapterRef.trackChapterNumber}
              chapterCache={chaptersById}
              progress={progress}
              syncRevision={syncRevision}
              onBackToSubjects={goHomeToSubjects}
              onSelectChapter={openChapter}
              onCardCursorChange={updateCardCursor}
              onToggleConcept={toggleConcept}
              onToggleChapterComplete={toggleChapterComplete}
              onSetConfidence={setConfidence}
              onRecordAttempt={recordAttempt}
              onToggleBookmark={toggleBookmark}
              onSaveNote={saveNote}
              onOpenFeedback={(ctx) => {
                setFeedbackCtx(ctx)
                setFeedbackOpen(true)
              }}
            />
          )
        )}

        {mainView === 'plan' && (
          <PlanDashboard
            progress={progress}
            onTogglePlanModule={togglePlanModule}
            onOpenModule={selectModule}
          />
        )}

        {mainView === 'arsenal' && (
          <GlobalArsenalView
            chapters={allLoadedChapters.length > 0 ? allLoadedChapters : CALCULUS_CHAPTERS}
            modulesWithChapters={allModulesWithChapters}
          />
        )}

        {mainView === 'vault' && (
          <MistakeVaultView
            chapters={allLoadedChapters.length > 0 ? allLoadedChapters : CALCULUS_CHAPTERS}
            progress={progress}
            onRecordAttempt={recordAttempt}
            onToggleBookmark={toggleBookmark}
            onSaveNote={saveNote}
          />
        )}
      </main>

      {/* Subtle Cloud-Sync Resume Toast */}
      {syncToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-3.5 py-2 rounded-full border s-pill-ok shadow-xl text-xs font-medium flex items-center gap-2 max-w-[92vw]">
          <Cloud className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{syncToast}</span>
        </div>
      )}

      {/* Floating Utilities */}
      <GateCalculator isOpen={calcOpen} onClose={() => setCalcOpen(false)} />
      <SyncModal
        isOpen={syncOpen}
        onClose={() => setSyncOpen(false)}
        syncConfig={syncConfig}
        syncStatus={syncStatus}
        syncError={syncError}
        lastSyncedAt={lastSyncedAt}
        onConnectToken={handleConnectSyncToken}
        onSyncNow={() => pullFromCloud(true)}
        onDisconnect={handleDisconnectSync}
        onExportJson={handleExportProgressJson}
        onImportJson={handleImportProgressJson}
      />
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        initialContext={feedbackCtx}
        feedbackItems={feedbackItems}
        onAddFeedback={addFeedback}
        onDeleteFeedback={deleteFeedback}
      />
    </div>
  )
}

export default App
