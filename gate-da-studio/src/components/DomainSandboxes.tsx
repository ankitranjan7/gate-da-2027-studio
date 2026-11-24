import React, { useState, useMemo } from 'react'
import { Sliders, RotateCcw, ArrowRight, Play, CheckCircle2, XCircle } from 'lucide-react'
import { MathText } from './MathText'

type DomainSandboxProps = {
  sandboxId:
    | 'bayes-posterior-lab'
    | 'distribution-clt-lab'
    | 'hypothesis-test-lab'
    | 'projection-eigen-lab'
    | 'rotation-svd-lab'
    | 'python-trace-lab'
    | 'hash-table-lab'
    | 'sorting-search-lab'
    | 'graph-astar-lab'
    | 'minimax-alphabeta-lab'
    | 'logic-truth-lab'
    | 'dbms-fd-ra-lab'
    | 'btree-olap-lab'
    | 'ml-svm-ridge-lab'
    | 'ml-pca-bayesnet-lab'
    | 'ga-synthesis-lab'
}

export const DomainSandboxRouter: React.FC<DomainSandboxProps> = ({ sandboxId }) => {
  switch (sandboxId) {
    case 'bayes-posterior-lab':
      return <BayesPosteriorLab />
    case 'distribution-clt-lab':
      return <DistributionCltLab />
    case 'hypothesis-test-lab':
      return <HypothesisTestLab />
    case 'projection-eigen-lab':
      return <ProjectionEigenLab />
    case 'rotation-svd-lab':
      return <RotationSvdLab />
    case 'python-trace-lab':
      return <PythonTraceLab />
    case 'hash-table-lab':
      return <HashTableLab />
    case 'sorting-search-lab':
      return <SortingSearchLab />
    case 'graph-astar-lab':
      return <GraphAstarLab />
    case 'minimax-alphabeta-lab':
      return <MinimaxAlphaBetaLab />
    case 'logic-truth-lab':
      return <LogicTruthLab />
    case 'dbms-fd-ra-lab':
      return <DbmsFdRaLab />
    case 'btree-olap-lab':
      return <BtreeOlapLab />
    case 'ml-svm-ridge-lab':
      return <MlSvmRidgeLab />
    case 'ml-pca-bayesnet-lab':
      return <MlPcaBayesnetLab />
    case 'ga-synthesis-lab':
      return <GaSynthesisLab />
  }
}

const Shell: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="my-5 rounded-xl border s-elevated p-5">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <div className="flex items-center gap-2">
        <Sliders className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-text)' }} />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent-text)' }}>
            {title}
          </h4>
          {subtitle && <p className="text-xs s-text-muted mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
    {children}
  </div>
)

