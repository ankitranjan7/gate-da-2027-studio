import React from 'react'
import type { ChapterData, UserProgressState } from '../types/curriculum'
import {
  SUBJECT_TRACKS,
  getTrackById,
  getChapterRefById,
  type SubjectTrackId,
} from '../data/subjectTracks'
import { MathText } from './MathText'
import { ArrowRight, CheckCircle2, Clock, BookOpen, Play } from 'lucide-react'

export interface SubjectMapProps {
  activeTrackId: SubjectTrackId
  onSelectTrack: (trackId: SubjectTrackId) => void
  chaptersById: Record<string, ChapterData>
  loadingTrack: boolean
  progress: UserProgressState
  onOpenChapter: (chapterId: string) => void
}

export const SubjectMap: React.FC<SubjectMapProps> = ({
  activeTrackId,
  onSelectTrack,
  chaptersById,
  loadingTrack,
  progress,
  onOpenChapter,
}) => {
  const hasVisited = Boolean(progress.lastVisitedChapterId)
  const resumeChapterId = progress.lastVisitedChapterId || 'calc-ch1'
  const resumeRef = getChapterRefById(resumeChapterId)
  const resumeTrack = getTrackById(resumeRef.trackId)
  const resumeChapter = chaptersById[resumeRef.chapterId]
  const resumeTotalCards = resumeChapter ? 1 + resumeChapter.concepts.length + 3 : null
  const resumeRawCursor = progress.chapterCardCursor?.[resumeRef.chapterId] ?? 0
  const resumeCursorLabel =
    resumeRawCursor > 0
      ? `Card ${
          resumeTotalCards ? Math.min(resumeRawCursor + 1, resumeTotalCards) : resumeRawCursor + 1
        }${resumeTotalCards ? ` of ${resumeTotalCards}` : ''}`
      : 'Start from Key Words'

  const activeTrack = getTrackById(activeTrackId)
  const activeTrackDone = activeTrack.chapters.filter(
    (c) => progress.completedChapters[c.chapterId]
  ).length
  const totalChaptersCount = SUBJECT_TRACKS.reduce((sum, t) => sum + t.chapters.length, 0)
  const totalMasteredCount = SUBJECT_TRACKS.reduce(
    (sum, t) => sum + t.chapters.filter((c) => progress.completedChapters[c.chapterId]).length,
    0
  )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Continue Where You Left Off Strip */}
      <section className="rounded-2xl border s-surface s-rail-accent p-5 md:p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1.5 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span
              className="font-semibold uppercase tracking-wider text-[11px]"
              style={{ color: 'var(--accent-text)' }}
            >
              {hasVisited ? 'Continue Where You Left Off' : 'Start Your Study Stream'}
            </span>
            <span className="s-text-muted">·</span>
            <span className="px-2 py-0.5 rounded-md border s-pill-neutral font-mono text-[11px]">
              {resumeTrack.order}. {resumeTrack.shortTitle} · Ch.{resumeRef.trackChapterNumber}
            </span>
          </div>

          <h1 className="text-lg md:text-xl font-bold s-text-primary tracking-tight truncate">
            {resumeChapter?.title || resumeRef.shortTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs s-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
              <span className="s-text-secondary font-medium">{resumeCursorLabel}</span>
            </span>
            <span>·</span>
            <span className="font-mono">
              {totalMasteredCount} / {totalChaptersCount} chapters mastered
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onOpenChapter(resumeRef.chapterId)}
          className="px-5 py-2.5 rounded-xl s-btn-primary text-xs md:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer transition shrink-0"
        >
          <Play className="w-3.5 h-3.5" />
          <span>{hasVisited ? 'Resume Chapter →' : 'Start Learning →'}</span>
        </button>
      </section>

      {/* 8 Prerequisite-Ordered Broad Subject Track Pills */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between px-0.5">
          <h2 className="text-xs font-semibold uppercase tracking-wider s-text-muted">
            8 Prerequisite-Ordered Subject Tracks
          </h2>
          <span className="text-[11px] font-mono s-text-muted">52 Chapters Total</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SUBJECT_TRACKS.map((track) => {
            const isSelected = track.id === activeTrack.id
            const doneCount = track.chapters.filter(
              (c) => progress.completedChapters[c.chapterId]
            ).length
            const allDone = doneCount === track.chapters.length && track.chapters.length > 0

            return (
              <button
                key={track.id}
                type="button"
                onClick={() => onSelectTrack(track.id)}
                className={`px-3 py-2.5 rounded-xl border text-left flex items-center justify-between gap-2 cursor-pointer transition ${
                  isSelected
                    ? 's-pill-accent font-semibold'
                    : 's-surface hover:bg-[var(--bg-hover)] s-text-secondary font-medium'
                }`}
              >
                <span className="text-xs truncate">
                  <span className="font-mono opacity-80 mr-1">{track.order}.</span>
                  <span className={isSelected ? '' : 's-text-primary'}>{track.shortTitle}</span>
                </span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.5 rounded-md border shrink-0 ${
                    allDone
                      ? 's-pill-ok'
                      : isSelected
                        ? 's-pill-accent'
                        : 's-pill-neutral'
                  }`}
                >
                  {doneCount}/{track.chapters.length}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Active Track Header + Clean Vertical Chapter List */}
      <section className="rounded-2xl border s-surface overflow-hidden">
        <header className="p-5 md:p-6 border-b s-border flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider s-text-muted">
              Subject {activeTrack.order} of 8
            </div>
            <h2 className="text-xl font-bold s-text-primary tracking-tight">
              {activeTrack.title}
            </h2>
            <p className="text-xs md:text-sm s-text-secondary leading-relaxed">
              {activeTrack.subtitle}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full border text-xs font-mono shrink-0 ${
              activeTrackDone === activeTrack.chapters.length && activeTrack.chapters.length > 0
                ? 's-pill-ok'
                : 's-pill-neutral'
            }`}
          >
            {activeTrackDone} / {activeTrack.chapters.length} mastered
          </span>
        </header>

        {loadingTrack && (
          <div className="px-5 py-2.5 border-b s-border text-xs s-text-muted s-inset">
            Loading chapter details for {activeTrack.shortTitle}…
          </div>
        )}

        <div className="divide-y s-divide">
          {activeTrack.chapters.map((ref) => {
            const loaded = chaptersById[ref.chapterId]
            const isMastered = Boolean(progress.completedChapters[ref.chapterId])
            const cursor = progress.chapterCardCursor?.[ref.chapterId] ?? 0
            const totalCards = loaded ? 1 + loaded.concepts.length + 3 : null
            const confidence = progress.chapterConfidence[ref.chapterId] || 0
            const isResumable = isMastered || cursor > 0

            return (
              <div
                key={ref.chapterId}
                onClick={() => onOpenChapter(ref.chapterId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onOpenChapter(ref.chapterId)
                  }
                }}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--bg-hover)] transition cursor-pointer"
              >
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-md border font-mono text-[11px] font-semibold shrink-0 ${
                        isMastered ? 's-pill-ok' : 's-pill-neutral'
                      }`}
                    >
                      Ch.{ref.trackChapterNumber}
                    </span>

                    <h3 className="text-sm md:text-[15px] font-semibold s-text-primary leading-snug">
                      {loaded?.title || ref.shortTitle}
                    </h3>
                  </div>

                  {loaded?.tagline && (
                    <p className="text-xs s-text-muted line-clamp-1 leading-relaxed">
                      <MathText text={loaded.tagline} />
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2.5 text-[11px] pt-0.5">
                    {loaded && (
                      <span className="inline-flex items-center gap-1 font-mono s-text-muted">
                        <Clock className="w-3 h-3" />
                        <span>{loaded.estimatedHours}h</span>
                      </span>
                    )}

                    {isMastered ? (
                      <span className="px-2 py-0.5 rounded-full border s-pill-ok font-medium inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Mastered ✓</span>
                      </span>
                    ) : cursor > 0 ? (
                      <span className="px-2 py-0.5 rounded-full border s-pill-accent font-mono font-medium">
                        Card {totalCards ? Math.min(cursor + 1, totalCards) : cursor + 1}
                        {totalCards ? `/${totalCards}` : ''}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full border s-pill-neutral">
                        Not started
                      </span>
                    )}

                    {confidence > 0 && (
                      <span
                        className="font-mono tracking-tight"
                        title={`Confidence: ${confidence} / 5`}
                        style={{ color: 'var(--formula)' }}
                      >
                        {'★'.repeat(confidence)}
                        <span style={{ color: 'var(--border-strong)' }}>
                          {'★'.repeat(5 - confidence)}
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpenChapter(ref.chapterId)
                  }}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition shrink-0 self-start sm:self-center ${
                    cursor > 0 && !isMastered ? 's-pill-accent' : 's-btn-ghost'
                  }`}
                >
                  <span>{isResumable ? 'Resume' : 'Start'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
