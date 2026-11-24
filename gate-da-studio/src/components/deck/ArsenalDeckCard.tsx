import React, { useState, useEffect } from 'react'
import type { ChapterData } from '../../types/curriculum'
import { MathText } from '../MathText'
import { Zap, ChevronDown, ChevronsUpDown } from 'lucide-react'

export interface ArsenalDeckCardProps {
  chapter: ChapterData
  chapterDisplayNumber?: number
  cardIndex: number
  totalCards: number
}

export const ArsenalDeckCard: React.FC<ArsenalDeckCardProps> = ({
  chapter,
  chapterDisplayNumber,
  cardIndex,
  totalCards,
}) => {
  const displayNum = chapterDisplayNumber ?? chapter.number
  const cards = chapter.arsenalCards
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setExpanded({})
  }, [chapter.id])

  const allExpanded = cards.length > 0 && cards.every((c) => Boolean(expanded[c.id]))

  const toggleCard = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleAll = () => {
    if (allExpanded) {
      setExpanded({})
    } else {
      const next: Record<string, boolean> = {}
      cards.forEach((c) => {
        next[c.id] = true
      })
      setExpanded(next)
    }
  }

  return (
    <article className="rounded-2xl border s-surface p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      {/* Header */}
      <header className="space-y-3 pb-5 border-b s-border">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full border s-pill-formula font-mono font-semibold inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>
              Card {cardIndex + 1} of {totalCards} · Direct Exam Arsenal
            </span>
          </span>

          {cards.length > 0 && (
            <button
              type="button"
              onClick={toggleAll}
              className="px-3 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          )}
        </div>

        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold s-text-primary tracking-tight">
            30-Second Pattern Weapons — Ch.{displayNum}
          </h2>
          <p className="text-xs md:text-sm s-text-secondary leading-relaxed">
            Scan the <strong className="s-text-primary">When You Spot → Direct Weapon</strong> pairs below. Click any weapon row to inspect the instant rule, 10-second check, and fatal trap.
          </p>
        </div>
      </header>

      {/* Scannable Expandable Arsenal Rows */}
      {cards.length === 0 ? (
        <div className="rounded-xl border s-inset p-6 text-center text-xs s-text-muted">
          No arsenal weapons are configured for this chapter yet.
        </div>
      ) : (
        <div className="space-y-3">
          {cards.map((card) => {
            const isOpen = Boolean(expanded[card.id])
            return (
              <div
                key={card.id}
                className="rounded-xl border s-inset overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  className="w-full text-left p-4 space-y-3 cursor-pointer transition hover:bg-[var(--bg-hover)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full border s-pill-formula text-xs font-semibold">
                        <MathText text={card.badge} />
                      </span>
                      <div className="text-xs md:text-[13px] s-text-secondary leading-relaxed">
                        <strong style={{ color: 'var(--accent-text)' }}>When You Spot: </strong>
                        <MathText text={card.whenYouSpot} />
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 shrink-0 mt-1 s-text-muted transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <div
                    className="rounded-xl border s-surface px-3.5 py-3 overflow-x-auto"
                    style={{ borderColor: 'var(--formula-border)' }}
                  >
                    <MathText text={`$$${card.directWeaponLatex}$$`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-3 border-t s-border space-y-2.5 text-xs md:text-[13px]">
                    <div className="s-text-primary leading-relaxed">
                      <strong style={{ color: 'var(--ok-text)' }}>Instant Rule: </strong>
                      <MathText text={card.instantRule} />
                    </div>

                    <div className="rounded-lg border s-surface p-3 s-text-secondary leading-relaxed">
                      <strong className="s-text-primary">10-Sec Check: </strong>
                      <MathText text={card.tenSecondExample} />
                    </div>

                    <div className="rounded-lg border s-pill-bad p-3 leading-relaxed">
                      <strong>⚠ One Fatal Trap: </strong>
                      <MathText text={card.oneFatalTrap} />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </article>
  )
}
