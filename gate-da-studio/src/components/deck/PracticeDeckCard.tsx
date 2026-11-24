import React, { useState, useEffect } from 'react'
import type { ChapterData, UserProgressState } from '../../types/curriculum'
import { PracticeArena } from '../PracticeArena'
import { InfiniteNumericalGenerator } from '../NumericalGenerators'
import { Target, Infinity as InfinityIcon, CheckCircle2, ArrowRight } from 'lucide-react'

export interface PracticeDeckCardProps {
  chapter: ChapterData
  chapterDisplayNumber?: number
  cardIndex: number
  totalCards: number
  progress: UserProgressState
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
  onToggleChapterComplete: (chapterId: string) => void
  onSetConfidence: (chapterId: string, stars: 1 | 2 | 3 | 4 | 5) => void
  nextChapterLabel?: string
  onNextChapter?: () => void
}

export const PracticeDeckCard: React.FC<PracticeDeckCardProps> = ({
  chapter,
  chapterDisplayNumber,
  cardIndex,
  totalCards,
  progress,
  onRecordAttempt,
  onToggleBookmark,
  onSaveNote,
  onToggleChapterComplete,
  onSetConfidence,
  nextChapterLabel,
  onNextChapter,
}) => {
  const displayNum = chapterDisplayNumber ?? chapter.number
  const [subMode, setSubMode] = useState<'questions' | 'drill'>('questions')

  useEffect(() => {
    setSubMode('questions')
  }, [chapter.id])

  const solvedCount = chapter.questions.filter(
    (q) => progress.questionAttempts[q.id]?.correct
  ).length
  const isChapterDone = Boolean(progress.completedChapters[chapter.id])
  const currentConfidence = progress.chapterConfidence[chapter.id] || 0

  return (
    <article className="rounded-2xl border s-surface p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      {/* Header + Sub-Mode Toggle */}
      <header className="space-y-4 pb-5 border-b s-border">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full border s-pill-accent font-mono font-semibold inline-flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            <span>
              Card {cardIndex + 1} of {totalCards} · Practice & PYQ Arena
            </span>
          </span>
          <span className="px-2.5 py-1 rounded-full border s-pill-neutral font-mono">
            Solved {solvedCount} / {chapter.questions.length}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-bold s-text-primary tracking-tight">
            Test Yourself — Ch.{displayNum}: {chapter.shortTitle}
          </h2>

          <div className="inline-flex rounded-xl border s-inset p-1 gap-1 text-xs">
            <button
              type="button"
              onClick={() => setSubMode('questions')}
              className={`px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer transition ${
                subMode === 'questions'
                  ? 's-btn-primary font-semibold'
                  : 's-text-secondary hover:bg-[var(--bg-hover)] font-medium'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Questions ({chapter.questions.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setSubMode('drill')}
              className={`px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer transition ${
                subMode === 'drill'
                  ? 's-btn-primary font-semibold'
                  : 's-text-secondary hover:bg-[var(--bg-hover)] font-medium'
              }`}
            >
              <InfinityIcon className="w-3.5 h-3.5" />
              <span>Infinite Numerical Drill</span>
            </button>
          </div>
        </div>
      </header>

      {/* Active Practice Mode */}
      {subMode === 'questions' ? (
        <PracticeArena
          key={chapter.id}
          questions={chapter.questions}
          progress={progress}
          onRecordAttempt={onRecordAttempt}
          onToggleBookmark={onToggleBookmark}
          onSaveNote={onSaveNote}
          singleQuestionMode
        />
      ) : (
        <InfiniteNumericalGenerator key={chapter.generatorId} generatorId={chapter.generatorId} />
      )}

      {/* Chapter Completion Footer */}
      <footer className="pt-5 border-t s-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs s-text-muted">
            <span>Confidence:</span>
            <div className="flex items-center gap-0.5">
              {([1, 2, 3, 4, 5] as const).map((star) => {
                const filled = currentConfidence >= star
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => onSetConfidence(chapter.id, star)}
                    title={`Set confidence to ${star} out of 5`}
                    className="text-base px-0.5 cursor-pointer transition hover:scale-110"
                    style={{ color: filled ? 'var(--formula)' : 'var(--border-strong)' }}
                  >
                    ★
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onToggleChapterComplete(chapter.id)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition ${
              isChapterDone ? 's-pill-ok' : 's-btn-ghost'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isChapterDone ? 'Chapter Mastered ✓' : 'Mark Chapter Mastered ✓'}</span>
          </button>
        </div>

        {onNextChapter && (
          <button
            type="button"
            onClick={onNextChapter}
            className="px-4 py-2.5 rounded-xl s-btn-primary text-xs font-semibold inline-flex items-center gap-2 cursor-pointer transition"
          >
            <span>Continue to {nextChapterLabel || 'Next Chapter'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </article>
  )
}
