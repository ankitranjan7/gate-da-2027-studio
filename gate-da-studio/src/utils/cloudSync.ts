import type { PilotFeedbackItem, UserProgressState } from '../types/curriculum'

export const SYNC_CONFIG_STORAGE_KEY = 'gate_da_2027_sync_config'
export const GIST_FILENAME = 'gate-da-2027-studio-progress.json'
export const GIST_DESCRIPTION = 'GATE DA 2027 Studio — Private Cross-Device Study Progress'
export const GIST_TOKEN_CREATE_URL =
  'https://github.com/settings/tokens/new?scopes=gist&description=GATE+DA+2027+Studio+Sync'

export interface CloudSyncConfig {
  token: string
  gistId: string
  githubLogin?: string
}

export interface SyncedPayload {
  version: 1
  updatedAt: string
  progress: UserProgressState
  feedbackItems?: PilotFeedbackItem[]
}

export function loadSyncConfig(): CloudSyncConfig | null {
  try {
    const raw = localStorage.getItem(SYNC_CONFIG_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<CloudSyncConfig>
    if (typeof parsed.token === 'string' && parsed.token.trim() && typeof parsed.gistId === 'string' && parsed.gistId.trim()) {
      return {
        token: parsed.token.trim(),
        gistId: parsed.gistId.trim(),
        githubLogin: typeof parsed.githubLogin === 'string' ? parsed.githubLogin : undefined,
      }
    }
    return null
  } catch {
    return null
  }
}

export function saveSyncConfig(config: CloudSyncConfig): void {
  localStorage.setItem(SYNC_CONFIG_STORAGE_KEY, JSON.stringify(config))
}

export function clearSyncConfig(): void {
  localStorage.removeItem(SYNC_CONFIG_STORAGE_KEY)
}

function githubHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token.trim()}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  }
}

function parseTimestamp(iso?: string): number {
  if (!iso) return 0
  const ms = Date.parse(iso)
  return Number.isFinite(ms) ? ms : 0
}

export function mergeSyncedProgress(
  local: UserProgressState,
  remote: UserProgressState
): { merged: UserProgressState; adoptedRemote: boolean } {
  const localMs = parseTimestamp(local.updatedAt)
  const remoteMs = parseTimestamp(remote.updatedAt)
  const remoteIsNewer = remoteMs > localMs

  const primary = remoteIsNewer ? remote : local
  const secondary = remoteIsNewer ? local : remote

  // Merge question attempts keeping the most recent attempt per question
  const mergedAttempts: UserProgressState['questionAttempts'] = {
    ...(secondary.questionAttempts || {}),
    ...(primary.questionAttempts || {}),
  }
  for (const [qId, secAttempt] of Object.entries(secondary.questionAttempts || {})) {
    const priAttempt = primary.questionAttempts?.[qId]
    if (!priAttempt) {
      mergedAttempts[qId] = secAttempt
    } else if (parseTimestamp(secAttempt.lastAttemptAt) > parseTimestamp(priAttempt.lastAttemptAt)) {
      mergedAttempts[qId] = secAttempt
    }
  }

  // Merge per-chapter card cursors keeping primary's active chapter cursor authoritative
  const mergedCursors: Record<string, number> = {
    ...(secondary.chapterCardCursor || {}),
    ...(primary.chapterCardCursor || {}),
  }

  const merged: UserProgressState = {
    completedConcepts: { ...(primary.completedConcepts || {}) },
    completedChapters: { ...(primary.completedChapters || {}) },
    completedPlanModules: { ...(primary.completedPlanModules || {}) },
    bookmarkedQuestions: { ...(primary.bookmarkedQuestions || {}) },
    questionNotes: {
      ...(secondary.questionNotes || {}),
      ...(primary.questionNotes || {}),
    },
    chapterConfidence: {
      ...(secondary.chapterConfidence || {}),
      ...(primary.chapterConfidence || {}),
    },
    questionAttempts: mergedAttempts,
    chapterCardCursor: mergedCursors,
    lastVisitedChapterId: primary.lastVisitedChapterId || secondary.lastVisitedChapterId,
    lastViewMode: primary.lastViewMode || secondary.lastViewMode,
    updatedAt: remoteIsNewer
      ? remote.updatedAt || new Date().toISOString()
      : local.updatedAt || new Date().toISOString(),
  }

  return { merged, adoptedRemote: remoteIsNewer }
}

