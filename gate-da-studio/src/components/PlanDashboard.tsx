import React, { useState } from 'react'
import { EIGHT_WEEK_PLAN, PAPER_FORMAT_STATS, SECTION_ANALYTICS } from '../data/eightWeekPlan'
import type { UserProgressState } from '../types/curriculum'
import { PRIORITY_META } from './ChapterStudio'
import {
  Calendar,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layers,
  ShieldCheck,
  XOctagon,
  ChevronDown,
  ChevronsUpDown,
  FileText,
} from 'lucide-react'

export interface PlanDashboardProps {
  progress: UserProgressState
  onTogglePlanModule: (modId: string) => void
  onOpenModule: (moduleId: string) => void
}

const OFFICIAL_PDFS = [
  { file: 'syllabus.pdf', label: 'Official GATE 2027 Syllabus', subtitle: 'IIT Madras · Complete DA Sections' },
  { file: '2024_DA.pdf', label: 'GATE DA 2024 Paper', subtitle: 'IISc Bengaluru · 65 Questions' },
  { file: '2025_DA.pdf', label: 'GATE DA 2025 Paper', subtitle: 'IIT Roorkee · 65 Questions' },
  { file: '2026_DA.pdf', label: 'GATE DA 2026 Paper', subtitle: 'IIT Guwahati · 65 Questions' },
] as const

