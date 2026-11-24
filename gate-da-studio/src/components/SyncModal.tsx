import React, { useState, useRef } from 'react'
import {
  Cloud,
  CloudOff,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Download,
  Upload,
  Eye,
  EyeOff,
  X,
  AlertCircle,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import { GIST_TOKEN_CREATE_URL, type CloudSyncConfig } from '../utils/cloudSync'

export type SyncStatus = 'local' | 'syncing' | 'synced' | 'error'

export interface SyncModalProps {
  isOpen: boolean
  onClose: () => void
  syncConfig: CloudSyncConfig | null
  syncStatus: SyncStatus
  syncError: string | null
  lastSyncedAt: string | null
  onConnectToken: (token: string) => Promise<void>
  onSyncNow: () => Promise<void>
  onDisconnect: () => void
  onExportJson: () => void
  onImportJson: (fileText: string) => void
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  syncConfig,
  syncStatus,
  syncError,
  lastSyncedAt,
  onConnectToken,
  onSyncNow,
  onDisconnect,
  onExportJson,
  onImportJson,
}) => {
  const [tokenInput, setTokenInput] = useState('')
  const [showToken, setShowToken] = useState(false)
  const [busy, setBusy] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)
  const [importMsg, setImportMsg] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!isOpen) return null

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!tokenInput.trim()) return
    setBusy(true)
    setLocalError(null)
    try {
      await onConnectToken(tokenInput.trim())
      setTokenInput('')
    } catch (err: unknown) {
      setLocalError(err instanceof Error ? err.message : 'Failed to connect sync.')
    } finally {
      setBusy(false)
    }
  }

  const handleManualSync = async () => {
    setBusy(true)
    setLocalError(null)
    try {
      await onSyncNow()
    } catch (err: unknown) {
      setLocalError(err instanceof Error ? err.message : 'Sync failed.')
    } finally {
      setBusy(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        onImportJson(String(reader.result || ''))
        setImportMsg('Progress imported cleanly!')
        setLocalError(null)
      } catch (err: unknown) {
        setLocalError(err instanceof Error ? err.message : 'Invalid JSON backup file.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const formattedLastSync = lastSyncedAt
    ? new Date(lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null

  const displayError = localError || syncError

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md max-h-[88dvh] overflow-y-auto rounded-2xl border s-surface s-border-strong shadow-2xl p-5 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b s-border">
          <div className="space-y-1">
            <h2 className="text-base font-bold s-text-primary flex items-center gap-2">
              <Cloud className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              <span>Cross-Device Cloud Sync</span>
            </h2>
            <p className="text-xs s-text-muted leading-relaxed">
              Automatically pick up on the exact chapter &amp; card across your Mac, iPad, and iPhone.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Sync modal"
            className="p-1.5 rounded-lg border s-btn-ghost cursor-pointer transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Connected State */}
        {syncConfig ? (
          <div className="space-y-4">
            <div className="rounded-xl border s-inset p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full border s-pill-ok text-xs font-semibold inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {syncStatus === 'syncing' ? 'Syncing…' : 'Connected & Auto-Syncing'}
                  </span>
                </span>
                {formattedLastSync && (
                  <span className="text-[11px] font-mono s-text-muted">
                    Synced {formattedLastSync}
                  </span>
                )}
              </div>

              <p className="text-xs s-text-secondary leading-relaxed">
                Stored in your private GitHub Secret Gist
                {syncConfig.githubLogin ? ` (@${syncConfig.githubLogin})` : ''}. Every card flip,
                checkmark, note, and quiz attempt syncs automatically, and opening another device
                jumps straight to where you left off.
              </p>

              <div className="rounded-lg border s-surface p-2.5 text-[11px] s-text-muted flex items-start gap-2">
                <Smartphone className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--accent-text)' }} />
                <span>
                  <strong className="s-text-primary">Add iPad / iPhone:</strong> Paste the exact same
                  Gist token once in Sync on your other device — it finds your private Gist
                  automatically.
                </span>
              </div>
            </div>

            {displayError && (
              <div className="rounded-xl border s-pill-bad p-3 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{displayError}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                disabled={busy || syncStatus === 'syncing'}
                onClick={handleManualSync}
                className="px-4 py-2 rounded-xl s-btn-primary text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${busy || syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                <span>Sync Now</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onDisconnect()
                  setLocalError(null)
                }}
                className="px-3.5 py-2 rounded-xl border s-btn-ghost text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition"
                style={{ color: 'var(--bad-text)' }}
              >
                <CloudOff className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </button>
            </div>
          </div>
        ) : (
          /* Disconnected Setup Flow */
          <form onSubmit={handleConnect} className="space-y-4">
            <div className="rounded-xl border s-inset p-3.5 space-y-2 text-xs">
              <div className="font-semibold s-text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--ok)' }} />
                <span>100% Private via Your Own GitHub Secret Gist</span>
              </div>
              <p className="s-text-secondary leading-relaxed">
                Uses a <strong className="s-text-primary">Gist-only</strong> token (zero access to
                your repositories). Your token stays only in this browser&apos;s{' '}
                <code>localStorage</code> — nobody else visiting the site can ever access your
                progress.
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={GIST_TOKEN_CREATE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full px-3.5 py-2.5 rounded-xl border s-btn-ghost text-xs font-semibold flex items-center justify-between gap-2 transition"
              >
                <span>Step 1 · Create Gist-Only Token on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent-text)' }} />
              </a>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider s-text-muted block">
                  Step 2 · Paste Token (same token on Mac, iPad &amp; iPhone)
                </label>
                <div className="relative">
                  <input
                    type={showToken ? 'text' : 'password'}
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="ghp_... or github_pat_..."
                    autoComplete="off"
                    className="w-full pl-3 pr-10 py-2.5 rounded-xl border s-input text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowToken((s) => !s)}
                    aria-label={showToken ? 'Hide token' : 'Show token'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 s-text-muted hover:text-[var(--text-primary)] cursor-pointer p-1"
                  >
                    {showToken ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {displayError && (
              <div className="rounded-xl border s-pill-bad p-3 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{displayError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={busy || !tokenInput.trim()}
              className="w-full px-4 py-2.5 rounded-xl s-btn-primary text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition"
            >
              <Cloud className="w-4 h-4" />
              <span>{busy ? 'Connecting & Syncing…' : 'Connect & Auto-Sync This Device'}</span>
            </button>
          </form>
        )}

        {/* Manual JSON Backup Footer */}
        <div className="pt-3 border-t s-border space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider s-text-muted">
            Offline Backup (JSON)
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onExportJson}
              className="flex-1 px-3 py-2 rounded-xl border s-btn-ghost text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 px-3 py-2 rounded-xl border s-btn-ghost text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import JSON</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {importMsg && (
            <p className="text-[11px]" style={{ color: 'var(--ok-text)' }}>
              {importMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
