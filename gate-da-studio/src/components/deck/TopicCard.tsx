import React, { useState, useEffect } from 'react'
import type { ChapterData, ConceptBlock, PilotFeedbackItem } from '../../types/curriculum'
import { MathText } from '../MathText'
import { InteractiveSandbox } from '../InteractiveSandboxes'
import { PRIORITY_META } from '../ChapterStudio'
import {
  CheckCircle2,
  MessageSquarePlus,
  AlertTriangle,
  Sparkles,
  Eye,
  EyeOff,
} from 'lucide-react'

export interface TopicCardProps {
  chapter: ChapterData
  chapterDisplayNumber?: number
  concept: ConceptBlock
  conceptIndex: number
  totalConcepts: number
  cardIndex: number
  totalCards: number
  isDone: boolean
  onToggleConcept: (id: string) => void
  onOpenFeedback: (ctx: {
    contextType: PilotFeedbackItem['contextType']
    contextTitle: string
  }) => void
}

export const TopicCard: React.FC<TopicCardProps> = ({
  chapter,
  chapterDisplayNumber,
  concept,
  conceptIndex,
  totalConcepts,
  cardIndex,
  totalCards,
  isDone,
  onToggleConcept,
  onOpenFeedback,
}) => {
  const displayNum = chapterDisplayNumber ?? chapter.number
  const [revealedExamples, setRevealedExamples] = useState<Record<number, boolean>>({})

  useEffect(() => {
    setRevealedExamples({})
  }, [concept.id])

  const pMeta = PRIORITY_META[concept.priority]
  const miniExamples = concept.theoremAndFormula.workedMiniExamples
  const allRevealed =
    miniExamples.length > 0 && miniExamples.every((_, idx) => Boolean(revealedExamples[idx]))

  const toggleSingleExample = (idx: number) => {
    setRevealedExamples((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  const toggleAllExamples = () => {
    if (allRevealed) {
      setRevealedExamples({})
    } else {
      const next: Record<number, boolean> = {}
      miniExamples.forEach((_, idx) => {
        next[idx] = true
      })
      setRevealedExamples(next)
    }
  }

  return (
    <article className="rounded-2xl border s-surface p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-7">
      {/* Header */}
      <header className="space-y-3 pb-5 border-b s-border">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded-full border s-pill-accent font-mono font-semibold">
              Topic {displayNum}.{conceptIndex + 1} of {totalConcepts}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full border font-medium ${pMeta.badgeClass}`}>
              {pMeta.label}
            </span>
            <span className="font-mono text-[11px] s-text-muted">
              Card {cardIndex + 1} / {totalCards}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                onOpenFeedback({
                  contextType: 'concept',
                  contextTitle: `${displayNum}.${conceptIndex + 1} ${concept.title}`,
                })
              }
              className="px-2.5 py-1.5 rounded-lg border s-btn-ghost text-xs flex items-center gap-1 cursor-pointer transition"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} />
              <span>Feedback</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleConcept(concept.id)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition ${
                isDone ? 's-pill-ok' : 's-btn-ghost'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isDone ? 'Understood ✓' : 'Mark Understood'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl md:text-2xl font-bold s-text-primary tracking-tight">
            <MathText text={concept.title} />
          </h2>
          <p className="text-sm md:text-[15px] s-text-secondary leading-relaxed">
            <MathText text={concept.subtitle} />
          </p>
          <p className="text-xs s-text-muted pt-0.5">
            <span className="font-semibold">Builds on: </span>
            <MathText text={concept.buildsOn} />
          </p>
        </div>
      </header>

      {/* Section 1: Intuition First (Toy Example) */}
      <section className="space-y-3">
        <div
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: 'var(--accent-text)' }}
        >
          1. Intuition First · {concept.toyExample.title}
        </div>
        <div className="s-rail-accent rounded-r-xl pl-4 pr-4 py-4 space-y-3">
          <p className="text-sm md:text-[15px] s-text-primary leading-relaxed">
            <MathText text={concept.toyExample.scenario} />
          </p>
          <div
            className="space-y-2 pl-3 border-l"
            style={{ borderColor: 'var(--border-strong)' }}
          >
            {concept.toyExample.walkthroughSteps.map((step, sIdx) => (
              <div key={sIdx} className="text-sm s-text-secondary leading-relaxed">
                <MathText text={step} />
              </div>
            ))}
          </div>
          <div className="rounded-xl border s-pill-accent p-3.5 text-xs md:text-[13px] leading-relaxed">
            <strong>Aha Moment: </strong>
            <MathText text={concept.toyExample.ahaMoment} />
          </div>
        </div>
      </section>

      {/* Section 2: General Theorem & Formula */}
      <section className="space-y-3.5">
        <div
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: 'var(--formula-text)' }}
        >
          2. General Theorem & Formula
        </div>
        <p className="text-sm md:text-[15px] s-text-primary leading-relaxed">
          <MathText text={concept.theoremAndFormula.statement} />
        </p>
        <div
          className="rounded-xl border s-inset px-4 py-5 overflow-x-auto text-center"
          style={{ borderColor: 'var(--formula-border)' }}
        >
          <MathText text={`$$${concept.theoremAndFormula.formulaLatex}$$`} />
        </div>
        <div className="rounded-xl border s-elevated p-3.5 text-xs md:text-[13px] s-text-secondary leading-relaxed">
          <strong style={{ color: 'var(--formula-text)' }}>In Plain English: </strong>
          <MathText text={concept.theoremAndFormula.plainEnglishDecoding} />
        </div>
      </section>

      {/* Section 3: Worked Mini-Examples (Tap-to-Reveal) */}
      {miniExamples.length > 0 && (
        <section className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold uppercase tracking-wider s-text-muted">
              3. Worked Mini-Examples (Think First, Then Reveal)
            </div>
            <button
              type="button"
              onClick={toggleAllExamples}
              className="px-2.5 py-1 rounded-lg border s-btn-ghost text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition"
            >
              {allRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{allRevealed ? 'Hide All' : 'Reveal All'}</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {miniExamples.map((ex, eIdx) => {
              const isOpen = Boolean(revealedExamples[eIdx])
              return (
                <div
                  key={eIdx}
                  className="rounded-xl border s-inset p-4 flex flex-col justify-between gap-3 text-xs md:text-[13px]"
                >
                  <div className="space-y-2.5">
                    <div className="font-semibold s-text-primary leading-relaxed">
                      <span
                        className="font-mono mr-1.5"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        Ex {eIdx + 1}:
                      </span>
                      <MathText text={ex.prompt} />
                    </div>

                    {isOpen && (
                      <div className="pt-2.5 border-t s-border s-text-secondary leading-relaxed">
                        <MathText text={ex.solution} />
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSingleExample(eIdx)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition ${
                        isOpen ? 's-btn-ghost' : 's-pill-accent'
                      }`}
                    >
                      {isOpen ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide Solution</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Reveal Solution</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Section 4: Interactive Visual Sandbox */}
      {concept.sandboxId && (
        <section className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider s-text-muted">
            4. Interactive Visual Sandbox
          </div>
          <InteractiveSandbox sandboxId={concept.sandboxId} />
        </section>
      )}

      {/* Section 5: MSQ Trap & Counter-Example Radar */}
      {concept.msqTraps.length > 0 && (
        <section className="space-y-3">
          <div
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            style={{ color: 'var(--formula-text)' }}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>MSQ Trap & Counter-Example Radar</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {concept.msqTraps.map((trap, tIdx) => (
              <div
                key={tIdx}
                className="rounded-xl border s-inset p-4 text-xs md:text-[13px] space-y-2"
              >
                <div style={{ color: 'var(--bad-text)' }} className="leading-relaxed">
                  <strong>✗ Myth: </strong>
                  <MathText text={trap.myth} />
                </div>
                <div style={{ color: 'var(--ok-text)' }} className="leading-relaxed">
                  <strong>✓ Reality: </strong>
                  <MathText text={trap.reality} />
                </div>
                <div className="s-text-secondary pt-2 border-t s-border leading-relaxed">
                  <strong className="s-text-primary">Counter-Example: </strong>
                  <MathText text={trap.counterExample} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 6: Forward Payoff Bridge */}
      {concept.forwardBridges && concept.forwardBridges.length > 0 && (
        <section
          className="rounded-r-xl border s-inset p-4 space-y-2.5"
          style={{ borderLeft: '3px solid var(--formula)' }}
        >
          <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 s-text-muted">
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--formula-text)' }} />
            <span>Forward Payoff Bridge · Where You Will Use This Later</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {concept.forwardBridges.map((fb, fIdx) => (
              <div key={fIdx} className="space-y-1 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold s-text-primary">{fb.topic}</span>
                  <span className="px-2 py-0.5 rounded border s-pill-formula font-mono text-[11px]">
                    {fb.targetSection} · Week {fb.targetWeek}
                  </span>
                </div>
                <p className="s-text-secondary leading-relaxed">
                  <MathText text={fb.whyItMatters} />
                </p>
                {fb.pyqProof && (
                  <p className="text-[11px] font-mono" style={{ color: 'var(--formula-text)' }}>
                    PYQ Proof: {fb.pyqProof}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
