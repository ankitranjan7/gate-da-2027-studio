import React from 'react'
import type { ChapterData } from '../../types/curriculum'
import { MathText } from '../MathText'
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react'

export interface GlossaryCardProps {
  chapter: ChapterData
  chapterDisplayNumber?: number
  totalCards: number
  onGoNextCard?: () => void
}

export const GlossaryCard: React.FC<GlossaryCardProps> = ({
  chapter,
  chapterDisplayNumber,
  totalCards,
  onGoNextCard,
}) => {
  const displayNum = chapterDisplayNumber ?? chapter.number
  const glossary = chapter.glossary ?? []
  const hasGlossary = glossary.length > 0

  return (
    <article className="min-w-0 w-full overflow-x-clip rounded-2xl border s-surface p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      {/* Header Badges */}
      <div className="space-y-3 pb-5 border-b s-border">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full border s-pill-accent font-mono font-semibold inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Card 1 of {totalCards} · Key Words Before You Begin</span>
          </span>
          {hasGlossary && (
            <span className="px-2.5 py-1 rounded-full border s-pill-neutral font-mono">
              {glossary.length} {glossary.length === 1 ? 'term' : 'terms'}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold s-text-primary tracking-tight">
            Chapter {displayNum}: {chapter.title}
          </h1>
          <p className="text-sm md:text-[15px] s-text-secondary leading-relaxed">
            <MathText text={chapter.tagline} />
          </p>
          <p className="text-xs md:text-sm s-text-muted leading-relaxed">
            Take 60 seconds to skim these everyday translations before we dive in — once the words feel familiar, every theorem and GATE shortcut ahead clicks twice as fast.
          </p>
        </div>
      </div>

      {/* Glossary Terms Grid or Graceful Fallback */}
      {hasGlossary ? (
        <div className="grid md:grid-cols-2 gap-3">
          {glossary.map((item, idx) => (
            <div
              key={`${item.term}-${idx}`}
              className="rounded-xl border s-inset p-4 flex flex-col justify-between gap-2.5"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-sm font-bold s-text-primary">
                    <MathText text={item.term} />
                  </h2>
                  {item.symbol && (
                    <span className="px-2 py-0.5 rounded-md border s-pill-formula text-xs font-mono shrink-0">
                      <MathText text={item.symbol} />
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-[13px] s-text-secondary leading-relaxed">
                  <MathText text={item.plainEnglish} />
                </p>
              </div>

              <div className="pt-2 border-t s-border text-xs s-text-muted leading-relaxed">
                <span className="font-semibold s-text-secondary">Example: </span>
                <MathText text={item.tinyExample} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-xl border s-inset p-4 s-rail-accent space-y-1.5">
            <div
              className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: 'var(--accent-text)' }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Builds Directly On</span>
            </div>
            <p className="text-sm s-text-secondary leading-relaxed">
              <MathText text={chapter.inboundStream} />
            </p>
          </div>

          {chapter.syllabusMapping.length > 0 && (
            <div className="rounded-xl border s-inset p-4 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider s-text-muted">
                Syllabus Concepts Covered in This Chapter
              </div>
              <ul className="space-y-1.5 text-sm s-text-secondary list-disc list-inside leading-relaxed">
                {chapter.syllabusMapping.map((topic, idx) => (
                  <li key={idx}>
                    <MathText text={topic} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Bottom Nudge Footer */}
      <div className="pt-4 border-t s-border flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs s-text-muted">
          Ready for the concepts? Click the peeking card on the right or press{' '}
          <kbd className="px-1.5 py-0.5 rounded border s-elevated font-mono text-[11px] s-text-secondary">
            →
          </kbd>
        </p>

        {onGoNextCard && (
          <button
            type="button"
            onClick={onGoNextCard}
            className="px-4 py-2.5 rounded-xl s-btn-primary text-xs font-semibold inline-flex items-center gap-2 cursor-pointer transition"
          >
            <span>Ready? Start Topic 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </article>
  )
}
