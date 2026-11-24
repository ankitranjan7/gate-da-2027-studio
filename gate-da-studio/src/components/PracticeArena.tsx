import React, { useState, useEffect } from 'react'
import type { PracticeQuestion, UserProgressState } from '../types/curriculum'
import { MathText } from './MathText'
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Zap,
  RotateCcw,
  StickyNote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export interface PracticeArenaProps {
  questions: PracticeQuestion[]
  progress: UserProgressState
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
  singleQuestionMode?: boolean
}

export const PracticeArena: React.FC<PracticeArenaProps> = ({
  questions,
  progress,
  onRecordAttempt,
  onToggleBookmark,
  onSaveNote,
  singleQuestionMode = false,
}) => {
  const [tierFilter, setTierFilter] = useState<'all' | 'warmup' | 'pyq' | 'tricky'>('all')
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'MCQ' | 'MSQ' | 'NAT'>('ALL')
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const filtered = questions.filter((q) => {
    if (tierFilter !== 'all' && q.tier !== tierFilter) return false
    if (typeFilter !== 'ALL' && q.type !== typeFilter) return false
    return true
  })

  useEffect(() => {
    if (activeIndex >= filtered.length) {
      setActiveIndex(0)
    }
  }, [filtered.length, activeIndex])

  const safeIndex = filtered.length > 0 ? Math.min(activeIndex, filtered.length - 1) : 0
  const activeQ = filtered[safeIndex]

  const tierOptions = singleQuestionMode
    ? ([
        ['all', `All (${questions.length})`],
        ['warmup', `Warmup (${questions.filter((q) => q.tier === 'warmup').length})`],
        ['pyq', `PYQs (${questions.filter((q) => q.tier === 'pyq').length})`],
        ['tricky', `Tricky (${questions.filter((q) => q.tier === 'tricky').length})`],
      ] as const)
    : ([
        ['all', `All (${questions.length})`],
        ['warmup', `Warmup Basics (${questions.filter((q) => q.tier === 'warmup').length})`],
        ['pyq', `Official GATE PYQs (${questions.filter((q) => q.tier === 'pyq').length})`],
        ['tricky', `IITM-Caliber Tricky (${questions.filter((q) => q.tier === 'tricky').length})`],
      ] as const)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2.5 s-surface border rounded-xl p-3">
        <div className="flex flex-wrap gap-1.5 text-xs">
          {tierOptions.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setTierFilter(key)
                if (singleQuestionMode) setActiveIndex(0)
              }}
              className={`px-2.5 py-1.5 rounded-lg border font-medium cursor-pointer transition ${
                tierFilter === key ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex gap-1.5 text-xs">
          {(['ALL', 'MCQ', 'MSQ', 'NAT'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTypeFilter(t)
                if (singleQuestionMode) setActiveIndex(0)
              }}
              className={`px-2.5 py-1 rounded-md border font-mono cursor-pointer transition ${
                typeFilter === t ? 's-pill-formula font-semibold' : 's-btn-ghost'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {singleQuestionMode ? (
        filtered.length === 0 ? (
          <div className="rounded-xl border s-inset p-6 text-center text-xs s-text-muted">
            No questions match the selected tier and type filters.
          </div>
        ) : (
          <div className="space-y-4">
            {/* Compact Numbered CBT Question Palette */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border s-inset px-3.5 py-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {filtered.map((q, idx) => {
                  const isActive = idx === safeIndex
                  const attempt = progress.questionAttempts[q.id]
                  let paletteClass = 's-btn-ghost'
                  if (isActive) {
                    paletteClass = 's-btn-primary border-transparent font-semibold'
                  } else if (attempt?.correct) {
                    paletteClass = 's-pill-ok font-semibold'
                  } else if (attempt && !attempt.correct) {
                    paletteClass = 's-pill-bad font-semibold'
                  }
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      title={`Question ${idx + 1} · ${q.sourceLabel}`}
                      className={`w-8 h-8 rounded-lg border text-xs font-mono flex items-center justify-center cursor-pointer transition ${paletteClass}`}
                    >
                      {idx + 1}
                    </button>
                  )
                })}
              </div>
              <span className="text-[11px] font-mono s-text-muted">
                Q {safeIndex + 1} / {filtered.length}
              </span>
            </div>

            {activeQ && (
              <QuestionCard
                key={activeQ.id}
                index={safeIndex + 1}
                question={activeQ}
                savedAttempt={progress.questionAttempts[activeQ.id]}
                bookmarked={Boolean(progress.bookmarkedQuestions[activeQ.id])}
                note={progress.questionNotes[activeQ.id] || ''}
                onRecordAttempt={onRecordAttempt}
                onToggleBookmark={onToggleBookmark}
                onSaveNote={onSaveNote}
              />
            )}

            {/* Single-Question Prev / Next Controls */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                disabled={safeIndex === 0}
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                className="px-3.5 py-2 rounded-xl border s-btn-ghost text-xs font-medium flex items-center gap-1.5 cursor-pointer transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <button
                type="button"
                disabled={safeIndex >= filtered.length - 1}
                onClick={() => setActiveIndex((i) => Math.min(filtered.length - 1, i + 1))}
                className="px-3.5 py-2 rounded-xl border s-btn-ghost text-xs font-medium flex items-center gap-1.5 cursor-pointer transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
      ) : (
        filtered.map((q, idx) => (
          <QuestionCard
            key={q.id}
            index={idx + 1}
            question={q}
            savedAttempt={progress.questionAttempts[q.id]}
            bookmarked={Boolean(progress.bookmarkedQuestions[q.id])}
            note={progress.questionNotes[q.id] || ''}
            onRecordAttempt={onRecordAttempt}
            onToggleBookmark={onToggleBookmark}
            onSaveNote={onSaveNote}
          />
        ))
      )}
    </div>
  )
}

export const QuestionCard: React.FC<{
  index: number
  question: PracticeQuestion
  savedAttempt?: { correct: boolean; userAnswer: string; attempts: number }
  bookmarked: boolean
  note: string
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
}> = ({
  index,
  question,
  savedAttempt,
  bookmarked,
  note,
  onRecordAttempt,
  onToggleBookmark,
  onSaveNote,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<'A' | 'B' | 'C' | 'D'>>([])
  const [natInput, setNatInput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState<null | { correct: boolean; scoreText: string }>(null)
  const [showNoteBox, setShowNoteBox] = useState(Boolean(note))
  const [draftNote, setDraftNote] = useState(note)

  const toggleOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (submitted) return
    if (question.type === 'MCQ') {
      setSelectedOptions([optId])
    } else {
      setSelectedOptions((prev) =>
        prev.includes(optId) ? prev.filter((x) => x !== optId) : [...prev, optId].sort()
      )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.type === 'NAT' && question.natAnswer) {
      const val = Number(natInput.trim())
      if (natInput.trim() === '' || Number.isNaN(val)) return
      const ok = val >= question.natAnswer.min && val <= question.natAnswer.max
      setSubmitted({
        correct: ok,
        scoreText: ok ? `+${question.marks}.00 Marks` : '0.00 Marks (No Negative Marking on NAT!)',
      })
      onRecordAttempt(question.id, ok, natInput.trim())
      return
    }

    if (selectedOptions.length === 0 || !question.correctOptions) return
    const expected = [...question.correctOptions].sort().join(',')
    const actual = [...selectedOptions].sort().join(',')
    const ok = expected === actual

    if (question.type === 'MCQ') {
      const neg = question.marks === 1 ? '-0.33' : '-0.67'
      setSubmitted({
        correct: ok,
        scoreText: ok ? `+${question.marks}.00 Marks` : `${neg} Marks (MCQ Negative Marking!)`,
      })
    } else {
      setSubmitted({
        correct: ok,
        scoreText: ok
          ? `+${question.marks}.00 Marks (All-or-Nothing MSQ Cleared!)`
          : '0.00 Marks (MSQ has 0 negative marking, 0 partial credit)',
      })
    }
    onRecordAttempt(question.id, ok, actual)
  }

  const resetCard = () => {
    setSelectedOptions([])
    setNatInput('')
    setSubmitted(null)
  }

  const tierStyles = {
    warmup: 's-pill-ok',
    pyq: 's-pill-formula',
    tricky: 's-pill-accent',
  }

  return (
    <div className="rounded-2xl border s-surface p-5">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono s-text-muted">#{index}</span>
          <span className={`px-2.5 py-0.5 rounded-full border font-semibold ${tierStyles[question.tier]}`}>
            {question.sourceLabel}
          </span>
          <span className="px-2 py-0.5 rounded border s-pill-neutral font-mono">
            {question.type} · {question.marks} {question.marks === 1 ? 'Mark' : 'Marks'}
          </span>
          {question.type === 'MSQ' && (
            <span className="text-[11px]" style={{ color: 'var(--formula-text)' }}>
              Select ONE OR MORE · Zero Partial Credit
            </span>
          )}
          {question.type === 'NAT' && (
            <span className="text-[11px]" style={{ color: 'var(--ok-text)' }}>
              Numerical · Zero Negative Marking
            </span>
          )}
          {savedAttempt && !submitted && (
            <span
              className={`px-2 py-0.5 rounded border text-[11px] font-medium ${
                savedAttempt.correct ? 's-pill-ok' : 's-pill-bad'
              }`}
            >
              Previous: {savedAttempt.correct ? 'Solved ✓' : 'Missed — Retry!'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNoteBox(!showNoteBox)}
            title="Add personal note"
            className={`p-1.5 rounded-lg border cursor-pointer transition ${
              note ? 's-pill-accent' : 's-btn-ghost'
            }`}
          >
            <StickyNote className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleBookmark(question.id)}
            title="Bookmark for revision"
            className={`p-1.5 rounded-lg border cursor-pointer transition ${
              bookmarked ? 's-pill-formula' : 's-btn-ghost'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Question Stem */}
      <div className="s-text-primary text-[15px] leading-relaxed mb-4">
        <MathText text={question.stem} />
      </div>

      {/* Options or NAT Input */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {question.type !== 'NAT' && question.options && (
          <div className="space-y-2">
            {question.options.map((opt) => {
              const isSelected = selectedOptions.includes(opt.id)
              const isActuallyTrue = question.correctOptions?.includes(opt.id)

              let optionStyle: React.CSSProperties = {}
              let stateClass = isSelected ? 's-pill-accent' : 's-inset hover:border-[var(--border-strong)]'

              if (submitted) {
                if (isActuallyTrue) {
                  stateClass = 's-pill-ok'
                } else if (isSelected && !isActuallyTrue) {
                  stateClass = 's-pill-bad'
                } else {
                  stateClass = 's-inset'
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  style={optionStyle}
                  className={`rounded-xl border p-3.5 transition ${
                    submitted ? 'cursor-default' : 'cursor-pointer'
                  } ${stateClass}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-6 h-6 shrink-0 flex items-center justify-center text-xs font-mono font-bold border ${
                        question.type === 'MSQ' ? 'rounded-md' : 'rounded-full'
                      } ${isSelected ? 's-btn-primary border-transparent' : 's-btn-ghost'}`}
                    >
                      {opt.id}
                    </span>
                    <div className="flex-1 text-sm s-text-primary">
                      <MathText text={opt.text} />
                      {submitted && (
                        <div
                          className="mt-2 pt-2 border-t s-border text-xs"
                          style={{ color: isActuallyTrue ? 'var(--ok-text)' : 'var(--text-muted)' }}
                        >
                          <strong>{isActuallyTrue ? '✓ TRUE: ' : '✗ FALSE / TRAP: '}</strong>
                          <MathText text={opt.whyTrueOrFalse} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {question.type === 'NAT' && (
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              disabled={Boolean(submitted)}
              value={natInput}
              onChange={(e) => setNatInput(e.target.value)}
              placeholder="Type numerical answer..."
              className="px-4 py-2.5 rounded-xl border s-input font-mono text-sm w-64"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {!submitted ? (
            <>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl s-btn-primary text-xs font-semibold cursor-pointer transition"
              >
                Submit Answer
              </button>
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="px-3 py-2 rounded-xl border s-btn-ghost text-xs font-medium flex items-center gap-1.5 cursor-pointer transition"
                style={{ color: 'var(--formula-text)' }}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {showHint ? 'Hide Trigger Cue' : 'Need "How to Think" Hint?'}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={resetCard}
              className="px-3.5 py-2 rounded-xl border s-btn-ghost text-xs font-medium flex items-center gap-1.5 cursor-pointer transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Re-Attempt Clean
            </button>
          )}
        </div>
      </form>

      {/* Hint Callout */}
      {showHint && !submitted && (
        <div className="mt-3 rounded-xl border s-pill-formula p-3.5 text-xs">
          <strong>Trigger Cue (How to Start Thinking): </strong>
          <MathText text={question.triggerHint} />
        </div>
      )}

      {/* Full Intuitive Solution Reveal */}
      {submitted && (
        <div
          className={`mt-4 rounded-xl border p-4 space-y-3 ${
            submitted.correct ? 's-rail-ok' : 's-rail-bad'
          }`}
          style={{ borderColor: submitted.correct ? 'var(--ok-border)' : 'var(--bad-border)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              {submitted.correct ? (
                <>
                  <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--ok)' }} />
                  <span style={{ color: 'var(--ok-text)' }}>Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5" style={{ color: 'var(--bad)' }} />
                  <span style={{ color: 'var(--bad-text)' }}>
                    Review Solution — Official Answer:{' '}
                    {question.type === 'NAT'
                      ? question.natAnswer?.exactDisplay
                      : question.correctOptions?.join(', ')}
                  </span>
                </>
              )}
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded border s-inset s-text-primary">
              {submitted.scoreText}
            </span>
          </div>

          <div className="rounded-lg border s-inset p-3 text-xs flex items-start gap-2" style={{ borderColor: 'var(--formula-border)', color: 'var(--formula-text)' }}>
            <Zap className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Direct Exam Arsenal Weapon Used: </strong>
              <MathText text={question.directShortcutUsed} />
            </div>
          </div>

          <div className="space-y-2 text-sm s-text-primary">
            <div className="text-xs font-semibold uppercase tracking-wider s-text-muted">
              Intuitive Step-by-Step Walkthrough:
            </div>
            {question.intuitiveSolution.map((step, sIdx) => (
              <div
                key={sIdx}
                className="pl-3 border-l-2 text-xs leading-relaxed s-text-secondary"
                style={{ borderColor: 'var(--accent)' }}
              >
                <MathText text={step} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Note Box */}
      {showNoteBox && (
        <div className="mt-3 pt-3 border-t s-border space-y-2">
          <textarea
            rows={2}
            value={draftNote}
            onChange={(e) => setDraftNote(e.target.value)}
            placeholder="Write your personal takeaway or mistake trigger here (auto-saved to disk)..."
            className="w-full rounded-lg border s-input p-2.5 text-xs"
          />
          <button
            type="button"
            onClick={() => onSaveNote(question.id, draftNote)}
            className="px-3 py-1 rounded-md s-btn-primary text-xs font-medium cursor-pointer"
          >
            Save Note to Disk
          </button>
        </div>
      )}
    </div>
  )
}
