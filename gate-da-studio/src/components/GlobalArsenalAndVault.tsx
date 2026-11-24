import React, { useState, useMemo } from 'react'
import type { ChapterData, StudyModuleMeta, UserProgressState } from '../types/curriculum'
import { SUBJECT_TRACKS, getTrackForChapter, type SubjectTrackId } from '../data/subjectTracks'
import { MathText } from './MathText'
import { PracticeArena } from './PracticeArena'
import { Zap, Bookmark, AlertCircle, Search, ChevronDown, ChevronsUpDown } from 'lucide-react'

export const GlobalArsenalView: React.FC<{
  chapters?: ChapterData[]
  modulesWithChapters?: Array<{ meta: StudyModuleMeta; chapters: ChapterData[] }>
}> = ({ chapters = [], modulesWithChapters }) => {
  const [query, setQuery] = useState('')
  const [trackFilter, setTrackFilter] = useState<'all' | SubjectTrackId>('all')
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  const allCards = useMemo(() => {
    const sourceChapters =
      modulesWithChapters && modulesWithChapters.length > 0
        ? modulesWithChapters.flatMap(({ chapters: modChs }) => modChs)
        : chapters

    return sourceChapters
      .flatMap((ch) => {
        const track = getTrackForChapter(ch.id)
        const ref = track.chapters.find((c) => c.chapterId === ch.id)
        const trackChapterNumber = ref ? ref.trackChapterNumber : ch.number
        return ch.arsenalCards.map((c, idx) => ({
          ...c,
          cardOrder: idx,
          trackId: track.id,
          trackOrder: track.order,
          trackShortTitle: track.shortTitle,
          trackChapterNumber,
          chapterTitle: ch.shortTitle,
        }))
      })
      .sort(
        (a, b) =>
          a.trackOrder - b.trackOrder ||
          a.trackChapterNumber - b.trackChapterNumber ||
          a.cardOrder - b.cardOrder
      )
  }, [chapters, modulesWithChapters])

  const trackCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const card of allCards) {
      counts[card.trackId] = (counts[card.trackId] || 0) + 1
    }
    return counts
  }, [allCards])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allCards.filter((c) => {
      if (trackFilter !== 'all' && c.trackId !== trackFilter) return false
      if (!q) return true
      return (
        c.badge.toLowerCase().includes(q) ||
        c.whenYouSpot.toLowerCase().includes(q) ||
        c.instantRule.toLowerCase().includes(q) ||
        c.tenSecondExample.toLowerCase().includes(q) ||
        c.oneFatalTrap.toLowerCase().includes(q) ||
        c.chapterTitle.toLowerCase().includes(q) ||
        c.trackShortTitle.toLowerCase().includes(q)
      )
    })
  }, [allCards, trackFilter, query])

  const allExpanded = filtered.length > 0 && filtered.every((c) => Boolean(expandedCards[c.id]))

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleAllVisible = () => {
    if (allExpanded) {
      setExpandedCards((prev) => {
        const next = { ...prev }
        for (const c of filtered) delete next[c.id]
        return next
      })
    } else {
      setExpandedCards((prev) => {
        const next = { ...prev }
        for (const c of filtered) next[c.id] = true
        return next
      })
    }
  }

  return (
    <div className="space-y-5">
      {/* Compact Header, Search & 8-Subject Track Filter */}
      <div className="rounded-2xl border s-surface p-5 space-y-4 s-rail-formula">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <h1 className="text-xl font-bold s-text-primary flex items-center gap-2 tracking-tight">
              <Zap className="w-5 h-5 shrink-0" style={{ color: 'var(--formula)' }} />
              <span>Direct Exam Arsenal ({allCards.length} Weapons)</span>
            </h1>
            <p className="text-xs s-text-secondary leading-relaxed">
              Scan <strong className="s-text-primary">When You Spot → Formula</strong> pairs across all 8 subjects. Click
              any card to reveal its Instant Rule, 10-Sec Check, and Watch Trap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-64 sm:w-72">
              <Search className="w-4 h-4 s-text-muted absolute left-3 top-2.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shortcuts (Bayes, SVD, BCNF, SVM)..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border s-input text-xs"
              />
            </div>

            {filtered.length > 0 && (
              <button
                type="button"
                onClick={toggleAllVisible}
                className="px-3 py-2 rounded-xl border s-btn-ghost text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer shrink-0 transition"
              >
                <ChevronsUpDown className="w-3.5 h-3.5" />
                <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 8-Subject Track Filter Strip */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t s-border text-xs">
          <button
            type="button"
            onClick={() => setTrackFilter('all')}
            className={`px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition ${
              trackFilter === 'all' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            All 8 Subjects ({allCards.length})
          </button>

          {SUBJECT_TRACKS.map((track) => {
            const count = trackCounts[track.id] || 0
            const active = trackFilter === track.id
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setTrackFilter(track.id)}
                className={`px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition ${
                  active ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
                }`}
              >
                {track.order}. {track.shortTitle}
                <span className="ml-1 opacity-75 font-mono text-[11px]">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Scannable 2-Column Expandable Cards */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border s-surface p-10 text-center space-y-2">
          <AlertCircle className="w-7 h-7 s-text-muted mx-auto" />
          <p className="text-sm font-semibold s-text-primary">No arsenal weapons match your filter.</p>
          <p className="text-xs s-text-muted">Try another subject track or clear your search query.</p>
          {(query.trim() !== '' || trackFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setTrackFilter('all')
              }}
              className="mt-2 px-3.5 py-1.5 rounded-lg border s-btn-ghost text-xs font-medium cursor-pointer transition"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {filtered.map((card) => {
            const isOpen = Boolean(expandedCards[card.id])
            return (
              <div key={card.id} className="rounded-2xl border s-surface overflow-hidden transition">
                <button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  className="w-full text-left p-4 space-y-3 cursor-pointer transition hover:bg-[var(--bg-hover)]"
                >
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                      <span className="px-2.5 py-0.5 rounded-full border s-pill-formula font-semibold">
                        <MathText text={card.badge} />
                      </span>
                      <span className="font-mono text-[11px] s-text-muted truncate">
                        {card.trackShortTitle} · Ch.{card.trackChapterNumber} · <MathText text={card.chapterTitle} />
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 mt-0.5 s-text-muted transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <div className="text-xs s-text-secondary leading-relaxed">
                    <strong style={{ color: 'var(--accent-text)' }}>When You Spot: </strong>
                    <MathText text={card.whenYouSpot} />
                  </div>

                  <div
                    className="rounded-xl s-inset border px-3.5 py-3 overflow-x-auto"
                    style={{ borderColor: 'var(--formula-border)' }}
                  >
                    <MathText text={`$$${card.directWeaponLatex}$$`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-3 border-t s-border space-y-2.5 text-xs">
                    <div className="s-text-primary leading-relaxed">
                      <strong style={{ color: 'var(--ok-text)' }}>Instant Rule: </strong>
                      <MathText text={card.instantRule} />
                    </div>

                    <div className="rounded-lg border s-inset p-3 s-text-secondary leading-relaxed">
                      <strong className="s-text-primary">10-Sec Check: </strong>
                      <MathText text={card.tenSecondExample} />
                    </div>

                    <div className="rounded-lg border s-pill-bad p-3 leading-relaxed">
                      <strong>⚠ Watch Trap: </strong>
                      <MathText text={card.oneFatalTrap} />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const MistakeVaultView: React.FC<{
  chapters: ChapterData[]
  progress: UserProgressState
  onRecordAttempt: (qId: string, correct: boolean, userAnswer: string) => void
  onToggleBookmark: (qId: string) => void
  onSaveNote: (qId: string, note: string) => void
}> = ({ chapters, progress, onRecordAttempt, onToggleBookmark, onSaveNote }) => {
  const [filter, setFilter] = useState<'all-saved' | 'mistakes' | 'bookmarked'>('all-saved')
  const allQuestions = chapters.flatMap((c) => c.questions)

  const vaultQuestions = allQuestions.filter((q) => {
    const missed = progress.questionAttempts[q.id] && !progress.questionAttempts[q.id].correct
    const marked = Boolean(progress.bookmarkedQuestions[q.id])
    const hasNote = Boolean(progress.questionNotes[q.id])
    if (filter === 'mistakes') return missed
    if (filter === 'bookmarked') return marked
    return missed || marked || hasNote
  })

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border s-surface p-5 space-y-3 s-rail-bad">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold s-text-primary flex items-center gap-2 tracking-tight">
              <Bookmark className="w-5 h-5 shrink-0" style={{ color: 'var(--bad)' }} />
              <span>Mistake, Bookmark &amp; Personal Note Vault ({vaultQuestions.length})</span>
            </h1>
            <p className="text-xs s-text-secondary mt-1">
              Every question you miss, bookmark, or write a note on is automatically saved to{' '}
              <code className="s-text-primary">user-progress.json</code> on disk for focused 1-by-1 re-solving.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {(
              [
                ['all-saved', 'All Vault Items'],
                ['mistakes', 'Missed Questions'],
                ['bookmarked', 'Bookmarked'],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setFilter(k)}
                className={`px-3 py-1.5 rounded-xl border font-semibold cursor-pointer transition ${
                  filter === k ? 's-btn-primary border-transparent' : 's-btn-ghost'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {vaultQuestions.length === 0 ? (
        <div className="rounded-2xl border s-surface p-10 text-center space-y-2">
          <AlertCircle className="w-8 h-8 s-text-muted mx-auto" />
          <p className="text-sm font-semibold s-text-primary">Your Vault is clean right now!</p>
          <p className="text-xs s-text-muted">
            As you solve questions in the Practice Arena, any missed question or bookmarked problem appears here
            automatically.
          </p>
        </div>
      ) : (
        <PracticeArena
          key={filter}
          singleQuestionMode
          questions={vaultQuestions}
          progress={progress}
          onRecordAttempt={onRecordAttempt}
          onToggleBookmark={onToggleBookmark}
          onSaveNote={onSaveNote}
        />
      )}
    </div>
  )
}
