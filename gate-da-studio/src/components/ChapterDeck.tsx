import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from 'react'
import type { ChapterData, PilotFeedbackItem, UserProgressState } from '../types/curriculum'
import {
  SUBJECT_TRACKS,
  getTrackById,
  getAdjacentChapterRef,
  type SubjectTrackId,
  type SubjectTrackMeta,
} from '../data/subjectTracks'
import { GlossaryCard } from './deck/GlossaryCard'
import { TopicCard } from './deck/TopicCard'
import { PlaybookDeckCard } from './deck/PlaybookDeckCard'
import { ArsenalDeckCard } from './deck/ArsenalDeckCard'
import { PracticeDeckCard } from './deck/PracticeDeckCard'
import { MathText } from './MathText'
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Check,
  CheckCircle2,
  XCircle,
  GitBranch,
  Sparkles,
  MessageSquarePlus,
} from 'lucide-react'

export interface ChapterDeckProps {
  chapter: ChapterData
  track: SubjectTrackMeta
  trackChapterNumber: number
  chapterCache: Record<string, ChapterData>
  progress: UserProgressState
  syncRevision?: number
  onBackToSubjects: () => void
  onSelectChapter: (chapterId: string) => void
  onCardCursorChange: (chapterId: string, cardIndex: number) => void
  onToggleConcept: (conceptId: string) => void
  onToggleChapterComplete: (chapterId: string) => void
  onSetConfidence: (chapterId: string, stars: 1 | 2 | 3 | 4 | 5) => void
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
  onOpenFeedback: (ctx: {
    contextType: PilotFeedbackItem['contextType']
    contextTitle: string
  }) => void
}

interface DeckPillMeta {
  index: number
  label: string
  kind: 'words' | 'topic' | 'playbook' | 'arsenal' | 'practice'
  done?: boolean
}

