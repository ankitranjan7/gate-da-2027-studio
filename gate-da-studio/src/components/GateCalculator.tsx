import React, { useState } from 'react'
import { Calculator, X, Delete } from 'lucide-react'

export const GateCalculator: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0')
  const [expr, setExpr] = useState('')
  const [memory, setMemory] = useState(0)
  const [degMode, setDegMode] = useState(false)

  if (!isOpen) return null

  const currentVal = () => {
    const n = Number(display)
    return Number.isNaN(n) ? 0 : n
  }

  const pushDigit = (d: string) => {
    if (display === '0' && d !== '.') setDisplay(d)
    else if (d === '.' && display.includes('.')) return
    else setDisplay(display + d)
  }

  const applyUnary = (label: string, fn: (x: number) => number) => {
    const x = currentVal()
    const res = fn(x)
    setExpr(`${label}(${x})`)
    setDisplay(Number.isFinite(res) ? String(Number(res.toPrecision(10))) : 'Error')
  }

  const pushBinary = (op: string) => {
    setExpr(`${expr} ${display} ${op}`)
    setDisplay('0')
  }

  const evaluateAll = () => {
    try {
      const full = `${expr} ${display}`.trim()
      if (!full) return
      const sanitized = full.replace(/\^/g, '**')
      if (!/^[0-9+\-*/().\s*eE]+$/.test(sanitized)) {
        setDisplay('Error')
        return
      }
      // eslint-disable-next-line no-new-func
      const val = Function(`"use strict"; return (${sanitized})`)()
      setExpr(`${full} =`)
      setDisplay(Number.isFinite(val) ? String(Number(Number(val).toPrecision(10))) : 'Error')
    } catch {
      setDisplay('Error')
    }
  }

  const factorial = (n: number) => {
    if (n < 0 || !Number.isInteger(n) || n > 170) return NaN
    let r = 1
    for (let i = 2; i <= n; i++) r *= i
    return r
  }

  const toRad = (x: number) => (degMode ? (x * Math.PI) / 180 : x)

  return (
    <div className="fixed bottom-5 right-5 z-50 w-80 rounded-2xl border s-surface s-border-strong shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 s-elevated border-b s-border">
        <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--accent-text)' }}>
          <Calculator className="w-4 h-4" />
          <span>GATE Virtual Scientific Calc</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDegMode(!degMode)}
            className="px-2 py-0.5 rounded border s-pill-formula text-[11px] font-mono cursor-pointer"
          >
            {degMode ? 'DEG' : 'RAD'}
          </button>
          <button onClick={onClose} className="s-text-muted hover:text-[var(--text-primary)] cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-3 s-inset border-b s-border text-right font-mono">
        <div className="text-[11px] s-text-muted h-4 truncate">{expr || ' '}</div>
        <div className="text-xl font-bold truncate" style={{ color: 'var(--ok-text)' }}>
          {display}
        </div>
      </div>

      <div className="p-2.5 grid grid-cols-5 gap-1.5 text-xs font-mono">
        {/* Scientific Row 1 */}
        <button onClick={() => applyUnary('ln', Math.log)} className="calc-btn calc-fn">ln</button>
        <button onClick={() => applyUnary('log₂', Math.log2)} className="calc-btn calc-fn">log₂</button>
        <button onClick={() => applyUnary('log₁₀', Math.log10)} className="calc-btn calc-fn">log</button>
        <button onClick={() => applyUnary('exp', Math.exp)} className="calc-btn calc-fn">eˣ</button>
        <button onClick={() => pushBinary('^')} className="calc-btn calc-fn">xʸ</button>

        {/* Scientific Row 2 */}
        <button onClick={() => applyUnary('sin', (x) => Math.sin(toRad(x)))} className="calc-btn calc-fn">sin</button>
        <button onClick={() => applyUnary('cos', (x) => Math.cos(toRad(x)))} className="calc-btn calc-fn">cos</button>
        <button onClick={() => applyUnary('√', Math.sqrt)} className="calc-btn calc-fn">√x</button>
        <button onClick={() => applyUnary('sq', (x) => x * x)} className="calc-btn calc-fn">x²</button>
        <button onClick={() => applyUnary('fact', factorial)} className="calc-btn calc-fn">n!</button>

        {/* Memory & Constants Row */}
        <button onClick={() => setMemory(currentVal())} className="calc-btn calc-mem">MS</button>
        <button onClick={() => setDisplay(String(memory))} className="calc-btn calc-mem">MR</button>
        <button onClick={() => setDisplay(String(Number(Math.PI.toPrecision(10))))} className="calc-btn calc-const">π</button>
        <button onClick={() => setDisplay(String(Number(Math.E.toPrecision(10))))} className="calc-btn calc-const">e</button>
        <button onClick={() => applyUnary('1/', (x) => 1 / x)} className="calc-btn calc-const">1/x</button>

        {/* Digits & Ops */}
        <button onClick={() => pushDigit('7')} className="calc-btn calc-num">7</button>
        <button onClick={() => pushDigit('8')} className="calc-btn calc-num">8</button>
        <button onClick={() => pushDigit('9')} className="calc-btn calc-num">9</button>
        <button
          onClick={() => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')}
          className="calc-btn s-pill-bad border flex items-center justify-center"
        >
          <Delete className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => {
            setDisplay('0')
            setExpr('')
          }}
          className="calc-btn s-pill-bad border font-bold"
        >
          AC
        </button>

        <button onClick={() => pushDigit('4')} className="calc-btn calc-num">4</button>
        <button onClick={() => pushDigit('5')} className="calc-btn calc-num">5</button>
        <button onClick={() => pushDigit('6')} className="calc-btn calc-num">6</button>
        <button onClick={() => pushBinary('*')} className="calc-btn calc-op">×</button>
        <button onClick={() => pushBinary('/')} className="calc-btn calc-op">÷</button>

        <button onClick={() => pushDigit('1')} className="calc-btn calc-num">1</button>
        <button onClick={() => pushDigit('2')} className="calc-btn calc-num">2</button>
        <button onClick={() => pushDigit('3')} className="calc-btn calc-num">3</button>
        <button onClick={() => pushBinary('+')} className="calc-btn calc-op">+</button>
        <button onClick={() => pushBinary('-')} className="calc-btn calc-op">−</button>

        <button onClick={() => pushDigit('0')} className="calc-btn calc-num col-span-2">0</button>
        <button onClick={() => pushDigit('.')} className="calc-btn calc-num">.</button>
        <button
          onClick={() => setDisplay(display.startsWith('-') ? display.slice(1) : `-${display}`)}
          className="calc-btn calc-mem"
        >
          ±
        </button>
        <button onClick={evaluateAll} className="calc-btn s-btn-primary font-bold">
          =
        </button>
      </div>

      <style>{`
        .calc-btn {
          padding: 0.45rem 0.25rem;
          border-radius: 0.45rem;
          cursor: pointer;
          transition: filter 0.12s;
        }
        .calc-btn:hover {
          filter: brightness(1.15);
        }
        .calc-num {
          background-color: var(--bg-elevated);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
        }
        .calc-fn {
          background-color: var(--bg-inset);
          color: var(--accent-text);
          border: 1px solid var(--border-subtle);
        }
        .calc-mem {
          background-color: var(--bg-inset);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
        .calc-const {
          background-color: var(--bg-inset);
          color: var(--formula-text);
          border: 1px solid var(--border-subtle);
        }
        .calc-op {
          background-color: var(--accent-soft);
          color: var(--accent-text);
          border: 1px solid var(--accent-border);
        }
      `}</style>
    </div>
  )
}
