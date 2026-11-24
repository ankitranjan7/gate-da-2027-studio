import React, { useState } from 'react'
import type { SandboxId } from '../types/curriculum'
import { MathText } from './MathText'
import { DomainSandboxRouter } from './DomainSandboxes'
import { Sliders, Sparkles, RotateCcw, Play } from 'lucide-react'

interface SandboxProps {
  sandboxId: SandboxId
}

export const InteractiveSandbox: React.FC<SandboxProps> = ({ sandboxId }) => {
  switch (sandboxId) {
    case 'series-growth-lab':
      return <SeriesGrowthLab />
    case 'limit-xray-lab':
      return <LimitXrayLab />
    case 'piecewise-gluer-lab':
      return <PiecewiseGluerLab />
    case 'relu-sigmoid-diff-lab':
      return <ReluSigmoidDiffLab />
    case 'taylor-maclaurin-lab':
      return <TaylorMaclaurinLab />
    case 'extrema-convexity-sgd-lab':
      return <ExtremaConvexitySgdLab />
    default:
      return <DomainSandboxRouter sandboxId={sandboxId} />
  }
}

/* ============================================================================
   1. DOUBLE SERIES & GROWTH VISUALIZER (2026 Q35)
   ============================================================================ */
const SeriesGrowthLab: React.FC = () => {
  const [baseA, setBaseA] = useState<number>(2)
  const [baseB, setBaseB] = useState<number>(3)
  const [startJ, setStartJ] = useState<0 | 1>(1)

  const r1 = 1 / baseA
  const r2 = 1 / baseB
  const sumI = 1 / (1 - r1)
  const sumJ = (startJ === 0 ? 1 : r2) / (1 - r2)
  const exactTotal = sumI * sumJ

  const cells: Array<{ i: number; j: number; val: number }> = []
  let partial = 0
  for (let i = 0; i < 5; i++) {
    for (let j = startJ; j < startJ + 5; j++) {
      const val = Math.pow(r1, i) * Math.pow(r2, j)
      partial += val
      cells.push({ i, j, val })
    }
  }

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
          <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
            Interactive Lab: Separable Double Geometric Series (GATE 2026 Q.35)
          </h4>
        </div>
        <button
          onClick={() => {
            setBaseA(2)
            setBaseB(3)
            setStartJ(1)
          }}
          className="text-xs px-2.5 py-1 rounded-md border s-btn-ghost flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" /> Reset to 2026 Q.35
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-xs s-text-secondary mb-1">
              <MathText text={'Row Base ($a$ in $a^{-i}$, $i=0\\dots\\infty$)'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                a = {baseA} (r₁ = 1/{baseA})
              </span>
            </label>
            <input
              type="range"
              min={2}
              max={6}
              step={1}
              value={baseA}
              onChange={(e) => setBaseA(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="flex justify-between text-xs s-text-secondary mb-1">
              <MathText text={'Column Base ($b$ in $b^{-j}$)'} />
              <span className="font-mono" style={{ color: 'var(--ok-text)' }}>
                b = {baseB} (r₂ = 1/{baseB})
              </span>
            </label>
            <input
              type="range"
              min={2}
              max={6}
              step={1}
              value={baseB}
              onChange={(e) => setBaseB(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <MathText className="s-text-muted" text={'Starting index for $j$:'} />
            <button
              onClick={() => setStartJ(0)}
              className={`px-2.5 py-1 rounded border cursor-pointer ${
                startJ === 0 ? 's-pill-formula font-semibold' : 's-btn-ghost'
              }`}
            >
              j = 0 (starts at 1)
            </button>
            <button
              onClick={() => setStartJ(1)}
              className={`px-2.5 py-1 rounded border cursor-pointer ${
                startJ === 1 ? 's-pill-ok font-semibold' : 's-btn-ghost'
              }`}
            >
              j = 1 (starts at 1/b — GATE Trap!)
            </button>
          </div>

          <div className="rounded-lg s-inset border p-3 text-xs space-y-1.5">
            <MathText
              text={`$$\\sum_{i=0}^{\\infty} ${baseA}^{-i} \\cdot \\sum_{j=${startJ}}^{\\infty} ${baseB}^{-j} = \\left(\\frac{1}{1 - 1/${baseA}}\\right) \\cdot \\left(\\frac{${startJ === 0 ? '1' : `1/${baseB}`}}{1 - 1/${baseB}}\\right)$$`}
            />
            <div className="flex justify-between pt-1.5 border-t s-border">
              <span className="s-text-muted">Row Factor × Column Factor:</span>
              <span className="font-mono s-text-primary font-semibold">
                {sumI.toFixed(3)} × {sumJ.toFixed(3)} ={' '}
                <span className="text-sm" style={{ color: 'var(--ok-text)' }}>
                  {exactTotal.toFixed(4)}
                </span>
              </span>
            </div>
            <div className="flex justify-between s-text-muted">
              <span>First 5×5 Grid Terms Already Capture:</span>
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                {partial.toFixed(4)} ({((partial / exactTotal) * 100).toFixed(1)}%)
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs s-text-muted mb-2">
            <MathText text={'Visualizing each term $a^{-i} b^{-j}$ (first 5×5 terms — opacity = term weight):'} />
          </p>
          <div className="grid grid-cols-5 gap-1.5 s-inset p-3 rounded-lg border">
            {cells.map((c) => {
              const maxVal = startJ === 0 ? 1 : r2
              const intensity = Math.max(0.08, Math.min(0.85, Math.pow(c.val / maxVal, 0.45)))
              return (
                <div
                  key={`${c.i}-${c.j}`}
                  style={{
                    backgroundColor: `color-mix(in srgb, var(--accent) ${Math.round(intensity * 100)}%, var(--bg-surface))`,
                    borderColor: 'var(--border-subtle)',
                  }}
                  className="rounded p-1.5 text-center border"
                >
                  <div className="text-[10px] font-mono s-text-primary opacity-80">
                    i={c.i},j={c.j}
                  </div>
                  <div className="text-xs font-mono font-semibold s-text-primary">{c.val.toFixed(3)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   2. LIMIT X-RAY & RATIONALIZATION LAB (2025 Q32)
   ============================================================================ */
const LimitXrayLab: React.FC = () => {
  const [aParam, setAParam] = useState<number>(1)
  const [tVal, setTVal] = useState<number>(25)

  const exactLimit = aParam / 2
  const currentVal = Math.sqrt(tVal * tVal + aParam * tVal) - tVal

  const pts: string[] = []
  for (let k = 1; k <= 100; k++) {
    const t = k * 0.5
    const y = Math.sqrt(t * t + aParam * t) - t
    const sx = 40 + (t / 50) * 320
    const maxScale = Math.max(3.5, Math.abs(exactLimit) * 1.6 + 0.5)
    const sy = 150 - (y / maxScale) * 110
    pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`)
  }
  const maxScale = Math.max(3.5, Math.abs(exactLimit) * 1.6 + 0.5)
  const asympY = 150 - (exactLimit / maxScale) * 110
  const dotX = 40 + (Math.min(50, tVal) / 50) * 320
  const dotY = 150 - (currentVal / maxScale) * 110

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
          <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
            <MathText text={'Interactive Lab: $\\infty - \\infty$ Tug-of-War $\\sqrt{t^2 + at} - t \\to a/2$ (GATE 2025 Q.32)'} />
          </h4>
        </div>
        <button
          onClick={() => {
            setAParam(1)
            setTVal(25)
          }}
          className="text-xs px-2.5 py-1 rounded-md border s-btn-ghost cursor-pointer"
        >
          Preset: 2025 Q.32 (a = 1)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-xs s-text-secondary mb-1">
              <MathText text={'Linear Coefficient ($a$ inside $\\sqrt{t^2 + at}$)'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                a = {aParam} (Asymptote = {(aParam / 2).toFixed(2)})
              </span>
            </label>
            <input
              type="range"
              min={0}
              max={6}
              step={0.5}
              value={aParam}
              onChange={(e) => setAParam(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="flex justify-between text-xs s-text-secondary mb-1">
              <MathText text={'Slide $t$ toward $+\\infty$'} />
              <span className="font-mono" style={{ color: 'var(--formula-text)' }}>
                t = {tVal}
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={200}
              step={1}
              value={tVal}
              onChange={(e) => setTVal(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="rounded-lg s-inset border p-3 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="s-text-muted">√(t² + at) alone:</span>
              <span style={{ color: 'var(--bad-text)' }}>{Math.sqrt(tVal * tVal + aParam * tVal).toFixed(6)} (→ ∞)</span>
            </div>
            <div className="flex justify-between">
              <span className="s-text-muted">t alone:</span>
              <span style={{ color: 'var(--bad-text)' }}>{tVal.toFixed(6)} (→ ∞)</span>
            </div>
            <div className="flex justify-between pt-1.5 border-t s-border">
              <span className="s-text-primary">Difference √(t² + at) − t:</span>
              <span className="font-bold" style={{ color: 'var(--formula-text)' }}>
                {currentVal.toFixed(6)}
              </span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--ok-text)' }}>Exact Limit (a / 2):</span>
              <span className="font-bold" style={{ color: 'var(--ok-text)' }}>
                {exactLimit.toFixed(6)}
              </span>
            </div>
          </div>
        </div>

        <div className="s-inset rounded-lg border p-2">
          <svg viewBox="0 0 380 180" className="w-full h-auto">
            <line x1="40" y1="150" x2="365" y2="150" stroke="var(--border-strong)" strokeWidth="1" />
            <line x1="40" y1="20" x2="40" y2="155" stroke="var(--border-strong)" strokeWidth="1" />
            <line
              x1="40"
              y1={asympY}
              x2="365"
              y2={asympY}
              stroke="var(--ok)"
              strokeDasharray="5,4"
              strokeWidth="1.5"
            />
            <text x="245" y={Math.max(16, asympY - 6)} fill="var(--ok-text)" fontSize="11">
              Asymptote y = a/2 = {exactLimit.toFixed(2)}
            </text>
            <polyline fill="none" stroke="var(--accent)" strokeWidth="2.5" points={pts.join(' ')} />
            {tVal <= 50 && <circle cx={dotX} cy={dotY} r="5" fill="var(--formula)" />}
            <text x="330" y="168" fill="var(--text-muted)" fontSize="11">
              t → ∞
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   3. PIECEWISE C^0 / C^1 GLUER LAB (2024 Q37)
   ============================================================================ */
const PiecewiseGluerLab: React.FC = () => {
  const [a, setA] = useState<number>(0.5)
  const [b, setB] = useState<number>(0.25)
  const [c, setC] = useState<number>(0.5)

  const valLeftAtMinus2 = 2
  const valMidAtMinus2 = 4 * a - 2 * b + c
  const valMidAtPlus2 = 4 * a + 2 * b + c
  const valRightAtPlus2 = 2

  const slopeLeft = -1
  const slopeMidAtMinus2 = -4 * a + b
  const slopeMidAtPlus2 = 4 * a + b
  const slopeRight = 1

  const isContinuous =
    Math.abs(valMidAtMinus2 - valLeftAtMinus2) < 0.01 && Math.abs(valMidAtPlus2 - valRightAtPlus2) < 0.01
  const isDifferentiable =
    isContinuous && Math.abs(slopeMidAtMinus2 - slopeLeft) < 0.01 && Math.abs(slopeMidAtPlus2 - slopeRight) < 0.01

  const mapX = (x: number) => 190 + x * 36
  const mapY = (y: number) => 155 - y * 28

  const midPts: string[] = []
  for (let i = 0; i <= 40; i++) {
    const x = -2 + (i / 40) * 4
    const y = a * x * x + b * x + c
    midPts.push(`${mapX(x).toFixed(1)},${mapY(y).toFixed(1)}`)
  }

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4" style={{ color: 'var(--ok)' }} />
          <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
            <MathText text={'Interactive Lab: Piecewise $C^0$ & $C^1$ Gluing ($y=-x$, $ax^2+bx+c$, $y=x$ — GATE 2024 Q.37)'} />
          </h4>
        </div>
        <button
          onClick={() => {
            setA(0.25)
            setB(0)
            setC(1)
          }}
          className="text-xs px-3 py-1 rounded-md border s-pill-ok cursor-pointer font-medium"
        >
          <MathText text={'Snap to Smooth $C^1$ Solution (a=0.25, b=0, c=1)'} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="space-y-3">
          <div>
            <label className="flex justify-between text-xs s-text-secondary">
              <MathText text={'Curvature $a$'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                a = {a.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={-0.5}
              max={1}
              step={0.05}
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="flex justify-between text-xs s-text-secondary">
              <MathText text={'Tilt $b$'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                b = {b.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={-1}
              max={1}
              step={0.05}
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="flex justify-between text-xs s-text-secondary">
              <MathText text={'Vertical Shift $c$'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                c = {c.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={-1}
              max={2.5}
              step={0.05}
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <div className={`p-2.5 rounded-lg border ${isContinuous ? 's-pill-ok' : 's-pill-bad'}`}>
              <div className="font-semibold">{isContinuous ? '✓ Continuous (No Jumps)' : '✗ Discontinuous (Jump!)'}</div>
              <div className="font-mono text-[11px] opacity-85 mt-1">
                x=-2: {valMidAtMinus2.toFixed(2)} vs 2.00
                <br />
                x=+2: {valMidAtPlus2.toFixed(2)} vs 2.00
              </div>
            </div>
            <div className={`p-2.5 rounded-lg border ${isDifferentiable ? 's-pill-ok' : 's-pill-formula'}`}>
              <div className="font-semibold">
                {isDifferentiable ? '✓ Differentiable (Smooth!)' : '✗ Kink / Not Smooth'}
              </div>
              <div className="font-mono text-[11px] opacity-85 mt-1">
                f'(-2): {slopeMidAtMinus2.toFixed(2)} vs -1.00
                <br />
                f'(+2): {slopeMidAtPlus2.toFixed(2)} vs +1.00
              </div>
            </div>
          </div>
        </div>

        <div className="s-inset rounded-lg border p-2">
          <svg viewBox="0 0 380 185" className="w-full h-auto">
            <line x1="20" y1={mapY(0)} x2="360" y2={mapY(0)} stroke="var(--border-subtle)" strokeWidth="1" />
            <line x1={mapX(0)} y1="10" x2={mapX(0)} y2="175" stroke="var(--border-subtle)" strokeWidth="1" />
            <line x1={mapX(-2)} y1="15" x2={mapX(-2)} y2="170" stroke="var(--border-strong)" strokeDasharray="3,3" />
            <line x1={mapX(2)} y1="15" x2={mapX(2)} y2="170" stroke="var(--border-strong)" strokeDasharray="3,3" />
            <line
              x1={mapX(-4.5)}
              y1={mapY(4.5)}
              x2={mapX(-2)}
              y2={mapY(2)}
              stroke="var(--text-muted)"
              strokeWidth="2.5"
            />
            <line
              x1={mapX(2)}
              y1={mapY(2)}
              x2={mapX(4.5)}
              y2={mapY(4.5)}
              stroke="var(--text-muted)"
              strokeWidth="2.5"
            />
            <polyline
              fill="none"
              stroke={isDifferentiable ? 'var(--ok)' : isContinuous ? 'var(--formula)' : 'var(--bad)'}
              strokeWidth="3"
              points={midPts.join(' ')}
            />
            <circle cx={mapX(-2)} cy={mapY(2)} r="4" fill="var(--text-secondary)" />
            <circle cx={mapX(2)} cy={mapY(2)} r="4" fill="var(--text-secondary)" />
            <text x={mapX(-2) - 14} y="174" fill="var(--text-muted)" fontSize="11">
              x=-2
            </text>
            <text x={mapX(2) - 10} y="174" fill="var(--text-muted)" fontSize="11">
              x=+2
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   4. RELU KINKS, SIGMOID f(1-f) & LIPSCHITZ SQUEEZE LAB
   ============================================================================ */
const ReluSigmoidDiffLab: React.FC = () => {
  const [mode, setMode] = useState<'relu' | 'sigmoid' | 'lipschitz'>('relu')
  const [xProbe, setXProbe] = useState<number>(0)
  const [pExp, setPExp] = useState<number>(2.0)

  const sig = 1 / (1 + Math.exp(-xProbe))
  const sigDeriv = sig * (1 - sig)

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
          Interactive Differentiability Lab: ReLU Kink · Sigmoid Self-Slope · Lipschitz Squeeze
        </h4>
        <div className="flex gap-1.5 text-xs">
          <button
            onClick={() => {
              setMode('relu')
              setXProbe(0)
            }}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              mode === 'relu' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            ReLU Kink (2025 Q.48)
          </button>
          <button
            onClick={() => {
              setMode('sigmoid')
              setXProbe(-0.4055)
            }}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              mode === 'sigmoid' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            Sigmoid f(1−f) (2024 Q.33)
          </button>
          <button
            onClick={() => setMode('lipschitz')}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              mode === 'lipschitz' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            |f(x)−f(y)| ≤ |x−y|ᵖ (2025 Q.59)
          </button>
        </div>
      </div>

      {mode === 'relu' && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 text-xs">
            <label className="flex justify-between s-text-secondary">
              <MathText text={'Probe Point $x_0$ on $\\text{ReLU}(x) = \\max(x, 0)$'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                x₀ = {xProbe.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={-2.5}
              max={2.5}
              step={0.25}
              value={xProbe}
              onChange={(e) => setXProbe(Number(e.target.value))}
              className="w-full"
            />
            <div className="rounded-lg s-inset p-3 border space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="s-text-muted">Left Derivative LHD at x₀:</span>
                <span style={{ color: 'var(--accent-text)' }}>{xProbe <= 0 ? '0' : '1'}</span>
              </div>
              <div className="flex justify-between">
                <span className="s-text-muted">Right Derivative RHD at x₀:</span>
                <span style={{ color: 'var(--formula-text)' }}>{xProbe < 0 ? '0' : '1'}</span>
              </div>
              <div className="pt-1.5 border-t s-border font-sans">
                {xProbe === 0 ? (
                  <span className="font-semibold" style={{ color: 'var(--bad-text)' }}>
                    ✗ At x₀ = 0: LHD (0) ≠ RHD (1)! Continuous everywhere, NOT differentiable at 0 (sharp corner).
                  </span>
                ) : xProbe < 0 ? (
                  <span className="s-text-secondary">
                    ✓ Dead ReLU Zone (x₀ &lt; 0): Slope = 0 → kills upstream gradients during Backprop (2025 Q.42)!
                  </span>
                ) : (
                  <span style={{ color: 'var(--ok-text)' }}>
                    ✓ Active ReLU Zone (x₀ &gt; 0): Slope = 1 → passes upstream gradient unchanged!
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="s-inset rounded-lg border p-2">
            <svg viewBox="0 0 340 160" className="w-full h-auto">
              <line x1="20" y1="125" x2="320" y2="125" stroke="var(--border-strong)" />
              <line x1="170" y1="15" x2="170" y2="145" stroke="var(--border-strong)" />
              <line x1="30" y1="125" x2="170" y2="125" stroke="var(--text-muted)" strokeWidth="3" />
              <line x1="170" y1="125" x2="290" y2="25" stroke="var(--formula)" strokeWidth="3" />
              <circle
                cx={170 + xProbe * 42}
                cy={125 - Math.max(0, xProbe) * 35}
                r="6"
                fill={xProbe === 0 ? 'var(--bad)' : 'var(--accent)'}
              />
              <text x="45" y="114" fill="var(--text-muted)" fontSize="11">
                slope = 0 (dead)
              </text>
              <text x="230" y="55" fill="var(--formula-text)" fontSize="11">
                slope = 1
              </text>
            </svg>
          </div>
        </div>
      )}

      {mode === 'sigmoid' && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 text-xs">
            <label className="flex justify-between s-text-secondary">
              <MathText text={'Slide input $x$ (watch $f\'(x) = f(x)(1-f(x))$ without touching $e^{-x}$!)'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                x = {xProbe.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={-4}
              max={4}
              step={0.05}
              value={xProbe}
              onChange={(e) => setXProbe(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setXProbe(-0.4055)}
                className="px-2 py-1 rounded border s-btn-ghost cursor-pointer"
              >
                Set f(x) = 0.40 (2024 Q.33 → 0.24)
              </button>
              <button
                onClick={() => setXProbe(0)}
                className="px-2 py-1 rounded border s-btn-ghost cursor-pointer"
              >
                Max Slope f(x) = 0.50 (→ 0.25)
              </button>
            </div>
            <div className="rounded-lg s-inset p-3 border space-y-1 font-mono">
              <div className="flex justify-between">
                <span className="s-text-muted">Output f(x) = σ(x):</span>
                <span className="font-bold" style={{ color: 'var(--accent-text)' }}>
                  {sig.toFixed(4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="s-text-muted">1 − f(x):</span>
                <span className="s-text-secondary">{(1 - sig).toFixed(4)}</span>
              </div>
              <div className="flex justify-between pt-1 border-t s-border">
                <span style={{ color: 'var(--ok-text)' }}>Slope f'(x) = f(x)(1−f(x)):</span>
                <span className="font-bold" style={{ color: 'var(--ok-text)' }}>
                  {sigDeriv.toFixed(4)}
                </span>
              </div>
            </div>
          </div>
          <div className="s-inset rounded-lg border p-2">
            <svg viewBox="0 0 340 160" className="w-full h-auto">
              <line x1="20" y1="135" x2="320" y2="135" stroke="var(--border-strong)" />
              <line x1="170" y1="15" x2="170" y2="145" stroke="var(--border-strong)" />
              <polyline
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                points={Array.from({ length: 81 }, (_, i) => {
                  const xv = -4 + i * 0.1
                  const sv = 1 / (1 + Math.exp(-xv))
                  return `${(170 + xv * 34).toFixed(1)},${(135 - sv * 105).toFixed(1)}`
                }).join(' ')}
              />
              <polyline
                fill="none"
                stroke="var(--ok)"
                strokeWidth="2"
                strokeDasharray="4,3"
                points={Array.from({ length: 81 }, (_, i) => {
                  const xv = -4 + i * 0.1
                  const sv = 1 / (1 + Math.exp(-xv))
                  const dv = sv * (1 - sv)
                  return `${(170 + xv * 34).toFixed(1)},${(135 - dv * 105).toFixed(1)}`
                }).join(' ')}
              />
              <circle cx={170 + xProbe * 34} cy={135 - sig * 105} r="5" fill="var(--accent)" />
              <circle cx={170 + xProbe * 34} cy={135 - sigDeriv * 105} r="5" fill="var(--ok)" />
              <text x="24" y="34" fill="var(--accent-text)" fontSize="11">
                — σ(x)
              </text>
              <text x="24" y="50" fill="var(--ok-text)" fontSize="11">
                -- σ'(x) (max 0.25)
              </text>
            </svg>
          </div>
        </div>
      )}

      {mode === 'lipschitz' && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 text-xs">
            <label className="flex justify-between s-text-secondary">
              <MathText text={'Exponent $p$ in $|f(x) - f(0)| \\le |x|^p$'} />
              <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                p = {pExp.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min={0.8}
              max={2.5}
              step={0.1}
              value={pExp}
              onChange={(e) => setPExp(Number(e.target.value))}
              className="w-full"
            />
            <div className="rounded-lg s-inset p-3 border space-y-1.5">
              {pExp > 1.001 ? (
                <p className="font-medium" style={{ color: 'var(--ok-text)' }}>
                  <MathText
                    text={`✓ Since $p = ${pExp.toFixed(1)} > 1$, the upper & lower bounds $\\pm |x|^p$ pinch **completely flat** at $x=0$! Every curve trapped inside MUST have $f'(x) \\equiv 0 \\implies f$ is **constant** (2025 Q.59)!`}
                  />
                </p>
              ) : (
                <p className="font-medium" style={{ color: 'var(--formula-text)' }}>
                  <MathText
                    text={'⚠ For $p \\le 1$, the envelope $\\pm |x|^p$ has a nonzero opening angle at $x=0$, so non-constant functions like $f(x)=\\sin x$ or $f(x)=x$ easily fit inside!'}
                  />
                </p>
              )}
            </div>
          </div>
          <div className="s-inset rounded-lg border p-2">
            <svg viewBox="0 0 340 160" className="w-full h-auto">
              <line x1="20" y1="80" x2="320" y2="80" stroke="var(--border-strong)" />
              <line x1="170" y1="15" x2="170" y2="145" stroke="var(--border-strong)" />
              <polyline
                fill="none"
                stroke="var(--bad)"
                strokeWidth="2"
                points={Array.from({ length: 61 }, (_, i) => {
                  const xv = -1.5 + i * 0.05
                  const yv = Math.pow(Math.abs(xv), pExp)
                  return `${(170 + xv * 85).toFixed(1)},${(80 - Math.min(62, yv * 42)).toFixed(1)}`
                }).join(' ')}
              />
              <polyline
                fill="none"
                stroke="var(--bad)"
                strokeWidth="2"
                points={Array.from({ length: 61 }, (_, i) => {
                  const xv = -1.5 + i * 0.05
                  const yv = -Math.pow(Math.abs(xv), pExp)
                  return `${(170 + xv * 85).toFixed(1)},${(80 - Math.max(-62, yv * 42)).toFixed(1)}`
                }).join(' ')}
              />
              {pExp > 1.001 && <line x1="40" y1="80" x2="300" y2="80" stroke="var(--ok)" strokeWidth="3" />}
              <text x="28" y="28" fill="var(--bad-text)" fontSize="11">
                Envelope ±|x|^{pExp.toFixed(1)}
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

/* ============================================================================
   5. TAYLOR & MACLAURIN POLYNOMIAL X-RAY LAB (2024 Q60)
   ============================================================================ */
const TaylorMaclaurinLab: React.FC = () => {
  const [fnKey, setFnKey] = useState<'exp' | 'cos' | 'q60'>('q60')
  const [deg, setDeg] = useState<number>(2)

  const evalTrue = (x: number) => {
    if (fnKey === 'exp') return Math.exp(x)
    if (fnKey === 'cos') return Math.cos(x)
    const arg = (x * x + 1) * Math.cos(x)
    return arg > 0 ? Math.log(arg) : NaN
  }

  const evalTaylor = (x: number) => {
    if (fnKey === 'exp') {
      let s = 0
      let fact = 1
      for (let k = 0; k <= deg; k++) {
        if (k > 0) fact *= k
        s += Math.pow(x, k) / fact
      }
      return s
    }
    if (fnKey === 'cos') {
      let s = 0
      let fact = 1
      for (let k = 0; k <= deg; k++) {
        if (k > 0) fact *= k
        if (k % 2 === 0) {
          const sign = (k / 2) % 2 === 0 ? 1 : -1
          s += (sign * Math.pow(x, k)) / fact
        }
      }
      return s
    }
    let s = 0
    if (deg >= 2) s += 0.5 * x * x
    if (deg >= 4) s -= (7 / 12) * Math.pow(x, 4)
    if (deg >= 6) s += (13 / 45) * Math.pow(x, 6)
    return s
  }

  const formulaMap = {
    exp: 'e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots',
    cos: '\\cos x \\approx 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots',
    q60: '\\ln((1+x^2)\\cos x) = \\ln(1+x^2)+\\ln(\\cos x) \\approx \\frac{1}{2}x^2 - \\frac{7}{12}x^4 + \\dots \\implies \\lim_{x\\to 0}\\frac{f(x)}{x^2} = 0.5',
  }

  const scaleY = fnKey === 'q60' ? 95 : 32
  const baseY = fnKey === 'q60' ? 135 : 115

  const buildPolyline = (fn: (x: number) => number) => {
    const pts: string[] = []
    for (let i = 0; i <= 80; i++) {
      const x = -1.4 + (i / 80) * 2.8
      const y = fn(x)
      if (!Number.isFinite(y) || Math.abs(y) > 8) continue
      pts.push(`${(185 + x * 105).toFixed(1)},${(baseY - y * scaleY).toFixed(1)}`)
    }
    return pts.join(' ')
  }

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--formula-text)' }}>
          Interactive Lab: Maclaurin Polynomial X-Ray Vision (GATE 2024 Q.60)
        </h4>
        <div className="flex gap-1.5 text-xs">
          <button
            onClick={() => {
              setFnKey('q60')
              setDeg(2)
            }}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              fnKey === 'q60' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            ln((x²+1)cos x) (2024 Q.60)
          </button>
          <button
            onClick={() => setFnKey('exp')}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              fnKey === 'exp' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            eˣ (→ Poisson)
          </button>
          <button
            onClick={() => setFnKey('cos')}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              fnKey === 'cos' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            cos x (Even Powers Only)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="space-y-3 text-xs">
          <label className="flex justify-between s-text-secondary">
            <MathText text={'Maclaurin Polynomial Degree $N$'} />
            <span className="font-mono" style={{ color: 'var(--formula-text)' }}>
              Degree N = {deg}
            </span>
          </label>
          <input
            type="range"
            min={0}
            max={6}
            step={1}
            value={deg}
            onChange={(e) => setDeg(Number(e.target.value))}
            className="w-full"
          />
          <div className="rounded-lg s-inset p-3 border">
            <MathText text={`$$${formulaMap[fnKey]}$$`} />
            <p className="s-text-muted mt-1">
              <MathText
                text={'Near $x=0$, higher powers ($x^4, x^6$) vanish way faster than $x^2$. Matching just up to $N=2$ immediately reveals the parabola $\\frac{1}{2}x^2$!'}
              />
            </p>
          </div>
        </div>

        <div className="s-inset rounded-lg border p-2">
          <svg viewBox="0 0 370 170" className="w-full h-auto">
            <line x1="20" y1={baseY} x2="350" y2={baseY} stroke="var(--border-strong)" />
            <line x1="185" y1="15" x2="185" y2="160" stroke="var(--border-strong)" />
            <polyline fill="none" stroke="var(--text-muted)" strokeWidth="3" points={buildPolyline(evalTrue)} />
            <polyline
              fill="none"
              stroke="var(--formula)"
              strokeWidth="2.5"
              strokeDasharray="5,3"
              points={buildPolyline(evalTaylor)}
            />
            <text x="25" y="26" fill="var(--text-secondary)" fontSize="11">
              — Exact f(x)
            </text>
            <text x="25" y="42" fill="var(--formula-text)" fontSize="11">
              -- Degree-{deg} Maclaurin
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   6. CLOSED-INTERVAL EXTREMA TRAP & 1-STEP SGD LAB
   ============================================================================ */
const ExtremaConvexitySgdLab: React.FC = () => {
  const [tab, setTab] = useState<'interval' | 'sgd'>('interval')
  const [rightBound, setRightBound] = useState<number>(0)
  const fCubic = (x: number) => (x * x * x) / 3 + 3.5 * x * x + 10 * x + 66.5

  const [lr, setLr] = useState<number>(0.15)
  const [history, setHistory] = useState<number[]>([8.0])

  const currentW = history[history.length - 1]
  const gradAt = (w: number) => 4 * (w - 2)

  const stepSgd = () => {
    if (history.length >= 15) return
    const nextW = currentW - lr * gradAt(currentW)
    setHistory([...history, nextW])
  }

  return (
    <div className="my-5 rounded-xl border s-elevated p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
          Interactive Optimization Lab: Closed-Interval Boundary Trap & Live SGD Stepper
        </h4>
        <div className="flex gap-1.5 text-xs">
          <button
            onClick={() => setTab('interval')}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              tab === 'interval' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            [a, b] Boundary Trap (2025 Q.49)
          </button>
          <button
            onClick={() => setTab('sgd')}
            className={`px-2.5 py-1 rounded border cursor-pointer ${
              tab === 'sgd' ? 's-btn-primary border-transparent font-semibold' : 's-btn-ghost'
            }`}
          >
            Gradient Descent Stepper (2026 Q.29)
          </button>
        </div>
      </div>

      {tab === 'interval' ? (
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="space-y-3 text-xs">
            <p className="s-text-secondary">
              <MathText text={'Curve: $f(x) = \\frac{x^3}{3} + \\frac{7}{2}x^2 + 10x + \\frac{133}{2}$ on $[-8, R]$.'} />
              <br />
              <MathText text={'Stationary points ($f\'(x) = (x+5)(x+2) = 0$) sit at $x=-5$ and $x=-2$.'} />
            </p>
            <div>
              <label className="flex justify-between s-text-secondary mb-1">
                <MathText text={'Slide Right Boundary $R$ of $[-8, R]$'} />
                <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                  Interval: [-8, {rightBound.toFixed(1)}]
                </span>
              </label>
              <input
                type="range"
                min={-3.5}
                max={0}
                step={0.5}
                value={rightBound}
                onChange={(e) => setRightBound(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="rounded-lg s-inset p-3 border font-mono space-y-1">
              <div className="flex justify-between s-text-muted">
                <span>Left Endpoint f(-8):</span>
                <span>{fCubic(-8).toFixed(2)}</span>
              </div>
              <div className="flex justify-between" style={{ color: 'var(--formula-text)' }}>
                <span>Interior Local Max f(-5):</span>
                <span>{fCubic(-5).toFixed(2)}</span>
              </div>
              {rightBound >= -2 && (
                <div className="flex justify-between" style={{ color: 'var(--accent-text)' }}>
                  <span>Interior Local Min f(-2):</span>
                  <span>{fCubic(-2).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold pt-1 border-t s-border" style={{ color: 'var(--ok-text)' }}>
                <span>Right Endpoint f({rightBound.toFixed(1)}):</span>
                <span>{fCubic(rightBound).toFixed(2)}</span>
              </div>
              <p className="font-sans text-[11px] pt-1" style={{ color: 'var(--bad-text)' }}>
                {fCubic(rightBound) > fCubic(-5)
                  ? `TRAP TRIGGERED! Right boundary f(${rightBound}) = ${fCubic(rightBound).toFixed(1)} beats interior local max f(-5) = 28.17!`
                  : `Currently interior peak f(-5) = 28.17 is the global max on [-8, ${rightBound}]. Slide R to 0!`}
              </p>
            </div>
          </div>

          <div className="s-inset rounded-lg border p-2">
            <svg viewBox="0 0 360 175" className="w-full h-auto">
              <line x1="25" y1="155" x2="345" y2="155" stroke="var(--border-strong)" />
              <polyline
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                points={Array.from({ length: 81 }, (_, i) => {
                  const xv = -8 + (i / 80) * (rightBound - -8)
                  const yv = fCubic(xv)
                  return `${(35 + (xv + 8.5) * 33).toFixed(1)},${(155 - yv * 1.9).toFixed(1)}`
                }).join(' ')}
              />
              <circle cx={35 + (-5 + 8.5) * 33} cy={155 - fCubic(-5) * 1.9} r="5" fill="var(--formula)" />
              <circle cx={35 + (rightBound + 8.5) * 33} cy={155 - fCubic(rightBound) * 1.9} r="6" fill="var(--ok)" />
              <text x="115" y="92" fill="var(--formula-text)" fontSize="11">
                Local Max (-5, 28.2)
              </text>
              <text x="205" y="25" fill="var(--ok-text)" fontSize="11">
                Boundary ({rightBound}, {fCubic(rightBound).toFixed(1)})
              </text>
            </svg>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="space-y-3 text-xs">
            <p className="s-text-secondary">
              <MathText text={'Convex Bowl $L(w) = 2(w - 2)^2$, gradient $\\nabla L(w) = 4(w - 2)$, minimum at $w^* = 2$.'} />
            </p>
            <div>
              <label className="flex justify-between s-text-secondary mb-1">
                <MathText text={'Learning Rate $\\eta$'} />
                <span className="font-mono" style={{ color: 'var(--accent-text)' }}>
                  η = {lr.toFixed(2)}
                </span>
              </label>
              <input
                type="range"
                min={0.05}
                max={0.52}
                step={0.05}
                value={lr}
                onChange={(e) => {
                  setLr(Number(e.target.value))
                  setHistory([8.0])
                }}
                className="w-full"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={stepSgd}
                className="px-3 py-1.5 rounded-md s-btn-primary font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" /> Take 1 Gradient Step
              </button>
              <button
                onClick={() => setHistory([8.0])}
                className="px-2.5 py-1.5 rounded-md border s-btn-ghost cursor-pointer"
              >
                Reset w₀ = 8.0
              </button>
            </div>

            <div className="rounded-lg s-inset p-3 border font-mono space-y-1">
              <div className="flex justify-between">
                <span className="s-text-muted">Step #{history.length - 1} Weight w:</span>
                <span className="s-text-primary font-bold">{currentW.toFixed(4)}</span>
              </div>
              <div className="flex justify-between">
                <span className="s-text-muted">Gradient ∇L(w):</span>
                <span style={{ color: 'var(--formula-text)' }}>{gradAt(currentW).toFixed(4)}</span>
              </div>
              <div className="text-[11px] font-sans s-text-muted pt-1">
                {lr === 0.25
                  ? "⚡ Exact 1-step quadratic jump (η = 1 / f'' = 0.25)!"
                  : lr >= 0.5
                    ? "⚠ η ≥ 2/f'' = 0.50: Overshoots & diverges/oscillates!"
                    : 'Smooth monotone/damped descent toward w* = 2.0.'}
              </div>
            </div>
          </div>

          <div className="s-inset rounded-lg border p-2">
            <svg viewBox="0 0 360 175" className="w-full h-auto">
              <line x1="20" y1="150" x2="340" y2="150" stroke="var(--border-strong)" />
              <polyline
                fill="none"
                stroke="var(--text-muted)"
                strokeWidth="2.5"
                points={Array.from({ length: 71 }, (_, i) => {
                  const wv = -5 + i * 0.2
                  const lv = 2 * (wv - 2) * (wv - 2)
                  return `${(30 + (wv + 5) * 21).toFixed(1)},${Math.max(10, 148 - lv * 1.25).toFixed(1)}`
                }).join(' ')}
              />
              <polyline
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4,2"
                points={history
                  .map((wv) => {
                    const lv = 2 * (wv - 2) * (wv - 2)
                    return `${(30 + Math.max(-5.5, Math.min(9.5, wv + 5)) * 21).toFixed(1)},${Math.max(
                      10,
                      148 - lv * 1.25
                    ).toFixed(1)}`
                  })
                  .join(' ')}
              />
              {history.map((wv, idx) => {
                const lv = 2 * (wv - 2) * (wv - 2)
                return (
                  <circle
                    key={idx}
                    cx={30 + Math.max(-5.5, Math.min(9.5, wv + 5)) * 21}
                    cy={Math.max(10, 148 - lv * 1.25)}
                    r={idx === history.length - 1 ? 6 : 3.5}
                    fill={idx === history.length - 1 ? 'var(--ok)' : 'var(--accent)'}
                  />
                )
              })}
              <text x="155" y="166" fill="var(--ok-text)" fontSize="11">
                w* = 2
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
