import React, { useState, useEffect } from 'react'
import type { PilotFeedbackItem } from '../types/curriculum'
import { MessageSquarePlus, X, Trash2, FileText, Sparkles } from 'lucide-react'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  initialContext?: {
    contextType: PilotFeedbackItem['contextType']
    contextTitle: string
  }
  feedbackItems: PilotFeedbackItem[]
  onAddFeedback: (item: Omit<PilotFeedbackItem, 'id' | 'createdAt'>) => void
  onDeleteFeedback: (id: string) => void
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  initialContext,
  feedbackItems,
  onAddFeedback,
  onDeleteFeedback,
}) => {
  const [sentiment, setSentiment] = useState<PilotFeedbackItem['sentiment']>('worked-great')
  const [contextTitle, setContextTitle] = useState(initialContext?.contextTitle || 'Pilot Module 1 Overall')
  const [comment, setComment] = useState('')
  const [styleMarkdown, setStyleMarkdown] = useState('')
  const [viewMode, setViewMode] = useState<'log' | 'style-doc'>('log')

  useEffect(() => {
    if (initialContext) {
      setContextTitle(initialContext.contextTitle)
    }
  }, [initialContext])

  useEffect(() => {
    if (isOpen && viewMode === 'style-doc') {
      fetch('/api/learning-style')
        .then((r) => r.json())
        .then((d) => setStyleMarkdown(d.content || ''))
        .catch(() => {})
    }
  }, [isOpen, viewMode])

  if (!isOpen) return null

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return
    onAddFeedback({
      contextType: initialContext?.contextType || 'general',
      contextTitle,
      sentiment,
      comment: comment.trim(),
    })
    setComment('')
  }

  const sentimentLabels: Record<PilotFeedbackItem['sentiment'], { label: string; color: string }> = {
    'worked-great': { label: 'Worked Great — Keep Doing This', color: 's-pill-ok' },
    'more-examples': { label: 'Want Simpler / More Toy Examples Here', color: 's-pill-accent' },
    'more-compact': { label: 'Too Long — Make Faster / More Direct', color: 's-pill-formula' },
    confusing: { label: 'Confusing Step — Clarify Intuition', color: 's-pill-bad' },
    'style-rule': { label: 'Permanent Rule for LEARNING_STYLE.md', color: 's-pill-accent' },
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl max-h-[88vh] rounded-2xl border s-surface s-border-strong shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 s-elevated border-b s-border">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--formula)' }} />
            <h3 className="font-bold s-text-primary text-sm">
              Pilot Style Calibration & LEARNING_STYLE.md Recorder
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'log' ? 'style-doc' : 'log')}
              className="px-2.5 py-1 rounded-lg border s-btn-ghost text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              {viewMode === 'log' ? 'View LEARNING_STYLE.md' : 'Back to Feedback Recorder'}
            </button>
            <button onClick={onClose} className="s-text-muted hover:text-[var(--text-primary)] cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {viewMode === 'style-doc' ? (
            <div className="space-y-2">
              <p className="text-xs s-text-muted">
                Live contents of <code style={{ color: 'var(--accent-text)' }}>LEARNING_STYLE.md</code> in your workspace root:
              </p>
              <pre className="whitespace-pre-wrap text-xs font-mono s-inset border rounded-xl p-4 s-text-primary leading-relaxed">
                {styleMarkdown || 'Loading...'}
              </pre>
            </div>
          ) : (
            <>
              <p className="text-xs s-text-secondary leading-relaxed">
                Every note you add here is saved directly to <code style={{ color: 'var(--ok-text)' }}>pilot-feedback.json</code> in your{' '}
                <code>GATE DA 2027</code> folder. As you study Module 1, jot down what clicked and what didn't — then tell me in chat and I'll lock your exact preferences into <code>LEARNING_STYLE.md</code> before building Weeks 2–8!
              </p>

              <form onSubmit={submit} className="space-y-3 s-inset border rounded-xl p-4">
                <div>
                  <label className="block text-xs s-text-muted mb-1">Topic / Section:</label>
                  <input
                    type="text"
                    value={contextTitle}
                    onChange={(e) => setContextTitle(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border s-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs s-text-muted mb-1.5">Tag how this felt:</label>
                  <div className="flex flex-wrap gap-1.5">
                    {(Object.keys(sentimentLabels) as Array<PilotFeedbackItem['sentiment']>).map((k) => (
                      <button
                        type="button"
                        key={k}
                        onClick={() => setSentiment(k)}
                        className={`px-2.5 py-1 rounded-lg border text-xs cursor-pointer transition ${
                          sentiment === k ? sentimentLabels[k].color : 's-btn-ghost'
                        }`}
                      >
                        {sentimentLabels[k].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs s-text-muted mb-1">Your feedback / rule for future modules:</label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="e.g., 'Loved the 2024 Q37 slider + toy example! On Taylor series, add 2 more step-by-step algebra lines before jumping to the final coefficient...'"
                    className="w-full px-3 py-2 rounded-lg border s-input text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg s-btn-primary text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
                >
                  <MessageSquarePlus className="w-4 h-4" /> Save Feedback to Disk
                </button>
              </form>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider s-text-muted">
                  Recorded Pilot Feedback ({feedbackItems.length})
                </h4>
                {feedbackItems.length === 0 ? (
                  <p className="text-xs s-text-muted italic">No feedback notes logged yet.</p>
                ) : (
                  feedbackItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border s-inset p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 text-xs">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-2 py-0.5 rounded border text-[11px] ${sentimentLabels[item.sentiment].color}`}>
                            {sentimentLabels[item.sentiment].label}
                          </span>
                          <span className="font-semibold s-text-primary">{item.contextTitle}</span>
                        </div>
                        <p className="s-text-secondary">{item.comment}</p>
                      </div>
                      <button
                        onClick={() => onDeleteFeedback(item.id)}
                        className="s-text-muted hover:text-[var(--bad-text)] cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