function parseGistPayload(content?: string): SyncedPayload | null {
  if (!content) return null
  try {
    const parsed = JSON.parse(content)
    if (parsed && typeof parsed === 'object' && parsed.progress && typeof parsed.progress === 'object') {
      return {
        version: 1,
        updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : parsed.progress.updatedAt || '',
        progress: parsed.progress as UserProgressState,
        feedbackItems: Array.isArray(parsed.feedbackItems) ? parsed.feedbackItems : undefined,
      }
    }
  } catch {
    return null
  }
  return null
}

/**
 * Validates token, discovers existing private progress gist (by filename), or creates one automatically.
 * This allows connecting Mac, iPad, and iPhone by pasting ONLY the token — no Gist ID needed!
 */
export async function connectWithGithubToken(
  rawToken: string,
  initialPayload: SyncedPayload
): Promise<{ config: CloudSyncConfig; remotePayload: SyncedPayload | null }> {
  const token = rawToken.trim()
  if (!token) {
    throw new Error('Please paste your GitHub Gist token.')
  }

  // 1. List user's gists to verify token + check for existing private studio progress gist
  const listRes = await fetch('https://api.github.com/gists?per_page=100', {
    headers: githubHeaders(token),
    cache: 'no-store',
  })

  if (listRes.status === 401) {
    throw new Error('Invalid GitHub token. Double-check you copied the entire token.')
  }
  if (listRes.status === 403) {
    throw new Error('Token lacks Gist permission. Make sure the "gist" scope is checked.')
  }
  if (!listRes.ok) {
    throw new Error(`GitHub API error (${listRes.status}). Please try again.`)
  }

  const gists = (await listRes.json()) as Array<{
    id: string
    owner?: { login?: string }
    files?: Record<string, { filename?: string }>
  }>

  const existing = gists.find((g) => Boolean(g.files && g.files[GIST_FILENAME]))

  if (existing) {
    const remotePayload = await pullProgressFromGist(token, existing.id)
    const config: CloudSyncConfig = {
      token,
      gistId: existing.id,
      githubLogin: existing.owner?.login,
    }
    return { config, remotePayload }
  }

  // 2. No existing gist yet — create a new SECRET (private) gist
  const createRes = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: githubHeaders(token),
    body: JSON.stringify({
      description: GIST_DESCRIPTION,
      public: false,
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(initialPayload, null, 2),
        },
      },
    }),
  })

  if (!createRes.ok) {
    if (createRes.status === 403 || createRes.status === 404) {
      throw new Error('Token does not have permission to create Gists. Enable the "gist" scope.')
    }
    throw new Error(`Could not create private sync Gist (${createRes.status}).`)
  }

  const created = (await createRes.json()) as { id: string; owner?: { login?: string } }
  return {
    config: {
      token,
      gistId: created.id,
      githubLogin: created.owner?.login,
    },
    remotePayload: null,
  }
}

export async function pullProgressFromGist(
  token: string,
  gistId: string
): Promise<SyncedPayload | null> {
  const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(gistId)}`, {
    headers: githubHeaders(token),
    cache: 'no-store',
  })

  if (res.status === 401) {
    throw new Error('GitHub sync token expired or revoked. Please reconnect in Sync.')
  }
  if (!res.ok) {
    throw new Error(`Could not pull synced progress (${res.status}).`)
  }

  const data = (await res.json()) as {
    files?: Record<string, { content?: string; truncated?: boolean; raw_url?: string }>
  }
  const file = data.files?.[GIST_FILENAME]
  if (!file) return null

  if (file.truncated && file.raw_url) {
    const rawRes = await fetch(file.raw_url, { cache: 'no-store' })
    if (rawRes.ok) {
      return parseGistPayload(await rawRes.text())
    }
  }
  return parseGistPayload(file.content)
}

export async function pushProgressToGist(
  token: string,
  gistId: string,
  payload: SyncedPayload
): Promise<void> {
  const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(gistId)}`, {
    method: 'PATCH',
    headers: githubHeaders(token),
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(payload, null, 2),
        },
      },
    }),
  })

  if (res.status === 401) {
    throw new Error('GitHub sync token expired or revoked. Please reconnect in Sync.')
  }
  if (!res.ok) {
    throw new Error(`Could not save progress to cloud (${res.status}).`)
  }
}
