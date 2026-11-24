import React, { useState } from 'react'
import type {
  ChapterData,
  HowToThinkArchetype,
  PilotFeedbackItem,
  PriorityTier,
  UserProgressState,
} from '../types/curriculum'
import { MathText } from './MathText'
import { InteractiveSandbox } from './InteractiveSandboxes'
import { PracticeArena } from './PracticeArena'
import { InfiniteNumericalGenerator } from './NumericalGenerators'
import {
  BookOpen,
  Brain,
  Zap,
  Target,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  MessageSquarePlus,
  Eye,
  ShieldCheck,
  XOctagon,
  ChevronRight,
} from 'lucide-react'

interface ChapterStudioProps {
  chapter: ChapterData
  allChapters: ChapterData[]
  onSelectChapter: (id: string) => void
  progress: UserProgressState
  onToggleConcept: (conceptId: string) => void
  onToggleChapterComplete: (chapterId: string) => void
  onSetConfidence: (chapterId: string, stars: 1 | 2 | 3 | 4 | 5) => void
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
  onOpenFeedback: (ctx: { contextType: PilotFeedbackItem['contextType']; contextTitle: string }) => void
}

export const PRIORITY_META: Record<PriorityTier, { label: string; badgeClass: string }> = {
  'core-pillar': {
    label: 'Core Pillar · Must-Master',
    badgeClass: 's-pill-accent',
  },
  'high-yield': {
    label: 'High-Yield Rotating',
    badgeClass: 's-pill-formula',
  },
  'sleeping-giant': {
    label: 'IITM Sleeping Giant',
    badgeClass: 's-pill-ok',
  },
  'scope-boundary': {
    label: 'Know Formula Only',
    badgeClass: 's-pill-neutral',
  },
}