export const ChapterDeck: React.FC<ChapterDeckProps> = ({
  chapter,
  track,
  trackChapterNumber,
  chapterCache,
  progress,
  syncRevision = 0,
  onBackToSubjects,
  onSelectChapter,
  onCardCursorChange,
  onToggleConcept,
  onToggleChapterComplete,
  onSetConfidence,
  onRecordAttempt,
  onToggleBookmark,
  onSaveNote,
  onOpenFeedback,
}) => {
  const conceptCount = chapter.concepts.length
  const totalCards = 1 + conceptCount + 3

  const clampIndex = useCallback(
    (idx: number) => Math.max(0, Math.min(idx, totalCards - 1)),
    [totalCards]
  )

  const [activeIdx, setActiveIdx] = useState<number>(() =>
    Math.max(0, Math.min(progress.chapterCardCursor?.[chapter.id] ?? 0, totalCards - 1))
  )
  const [animateTrack, setAnimateTrack] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const [dragOffsetX, setDragOffsetX] = useState(0)
  const [viewportTier, setViewportTier] = useState<'phone' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop'
    if (window.innerWidth < 640) return 'phone'
    if (window.innerWidth < 1024) return 'tablet'
    return 'desktop'
  })
  const [inactiveMaxHeight, setInactiveMaxHeight] = useState<number>(520)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  // Popover state
  const [jumpOpen, setJumpOpen] = useState(false)
  const [jumpTrackId, setJumpTrackId] = useState<SubjectTrackId>(track.id)
  const [scopeOpen, setScopeOpen] = useState(false)

  const jumpPopoverRef = useRef<HTMLDivElement>(null)
  const scopePopoverRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const pillRefs = useRef<Array<HTMLButtonElement | null>>([])
  const lastWheelNavRef = useRef<number>(0)
  const touchStartRef = useRef<{
    x: number
    y: number
    ignored: boolean
    axis: 'undecided' | 'horizontal' | 'vertical'
  } | null>(null)

  const activeIdxRef = useRef(activeIdx)
  activeIdxRef.current = activeIdx

  const popoverOpenRef = useRef(jumpOpen || scopeOpen)
  popoverOpenRef.current = jumpOpen || scopeOpen

  const progressCursorRef = useRef(progress.chapterCardCursor)
  progressCursorRef.current = progress.chapterCardCursor

  // Restore saved card cursor synchronously before paint whenever chapter changes
  useLayoutEffect(() => {
    const saved = progressCursorRef.current?.[chapter.id] ?? 0
    const restored = Math.max(0, Math.min(saved, 1 + chapter.concepts.length + 3 - 1))
    activeIdxRef.current = restored
    setAnimateTrack(false)
    setActiveIdx(restored)
    setHoveredIdx(null)
    setJumpOpen(false)
    setScopeOpen(false)
    setJumpTrackId(track.id)

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimateTrack(true)
      })
    })
    return () => cancelAnimationFrame(rafId)
  }, [chapter.id, chapter.concepts.length, track.id])

  // Keep activeIdx safe if totalCards ever shrinks
  useEffect(() => {
    setActiveIdx((prev) => clampIndex(prev))
  }, [clampIndex])

  // Slide smoothly to remote cursor when a cross-device sync updates this chapter
  useEffect(() => {
    if (syncRevision <= 0) return
    const saved = progressCursorRef.current?.[chapter.id] ?? 0
    const nextIdx = clampIndex(saved)
    if (nextIdx !== activeIdxRef.current) {
      setAnimateTrack(true)
      setActiveIdx(nextIdx)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [syncRevision, chapter.id, clampIndex])

  const goToCard = useCallback(
    (nextRaw: number) => {
      const nextIdx = clampIndex(nextRaw)
      if (nextIdx === activeIdxRef.current) return
      setAnimateTrack(true)
      setActiveIdx(nextIdx)
      setHoveredIdx(null)
      onCardCursorChange(chapter.id, nextIdx)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [clampIndex, chapter.id, onCardCursorChange]
  )

  const goToCardRef = useRef(goToCard)
  goToCardRef.current = goToCard

  // Compute exact translateX so the active card sits dead-center in the viewport
  const recenterDeck = useCallback(() => {
    const vpEl = viewportRef.current
    const cardEl = cardRefs.current[activeIdxRef.current]
    if (!vpEl || !cardEl) return
    const vpWidth = vpEl.clientWidth
    setViewportTier(vpWidth < 640 ? 'phone' : vpWidth < 1024 ? 'tablet' : 'desktop')
    const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2
    setTranslateX(Math.round(vpWidth / 2 - cardCenter))
  }, [])

  useLayoutEffect(() => {
    recenterDeck()
    // Re-check after a frame in case phone/tablet/desktop flex-basis just toggled
    const rafId = requestAnimationFrame(recenterDeck)
    return () => cancelAnimationFrame(rafId)
  }, [activeIdx, chapter.id, totalCards, viewportTier, recenterDeck])

  // Auto-scroll active card pill into view on phones & tablets
  useEffect(() => {
    pillRefs.current[activeIdx]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeIdx, chapter.id])

  // Re-center on viewport resize
  useEffect(() => {
    const vpEl = viewportRef.current
    if (!vpEl) return
    const handleResize = () => recenterDeck()
    window.addEventListener('resize', handleResize)
    const ro = new ResizeObserver(handleResize)
    ro.observe(vpEl)
    return () => {
      window.removeEventListener('resize', handleResize)
      ro.disconnect()
    }
  }, [recenterDeck])

  // Sync inactive neighboring cards' maxHeight to active card's natural offsetHeight
  useEffect(() => {
    const activeEl = cardRefs.current[activeIdx]
    if (!activeEl) return
    const syncHeight = () => {
      setInactiveMaxHeight(Math.max(activeEl.offsetHeight, 520))
    }
    syncHeight()
    const ro = new ResizeObserver(syncHeight)
    ro.observe(activeEl)
    return () => ro.disconnect()
  }, [activeIdx, chapter.id, totalCards])

  // Close popovers on outside click or Escape
  useEffect(() => {
    if (!jumpOpen && !scopeOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (jumpOpen && jumpPopoverRef.current && !jumpPopoverRef.current.contains(target)) {
        setJumpOpen(false)
      }
      if (scopeOpen && scopePopoverRef.current && !scopePopoverRef.current.contains(target)) {
        setScopeOpen(false)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setJumpOpen(false)
        setScopeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [jumpOpen, scopeOpen])

  // Keyboard ArrowLeft / ArrowRight navigation with input & popover guard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (popoverOpenRef.current) return
      const el = document.activeElement
      const tag = el?.tagName
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        (el instanceof HTMLElement && el.isContentEditable)
      ) {
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToCardRef.current(activeIdxRef.current + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToCardRef.current(activeIdxRef.current - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Debounced horizontal trackpad wheel navigation with scrollable-element guard
  useEffect(() => {
    const vpEl = viewportRef.current
    if (!vpEl) return
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('.katex-display, .overflow-x-auto, input[type="range"]')) {
        return
      }
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
        const now = Date.now()
        if (now - lastWheelNavRef.current < 320) return
        lastWheelNavRef.current = now
        if (e.deltaX > 0) {
          goToCardRef.current(activeIdxRef.current + 1)
        } else {
          goToCardRef.current(activeIdxRef.current - 1)
        }
      }
    }
    vpEl.addEventListener('wheel', handleWheel, { passive: true })
    return () => vpEl.removeEventListener('wheel', handleWheel)
  }, [])

  // Live finger-follow horizontal touch swipe for iPhone & iPad with vertical-scroll & sandbox guard
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return
    const target = e.target as HTMLElement | null
    const ignored = Boolean(
      target?.closest('.katex-display, .overflow-x-auto, input[type="range"], input, textarea, select')
    )
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      ignored,
      axis: 'undecided',
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current
    if (!start || start.ignored || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - start.x
    const dy = e.touches[0].clientY - start.y

    if (start.axis === 'undecided') {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return
      start.axis = Math.abs(dx) > Math.abs(dy) * 1.2 ? 'horizontal' : 'vertical'
    }

    if (start.axis === 'horizontal') {
      // Gentle rubber-band resistance at deck boundaries
      const atEdge =
        (activeIdxRef.current === 0 && dx > 0) ||
        (activeIdxRef.current === totalCards - 1 && dx < 0)
      setDragOffsetX(Math.round(atEdge ? dx * 0.25 : dx * 0.65))
    }
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current
    touchStartRef.current = null
    setDragOffsetX(0)
    if (!start || start.ignored || e.changedTouches.length !== 1) return
    const dx = e.changedTouches[0].clientX - start.x
    const dy = e.changedTouches[0].clientY - start.y
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) goToCard(activeIdx + 1)
      else goToCard(activeIdx - 1)
    }
  }

  const pills: DeckPillMeta[] = useMemo(() => {
    const list: DeckPillMeta[] = [{ index: 0, label: 'Words', kind: 'words' }]
    chapter.concepts.forEach((concept, idx) => {
      list.push({
        index: idx + 1,
        label: `${trackChapterNumber}.${idx + 1}`,
        kind: 'topic',
        done: Boolean(progress.completedConcepts[concept.id]),
      })
    })
    list.push({ index: conceptCount + 1, label: 'Playbook', kind: 'playbook' })
    list.push({ index: conceptCount + 2, label: 'Arsenal', kind: 'arsenal' })
    list.push({
      index: conceptCount + 3,
      label: 'Practice',
      kind: 'practice',
      done: Boolean(progress.completedChapters[chapter.id]),
    })
    return list
  }, [
    chapter.concepts,
    chapter.id,
    conceptCount,
    progress.completedChapters,
    progress.completedConcepts,
    trackChapterNumber,
  ])

  const nextChapterRef = getAdjacentChapterRef(chapter.id, 'next')
  const nextChapterLabel = useMemo(() => {
    if (!nextChapterRef) return undefined
    const nextTrack = getTrackById(nextChapterRef.trackId)
    if (nextTrack.id === track.id) {
      return `Ch.${nextChapterRef.trackChapterNumber}: ${nextChapterRef.shortTitle}`
    }
    return `${nextTrack.shortTitle} · Ch.${nextChapterRef.trackChapterNumber}: ${nextChapterRef.shortTitle}`
  }, [nextChapterRef, track.id])

  const jumpTrack = getTrackById(jumpTrackId)
  const progressPct = ((activeIdx + 1) / totalCards) * 100
  const prevPill = activeIdx > 0 ? pills[activeIdx - 1] : null
  const nextPill = activeIdx < totalCards - 1 ? pills[activeIdx + 1] : null
  const cardBasis =
    viewportTier === 'phone'
      ? '92vw'
      : viewportTier === 'tablet'
        ? 'min(680px, 82vw)'
        : 'min(860px, 72vw)'

  return (
    <div className="w-full flex flex-col">
      {/* Slim Sticky Chapter Control Bar (directly under 48px app header) */}
      <div className="sticky top-12 z-30 border-b s-header backdrop-blur-md">
        <div className="relative max-w-[1440px] mx-auto px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Back to Subjects + Chapter Quick-Jump + Scope Radar */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <button
              type="button"
              onClick={onBackToSubjects}
              className="px-2.5 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium inline-flex items-center gap-1 cursor-pointer transition shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Subjects</span>
            </button>

            {/* Quick-Jump Popover */}
            <div className="sm:relative" ref={jumpPopoverRef}>
              <button
                type="button"
                onClick={() => {
                  setScopeOpen(false)
                  setJumpOpen((open) => {
                    if (!open) setJumpTrackId(track.id)
                    return !open
                  })
                }}
                className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition ${
                  jumpOpen ? 's-pill-accent' : 's-btn-ghost s-text-primary'
                }`}
              >
                <span className="truncate max-w-[155px] sm:max-w-none">
                  {track.order}. {track.shortTitle} · Ch.{trackChapterNumber}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                    jumpOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {jumpOpen && (
                <div className="absolute inset-x-3 top-full mt-1.5 sm:inset-x-auto sm:left-0 sm:w-[440px] max-h-[72dvh] overflow-y-auto rounded-xl border s-surface shadow-2xl p-3 z-50 space-y-3">
                  <div className="flex items-center justify-between border-b s-border pb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider s-text-muted">
                      Jump to Any Subject & Chapter
                    </span>
                    <span className="text-[11px] font-mono s-text-muted">
                      {jumpTrack.chapters.length} chapters
                    </span>
                  </div>

                  {/* 8 Subject Track Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {SUBJECT_TRACKS.map((t) => {
                      const selected = t.id === jumpTrackId
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setJumpTrackId(t.id)}
                          className={`px-2 py-1 rounded-lg border text-[11px] font-medium cursor-pointer transition ${
                            selected ? 's-pill-accent font-semibold' : 's-btn-ghost'
                          }`}
                        >
                          {t.order}. {t.shortTitle}
                        </button>
                      )
                    })}
                  </div>

                  {/* Chapters of Selected Track */}
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-0.5">
                    {jumpTrack.chapters.map((ref) => {
                      const isCurrent = ref.chapterId === chapter.id
                      const isDone = Boolean(progress.completedChapters[ref.chapterId])
                      const loadedCh = chapterCache[ref.chapterId]
                      return (
                        <button
                          key={ref.chapterId}
                          type="button"
                          onClick={() => {
                            setJumpOpen(false)
                            if (ref.chapterId !== chapter.id) {
                              onSelectChapter(ref.chapterId)
                            }
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-lg border text-xs flex items-center justify-between gap-2 cursor-pointer transition ${
                            isCurrent
                              ? 's-pill-accent font-semibold'
                              : 'border-transparent hover:bg-[var(--bg-hover)] s-text-secondary'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-mono text-[11px] s-text-muted shrink-0">
                              Ch.{ref.trackChapterNumber}
                            </span>
                            <span className="truncate s-text-primary">
                              {loadedCh?.title || ref.shortTitle}
                            </span>
                          </div>
                          {isDone && (
                            <Check
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: 'var(--ok-text)' }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Scope Radar Popover */}
            <div className="sm:relative" ref={scopePopoverRef}>
              <button
                type="button"
                onClick={() => {
                  setJumpOpen(false)
                  setScopeOpen((open) => !open)
                }}
                className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition ${
                  scopeOpen ? 's-pill-formula' : 's-btn-ghost'
                }`}
              >
                <Compass className="w-3.5 h-3.5" style={{ color: 'var(--formula-text)' }} />
                <span className="hidden sm:inline">Scope Radar</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${scopeOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {scopeOpen && (
                <div className="absolute inset-x-3 top-full mt-1.5 sm:inset-x-auto sm:left-0 sm:w-[min(560px,88vw)] max-h-[72dvh] overflow-y-auto rounded-xl border s-surface shadow-2xl p-4 z-50 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b s-border pb-2.5">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider s-text-muted">
                        GATE DA Scope & Dependency Radar
                      </div>
                      <div className="text-sm font-bold s-text-primary mt-0.5">
                        Ch.{trackChapterNumber}: {chapter.title}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md border s-pill-neutral font-mono text-[11px] shrink-0">
                      ~{chapter.estimatedHours}h
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    {/* What IS Important */}
                    <div className="rounded-xl border s-inset p-3 space-y-2">
                      <div
                        className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]"
                        style={{ color: 'var(--ok-text)' }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>What IS Important</span>
                      </div>
                      <ul className="space-y-1.5 s-text-secondary leading-relaxed list-disc list-inside">
                        {chapter.whatIsImportant.map((item, idx) => (
                          <li key={idx}>
                            <MathText text={item} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is NOT Important */}
                    <div className="rounded-xl border s-inset p-3 space-y-2">
                      <div
                        className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]"
                        style={{ color: 'var(--bad-text)' }}
                      >
                        <XCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>What is NOT Important</span>
                      </div>
                      <ul className="space-y-1.5 s-text-secondary leading-relaxed list-disc list-inside">
                        {chapter.whatIsNotImportant.map((item, idx) => (
                          <li key={idx}>
                            <MathText text={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Builds Directly On & Unlocks Downstream */}
                  <div className="space-y-2.5 text-xs">
                    <div className="rounded-xl border s-inset p-3 s-rail-accent space-y-1">
                      <div
                        className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        <GitBranch className="w-3.5 h-3.5 shrink-0" />
                        <span>Builds Directly On</span>
                      </div>
                      <p className="s-text-secondary leading-relaxed">
                        <MathText text={chapter.inboundStream} />
                      </p>
                    </div>

                    {chapter.outboundStream.length > 0 && (
                      <div className="rounded-xl border s-inset p-3 s-rail-formula space-y-1.5">
                        <div
                          className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]"
                          style={{ color: 'var(--formula-text)' }}
                        >
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span>Unlocks Downstream</span>
                        </div>
                        <ul className="space-y-1 s-text-secondary leading-relaxed list-disc list-inside">
                          {chapter.outboundStream.map((item, idx) => (
                            <li key={idx}>
                              <MathText text={item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Horizontal Card Pill Strip */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full py-0.5 order-3 lg:order-2">
            {pills.map((pill) => {
              const isCurrent = pill.index === activeIdx
              return (
                <button
                  key={pill.index}
                  ref={(el) => {
                    pillRefs.current[pill.index] = el
                  }}
                  type="button"
                  onClick={() => goToCard(pill.index)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-mono whitespace-nowrap inline-flex items-center gap-1 cursor-pointer transition shrink-0 ${
                    isCurrent
                      ? 's-btn-primary border-transparent font-semibold'
                      : pill.done
                        ? 's-pill-ok font-medium'
                        : 's-btn-ghost font-medium'
                  }`}
                >
                  <span>{pill.label}</span>
                  {pill.done && !isCurrent && <Check className="w-3 h-3 shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Right: Card Counter + Feedback Icon Button */}
          <div className="flex items-center gap-2 shrink-0 order-2 lg:order-3">
            <span className="text-xs font-mono s-text-muted">
              {activeIdx + 1} / {totalCards}
            </span>
            <button
              type="button"
              onClick={() =>
                onOpenFeedback({
                  contextType: 'chapter',
                  contextTitle: `${track.shortTitle} Ch.${trackChapterNumber}: ${chapter.title}`,
                })
              }
              title="Log chapter feedback"
              className="p-1.5 rounded-lg border s-btn-ghost cursor-pointer transition"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} />
            </button>
          </div>
        </div>

        {/* 3px Copper Progress Bar */}
        <div className="h-[3px] w-full" style={{ backgroundColor: 'var(--border-subtle)' }}>
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${progressPct}%`,
              backgroundColor: 'var(--accent)',
            }}
          />
        </div>
      </div>

      {/* Horizontal Center-Focus Deck Viewport */}
      <div
        ref={viewportRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null
          setDragOffsetX(0)
        }}
        className="relative w-full overflow-x-clip py-4 sm:py-6 md:py-8 touch-pan-y"
      >
        {/* Subtle Left & Right Edge Fade Masks */}
        <div
          className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-14 lg:w-24 z-20"
          style={{
            background: 'linear-gradient(to right, var(--bg-canvas) 0%, transparent 100%)',
          }}
        />
        <div
          className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-14 lg:w-24 z-20"
          style={{
            background: 'linear-gradient(to left, var(--bg-canvas) 0%, transparent 100%)',
          }}
        />

        {/* Horizontally Translated Deck Track */}
        <div
          className="relative flex items-start"
          style={{
            gap: viewportTier === 'phone' ? '10px' : viewportTier === 'tablet' ? '18px' : '24px',
            transform: `translate3d(${translateX + dragOffsetX}px, 0, 0)`,
            transition:
              animateTrack && dragOffsetX === 0
                ? 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1)'
                : 'none',
            willChange: 'transform',
          }}
        >
          {Array.from({ length: totalCards }).map((_, idx) => {
            const isActive = idx === activeIdx
            const dist = Math.abs(idx - activeIdx)
            const isNeighbor = dist === 1
            const isHovered = !isActive && hoveredIdx === idx

            let cardScale = 1
            let cardOpacity = 1
            if (!isActive) {
              if (isNeighbor) {
                cardScale = isHovered ? 0.955 : 0.94
                cardOpacity = isHovered ? 0.72 : 0.48
              } else {
                cardScale = 0.92
                cardOpacity = 0.24
              }
            }

            let cardContent: React.ReactNode = null
            if (idx === 0) {
              cardContent = (
                <GlossaryCard
                  chapter={chapter}
                  chapterDisplayNumber={trackChapterNumber}
                  totalCards={totalCards}
                  onGoNextCard={() => goToCard(1)}
                />
              )
            } else if (idx >= 1 && idx <= conceptCount) {
              const conceptIndex = idx - 1
              const concept = chapter.concepts[conceptIndex]
              cardContent = (
                <TopicCard
                  chapter={chapter}
                  chapterDisplayNumber={trackChapterNumber}
                  concept={concept}
                  conceptIndex={conceptIndex}
                  totalConcepts={conceptCount}
                  cardIndex={idx}
                  totalCards={totalCards}
                  isDone={Boolean(progress.completedConcepts[concept.id])}
                  onToggleConcept={onToggleConcept}
                  onOpenFeedback={onOpenFeedback}
                />
              )
            } else if (idx === conceptCount + 1) {
              cardContent = (
                <PlaybookDeckCard
                  chapter={chapter}
                  chapterDisplayNumber={trackChapterNumber}
                  cardIndex={idx}
                  totalCards={totalCards}
                  onOpenFeedback={onOpenFeedback}
                />
              )
            } else if (idx === conceptCount + 2) {
              cardContent = (
                <ArsenalDeckCard
                  chapter={chapter}
                  chapterDisplayNumber={trackChapterNumber}
                  cardIndex={idx}
                  totalCards={totalCards}
                />
              )
            } else {
              cardContent = (
                <PracticeDeckCard
                  chapter={chapter}
                  chapterDisplayNumber={trackChapterNumber}
                  cardIndex={idx}
                  totalCards={totalCards}
                  progress={progress}
                  onRecordAttempt={onRecordAttempt}
                  onToggleBookmark={onToggleBookmark}
                  onSaveNote={onSaveNote}
                  onToggleChapterComplete={onToggleChapterComplete}
                  onSetConfidence={onSetConfidence}
                  nextChapterLabel={nextChapterLabel}
                  onNextChapter={
                    nextChapterRef
                      ? () => onSelectChapter(nextChapterRef.chapterId)
                      : undefined
                  }
                />
              )
            }

            return (
              <div
                key={`${chapter.id}-card-${idx}`}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                onClick={!isActive ? () => goToCard(idx) : undefined}
                onMouseEnter={!isActive ? () => setHoveredIdx(idx) : undefined}
                onMouseLeave={!isActive ? () => setHoveredIdx((h) => (h === idx ? null : h)) : undefined}
                role={!isActive ? 'button' : undefined}
                aria-label={!isActive ? `Focus card ${pills[idx]?.label ?? idx + 1}` : undefined}
                className="relative rounded-2xl shrink-0 min-w-0"
                style={{
                  flex: `0 0 ${cardBasis}`,
                  width: cardBasis,
                  maxWidth: cardBasis,
                  minWidth: 0,
                  height: isActive ? 'auto' : undefined,
                  maxHeight: isActive ? 'none' : `${inactiveMaxHeight}px`,
                  overflow: isActive ? 'visible' : 'hidden',
                  transform: `scale(${cardScale})`,
                  opacity: cardOpacity,
                  transformOrigin: 'top center',
                  transition:
                    'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease',
                  cursor: isActive ? 'default' : 'pointer',
                  boxShadow: isActive
                    ? '0 0 0 1px var(--accent-border), 0 18px 46px -24px rgba(0, 0, 0, 0.7)'
                    : 'none',
                }}
              >
                <div
                  aria-hidden={!isActive}
                  className={isActive ? 'min-w-0 w-full' : 'min-w-0 w-full pointer-events-none select-none'}
                >
                  {cardContent}
                </div>

                {/* Soft bottom gradient fade on inactive neighboring cards */}
                {!isActive && (
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-2xl"
                    style={{
                      background:
                        'linear-gradient(to bottom, transparent 0%, var(--bg-canvas) 95%)',
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Slim Hint & Touch-Friendly Prev/Next Fallback Strip */}
      <div className="max-w-[860px] w-full mx-auto px-3 sm:px-4 pt-1 pb-[max(2.5rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-2 sm:gap-3">
        <button
          type="button"
          disabled={!prevPill}
          onClick={() => goToCard(activeIdx - 1)}
          className="px-3.5 py-2.5 sm:py-1.5 rounded-xl sm:rounded-lg border s-btn-ghost disabled:opacity-35 disabled:cursor-not-allowed text-xs font-medium inline-flex items-center gap-1 cursor-pointer transition"
        >
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <span>{prevPill ? prevPill.label : 'Prev'}</span>
        </button>

        <p className="text-[11px] s-text-muted text-center sm:hidden">
          Swipe left / right
        </p>

        <p className="text-[11px] s-text-muted text-center hidden sm:block">
          Click peeking left/right card · Swipe horizontally · Press{' '}
          <kbd className="px-1.5 py-0.5 rounded border s-elevated font-mono text-[10px] s-text-secondary">
            ←
          </kbd>{' '}
          /{' '}
          <kbd className="px-1.5 py-0.5 rounded border s-elevated font-mono text-[10px] s-text-secondary">
            →
          </kbd>
        </p>

        <button
          type="button"
          disabled={!nextPill}
          onClick={() => goToCard(activeIdx + 1)}
          className="px-3.5 py-2.5 sm:py-1.5 rounded-xl sm:rounded-lg border s-btn-ghost disabled:opacity-35 disabled:cursor-not-allowed text-xs font-medium inline-flex items-center gap-1 cursor-pointer transition"
        >
          <span>{nextPill ? nextPill.label : 'Next'}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  )
}