/* 1. BAYES POSTERIOR LAB */
const BayesPosteriorLab: React.FC = () => {
  const [prior, setPrior] = useState(0.02)
  const [tpr, setTpr] = useState(0.95)
  const [fpr, setFpr] = useState(0.05)

  const tp = prior * tpr
  const fp = (1 - prior) * fpr
  const totalPos = tp + fp
  const post = totalPos > 0 ? tp / totalPos : 0
  const postOdds = fpr > 0 ? ((prior / (1 - prior)) * (tpr / fpr)) : Infinity

  return (
    <Shell
      title="Interactive Lab: Bayes Base-Rate Fallacy & Posterior Tree"
      subtitle="Watch why a 95%-accurate test still yields low P(D|+) when disease prevalence P(D) is small."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label className="block rounded-lg border s-inset p-3 text-xs">
          <div className="flex justify-between mb-1">
            <span className="s-text-secondary">Prevalence P(D)</span>
            <span className="font-mono" style={{ color: 'var(--accent-text)' }}>{(prior * 100).toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={0.005}
            max={0.5}
            step={0.005}
            value={prior}
            onChange={(e) => setPrior(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block rounded-lg border s-inset p-3 text-xs">
          <div className="flex justify-between mb-1">
            <span className="s-text-secondary">Sensitivity P(+|D)</span>
            <span className="font-mono" style={{ color: 'var(--ok-text)' }}>{(tpr * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={0.99}
            step={0.01}
            value={tpr}
            onChange={(e) => setTpr(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block rounded-lg border s-inset p-3 text-xs">
          <div className="flex justify-between mb-1">
            <span className="s-text-secondary">False Positive P(+|~D)</span>
            <span className="font-mono" style={{ color: 'var(--bad-text)' }}>{(fpr * 100).toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={0.005}
            max={0.25}
            step={0.005}
            value={fpr}
            onChange={(e) => setFpr(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
        <div className="rounded-lg border s-inset p-3">
          <div className="s-text-muted">True Positive Mass</div>
          <div className="text-base font-mono mt-1" style={{ color: 'var(--ok-text)' }}>{tp.toFixed(4)}</div>
          <div className="s-text-muted mt-0.5">out of 1000: {(tp * 1000).toFixed(1)}</div>
        </div>
        <div className="rounded-lg border s-inset p-3">
          <div className="s-text-muted">False Positive Mass</div>
          <div className="text-base font-mono mt-1" style={{ color: 'var(--bad-text)' }}>{fp.toFixed(4)}</div>
          <div className="s-text-muted mt-0.5">out of 1000: {(fp * 1000).toFixed(1)}</div>
        </div>
        <div className="rounded-lg border s-pill-formula p-3">
          <div className="text-[11px] uppercase">Posterior P(D | +)</div>
          <div className="text-lg font-mono font-bold mt-1">{(post * 100).toFixed(2)}%</div>
          <div className="text-[11px] opacity-80">TP / (TP + FP)</div>
        </div>
        <div className="rounded-lg border s-inset p-3">
          <div className="s-text-muted">Likelihood Ratio & Post Odds</div>
          <div className="text-base font-mono mt-1 s-text-primary">LR = {(tpr / fpr).toFixed(2)}</div>
          <div className="s-text-muted mt-0.5">Post odds: {postOdds.toFixed(3)} : 1</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs s-text-muted mb-1">Share of all positive alarms (width = 100% of + tests)</div>
        <div className="w-full h-5 rounded-md overflow-hidden flex border s-border">
          <div
            style={{ width: `${post * 100}%`, backgroundColor: 'var(--ok)' }}
            className="h-full transition-all"
            title="True Positives"
          />
          <div
            style={{ width: `${(1 - post) * 100}%`, backgroundColor: 'var(--bad)' }}
            className="h-full transition-all"
            title="False Positives"
          />
        </div>
      </div>
    </Shell>
  )
}

/* 2. DISTRIBUTION & CLT LAB */
const DistributionCltLab: React.FC = () => {
  const [dist, setDist] = useState<'binomial' | 'poisson' | 'exp'>('binomial')
  const [n, setN] = useState(12)
  const [p, setP] = useState(0.3)
  const [lambda, setLambda] = useState(3.0)

  const bars = useMemo(() => {
    if (dist === 'binomial') {
      const comb = (nn: number, kk: number) => {
        let res = 1
        for (let i = 1; i <= kk; i++) res = (res * (nn - i + 1)) / i
        return res
      }
      return Array.from({ length: n + 1 }, (_, k) => ({
        label: String(k),
        val: comb(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k),
      }))
    }
    if (dist === 'poisson') {
      const out: Array<{ label: string; val: number }> = []
      let fact = 1
      for (let k = 0; k <= 14; k++) {
        if (k > 0) fact *= k
        out.push({ label: String(k), val: (Math.exp(-lambda) * Math.pow(lambda, k)) / fact })
      }
      return out
    }
    return Array.from({ length: 14 }, (_, k) => {
      const x = k * 0.35
      return { label: x.toFixed(1), val: lambda * Math.exp(-lambda * x) }
    })
  }, [dist, n, p, lambda])

  const maxVal = Math.max(...bars.map((b) => b.val), 0.01)
  const mean = dist === 'binomial' ? n * p : dist === 'poisson' ? lambda : 1 / lambda
  const variance = dist === 'binomial' ? n * p * (1 - p) : dist === 'poisson' ? lambda : 1 / (lambda * lambda)

  return (
    <Shell
      title="Interactive Lab: Distributions, Mean-Variance Tradeoff & Shape"
      subtitle="Switch families and slide parameters to inspect PMF/PDF mass and exact E[X], Var(X)."
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {(['binomial', 'poisson', 'exp'] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDist(d)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
              dist === d ? 's-pill-accent' : 's-btn-ghost'
            }`}
          >
            {d === 'binomial' ? 'Binomial(n, p)' : d === 'poisson' ? 'Poisson(λ)' : 'Exponential(λ)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {dist === 'binomial' ? (
          <>
            <label className="rounded-lg border s-inset p-3 text-xs">
              <div className="flex justify-between mb-1">
                <span>Trials n</span>
                <span className="font-mono">{n}</span>
              </div>
              <input type="range" min={2} max={24} value={n} onChange={(e) => setN(+e.target.value)} className="w-full" />
            </label>
            <label className="rounded-lg border s-inset p-3 text-xs">
              <div className="flex justify-between mb-1">
                <span>Success prob p</span>
                <span className="font-mono">{p.toFixed(2)}</span>
              </div>
              <input type="range" min={0.05} max={0.95} step={0.05} value={p} onChange={(e) => setP(+e.target.value)} className="w-full" />
            </label>
          </>
        ) : (
          <label className="rounded-lg border s-inset p-3 text-xs md:col-span-2">
            <div className="flex justify-between mb-1">
              <span>Rate λ</span>
              <span className="font-mono">{lambda.toFixed(1)}</span>
            </div>
            <input type="range" min={0.4} max={8} step={0.2} value={lambda} onChange={(e) => setLambda(+e.target.value)} className="w-full" />
          </label>
        )}
        <div className="rounded-lg border s-pill-formula p-3 text-xs flex flex-col justify-center">
          <div>
            Mean <span className="font-mono font-bold">{mean.toFixed(3)}</span>
          </div>
          <div className="mt-1">
            Var(X) <span className="font-mono font-bold">{variance.toFixed(3)}</span> | SD{' '}
            <span className="font-mono">{Math.sqrt(variance).toFixed(3)}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border s-inset p-3">
        <div className="flex items-end gap-1.5 h-32">
          {bars.map((b, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
              <div
                className="w-full rounded-t transition-all"
                style={{
                  height: `${Math.max(4, (b.val / maxVal) * 100)}%`,
                  backgroundColor: 'var(--accent)',
                  opacity: 0.85,
                }}
                title={`${b.label}: ${b.val.toFixed(4)}`}
              />
              <span className="text-[10px] font-mono s-text-muted mt-1">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

/* 3. HYPOTHESIS TEST LAB */
const HypothesisTestLab: React.FC = () => {
  const [mu0, setMu0] = useState(100)
  const [xbar, setXbar] = useState(104)
  const [sigma, setSigma] = useState(12)
  const [n, setN] = useState(36)
  const [alpha, setAlpha] = useState(0.05)

  const se = sigma / Math.sqrt(n)
  const z = (xbar - mu0) / se
  const zCrit = alpha === 0.01 ? 2.576 : alpha === 0.05 ? 1.96 : 1.645
  const reject = Math.abs(z) >= zCrit

  // Normal approx curve SVG
  const pathPoints = useMemo(() => {
    const pts: string[] = []
    for (let i = -36; i <= 36; i++) {
      const t = i / 10
      const y = Math.exp(-0.5 * t * t)
      const sx = 200 + t * 50
      const sy = 95 - y * 75
      pts.push(`${i === -36 ? 'M' : 'L'} ${sx.toFixed(1)} ${sy.toFixed(1)}`)
    }
    return pts.join(' ')
  }, [])

  const markerX = Math.max(20, Math.min(380, 200 + z * 50))

  return (
    <Shell
      title="Interactive Lab: Two-Sided Z-Test Rejection Region & Sample Size Power"
      subtitle="See how n lowers Standard Error σ/√n, pushing the same difference (x̄ - μ₀) into the tail."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Sample Mean x̄</span><span className="font-mono">{xbar}</span></div>
          <input type="range" min={92} max={108} step={0.5} value={xbar} onChange={(e) => setXbar(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Sample Size n</span><span className="font-mono">{n}</span></div>
          <input type="range" min={9} max={100} step={1} value={n} onChange={(e) => setN(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Known σ</span><span className="font-mono">{sigma}</span></div>
          <input type="range" min={4} max={24} step={1} value={sigma} onChange={(e) => setSigma(+e.target.value)} className="w-full" />
        </label>
        <div className="rounded-lg border s-inset p-2.5 flex flex-col justify-between">
          <span>Significance α</span>
          <div className="flex gap-1 mt-1">
            {[0.1, 0.05, 0.01].map((a) => (
              <button
                key={a}
                onClick={() => setAlpha(a)}
                className={`flex-1 py-1 rounded text-[11px] border ${alpha === a ? 's-pill-accent' : 's-btn-ghost'}`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      <svg viewBox="0 0 400 115" className="w-full max-w-xl mx-auto rounded-lg border s-inset p-2">
        <line x1="20" y1="95" x2="380" y2="95" stroke="var(--border-strong)" strokeWidth="1" />
        <path d={pathPoints} fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
        <line x1={200 - zCrit * 50} y1="15" x2={200 - zCrit * 50} y2="95" stroke="var(--bad)" strokeDasharray="4 3" />
        <line x1={200 + zCrit * 50} y1="15" x2={200 + zCrit * 50} y2="95" stroke="var(--bad)" strokeDasharray="4 3" />
        <line x1={markerX} y1="10" x2={markerX} y2="98" stroke="var(--accent)" strokeWidth="2.5" />
        <text x={markerX} y="109" textAnchor="middle" fill="var(--accent-text)" fontSize="10" fontFamily="monospace">
          z = {z.toFixed(2)}
        </text>
      </svg>

      <div className={`mt-3 rounded-lg border p-3 text-xs flex flex-wrap justify-between items-center ${reject ? 's-pill-bad' : 's-pill-ok'}`}>
        <span>
          SE = {(sigma / Math.sqrt(n)).toFixed(3)} | Observed |z| = {Math.abs(z).toFixed(3)} vs critical z = ±{zCrit}
        </span>
        <span className="font-bold">
          {reject ? `Reject H₀ (μ₀=${mu0}) at α=${alpha}` : `Fail to Reject H₀ at α=${alpha}`}
        </span>
      </div>
    </Shell>
  )
}

/* 4. PROJECTION & EIGENVALUE LAB */
const ProjectionEigenLab: React.FC = () => {
  const [vx, setVx] = useState(3)
  const [vy, setVy] = useState(2)
  const [ux, setUx] = useState(2)
  const [uy, setUy] = useState(1)

  const uu = ux * ux + uy * uy || 1
  const vu = vx * ux + vy * uy
  const scale = vu / uu
  const px = scale * ux
  const py = scale * uy
  const ex = vx - px
  const ey = vy - py

  const toSvg = (x: number, y: number) => ({ x: 160 + x * 24, y: 120 - y * 24 })
  const o = toSvg(0, 0)
  const vPt = toSvg(vx, vy)
  const pPt = toSvg(px, py)
  const uLineA = toSvg(-ux * 3, -uy * 3)
  const uLineB = toSvg(ux * 3, uy * 3)

  return (
    <Shell
      title="Interactive Lab: Orthogonal Projection & Residual Decomposition (v = p + e)"
      subtitle="Verify visually that residual e = v - p is always 90° orthogonal to line u: uᵀ(v - p) = 0."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 320 220" className="w-full rounded-lg border s-inset">
          <line x1="0" y1="120" x2="320" y2="120" stroke="var(--border-subtle)" />
          <line x1="160" y1="0" x2="160" y2="220" stroke="var(--border-subtle)" />
          <line x1={uLineA.x} y1={uLineA.y} x2={uLineB.x} y2={uLineB.y} stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1={pPt.x} y1={pPt.y} x2={vPt.x} y2={vPt.y} stroke="var(--bad)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1={o.x} y1={o.y} x2={pPt.x} y2={pPt.y} stroke="var(--ok)" strokeWidth="3" />
          <line x1={o.x} y1={o.y} x2={vPt.x} y2={vPt.y} stroke="var(--accent)" strokeWidth="3" />
          <circle cx={vPt.x} cy={vPt.y} r="4" fill="var(--accent)" />
          <circle cx={pPt.x} cy={pPt.y} r="4" fill="var(--ok)" />
        </svg>

        <div className="space-y-3 text-xs">
          <label className="block rounded-lg border s-inset p-2.5">
            <div className="flex justify-between"><span>Target vₓ, vᵧ</span><span className="font-mono">({vx}, {vy})</span></div>
            <div className="flex gap-2 mt-1">
              <input type="range" min={-4} max={4} step={0.5} value={vx} onChange={(e) => setVx(+e.target.value)} className="w-full" />
              <input type="range" min={-3} max={4} step={0.5} value={vy} onChange={(e) => setVy(+e.target.value)} className="w-full" />
            </div>
          </label>
          <label className="block rounded-lg border s-inset p-2.5">
            <div className="flex justify-between"><span>Direction uₓ, uᵧ</span><span className="font-mono">({ux}, {uy})</span></div>
            <div className="flex gap-2 mt-1">
              <input type="range" min={-3} max={3} step={0.5} value={ux} onChange={(e) => setUx(+e.target.value || 0.5)} className="w-full" />
              <input type="range" min={-3} max={3} step={0.5} value={uy} onChange={(e) => setUy(+e.target.value)} className="w-full" />
            </div>
          </label>
          <div className="rounded-lg border s-pill-formula p-3 font-mono space-y-1">
            <div>p = ({px.toFixed(2)}, {py.toFixed(2)})  [green]</div>
            <div>e = v - p = ({ex.toFixed(2)}, {ey.toFixed(2)})  [red]</div>
            <div>uᵀe = {(ux * ex + uy * ey).toFixed(4)} (always 0!)</div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 5. ROTATION & SVD ELLIPSE LAB */
const RotationSvdLab: React.FC = () => {
  const [theta, setTheta] = useState(30)
  const [sx, setSx] = useState(1.8)
  const [sy, setSy] = useState(0.6)

  const rad = (theta * Math.PI) / 180
  const det = sx * sy
  const traceApprox = sx * Math.cos(rad) + sy * Math.cos(rad)

  return (
    <Shell
      title="Interactive Lab: SVD Geometry (Rotate Vᵀ → Stretch Σ → Rotate U)"
      subtitle="A linear matrix maps the unit circle into an ellipse whose semi-axes equal singular values σ₁, σ₂."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 260 200" className="w-full rounded-lg border s-inset">
          <g transform="translate(130 100)">
            <circle cx="0" cy="0" r="42" fill="none" stroke="var(--border-strong)" strokeDasharray="3 3" />
            <g transform={`rotate(${-theta})`}>
              <ellipse cx="0" cy="0" rx={42 * sx} ry={42 * sy} fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2" />
              <line x1={-42 * sx} y1="0" x2={42 * sx} y2="0" stroke="var(--formula)" strokeWidth="2" />
              <line x1="0" y1={-42 * sy} x2="0" y2={42 * sy} stroke="var(--ok)" strokeWidth="2" />
            </g>
          </g>
        </svg>
        <div className="space-y-3 text-xs">
          <label className="block rounded-lg border s-inset p-2.5">
            <div className="flex justify-between"><span>Output Orientation θ°</span><span className="font-mono">{theta}°</span></div>
            <input type="range" min={-90} max={90} value={theta} onChange={(e) => setTheta(+e.target.value)} className="w-full" />
          </label>
          <label className="block rounded-lg border s-inset p-2.5">
            <div className="flex justify-between"><span>Singular Value σ₁</span><span className="font-mono">{sx.toFixed(2)}</span></div>
            <input type="range" min={0.3} max={2.0} step={0.1} value={sx} onChange={(e) => setSx(+e.target.value)} className="w-full" />
          </label>
          <label className="block rounded-lg border s-inset p-2.5">
            <div className="flex justify-between"><span>Singular Value σ₂</span><span className="font-mono">{sy.toFixed(2)}</span></div>
            <input type="range" min={0} max={1.8} step={0.1} value={sy} onChange={(e) => setSy(+e.target.value)} className="w-full" />
          </label>
          <div className="rounded-lg border s-pill-formula p-3 font-mono">
            <div>||A||₂ = σₘₐₓ = {Math.max(sx, sy).toFixed(2)} | Area scale |det(A)| = σ₁σ₂ = {det.toFixed(2)}</div>
            <div className="mt-1 opacity-80">{sy === 0 ? 'Rank dropped to 1 (singular collapse!)' : `Cond(A) = ${(Math.max(sx, sy) / Math.min(sx, sy)).toFixed(2)} (trace proxy ${traceApprox.toFixed(2)})`}</div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 6. PYTHON REFERENCE & CLOSURE TRACE LAB */
const PythonTraceLab: React.FC = () => {
  const [scenario, setScenario] = useState<'aliasing' | 'default_arg' | 'late_binding'>('aliasing')
  const [step, setStep] = useState(0)

  const traces: Record<
    'aliasing' | 'default_arg' | 'late_binding',
    { code: string; steps: Array<{ line: string; heap: string; note: string }> }
  > = {
    aliasing: {
      code: `a = [[1]] * 3\na[0].append(9)\nprint(a)`,
      steps: [
        { line: 'a = [[1]] * 3', heap: 'a → [ref#1, ref#1, ref#1]  where ref#1 = [1]', note: 'Shallow list multiplication copies the SAME inner list pointer 3 times.' },
        { line: 'a[0].append(9)', heap: 'ref#1 mutates in place → [1, 9]', note: 'Mutating a[0] modifies ref#1, so a[1] and a[2] see the mutation too!' },
        { line: 'print(a)', heap: 'Output: [[1, 9], [1, 9], [1, 9]]', note: 'Use [[1] for _ in range(3)] to create 3 distinct heap objects.' },
      ],
    },
    default_arg: {
      code: `def f(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(f(1), f(2))`,
      steps: [
        { line: 'def f(x, acc=[]):', heap: 'f.__defaults__ = (ref#L,)  where ref#L = []', note: 'Default objects are evaluated ONCE at def-time, not per call.' },
        { line: 'f(1)', heap: 'ref#L becomes [1]; returns [1]', note: 'f(1) mutates that persistent list on the function object.' },
        { line: 'f(2)', heap: 'ref#L becomes [1, 2]; print outputs [1, 2] [1, 2]', note: 'BOTH printed values point to the exact same ref#L after f(2) finishes!' },
      ],
    },
    late_binding: {
      code: `funcs = [lambda: i for i in range(3)]\nprint([fn() for fn in funcs])`,
      steps: [
        { line: 'for i in range(3)', heap: '3 closures created; each captures cell(i), NOT i’s value', note: 'Python closures bind by variable name (lexical cell), evaluated when called.' },
        { line: 'loop ends', heap: 'cell(i) holds final value 2', note: 'All 3 lambdas read the shared loop variable i = 2.' },
        { line: '[fn() for fn in funcs]', heap: 'Output: [2, 2, 2]', note: 'Fix with lambda i=i: i to snapshot i as a default argument.' },
      ],
    },
  }

  const cur = traces[scenario]
  const activeStep = cur.steps[Math.min(step, cur.steps.length - 1)]

  return (
    <Shell
      title="Interactive Lab: Python Object Identity, Heap Aliasing & Closure Tracer"
      subtitle="Step line-by-line through GATE’s favorite C/Python pointer & mutable-object traps."
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {([
          ['aliasing', '[[1]] * 3 Aliasing'],
          ['default_arg', 'Mutable Default Arg'],
          ['late_binding', 'Loop Closure Capture'],
        ] as const).map(([k, lbl]) => (
          <button
            key={k}
            onClick={() => { setScenario(k); setStep(0) }}
            className={`px-3 py-1.5 rounded-lg text-xs border ${scenario === k ? 's-pill-accent' : 's-btn-ghost'}`}
          >
            {lbl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <pre className="rounded-lg border s-inset p-3 text-xs font-mono s-text-primary overflow-x-auto">
          {cur.code}
        </pre>
        <div className="rounded-lg border s-inset p-3 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="s-text-muted">Step {step + 1} / {cur.steps.length}</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setStep((s) => (s + 1) % cur.steps.length)}
                className="px-2.5 py-1 rounded border s-btn-primary text-xs inline-flex items-center gap-1"
              >
                <Play className="w-3 h-3" /> Next Step
              </button>
              <button onClick={() => setStep(0)} className="px-2 py-1 rounded border s-btn-ghost text-xs">
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="font-mono p-2 rounded s-surface border s-border">{activeStep.line}</div>
          <div className="font-mono" style={{ color: 'var(--formula-text)' }}>{activeStep.heap}</div>
          <p className="s-text-secondary">{activeStep.note}</p>
        </div>
      </div>
    </Shell>
  )
}

/* 7. HASH TABLE PROBING LAB */
const HashTableLab: React.FC = () => {
  const [keysInput, setKeysInput] = useState('12, 23, 34, 45, 19')
  const [scheme, setScheme] = useState<'linear' | 'quadratic' | 'double'>('linear')
  const size = 11

  const { table, probesTotal } = useMemo(() => {
    const arr: Array<number | null> = Array(size).fill(null)
    let probes = 0
    const keys = keysInput
      .split(',')
      .map((s) => parseInt(s.trim(), 10))
      .filter((x) => !Number.isNaN(x))
      .slice(0, 9)

    for (const k of keys) {
      const h1 = ((k % size) + size) % size
      const h2 = 7 - (((k % 7) + 7) % 7)
      for (let i = 0; i < size; i++) {
        probes++
        const idx =
          scheme === 'linear'
            ? (h1 + i) % size
            : scheme === 'quadratic'
            ? (h1 + i * i) % size
            : (h1 + i * h2) % size
        if (arr[idx] === null) {
          arr[idx] = k
          break
        }
      }
    }
    return { table: arr, probesTotal: probes }
  }, [keysInput, scheme])

  return (
    <Shell
      title="Interactive Lab: Open-Addressing Hash Table (m = 11, h₁(k) = k mod 11)"
      subtitle="Compare primary clustering (linear) vs secondary clustering (quadratic) vs double hashing (h₂ = 7 - k mod 7)."
    >
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <input
          value={keysInput}
          onChange={(e) => setKeysInput(e.target.value)}
          className="s-input px-3 py-1.5 rounded-lg border font-mono flex-1 min-w-[200px]"
          placeholder="Comma-separated integers"
        />
        {(['linear', 'quadratic', 'double'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setScheme(s)}
            className={`px-3 py-1.5 rounded-lg border capitalize ${scheme === s ? 's-pill-accent' : 's-btn-ghost'}`}
          >
            {s} probing
          </button>
        ))}
        <span className="s-pill-formula px-3 py-1.5 rounded-lg border font-mono">Total probes: {probesTotal}</span>
      </div>

      <div className="grid grid-cols-11 gap-1.5 text-center font-mono text-xs">
        {table.map((val, idx) => (
          <div key={idx} className={`rounded-lg border p-2 ${val !== null ? 's-pill-accent' : 's-inset'}`}>
            <div className="text-[10px] s-text-muted">[{idx}]</div>
            <div className="font-bold mt-1">{val !== null ? val : '·'}</div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* 8. SORTING & BINARY SEARCH LAB */
const SortingSearchLab: React.FC = () => {
  const [algo, setAlgo] = useState<'quicksort' | 'mergesort' | 'binary'>('quicksort')
  const [arrType, setArrType] = useState<'sorted' | 'reverse' | 'random'>('sorted')

  const info = {
    quicksort: {
      sorted: 'Lomuto last-element pivot on sorted array → O(n²) comparisons (n(n-1)/2 = 45 for n=10).',
      reverse: 'Lomuto on reverse-sorted → O(n²) comparisons; worst-case recursion depth n.',
      random: 'Balanced partitions → O(n log n) expected comparisons, O(log n) stack.',
    },
    mergesort: {
      sorted: 'Blind divide & conquer → ALWAYS Θ(n log n) regardless of sortedness; needs O(n) aux space.',
      reverse: 'Blind divide & conquer → ALWAYS Θ(n log n); preserves stability on equal keys.',
      random: 'Always O(n log n) worst-case, best-case, and average-case!',
    },
    binary: {
      sorted: 'Monotonic invariant holds → ⌊log₂ n⌋ + 1 worst-case probes.',
      reverse: 'With flipped comparison > instead of <, works identically in O(log n).',
      random: 'Precondition VIOLATED! Binary search returns wrong answer or misses target.',
    },
  }

  return (
    <Shell
      title="Interactive Lab: Sorting Complexity Matrix & Binary Search Invariant Checker"
      subtitle="Toggle input order to spot worst-case Θ(n²) Quicksort vs order-oblivious Mergesort."
    >
      <div className="flex flex-wrap gap-2 mb-3 text-xs">
        {(['quicksort', 'mergesort', 'binary'] as const).map((a) => (
          <button
            key={a}
            onClick={() => setAlgo(a)}
            className={`px-3 py-1.5 rounded-lg border capitalize ${algo === a ? 's-pill-accent' : 's-btn-ghost'}`}
          >
            {a === 'binary' ? 'Binary Search' : a}
          </button>
        ))}
        <span className="mx-1 s-text-muted self-center">| Input:</span>
        {(['sorted', 'reverse', 'random'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setArrType(t)}
            className={`px-3 py-1.5 rounded-lg border capitalize ${arrType === t ? 's-pill-formula' : 's-btn-ghost'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="rounded-lg border s-inset p-4 text-sm s-text-primary">
        {info[algo][arrType]}
      </div>
    </Shell>
  )
}

/* 9. GRAPH & A* ADMISSIBILITY LAB */
const GraphAstarLab: React.FC = () => {
  const [hB, setHB] = useState(5)
  const [hC, setHC] = useState(1)

  // S -> B (cost 2) -> G (cost 4), true h*(B)=4. S -> C (cost 4) -> G (cost 2), true h*(C)=2. Optimal=6
  const fB = 2 + hB
  const fC = 4 + hC
  const admissibleB = hB <= 4
  const admissibleC = hC <= 2
  const pops = fB <= fC ? ['S (0)', `B (f=${fB})`, 'G via B (6)'] : ['S (0)', `C (f=${fC})`, 'G via C (6)']

  return (
    <Shell
      title="Interactive Lab: A* Heuristic Admissibility & Node Expansion Order"
      subtitle="Watch what happens to f(n) = g(n) + h(n) when h(B) overestimates h*(B) = 4."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-xs">
        <label className="rounded-lg border s-inset p-3">
          <div className="flex justify-between">
            <span>Heuristic h(B) [True h*(B) = 4]</span>
            <span className="font-mono" style={{ color: admissibleB ? 'var(--ok-text)' : 'var(--bad-text)' }}>
              h(B) = {hB} ({admissibleB ? 'Admissible' : 'Overestimates!'})
            </span>
          </div>
          <input type="range" min={0} max={9} value={hB} onChange={(e) => setHB(+e.target.value)} className="w-full mt-1" />
        </label>
        <label className="rounded-lg border s-inset p-3">
          <div className="flex justify-between">
            <span>Heuristic h(C) [True h*(C) = 2]</span>
            <span className="font-mono" style={{ color: admissibleC ? 'var(--ok-text)' : 'var(--bad-text)' }}>
              h(C) = {hC} ({admissibleC ? 'Admissible' : 'Overestimates!'})
            </span>
          </div>
          <input type="range" min={0} max={7} value={hC} onChange={(e) => setHC(+e.target.value)} className="w-full mt-1" />
        </label>
      </div>
      <div className="rounded-lg border s-pill-formula p-3 text-xs font-mono">
        Priority Queue Trace: {pops.join('  →  ')} | f(B)=2+{hB}={fB}, f(C)=4+{hC}={fC}
      </div>
    </Shell>
  )
}

/* 10. MINIMAX & ALPHA-BETA PRUNING LAB */
const MinimaxAlphaBetaLab: React.FC = () => {
  const [leaves, setLeaves] = useState<[number, number, number, number]>([3, 5, 2, 9])
  // Root MAX over two MIN nodes: (l0, l1) and (l2, l3)
  const leftMin = Math.min(leaves[0], leaves[1])
  const prunedL3 = leaves[2] <= leftMin
  const rightMin = Math.min(leaves[2], leaves[3])
  const rootVal = Math.max(leftMin, rightMin)

  return (
    <Shell
      title="Interactive Lab: Alpha-Beta Pruning Cutoff Simulator (MAX → MIN → Leaves)"
      subtitle="Slide the 3rd leaf below the left-subtree MAX guarantee α = min(L₀, L₁) to trigger an instant β-cutoff."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
        {leaves.map((val, idx) => (
          <label key={idx} className="rounded-lg border s-inset p-2.5">
            <div className="flex justify-between">
              <span>Leaf L{idx + 1}</span>
              <span className="font-mono font-bold">
                {idx === 3 && prunedL3 ? `${val} (PRUNED)` : val}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              value={val}
              onChange={(e) => {
                const copy: [number, number, number, number] = [...leaves]
                copy[idx] = +e.target.value
                setLeaves(copy)
              }}
              className="w-full mt-1"
            />
          </label>
        ))}
      </div>
      <div className="rounded-lg border s-inset p-3 text-xs flex flex-wrap justify-between items-center gap-2 font-mono">
        <span>Left MIN = {leftMin} (sets root α = {leftMin})</span>
        <span>Right MIN ≤ {leaves[2]}</span>
        <span className={prunedL3 ? 's-pill-ok px-2 py-1 rounded border' : 's-pill-neutral px-2 py-1 rounded border'}>
          {prunedL3 ? `PRUNED L4 because ${leaves[2]} ≤ α(${leftMin})` : `Must inspect L4 because ${leaves[2]} > α(${leftMin})`}
        </span>
        <span className="font-bold">Root MAX = {rootVal}</span>
      </div>
    </Shell>
  )
}

/* 11. PROPOSITIONAL & FOL TRUTH LAB */
const LogicTruthLab: React.FC = () => {
  const [p, setP] = useState(true)
  const [q, setQ] = useState(false)

  const implies = !p || q
  const contrapositive = q || !p
  const converse = !q || p

  return (
    <Shell
      title="Interactive Lab: Implication vs Contrapositive vs Converse Checker"
      subtitle="Notice why P → Q is ALWAYS equivalent to ¬Q → ¬P, whereas Q → P (converse) diverges when P is False and Q is True."
    >
      <div className="flex flex-wrap gap-3 mb-4 text-xs">
        <button onClick={() => setP(!p)} className={`px-3 py-1.5 rounded-lg border ${p ? 's-pill-ok' : 's-pill-bad'}`}>
          P = {String(p).toUpperCase()}
        </button>
        <button onClick={() => setQ(!q)} className={`px-3 py-1.5 rounded-lg border ${q ? 's-pill-ok' : 's-pill-bad'}`}>
          Q = {String(q).toUpperCase()}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className={`rounded-lg border p-3 ${implies ? 's-pill-ok' : 's-pill-bad'}`}>
          P → Q : {String(implies).toUpperCase()}
        </div>
        <div className={`rounded-lg border p-3 ${contrapositive ? 's-pill-ok' : 's-pill-bad'}`}>
          ¬Q → ¬P (Contrapositive) : {String(contrapositive).toUpperCase()}
        </div>
        <div className={`rounded-lg border p-3 ${converse ? 's-pill-ok' : 's-pill-bad'}`}>
          Q → P (Converse — trap!) : {String(converse).toUpperCase()}
        </div>
      </div>
    </Shell>
  )
}

/* 12. DBMS ATTRIBUTE CLOSURE LAB */
const DbmsFdRaLab: React.FC = () => {
  const [seed, setSeed] = useState<'A' | 'AB' | 'C' | 'AD'>('AB')
  // R(A,B,C,D,E) with FDs: A->B, BC->D, D->E, E->A
  const computeClosure = (start: string) => {
    const fds: Array<[string[], string]> = [
      [['A'], 'B'],
      [['B', 'C'], 'D'],
      [['D'], 'E'],
      [['E'], 'A'],
    ]
    const set = new Set(start.split(''))
    const log: string[] = [`Start: {${Array.from(set).join(', ')}}`]
    let changed = true
    while (changed) {
      changed = false
      for (const [lhs, rhs] of fds) {
        if (lhs.every((x) => set.has(x)) && !set.has(rhs)) {
          set.add(rhs)
          log.push(`Apply ${lhs.join('')}→${rhs} ⇒ {${Array.from(set).sort().join(', ')}}`)
          changed = true
        }
      }
    }
    return { closure: Array.from(set).sort(), log, isSuperkey: set.size === 5 }
  }

  const res = computeClosure(seed)

  return (
    <Shell
      title="Interactive Lab: Attribute Closure X⁺ & Candidate Key Tester"
      subtitle="R(A,B,C,D,E) with F = { A→B, BC→D, D→E, E→A }. Notice which attributes never appear on any RHS!"
    >
      <div className="flex flex-wrap gap-2 mb-3 text-xs">
        {(['A', 'AB', 'C', 'AD'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSeed(s)}
            className={`px-3 py-1.5 rounded-lg border font-mono ${seed === s ? 's-pill-accent' : 's-btn-ghost'}`}
          >
            Test {s}⁺
          </button>
        ))}
      </div>
      <div className="rounded-lg border s-inset p-3 text-xs font-mono space-y-1">
        {res.log.map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <ArrowRight className="w-3 h-3 opacity-60" /> {l}
          </div>
        ))}
        <div className="pt-2 font-bold" style={{ color: res.isSuperkey ? 'var(--ok-text)' : 'var(--bad-text)' }}>
          {seed}⁺ = {'{'}{res.closure.join(', ')}{'}'} → {res.isSuperkey ? 'SUPERKEY (covers all 5)' : 'NOT a superkey (missing C/etc.)'}
        </div>
      </div>
    </Shell>
  )
}

/* 13. B+ TREE ORDER & OLAP CUBE LAB */
const BtreeOlapLab: React.FC = () => {
  const [blockBytes, setBlockBytes] = useState(4096)
  const [keyBytes, setKeyBytes] = useState(12)
  const [ptrBytes, setPtrBytes] = useState(8)
  const [recPtrBytes, setRecPtrBytes] = useState(10)

  const orderLeaf = Math.floor((blockBytes - ptrBytes) / (keyBytes + recPtrBytes))
  const orderInternal = Math.floor((blockBytes + keyBytes) / (keyBytes + ptrBytes))

  return (
    <Shell
      title="Interactive Lab: B+ Tree Block-Packing Order Calculator (GATE DBMS Classic)"
      subtitle="Compare internal node fanout p vs leaf data-key capacity p_leaf — notice record pointers ONLY live in leaves!"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Block B</span><span className="font-mono">{blockBytes} B</span></div>
          <input type="range" min={512} max={8192} step={512} value={blockBytes} onChange={(e) => setBlockBytes(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Key K</span><span className="font-mono">{keyBytes} B</span></div>
          <input type="range" min={4} max={32} step={2} value={keyBytes} onChange={(e) => setKeyBytes(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Block Ptr P</span><span className="font-mono">{ptrBytes} B</span></div>
          <input type="range" min={4} max={16} step={2} value={ptrBytes} onChange={(e) => setPtrBytes(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Record Ptr R</span><span className="font-mono">{recPtrBytes} B</span></div>
          <input type="range" min={4} max={24} step={2} value={recPtrBytes} onChange={(e) => setRecPtrBytes(+e.target.value)} className="w-full" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
        <div className="rounded-lg border s-pill-formula p-3">
          Internal Node Order p = ⌊(B + K) / (K + P)⌋ = <span className="font-bold text-sm">{orderInternal}</span> children
          <div className="opacity-80 mt-1">Min keys in non-root internal node = ⌈p/2⌉ - 1 = {Math.ceil(orderInternal / 2) - 1}</div>
        </div>
        <div className="rounded-lg border s-pill-accent p-3">
          Leaf Order p_leaf = ⌊(B - P) / (K + R)⌋ = <span className="font-bold text-sm">{orderLeaf}</span> records
          <div className="opacity-80 mt-1">Min keys in non-root leaf = ⌈p_leaf/2⌉ = {Math.ceil(orderLeaf / 2)}</div>
        </div>
      </div>
    </Shell>
  )
}

/* 14. ML SVM MARGIN & RIDGE SHRINKAGE LAB */
const MlSvmRidgeLab: React.FC = () => {
  const [normW, setNormW] = useState(2.0)
  const [lambda, setLambda] = useState(1.0)

  const margin = 2 / normW
  const ridgeShrink = 1 / (1 + lambda)

  return (
    <Shell
      title="Interactive Lab: Hard-Margin SVM Width (2 / ||w||) & Ridge L2 Shrinkage"
      subtitle="See directly why minimizing ||w||² maximizes geometric street width, and how Ridge shrinks weights by 1/(1 + λ)."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="rounded-lg border s-inset p-3 space-y-2">
          <div className="flex justify-between"><span>Weight Norm ||w||₂</span><span className="font-mono">{normW.toFixed(2)}</span></div>
          <input type="range" min={0.5} max={4.0} step={0.1} value={normW} onChange={(e) => setNormW(+e.target.value)} className="w-full" />
          <div className="s-pill-ok px-2.5 py-1.5 rounded border font-mono">
            SVM Geometric Margin = 2 / ||w||₂ = {margin.toFixed(3)}
          </div>
        </div>
        <div className="rounded-lg border s-inset p-3 space-y-2">
          <div className="flex justify-between"><span>Ridge Penalty λ</span><span className="font-mono">{lambda.toFixed(2)}</span></div>
          <input type="range" min={0} max={5} step={0.25} value={lambda} onChange={(e) => setLambda(+e.target.value)} className="w-full" />
          <div className="s-pill-formula px-2.5 py-1.5 rounded border font-mono">
            Orthonormal XᵀX=I ⇒ w_ridge = {ridgeShrink.toFixed(3)} · w_OLS
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 15. ML PCA VARIANCE & BAYES NET D-SEP LAB */
const MlPcaBayesnetLab: React.FC = () => {
  const [l1, setL1] = useState(6.0)
  const [l2, setL2] = useState(3.0)
  const [l3, setL3] = useState(1.0)
  const [obsZ, setObsZ] = useState(true)

  const total = l1 + l2 + l3 || 1
  const pve12 = ((l1 + l2) / total) * 100

  return (
    <Shell
      title="Interactive Lab: PCA Explained Variance Ratio & D-Separation Collider Flip"
      subtitle="Verify eigenvalue fraction (λ₁+λ₂)/Σλ AND test why observing a collider Z opens the path X → Z ← Y."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="rounded-lg border s-inset p-3 space-y-2">
          <div className="font-semibold">PCA Eigenvalues (λ₁, λ₂, λ₃)</div>
          <input type="range" min={2} max={12} step={0.5} value={l1} onChange={(e) => setL1(+e.target.value)} className="w-full" />
          <input type="range" min={1} max={8} step={0.5} value={l2} onChange={(e) => setL2(+e.target.value)} className="w-full" />
          <input type="range" min={0} max={5} step={0.5} value={l3} onChange={(e) => setL3(+e.target.value)} className="w-full" />
          <div className="font-mono s-pill-formula px-2.5 py-1.5 rounded border">
            Top-2 Variance Retained = {pve12.toFixed(1)}% (Loss = {((l3 / total) * 100).toFixed(1)}%)
          </div>
        </div>

        <div className="rounded-lg border s-inset p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">V-Structure (Collider): X → Z ← Y</span>
            <button onClick={() => setObsZ(!obsZ)} className={`px-2.5 py-1 rounded border ${obsZ ? 's-pill-bad' : 's-pill-ok'}`}>
              Z is {obsZ ? 'OBSERVED' : 'UNOBSERVED'}
            </button>
          </div>
          <div className="p-2.5 rounded s-surface border s-border">
            {obsZ ? (
              <span className="flex items-center gap-1.5" style={{ color: 'var(--bad-text)' }}>
                <XCircle className="w-4 h-4 shrink-0" /> Path UNBLOCKED (Explaining-Away): X and Y become DEPENDENT given Z!
              </span>
            ) : (
              <span className="flex items-center gap-1.5" style={{ color: 'var(--ok-text)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Path BLOCKED by default: marginal X ⊥ Y!
              </span>
            )}
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 16. GA & HYBRID SYNTHESIS LAB */
const GaSynthesisLab: React.FC = () => {
  const [costA, setCostA] = useState(100)
  const [profitPct, setProfitPct] = useState(25)
  const [discPct, setDiscPct] = useState(20)

  const mp = costA * (1 + profitPct / 100)
  const sp = mp * (1 - discPct / 100)
  const netPct = ((sp - costA) / costA) * 100

  return (
    <Shell
      title="Interactive Lab: Successive Markup-Discount Trap vs Net Multiplier"
      subtitle="Verify why +x% markup followed by -x% discount NEVER returns to 100 — it always loses (x²/100)%."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Base CP</span><span className="font-mono">{costA}</span></div>
          <input type="range" min={50} max={200} step={10} value={costA} onChange={(e) => setCostA(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Markup +x%</span><span className="font-mono">+{profitPct}%</span></div>
          <input type="range" min={0} max={60} step={5} value={profitPct} onChange={(e) => setProfitPct(+e.target.value)} className="w-full" />
        </label>
        <label className="rounded-lg border s-inset p-2.5">
          <div className="flex justify-between"><span>Discount -y%</span><span className="font-mono">-{discPct}%</span></div>
          <input type="range" min={0} max={50} step={5} value={discPct} onChange={(e) => setDiscPct(+e.target.value)} className="w-full" />
        </label>
      </div>
      <div className="rounded-lg border s-pill-formula p-3 text-xs font-mono">
        Marked Price = {mp.toFixed(1)} → Selling Price = {sp.toFixed(1)} | Net Gain/Loss = {netPct >= 0 ? '+' : ''}
        {netPct.toFixed(2)}%
      </div>
      <div className="mt-2 text-[11px] s-text-muted">
        <MathText text={String.raw`Formula check: $x - y - \frac{xy}{100} = ${profitPct} - ${discPct} - \frac{${profitPct}\times${discPct}}{100} = ${netPct.toFixed(2)}\%$.`} />
      </div>
    </Shell>
  )
}