export const ChapterStudio: React.FC<ChapterStudioProps> = ({
  chapter,
  allChapters,
  onSelectChapter,
  progress,
  onToggleConcept,
  onToggleChapterComplete,
  onSetConfidence,
  onRecordAttempt,
  onToggleBookmark,
  onSaveNote,
  onOpenFeedback,
}) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'playbook' | 'arsenal' | 'practice'>('learn')
  const [showScopeDetails, setShowScopeDetails] = useState(true)

  const currentIdx = allChapters.findIndex((c) => c.id === chapter.id)
  const prevChapter = currentIdx > 0 ? allChapters[currentIdx - 1] : null
  const nextChapter = currentIdx >= 0 && currentIdx < allChapters.length - 1 ? allChapters[currentIdx + 1] : null

  const solvedCount = chapter.questions.filter((q) => progress.questionAttempts[q.id]?.correct).length
  const conceptsDoneCount = chapter.concepts.filter((c) => progress.completedConcepts[c.id]).length

  return (
    <div className="space-y-6">
      {/* Chapter Sub-Navigation Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {allChapters.map((ch) => {
          const active = ch.id === chapter.id
          const done = Boolean(progress.completedChapters[ch.id])
          return (
            <button
              key={ch.id}
              onClick={() => {
                onSelectChapter(ch.id)
                setActiveTab('learn')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`px-3.5 py-2 rounded-xl border text-xs font-medium shrink-0 flex items-center gap-2 cursor-pointer transition ${
                active ? 's-btn-primary border-transparent font-semibold' : 's-surface s-text-secondary hover:bg-[var(--bg-hover)]'
              }`}
            >
              <span className="font-mono opacity-80">Ch.{ch.number}</span>
              <span>{ch.shortTitle}</span>
              {done && <CheckCircle2 className="w-3.5 h-3.5" style={{ color: active ? 'var(--accent-on)' : 'var(--ok)' }} />}
            </button>
          )
        })}
      </div>

      {/* Chapter Header Card */}
      <div className="rounded-2xl border s-surface p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="px-2.5 py-0.5 rounded-md border s-pill-accent font-mono font-medium">
                {chapter.dayLabel} · ~{chapter.estimatedHours} hrs
              </span>
              <span className="s-text-muted font-mono">
                Concepts {conceptsDoneCount}/{chapter.concepts.length} · Solved {solvedCount}/{chapter.questions.length}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold s-text-primary tracking-tight">
              Chapter {chapter.number}: {chapter.title}
            </h1>
            <p className="text-sm s-text-secondary leading-relaxed">
              <MathText text={chapter.tagline} />
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  onOpenFeedback({
                    contextType: 'chapter',
                    contextTitle: `Ch.${chapter.number}: ${chapter.shortTitle}`,
                  })
                }
                className="px-3 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium flex items-center gap-1.5 cursor-pointer transition"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} /> Style Feedback
              </button>
              <button
                onClick={() => onToggleChapterComplete(chapter.id)}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition ${
                  progress.completedChapters[chapter.id] ? 's-pill-ok' : 's-btn-ghost'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {progress.completedChapters[chapter.id] ? 'Chapter Mastered ✓' : 'Mark Chapter Done'}
              </button>
            </div>

            <div className="flex items-center gap-1 text-xs s-text-muted">
              <span>Confidence:</span>
              {([1, 2, 3, 4, 5] as const).map((star) => {
                const filled = (progress.chapterConfidence[chapter.id] || 0) >= star
                return (
                  <button
                    key={star}
                    onClick={() => onSetConfidence(chapter.id, star)}
                    className="text-sm cursor-pointer transition"
                    style={{ color: filled ? 'var(--formula)' : 'var(--border-strong)' }}
                  >
                    ★
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Continuous Dependency Stream Strip */}
        <div className="grid md:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="rounded-xl border s-inset p-3.5 flex items-start gap-2.5">
            <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent-text)' }} />
            <div>
              <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: 'var(--accent-text)' }}>
                Builds Directly On
              </span>
              <p className="s-text-secondary mt-0.5 leading-relaxed">
                <MathText text={chapter.inboundStream} />
              </p>
            </div>
          </div>
          <div className="rounded-xl border s-inset p-3.5 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--formula-text)' }} />
            <div>
              <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: 'var(--formula-text)' }}>
                Unlocks Downstream in GATE DA
              </span>
              <p className="s-text-secondary mt-0.5 leading-relaxed">
                {chapter.outboundStream.map((s, idx) => (
                  <span key={idx}>
                    {idx > 0 ? ' · ' : ''}
                    <MathText text={s} />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Important vs Not Important Scope Radar */}
        <div>
          <button
            onClick={() => setShowScopeDetails(!showScopeDetails)}
            className="text-xs s-text-muted hover:text-[var(--text-primary)] flex items-center gap-1 cursor-pointer mb-2 transition"
          >
            <ChevronRight className={`w-3.5 h-3.5 transition ${showScopeDetails ? 'rotate-90' : ''}`} />
            <span>{showScopeDetails ? 'Hide' : 'Show'} GATE DA Scope Radar (What Matters vs. What to Skip)</span>
          </button>

          {showScopeDetails && (
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border s-inset p-4 space-y-1.5" style={{ borderLeft: '3px solid var(--ok)' }}>
                <div className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--ok-text)' }}>
                  <ShieldCheck className="w-4 h-4" /> What IS Important (High-ROI Exam Focus)
                </div>
                <ul className="space-y-1 s-text-secondary list-disc list-inside leading-relaxed">
                  {chapter.whatIsImportant.map((item, i) => (
                    <li key={i}>
                      <MathText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border s-inset p-4 space-y-1.5" style={{ borderLeft: '3px solid var(--bad)' }}>
                <div className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--bad-text)' }}>
                  <XOctagon className="w-4 h-4" /> What is NOT Important (Safe to Skip — 0 Marks)
                </div>
                <ul className="space-y-1 s-text-secondary list-disc list-inside leading-relaxed">
                  {chapter.whatIsNotImportant.map((item, i) => (
                    <li key={i}>
                      <MathText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4-Stage Learning Tabs (Unified Single-Accent Segmented Control) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 s-surface border p-1.5 rounded-2xl sticky top-14 z-30 backdrop-blur-md">
        {(
          [
            ['learn', BookOpen, `1. Learn from Zero (${chapter.concepts.length})`],
            ['playbook', Brain, `2. "How to Think" (${chapter.howToThinkPlaybook.length})`],
            ['arsenal', Zap, `3. Direct Exam Arsenal (${chapter.arsenalCards.length})`],
            ['practice', Target, `4. Practice & PYQs (${chapter.questions.length})`],
          ] as const
        ).map(([tabKey, Icon, label]) => {
          const active = activeTab === tabKey
          return (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition ${
                active ? 's-btn-primary font-semibold' : 's-text-secondary hover:bg-[var(--bg-hover)] font-medium'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          )
        })}
      </div>

      {/* =====================================================================
          STAGE 1: CONTINUOUS BUILD-UP FROM ZERO
          ===================================================================== */}
      {activeTab === 'learn' && (
        <div className="space-y-8">
          {chapter.concepts.map((concept, idx) => {
            const pMeta = PRIORITY_META[concept.priority]
            const isDone = Boolean(progress.completedConcepts[concept.id])
            return (
              <section key={concept.id} className="rounded-2xl border s-surface p-6 space-y-5">
                {/* Concept Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b s-border">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded border s-pill-accent font-mono font-semibold">
                        Step {chapter.number}.{idx + 1}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full border font-medium ${pMeta.badgeClass}`}>
                        {pMeta.label}
                      </span>
                      <span className="s-text-muted">
                        Builds on: <MathText text={concept.buildsOn} />
                      </span>
                    </div>
                    <h2 className="text-xl font-bold s-text-primary">
                      <MathText text={concept.title} />
                    </h2>
                    <p className="text-sm s-text-secondary">
                      <MathText text={concept.subtitle} />
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        onOpenFeedback({
                          contextType: 'concept',
                          contextTitle: `${chapter.number}.${idx + 1} ${concept.title}`,
                        })
                      }
                      className="px-2.5 py-1.5 rounded-lg border s-btn-ghost text-xs flex items-center gap-1 cursor-pointer transition"
                    >
                      <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} /> Feedback
                    </button>
                    <button
                      onClick={() => onToggleConcept(concept.id)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition ${
                        isDone ? 's-pill-ok' : 's-btn-ghost'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isDone ? 'Understood ✓' : 'Mark Understood'}
                    </button>
                  </div>
                </div>

                {/* 1. Concrete Ground-Floor Toy Example FIRST */}
                <div className="rounded-xl border s-inset p-5 space-y-3 s-rail-accent">
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
                    Ground-Floor Toy Example First · {concept.toyExample.title}
                  </div>
                  <p className="text-sm s-text-primary leading-relaxed">
                    <MathText text={concept.toyExample.scenario} />
                  </p>
                  <div className="space-y-2 pl-3 border-l" style={{ borderColor: 'var(--border-strong)' }}>
                    {concept.toyExample.walkthroughSteps.map((st, sIdx) => (
                      <div key={sIdx} className="text-sm s-text-secondary leading-relaxed">
                        <MathText text={st} />
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border s-pill-accent p-3 text-xs leading-relaxed">
                    <strong>The Aha Moment: </strong>
                    <MathText text={concept.toyExample.ahaMoment} />
                  </div>
                </div>

                {/* 2. Building the General Theorem & Formula */}
                <div className="rounded-xl border s-inset p-5 space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--formula-text)' }}>
                    General Theorem & Formula (Built From Our Toy Example)
                  </div>
                  <p className="text-sm s-text-primary leading-relaxed">
                    <MathText text={concept.theoremAndFormula.statement} />
                  </p>
                  <div
                    className="rounded-xl border p-4 overflow-x-auto"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--formula-border)' }}
                  >
                    <MathText text={`$$${concept.theoremAndFormula.formulaLatex}$$`} />
                  </div>
                  <p className="text-xs s-text-secondary s-surface rounded-lg p-3 border leading-relaxed">
                    <strong style={{ color: 'var(--formula-text)' }}>In Plain English: </strong>
                    <MathText text={concept.theoremAndFormula.plainEnglishDecoding} />
                  </p>

                  {/* Worked Mini-Examples */}
                  <div className="grid md:grid-cols-2 gap-3 pt-1">
                    {concept.theoremAndFormula.workedMiniExamples.map((ex, eIdx) => (
                      <div key={eIdx} className="rounded-xl s-surface border p-3.5 space-y-2 text-xs">
                        <div className="font-semibold s-text-primary">
                          <span className="font-mono mr-1.5" style={{ color: 'var(--accent-text)' }}>
                            Ex {eIdx + 1}:
                          </span>
                          <MathText text={ex.prompt} />
                        </div>
                        <div className="s-text-secondary leading-relaxed pt-1.5 border-t s-border">
                          <MathText text={ex.solution} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Optional Interactive Visual Sandbox */}
                {concept.sandboxId && <InteractiveSandbox sandboxId={concept.sandboxId} />}

                {/* 4. MSQ Edge-Case & Counter-Example Trap Box */}
                {concept.msqTraps.length > 0 && (
                  <div className="rounded-xl border s-inset p-4 space-y-3" style={{ borderColor: 'var(--formula-border)' }}>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--formula-text)' }}>
                      <AlertTriangle className="w-4 h-4" />
                      <span>MSQ Trap & Counter-Example Radar (Save Your 2-Mark MSQs!)</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {concept.msqTraps.map((trap, tIdx) => (
                        <div key={tIdx} className="rounded-lg s-surface border p-3.5 text-xs space-y-1.5">
                          <div style={{ color: 'var(--bad-text)' }}>
                            <strong>✗ Tempting Myth: </strong>
                            <MathText text={trap.myth} />
                          </div>
                          <div style={{ color: 'var(--ok-text)' }}>
                            <strong>✓ True Rule: </strong>
                            <MathText text={trap.reality} />
                          </div>
                          <div className="s-text-secondary pt-1.5 border-t s-border">
                            <strong>Pocket Counter-Example: </strong>
                            <MathText text={trap.counterExample} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Forward Payoff Bridges */}
                {concept.forwardBridges && concept.forwardBridges.length > 0 && (
                  <div className="rounded-xl border s-inset p-4 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 s-text-muted">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent-text)' }} />
                      <span>Forward Bridge — Where You Will Use This Exact Tool Later</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {concept.forwardBridges.map((fb, fIdx) => (
                        <div key={fIdx} className="rounded-lg s-surface border p-3 text-xs space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold s-text-primary">{fb.topic}</span>
                            <span className="px-2 py-0.5 rounded border s-pill-accent font-mono text-[11px]">
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
                  </div>
                )}
              </section>
            )
          })}

          <div className="flex justify-end">
            <button
              onClick={() => {
                setActiveTab('playbook')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-5 py-3 rounded-xl s-btn-primary font-semibold text-sm flex items-center gap-2 cursor-pointer transition"
            >
              <span>Next Stage: Tricky Numericals — "How to Think" Playbook</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          STAGE 2: TRICKY QUESTIONS — "HOW TO THINK" PLAYBOOK
          ===================================================================== */}
      {activeTab === 'playbook' && (
        <div className="space-y-6">
          <div className="rounded-xl border p-4 text-xs leading-relaxed s-rail-accent s-text-secondary">
            <strong className="s-text-primary">How to study this tab: </strong>
            For each tricky GATE archetype below, read the <strong className="s-text-primary">Trigger Cue</strong> and{' '}
            <strong className="s-text-primary">Mental Shift</strong> first — notice <em>why</em> your brain picks that angle before revealing the algebra steps one by one.
          </div>

          {chapter.howToThinkPlaybook.map((arch, idx) => (
            <PlaybookCard
              key={arch.id}
              index={idx + 1}
              archetype={arch}
              onFeedback={() =>
                onOpenFeedback({
                  contextType: 'playbook',
                  contextTitle: `Playbook: ${arch.title}`,
                })
              }
            />
          ))}

          <div className="flex justify-end">
            <button
              onClick={() => {
                setActiveTab('arsenal')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-5 py-3 rounded-xl s-btn-primary font-semibold text-sm flex items-center gap-2 cursor-pointer transition"
            >
              <span>Next Stage: Lock In Direct Exam Arsenal (30-Sec Weapons)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          STAGE 3: DIRECT EXAM ARSENAL (FINAL FORMULAS & SHORTCUTS)
          ===================================================================== */}
      {activeTab === 'arsenal' && (
        <div className="space-y-6">
          <div className="rounded-xl border p-4 text-xs leading-relaxed s-rail-formula s-text-secondary">
            <strong style={{ color: 'var(--formula-text)' }}>Two-Stage Memory Mode: </strong>
            Now that you understand <em>why</em> the basics work from Stage 1,{' '}
            <strong className="s-text-primary">do NOT re-derive from scratch in the exam</strong>. Memorize these direct pattern-to-answer weapons to crush 90% of questions in under 30 seconds.
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {chapter.arsenalCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl border s-surface p-5 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full border s-pill-formula text-xs font-semibold">
                      {card.badge}
                    </span>
                  </div>

                  <div className="text-xs s-text-secondary">
                    <strong style={{ color: 'var(--accent-text)' }}>When You Spot: </strong>
                    <MathText text={card.whenYouSpot} />
                  </div>

                  <div
                    className="rounded-xl border s-inset p-3 overflow-x-auto"
                    style={{ borderColor: 'var(--formula-border)' }}
                  >
                    <MathText text={`$$${card.directWeaponLatex}$$`} />
                  </div>

                  <div className="text-xs s-text-primary leading-relaxed">
                    <strong style={{ color: 'var(--ok-text)' }}>Instant Rule: </strong>
                    <MathText text={card.instantRule} />
                  </div>

                  <div className="rounded-lg s-inset border p-2.5 text-xs s-text-secondary">
                    <strong className="s-text-primary">10-Sec Check: </strong>
                    <MathText text={card.tenSecondExample} />
                  </div>
                </div>

                <div className="rounded-lg border s-pill-bad p-2.5 text-xs">
                  <strong>⚠ One Fatal Trap: </strong>
                  <MathText text={card.oneFatalTrap} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                setActiveTab('practice')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-5 py-3 rounded-xl s-btn-primary font-semibold text-sm flex items-center gap-2 cursor-pointer transition"
            >
              <span>Final Stage: Solve Warmups, Official PYQs & Infinite Drills</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          STAGE 4: PRACTICE ARENA + INFINITE NUMERICAL GENERATOR
          ===================================================================== */}
      {activeTab === 'practice' && (
        <div className="space-y-6">
          <PracticeArena
            questions={chapter.questions}
            progress={progress}
            onRecordAttempt={onRecordAttempt}
            onToggleBookmark={onToggleBookmark}
            onSaveNote={onSaveNote}
          />

          <InfiniteNumericalGenerator generatorId={chapter.generatorId} />

          {/* Next/Prev Chapter Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t s-border">
            {prevChapter ? (
              <button
                onClick={() => {
                  onSelectChapter(prevChapter.id)
                  setActiveTab('learn')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-4 py-2.5 rounded-xl border s-btn-ghost text-xs font-semibold cursor-pointer transition"
              >
                ← Previous: Ch.{prevChapter.number} {prevChapter.shortTitle}
              </button>
            ) : (
              <div />
            )}

            {nextChapter && (
              <button
                onClick={() => {
                  onSelectChapter(nextChapter.id)
                  setActiveTab('learn')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-5 py-2.5 rounded-xl s-btn-primary text-xs font-semibold cursor-pointer transition"
              >
                Continue Stream → Ch.{nextChapter.number}: {nextChapter.shortTitle}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const PlaybookCard: React.FC<{
  index: number
  archetype: HowToThinkArchetype
  onFeedback: () => void
}> = ({ index, archetype, onFeedback }) => {
  const [revealedCount, setRevealedCount] = useState<number>(1)

  return (
    <div className="rounded-2xl border s-surface p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-0.5 rounded border s-pill-accent font-mono font-bold">
            Archetype #{index}
          </span>
          <span className="px-2.5 py-0.5 rounded-full border s-pill-formula font-medium">
            {archetype.difficulty}
          </span>
          {archetype.relatedPyqs.map((p, i) => (
            <span key={i} className="px-2 py-0.5 rounded border s-pill-neutral font-mono">
              {p}
            </span>
          ))}
        </div>
        <button
          onClick={onFeedback}
          className="px-2.5 py-1 rounded-lg border s-btn-ghost text-xs flex items-center gap-1 cursor-pointer transition"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" style={{ color: 'var(--formula)' }} /> Feedback
        </button>
      </div>

      <h3 className="text-lg font-bold s-text-primary">
        <MathText text={archetype.title} />
      </h3>

      <div className="rounded-xl s-inset border p-4 text-sm s-text-primary">
        <MathText text={archetype.problemStatement} />
      </div>

      {/* Cognitive Comparison: Trigger Cue + Brute Force vs Mental Shift */}
      <div className="rounded-xl border s-pill-formula p-3.5 text-xs leading-relaxed">
        <strong>Trigger Cue (What Your Brain Spots Immediately): </strong>
        <MathText text={archetype.triggerCue} />
      </div>

      <div className="grid md:grid-cols-2 gap-3 text-xs">
        <div className="rounded-xl border s-inset p-3.5 space-y-1" style={{ borderLeft: '3px solid var(--bad)' }}>
          <div className="font-semibold" style={{ color: 'var(--bad-text)' }}>
            The 10-Minute Brute-Force Trap
          </div>
          <p className="s-text-secondary leading-relaxed">
            <MathText text={archetype.bruteForceTrap} />
          </p>
        </div>
        <div className="rounded-xl border s-inset p-3.5 space-y-1" style={{ borderLeft: '3px solid var(--ok)' }}>
          <div className="font-semibold" style={{ color: 'var(--ok-text)' }}>
            The Intuitive Mental Shift
          </div>
          <p className="s-text-primary leading-relaxed">
            <MathText text={archetype.mentalShift} />
          </p>
        </div>
      </div>

      {/* Progressive Step-by-Step Walkthrough */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider s-text-muted">
            Step-by-Step Execution ({revealedCount}/{archetype.steps.length} revealed)
          </span>
          {revealedCount < archetype.steps.length && (
            <button
              onClick={() => setRevealedCount(archetype.steps.length)}
              className="flex items-center gap-1 cursor-pointer font-medium hover:underline"
              style={{ color: 'var(--accent-text)' }}
            >
              <Eye className="w-3.5 h-3.5" /> Reveal All Steps
            </button>
          )}
        </div>

        {archetype.steps.slice(0, revealedCount).map((st, sIdx) => (
          <div key={sIdx} className="rounded-xl s-inset border p-3.5 text-xs space-y-1">
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
            onClick={() => setRevealedCount((c) => c + 1)}
            className="px-3.5 py-2 rounded-xl s-btn-primary text-xs font-semibold cursor-pointer transition"
          >
            Reveal Step {revealedCount + 1} →
          </button>
        )}
      </div>

      {revealedCount >= archetype.steps.length && (
        <div className="rounded-xl border s-pill-accent p-3.5 text-xs leading-relaxed">
          <strong>Lock-In Rule for Exam Day: </strong>
          <MathText text={archetype.lockInTakeaway} />
        </div>
      )}
    </div>
  )
}
