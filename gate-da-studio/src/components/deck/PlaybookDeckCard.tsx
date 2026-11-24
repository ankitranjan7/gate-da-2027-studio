import React, { useState, useEffect } from 'react'
import type { ChapterData, PilotFeedbackItem } from '../../types/curriculum'
import { MathText } from '../MathText'
import { Brain, MessageSquarePlus, Eye } from 'lucide-react'

export interface PlaybookDeckCardProps {
  chapter: ChapterData
  chapterDisplayNumber?: number
  cardIndex: number
  totalCards: number
  onOpenFeedback: (ctx: {
    contextType: PilotFeedbackItem['contextType']
    contextTitle: string
  }) => void
}

export const PlaybookDeckCard: React.FC<PlaybookDeckCardProps> = ({
  chapter,
  chapterDisplayNumber,
  cardIndex,
  totalCards,
  onOpenFeedback,
}) => {
  const displayNum = chapterDisplayNumber ?? chapter.number
  const archetypes = chapter.howToThinkPlaybook
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const [revealedCount, setRevealedCount] = useState<number>(1)

  useEffect(() => {
    setActiveIdx(0)
    setRevealedCount(1)
  }, [chapter.id])

  const safeIdx = archetypes.length > 0 ? Math.min(activeIdx, archetypes.length - 1) : 0
  const archetype = archetypes[safeIdx]

  const handleSelectArchetype = (idx: number) => {
    setActiveIdx(idx)
    setRevealedCount(1)
  }

  return (
    <article className="min-w-0 w-full overflow-x-clip rounded-2xl border s-surface p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      {/* Header */}
      <header className="space-y-3 pb-5 border-b s-border">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full border s-pill-accent font-mono font-semibold inline-flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5" />
            <span>
              Card {cardIndex + 1} of {totalCards} · "How to Think" Playbook
            </span>
          </span>
          <span className="px-2.5 py-1 rounded-full border s-pill-neutral font-mono">
            {archetypes.length} {archetypes.length === 1 ? 'archetype' : 'archetypes'}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold s-text-primary tracking-tight">
            Tricky Numericals & Mental Shifts — Ch.{displayNum}
          </h2>
          <p className="text-xs md:text-sm s-text-secondary leading-relaxed">
            Spot the <strong className="s-text-primary">Trigger Cue</strong> and internalize the{' '}
            <strong className="s-text-primary">Mental Shift</strong> before revealing each algebra step.
          </p>
        </div>

        {/* Compact Archetype Pill Switcher */}
        {archetypes.length > 1 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {archetypes.map((arch, idx) => {
              const isSelected = idx === safeIdx
              return (
                <button
                  key={arch.id}
                  type="button"
                  onClick={() => handleSelectArchetype(idx)}
                  className={`px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition flex items-center gap-1.5 max-w-full ${
                    isSelected
                      ? 's-btn-primary border-transparent font-semibold'
                      : 's-btn-ghost font-medium'
                  }`}
                >
                  <span className="font-mono shrink-0">#{idx + 1}</span>
                  <span className="truncate max-w-[200px]">{arch.title}</span>
                </button>
              )
            })}
          </div>
        )}
      </header>

      {/* Active Archetype Body */}
      {!archetype ? (
        <div className="rounded-xl border s-inset p-6 text-center text-xs s-text-muted">
          No playbook archetypes are configured for this chapter yet.
        </div>
      ) : (
        <div className="space-y-5">
          {/* Meta & Feedback Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded border s-pill-accent font-mono font-bold">
                Archetype #{safeIdx + 1}
              </span>
              <span className="px-2.5 py-0.5 rounded-full border s-pill-formula font-medium">
                {archetype.difficulty}
              </span>
              {archetype.relatedPyqs.map((pyq, i) => (
                <span key={i} className="px-2 py-0.5 rounded border s-pill-neutral font-mono">
                  {pyq}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenFeedback({
                  contextType: 'playbook',
                  contextTitle: `Ch.${displayNum} Playbook: ${archetype.title}`,
                })
              }
              className="px-2.5 py-1 rounded-lg border s-btn-ghost text-xs flex items-center gap-1 cursor-pointer transition"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} />
              <span>Feedback</span>
            </button>
          </div>

          <h3 className="text-lg font-bold s-text-primary">
            <MathText text={archetype.title} />
          </h3>

          {/* Problem Statement */}
          <div className="rounded-xl s-inset border p-4 text-sm md:text-[15px] s-text-primary leading-relaxed">
            <MathText text={archetype.problemStatement} />
          </div>

          {/* Trigger Cue */}
          <div className="rounded-xl border s-pill-formula p-3.5 text-xs md:text-[13px] leading-relaxed">
            <strong>Trigger Cue (What Your Brain Spots Immediately): </strong>
            <MathText text={archetype.triggerCue} />
          </div>

          {/* 2-Column Brute-Force Trap vs Mental Shift */}
          <div className="grid md:grid-cols-2 gap-3 text-xs md:text-[13px]">
            <div
              className="rounded-xl border s-inset p-4 space-y-1.5"
              style={{ borderLeft: '3px solid var(--bad)' }}
            >
              <div className="font-semibold" style={{ color: 'var(--bad-text)' }}>
                The 10-Minute Brute-Force Trap
              </div>
              <p className="s-text-secondary leading-relaxed">
                <MathText text={archetype.bruteForceTrap} />
              </p>
            </div>

            <div
              className="rounded-xl border s-inset p-4 space-y-1.5"
              style={{ borderLeft: '3px solid var(--ok)' }}
            >
              <div className="font-semibold" style={{ color: 'var(--ok-text)' }}>
                The Intuitive Mental Shift
              </div>
              <p className="s-text-primary leading-relaxed">
                <MathText text={archetype.mentalShift} />
              </p>
            </div>
          </div>

          {/* Progressive Step Reveal */}
          <div className="space-y-2.5 pt-1">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider s-text-muted">
                Step-by-Step Execution ({Math.min(revealedCount, archetype.steps.length)}/
                {archetype.steps.length} revealed)
              </span>
              {revealedCount < archetype.steps.length && (
                <button
                  type="button"
                  onClick={() => setRevealedCount(archetype.steps.length)}
                  className="flex items-center gap-1 cursor-pointer font-medium hover:underline"
                  style={{ color: 'var(--accent-text)' }}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Reveal All Steps</span>
                </button>
              )}
            </div>

            {archetype.steps.slice(0, revealedCount).map((st, sIdx) => (
              <div
                key={sIdx}
                className="rounded-xl s-inset border p-3.5 text-xs md:text-[13px] space-y-1"
              >
                <div className="font-semibold" style={{ color: 'var(--accent-text)' }}>
                  Step {sIdx + 1}: <MathText text={st.label} />
                </div>
                <div className="s-text-primary leading-relaxed">
                  <MathText text={st.detail} />
                </div>
              </div>
            ))}

            {revealedCount < archetype.steps.length && (
              <button
                type="button"
                onClick={() => setRevealedCount((c) => c + 1)}
                className="px-4 py-2 rounded-xl s-btn-primary text-xs font-semibold cursor-pointer transition"
              >
                Reveal Step {revealedCount + 1} →
              </button>
            )}
          </div>

          {/* Lock-In Rule */}
          {revealedCount >= archetype.steps.length && (
            <div className="rounded-xl border s-pill-accent p-4 text-xs md:text-[13px] leading-relaxed">
              <strong>Lock-In Rule for Exam Day: </strong>
              <MathText text={archetype.lockInTakeaway} />
            </div>
          )}
        </div>
      )}
    </article>
  )
}