export const PlanDashboard: React.FC<PlanDashboardProps> = ({
  progress,
  onTogglePlanModule,
  onOpenModule,
}) => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'analytics'>('roadmap')

  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>(() => {
    const firstIncompleteWeek = EIGHT_WEEK_PLAN.find((wk) =>
      wk.modules.some((mod) => !progress.completedPlanModules[mod.id])
    )
    const defaultWeek = firstIncompleteWeek ? firstIncompleteWeek.week : 1
    return { [defaultWeek]: true }
  })

  const [expandedModuleDetails, setExpandedModuleDetails] = useState<Record<string, boolean>>({})

  const totalModules = EIGHT_WEEK_PLAN.reduce((sum, wk) => sum + wk.modules.length, 0)
  const completedModulesCount = EIGHT_WEEK_PLAN.reduce(
    (sum, wk) => sum + wk.modules.filter((m) => Boolean(progress.completedPlanModules[m.id])).length,
    0
  )

  const allWeeksExpanded = EIGHT_WEEK_PLAN.every((wk) => Boolean(expandedWeeks[wk.week]))

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) => ({ ...prev, [weekNum]: !prev[weekNum] }))
  }

  const toggleAllWeeks = () => {
    if (allWeeksExpanded) {
      setExpandedWeeks({})
    } else {
      const next: Record<number, boolean> = {}
      EIGHT_WEEK_PLAN.forEach((wk) => {
        next[wk.week] = true
      })
      setExpandedWeeks(next)
    }
  }

  const toggleModuleDetails = (modId: string) => {
    setExpandedModuleDetails((prev) => ({ ...prev, [modId]: !prev[modId] }))
  }

  return (
    <div className="space-y-5">
      {/* Compact Top Header Strip */}
      <div className="rounded-2xl border s-surface px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold s-text-primary tracking-tight flex items-center gap-2">
              <Calendar className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
              <span>8-Week Mastery Plan</span>
            </h1>
            <span className="px-2.5 py-0.5 rounded-full border s-pill-accent text-[11px] font-mono font-semibold">
              {completedModulesCount}/{totalModules} Modules Done
            </span>
          </div>
          <p className="text-xs s-text-secondary leading-relaxed">
            Prerequisite-ordered Nov 4 – Dec 29, 2026 stream (336 hrs) — zero forward-reference gaps, leaving Jan–Feb
            2027 free for full mocks.
          </p>
        </div>

        {/* 2 Clean Sub-Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl border s-inset text-xs shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg font-medium cursor-pointer transition ${
              activeTab === 'roadmap' ? 's-btn-primary font-semibold' : 's-text-secondary hover:bg-[var(--bg-hover)]'
            }`}
          >
            8-Week Roadmap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-1.5 rounded-lg font-medium cursor-pointer transition ${
              activeTab === 'analytics'
                ? 's-btn-primary font-semibold'
                : 's-text-secondary hover:bg-[var(--bg-hover)]'
            }`}
          >
            3-Year Analytics &amp; PDFs
          </button>
        </div>
      </div>

      {/* TAB 1: 8-WEEK ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3 px-1">
            <span className="text-xs s-text-muted">
              Click any week to expand its modules, or toggle <strong className="s-text-secondary">Details</strong> on a
              module for scope &amp; archetypes.
            </span>
            <button
              type="button"
              onClick={toggleAllWeeks}
              className="px-3 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer shrink-0 transition"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>{allWeeksExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {EIGHT_WEEK_PLAN.map((wk) => {
              const isWeekOpen = Boolean(expandedWeeks[wk.week])
              const doneInWeek = wk.modules.filter((m) => Boolean(progress.completedPlanModules[m.id])).length
              const weekAllDone = doneInWeek === wk.modules.length

              return (
                <div key={wk.week} className="rounded-2xl border s-surface overflow-hidden">
                  {/* Collapsible Week Accordion Row */}
                  <button
                    type="button"
                    onClick={() => toggleWeek(wk.week)}
                    className="w-full text-left px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 cursor-pointer transition hover:bg-[var(--bg-hover)]"
                  >
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 min-w-0">
                      <span
                        className={`px-2 py-0.5 rounded-md border font-mono text-[11px] font-semibold shrink-0 ${
                          weekAllDone ? 's-pill-ok' : 's-pill-accent'
                        }`}
                      >
                        Week {wk.week}
                      </span>
                      <span className="text-sm font-bold s-text-primary">{wk.theme}</span>
                      <span className="text-xs font-mono s-text-muted">
                        · {wk.dateRange} · {wk.totalHours} hrs
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span
                        className={`px-2.5 py-0.5 rounded-full border font-mono text-[11px] font-semibold ${
                          weekAllDone ? 's-pill-ok' : 's-pill-neutral'
                        }`}
                      >
                        {doneInWeek}/{wk.modules.length} modules
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 s-text-muted transition-transform ${isWeekOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Expanded Week Content */}
                  {isWeekOpen && (
                    <div className="px-5 pb-4 pt-3 border-t s-border space-y-3">
                      <p className="text-xs s-text-muted leading-relaxed">{wk.rationale}</p>

                      <div className="space-y-2.5">
                        {wk.modules.map((mod) => {
                          const pMeta = PRIORITY_META[mod.priority]
                          const done = Boolean(progress.completedPlanModules[mod.id])
                          const showDetails = Boolean(expandedModuleDetails[mod.id])

                          return (
                            <div
                              key={mod.id}
                              className={`rounded-xl border overflow-hidden transition ${
                                done ? 's-rail-ok' : 's-rail-accent'
                              }`}
                              style={done ? { borderColor: 'var(--ok-border)' } : undefined}
                            >
                              {/* Compact Module Row */}
                              <div className="p-3.5 flex flex-wrap items-center justify-between gap-3">
                                <div className="space-y-1 min-w-0 flex-1">
                                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                                    <span className="px-2 py-0.5 rounded border s-pill-accent font-mono font-semibold">
                                      {mod.sectionCode} · {mod.dayRange}
                                    </span>
                                    <span className={`px-2 py-0.5 rounded-full border font-medium ${pMeta.badgeClass}`}>
                                      {pMeta.label}
                                    </span>
                                    <span className="s-text-muted font-mono">
                                      {mod.pyqCount2024_2026} PYQs · {mod.avgMarks}
                                    </span>
                                  </div>
                                  <h3 className="text-sm font-bold s-text-primary leading-snug">{mod.title}</h3>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => toggleModuleDetails(mod.id)}
                                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium inline-flex items-center gap-1 cursor-pointer transition ${
                                      showDetails ? 's-pill-accent' : 's-btn-ghost'
                                    }`}
                                  >
                                    <span>Details</span>
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 transition-transform ${showDetails ? 'rotate-180' : ''}`}
                                    />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => onOpenModule(mod.id)}
                                    className="px-3 py-1.5 rounded-lg s-btn-primary text-xs font-semibold inline-flex items-center gap-1 cursor-pointer transition"
                                  >
                                    <span>Open</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => onTogglePlanModule(mod.id)}
                                    className={`p-1.5 rounded-lg border cursor-pointer transition ${
                                      done ? 's-pill-ok' : 's-btn-ghost'
                                    }`}
                                    title={done ? 'Completed — click to undo' : 'Mark module complete'}
                                    aria-label={done ? 'Mark module incomplete' : 'Mark module complete'}
                                  >
                                    <CheckCircle2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              {/* Collapsible Deep Metadata Drawer */}
                              {showDetails && (
                                <div className="px-4 pb-4 pt-3 border-t s-border space-y-3 s-surface">
                                  {/* Syllabus Topics */}
                                  <div className="space-y-1.5">
                                    <div className="text-[11px] font-semibold uppercase tracking-wider s-text-muted">
                                      Syllabus Topics
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                      {mod.syllabusTopics.map((t, i) => (
                                        <span
                                          key={i}
                                          className="px-2.5 py-1 rounded-md border s-pill-neutral text-[11px]"
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  {/* High-ROI Focus vs Scope Boundary */}
                                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                                    <div
                                      className="rounded-lg border s-inset p-3 space-y-1"
                                      style={{ borderLeft: '3px solid var(--ok)' }}
                                    >
                                      <div
                                        className="font-semibold flex items-center gap-1.5"
                                        style={{ color: 'var(--ok-text)' }}
                                      >
                                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                                        <span>High-ROI Focus</span>
                                      </div>
                                      <p className="s-text-secondary leading-relaxed">{mod.importantFocus}</p>
                                    </div>

                                    <div
                                      className="rounded-lg border s-inset p-3 space-y-1"
                                      style={{ borderLeft: '3px solid var(--bad)' }}
                                    >
                                      <div
                                        className="font-semibold flex items-center gap-1.5"
                                        style={{ color: 'var(--bad-text)' }}
                                      >
                                        <XOctagon className="w-3.5 h-3.5 shrink-0" />
                                        <span>Scope Boundary</span>
                                      </div>
                                      <p className="s-text-secondary leading-relaxed">{mod.skipBoundary}</p>
                                    </div>
                                  </div>

                                  {/* Unlocks Next + Target Numerical Archetypes */}
                                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                                    <div className="rounded-lg border s-inset p-3 space-y-1">
                                      <div className="font-semibold" style={{ color: 'var(--accent-text)' }}>
                                        Unlocks Next
                                      </div>
                                      <ul className="list-disc list-inside s-text-secondary space-y-0.5">
                                        {mod.unlocksNext.map((u, i) => (
                                          <li key={i}>{u}</li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="rounded-lg border s-inset p-3 space-y-1">
                                      <div className="font-semibold" style={{ color: 'var(--formula-text)' }}>
                                        Target Numerical Archetypes
                                      </div>
                                      <ul className="list-disc list-inside s-text-secondary space-y-0.5">
                                        {mod.keyNumericalArchetypes.map((k, i) => (
                                          <li key={i}>{k}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* TAB 2: 3-YEAR ANALYTICS & PDFs */}
      {activeTab === 'analytics' && (
        <div className="space-y-5">
          {/* Official Workspace PDF Quick-Openers */}
          <div className="rounded-2xl border s-surface p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-bold s-text-primary flex items-center gap-2">
                <FileText className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>Official Workspace PDFs</span>
              </h2>
              <span className="text-[11px] font-mono s-text-muted">Opens in new tab</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {OFFICIAL_PDFS.map(({ file, label, subtitle }) => (
                <a
                  key={file}
                  href={`${import.meta.env.BASE_URL}pdfs/${file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border s-btn-ghost p-3.5 flex items-start justify-between gap-2 transition"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-semibold s-text-primary truncate">{label}</div>
                    <div className="text-[11px] s-text-muted mt-0.5 truncate">{subtitle}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--accent-text)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* 3-Year Section Weightage Audit + Zero-Negative Scoring Stats */}
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-2xl border s-surface p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold s-text-primary flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" style={{ color: 'var(--ok)' }} />
                  <span>3-Year Section Weightage Audit (195 Questions)</span>
                </h2>
                <span className="text-xs s-text-muted font-mono">Marks out of 100</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b s-border s-text-muted font-mono">
                      <th className="py-2 pr-3">Section</th>
                      <th className="py-2 px-2 text-center">2024</th>
                      <th className="py-2 px-2 text-center">2025</th>
                      <th className="py-2 px-2 text-center">2026</th>
                      <th className="py-2 px-2 text-center" style={{ color: 'var(--accent-text)' }}>
                        Avg
                      </th>
                      <th className="py-2 pl-3">Strategic Takeaway</th>
                    </tr>
                  </thead>
                  <tbody className="s-divide">
                    {SECTION_ANALYTICS.map((row) => (
                      <tr key={row.code} className="border-b hover:bg-[var(--bg-hover)] transition">
                        <td className="py-2.5 pr-3 font-semibold s-text-primary whitespace-nowrap">
                          <span className="font-mono mr-1.5" style={{ color: 'var(--accent-text)' }}>
                            {row.code}
                          </span>
                          {row.name}
                        </td>
                        <td className="py-2.5 px-2 text-center font-mono s-text-secondary">{row.m2024}</td>
                        <td className="py-2.5 px-2 text-center font-mono s-text-secondary">{row.m2025}</td>
                        <td className="py-2.5 px-2 text-center font-mono s-text-secondary">{row.m2026}</td>
                        <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--ok-text)' }}>
                          {row.avgMarks.toFixed(1)}
                        </td>
                        <td className="py-2.5 pl-3 s-text-muted leading-snug">{row.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border s-surface p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h2 className="text-sm font-bold s-text-primary flex items-center gap-2">
                  <Layers className="w-4 h-4" style={{ color: 'var(--formula)' }} />
                  <span>Question Type &amp; Zero-Negative Stats</span>
                </h2>
                <p className="text-xs s-text-secondary leading-relaxed">
                  Every year, <strong style={{ color: 'var(--ok-text)' }}>48%–51% of the paper</strong> carries{' '}
                  <strong className="s-text-primary">ZERO negative marking</strong> (MSQs + NATs)—yet MSQs award zero
                  partial credit and NATs offer no options to guess from:
                </p>
                <div className="space-y-2.5">
                  {PAPER_FORMAT_STATS.map((st) => (
                    <div key={st.year} className="rounded-xl s-inset border p-3 text-xs space-y-1">
                      <div className="flex justify-between font-semibold s-text-primary">
                        <span>
                          GATE {st.year} ({st.institute})
                        </span>
                        <span className="font-mono" style={{ color: 'var(--ok-text)' }}>
                          {st.zeroNegMarks}M Zero-Neg
                        </span>
                      </div>
                      <div className="text-[11px] font-mono s-text-muted">
                        MCQ: {st.mcq} · MSQ: {st.msq} · NAT: {st.nat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border s-pill-formula p-3 text-xs leading-relaxed">
                <strong>Calendar Advantage:</strong> Finishing Weeks 1–8 by <strong>Dec 29, 2026</strong> leaves{' '}
                <strong>~5 full weeks in Jan–Feb 2027</strong> purely for 3-hour mocks &amp; Direct Arsenal drills.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
