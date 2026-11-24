import React, { useState, useEffect } from 'react'
import type { GeneratorId } from '../types/curriculum'
import { MathText } from './MathText'
import { RefreshCw, CheckCircle2, XCircle, Zap } from 'lucide-react'

interface GeneratedDrill {
  promptLatex: string
  answer: number
  tolerance: number
  shortcutRule: string
  workedSolution: string
}

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

function makeDrill(id: GeneratorId, _seed: number): GeneratedDrill {
  switch (id) {
    // =========================================================================
    // MODULE 1: CALCULUS & OPTIMIZATION
    // =========================================================================
    case 'double-series-gen': {
      const a = pick([2, 3, 4, 5])
      const b = pick([2, 3, 4, 5].filter((x) => x !== a))
      const iStart: 0 | 1 = pick([0, 1])
      const jStart: 0 | 1 = pick([0, 1])
      const sumI = (iStart === 0 ? 1 : 1 / a) / (1 - 1 / a)
      const sumJ = (jStart === 0 ? 1 : 1 / b) / (1 - 1 / b)
      const ans = Number((sumI * sumJ).toFixed(4))
      return {
        promptLatex: `\\text{Evaluate } \\sum_{i=${iStart}}^{\\infty} \\sum_{j=${jStart}}^{\\infty} ${a}^{-i}\\, ${b}^{-j}`,
        answer: ans,
        tolerance: 0.01,
        shortcutRule:
          'Decouple separable products: $\\sum_i \\sum_j a_i b_j = (\\sum_i a_i)(\\sum_j b_j)$, using $\\frac{\\text{first term}}{1-r}$ for each.',
        workedSolution: `Row sum ($i=${iStart}\\dots\\infty$): $\\frac{${iStart === 0 ? '1' : `1/${a}`}}{1 - 1/${a}} = ${sumI.toFixed(4)}$. Column sum ($j=${jStart}\\dots\\infty$): $\\frac{${jStart === 0 ? '1' : `1/${b}`}}{1 - 1/${b}} = ${sumJ.toFixed(4)}$. Product $= ${ans}$.`,
      }
    }

    case 'rationalize-limit-gen': {
      const k = pick([1, 2, 3])
      const a = pick([2, 4, 6, 8, 10])
      const b = pick([-7, 3, 12, 25])
      const ans = a / (2 * k)
      const k2 = k * k
      return {
        promptLatex: `\\text{Evaluate } \\lim_{t \\to +\\infty} \\left(\\sqrt{${k2 === 1 ? '' : k2}t^2 ${a >= 0 ? '+' : ''}${a}t ${b >= 0 ? '+' : ''}${b}} - ${k === 1 ? '' : k}t\\right)`,
        answer: ans,
        tolerance: 0.01,
        shortcutRule: 'Direct Arsenal Shortcut: $\\lim_{t\\to\\infty}(\\sqrt{k^2 t^2 + at + b} - kt) = \\frac{a}{2k}$ (constant $b$ vanishes!).',
        workedSolution: `Multiply & divide by conjugate $\\sqrt{${k2}t^2 + (${a})t + (${b})} + ${k}t$. Numerator becomes $(${a})t + (${b})$; denominator behaves like $2(${k})t$. Ratio $= \\frac{${a}}{2(${k})} = ${ans}$.`,
      }
    }

    case 'piecewise-c1-gen': {
      const x0 = pick([1, 2, 3])
      const a = pick([0.5, 1, 2])
      const m = pick([2, 4, 6])
      const p = pick([1, 3, 5])
      const b = m - 2 * a * x0
      const targetVal = m * x0 + p
      const c = targetVal - (a * x0 * x0 + b * x0)
      return {
        promptLatex: `f(x) = \\begin{cases} ${a === 1 ? '' : a}x^2 + bx + c, & x \\le ${x0} \\\\ ${m}x + ${p}, & x > ${x0} \\end{cases} \\quad \\text{is differentiable at } x = ${x0}.\\text{ Find } b + c.`,
        answer: Number((b + c).toFixed(4)),
        tolerance: 0.01,
        shortcutRule: 'Match slopes FIRST ($f\'_-(x_0) = f\'_+(x_0)$ kills $c$ immediately!), then match values ($f_-(x_0) = f_+(x_0)$).',
        workedSolution: `1) Slope match at $x=${x0}$: $2(${a})(${x0}) + b = ${m} \\implies b = ${b}$.\n2) Value match at $x=${x0}$: $${a}(${x0}^2) + (${b})(${x0}) + c = ${m}(${x0}) + ${p} = ${targetVal} \\implies c = ${c}$.\nTherefore $b + c = ${b + c}$.`,
      }
    }

    case 'sigmoid-sgd-gen': {
      const scale = pick([1, 2, 3])
      const sVal = pick([0.2, 0.25, 0.4, 0.5, 0.8])
      const ans = Number((scale * sVal * (1 - sVal)).toFixed(4))
      return {
        promptLatex: `\\text{Let } g(x) = \\frac{1}{1 + e^{-${scale === 1 ? '' : scale}x}}. \\text{ If } g(x_0) = ${sVal}, \\text{ compute } g'(x_0).`,
        answer: ans,
        tolerance: 0.005,
        shortcutRule: 'Scaled Sigmoid Self-Derivative: if $g(x) = \\sigma(kx)$, then $g\'(x) = k \\cdot g(x)(1 - g(x))$ — never solve for $x_0$!',
        workedSolution: `By chain rule, $g'(x_0) = ${scale} \\times g(x_0) \\times (1 - g(x_0)) = ${scale} \\times ${sVal} \\times ${(1 - sVal).toFixed(2)} = ${ans}$.`,
      }
    }

    case 'maclaurin-limit-gen': {
      const alpha = pick([1, 2, 3, 4])
      const beta = pick([2, 4, 6])
      const ans = alpha - (beta * beta) / 2
      return {
        promptLatex: `\\text{Evaluate } \\lim_{x \\to 0} \\frac{\\ln\\big((1 + ${alpha === 1 ? '' : alpha}x^2)\\cos(${beta}x)\\big)}{x^2}.`,
        answer: ans,
        tolerance: 0.01,
        shortcutRule: 'Split $\\ln(AB) = \\ln A + \\ln B$, then plug $\\ln(1+u) \\approx u$ and $\\cos(kx) \\approx 1 - \\frac{k^2 x^2}{2}$.',
        workedSolution: `Numerator $= \\ln(1 + ${alpha}x^2) + \\ln(\\cos(${beta}x)) \\approx ${alpha}x^2 + \\ln(1 - \\frac{${beta * beta}}{2}x^2) \\approx (${alpha} - ${
          (beta * beta) / 2
        })x^2$. Dividing by $x^2$ gives **${ans}**.`,
      }
    }

    case 'closed-interval-extrema-gen': {
      const r = pick([1, 2, 3])
      const d = pick([5, 10, 20])
      const left = -r - 1
      const right = 2 * r + 1
      const f = (x: number) => x * x * x - 3 * r * r * x + d
      const candidates = [left, -r, r, right]
      const vals = candidates.map((x) => ({ x, v: f(x) }))
      const maxVal = Math.max(...vals.map((o) => o.v))
      return {
        promptLatex: `\\text{Find the GLOBAL maximum value of } f(x) = x^3 - ${3 * r * r}x + ${d} \\text{ on the closed interval } [${left},\\, ${right}].`,
        answer: maxVal,
        tolerance: 0.01,
        shortcutRule: 'Closed-Interval Rule: ALWAYS build the 4-row table (interior $f\'=0$ points inside $[a,b]$ PLUS both boundary endpoints).',
        workedSolution: `1) $f'(x) = 3x^2 - ${3 * r * r} = 0 \\implies x = -${r}, +${r}$ (both inside $[${left}, ${right}]$).\n2) Candidates: ${vals
          .map((o) => `$f(${o.x}) = ${o.v}$`)
          .join(', ')}.\nNotice interior local max is $f(-${r}) = ${f(-r)}$, whereas boundary $f(${right}) = ${f(right)}$ is larger! Global max $= ${maxVal}$.`,
      }
    }

    // =========================================================================
    // MODULES 2-5: PROBABILITY & STATISTICS
    // =========================================================================
    case 'stars-bars-gen': {
      const n = pick([10, 12, 15, 18, 20])
      const k = pick([3, 4])
      const comb = (a: number, b: number) => {
        let num = 1
        let den = 1
        for (let i = 0; i < b; i++) {
          num *= a - i
          den *= i + 1
        }
        return num / den
      }
      const pos = comb(n - 1, k - 1)
      const nonneg = comb(n + k - 1, k - 1)
      const prob = Number((pos / nonneg).toFixed(4))
      return {
        promptLatex: `\\text{A non-negative integer solution to } x_1 + \\dots + x_${k} = ${n} \\text{ is picked uniformly at random. Find } P(\\text{all } x_i > 0).`,
        answer: prob,
        tolerance: 0.005,
        shortcutRule: 'Stars & Bars Ratio: Positive $\\binom{n-1}{k-1}$ divided by Non-negative $\\binom{n+k-1}{k-1}$ (GATE 2026 Q.20 pattern!).',
        workedSolution: `Positive integer tuples $= \\binom{${n - 1}}{${k - 1}} = ${pos}$. Non-negative tuples $= \\binom{${n + k - 1}}{${k - 1}} = ${nonneg}$. Probability $= \\frac{${pos}}{${nonneg}} \\approx ${prob}$.`,
      }
    }

    case 'bayes-posterior-gen': {
      const prev = pick([0.1, 0.2, 0.3, 0.4])
      const sens = pick([0.8, 0.85, 0.9])
      const fpr = pick([0.05, 0.1, 0.2])
      const tp = prev * sens
      const fp = (1 - prev) * fpr
      const ans = Number((tp / (tp + fp)).toFixed(4))
      return {
        promptLatex: `\\text{Prevalence } P(D)=${prev},\\; \\text{Sensitivity } P(+\\mid D)=${sens},\\; \\text{FPR } P(+\\mid \\bar D)=${fpr}.\\text{ Find } P(D\\mid +).`,
        answer: ans,
        tolerance: 0.005,
        shortcutRule: 'Think of 1000 people: True Positives $\\text{TP} = 1000\\cdot P(D)\\cdot\\text{Sens}$, False Positives $\\text{FP} = 1000\\cdot P(\\bar D)\\cdot\\text{FPR}$, Answer $= \\frac{\\text{TP}}{\\text{TP}+\\text{FP}}$.',
        workedSolution: `$P(+) = (${prev})(${sens}) + (${(1 - prev).toFixed(2)})(${fpr}) = ${(tp + fp).toFixed(4)}$. So $P(D\\mid +) = \\frac{${tp.toFixed(4)}}{${(tp + fp).toFixed(4)}} = ${ans}$.`,
      }
    }

    case 'exp-memoryless-gen': {
      const t1 = pick([3, 5, 7, 10])
      const pVal = pick([0.2, 0.25, 0.35, 0.4, 0.6])
      return {
        promptLatex: `X \\sim \\text{Exp}(\\lambda) \\text{ satisfies } P(X > ${t1}) = ${pVal}. \\text{ Compute } P(X > ${2 * t1} \\mid X > ${t1}).`,
        answer: pVal,
        tolerance: 0.002,
        shortcutRule: 'Memorylessness of Exponential: $P(X > a + b \\mid X > b) = P(X > a)$ — NEVER solve for $\\lambda$!',
        workedSolution: `By memorylessness, $P(X > ${2 * t1} \\mid X > ${t1}) = P(X > ${t1}) = ${pVal}$.`,
      }
    }

    case 'cdf-quantile-gen': {
      // F(x) = ((x + 1)/2)^2 on [-1, 1] or (x - t)/(b - t) on [t, b]
      const b = pick([4, 6, 8])
      const med = pick([2, 3, 4].filter((m) => m < b))
      // (med - t)/(b - t) = 0.5 => 2*med - 2t = b - t => t = 2*med - b
      const t = 2 * med - b
      return {
        promptLatex: `F_X(x) = \\frac{x - t}{${b} - t} \\text{ for } x \\in [t, ${b}]. \\text{ If the median of } X \\text{ is } ${med}, \\text{ find } t.`,
        answer: t,
        tolerance: 0.01,
        shortcutRule: 'Median $m$ satisfies $F_X(m) = 0.5$ directly — no differentiation to PDF needed!',
        workedSolution: `Set $F_X(${med}) = 0.5 \\implies \\frac{${med} - t}{${b} - t} = \\frac{1}{2} \\implies ${2 * med} - 2t = ${b} - t \\implies t = ${t}$.`,
      }
    }

    case 'pairwise-var-gen': {
      const n = pick([50, 100, 200])
      const k = pick([4, 9, 16, 25])
      // Identity: sum_i sum_j (x_i - x_j)^2 = 2n sum_i (x_i - xbar)^2
      // Given (1/(2*n)) * sum_i sum_j (x_i - x_j)^2 = (n-1)*k => sample var s^2 = k!
      const rhs = (n - 1) * k
      return {
        promptLatex: `\\text{Given } n=${n} \\text{ numbers with } \\frac{1}{${2 * n}} \\sum_{i=1}^{${n}} \\sum_{j=1}^{${n}} (x_i - x_j)^2 = ${rhs}, \\text{ find sample variance } s^2 = \\frac{1}{${n - 1}}\\sum_{i=1}^{${n}} (x_i - \\bar{x})^2.`,
        answer: k,
        tolerance: 0.01,
        shortcutRule: 'Pairwise Square Identity: $\\sum_{i=1}^n \\sum_{j=1}^n (x_i - x_j)^2 = 2n \\sum_{i=1}^n (x_i - \\bar x)^2$ (GATE 2026 Q.62!).',
        workedSolution: `Divide the left-hand side identity by $2n = ${2 * n}$: $\\sum_{i=1}^{${n}}(x_i - \\bar{x})^2 = ${rhs}$. Dividing by $n-1 = ${n - 1}$ gives $s^2 = ${k}$.`,
      }
    }

    case 'streak-expectation-gen': {
      // Expected flips of coin with heads prob p to get 2 consecutive Heads: (1+p)/p^2
      const p = pick([0.5, 0.25, 0.2])
      const ans = Number(((1 + p) / (p * p)).toFixed(4))
      return {
        promptLatex: `\\text{A biased coin lands Heads with prob } p = ${p}. \\text{ Find expected tosses until TWO consecutive Heads.}`,
        answer: ans,
        tolerance: 0.05,
        shortcutRule: '2-Consecutive Success Recurrence: $E = \\frac{1}{p} + \\frac{1}{p^2} = \\frac{1+p}{p^2}$ (for fair die even $p=1/2 \\implies 6$, GATE 2024 Q.36!).',
        workedSolution: `First-step equations: $E_0 = 1 + p E_1 + (1-p) E_0$ and $E_1 = 1 + p(0) + (1-p) E_0$. Solving gives $E_0 = \\frac{1+p}{p^2} = \\frac{${1 + p}}{${(p * p).toFixed(4)}} = ${ans}$.`,
      }
    }

    case 'clt-prob-gen': {
      // Normal standardization or Binomial/Poisson CLT z-score
      const n = pick([100, 400])
      const p = 0.5
      const mu = n * p
      const sd = Math.sqrt(n * p * (1 - p))
      const k = pick([1, 2])
      const bound = mu + k * sd
      return {
        promptLatex: `Y = \\sum_{i=1}^{${n}} X_i \\text{ with } X_i \\stackrel{\\text{iid}}{\\sim} \\text{Bernoulli}(0.5). \\text{ Compute CLT } z\\text{-score for } Y = ${bound}.`,
        answer: k,
        tolerance: 0.01,
        shortcutRule: 'CLT Standardization: $Z = \\frac{Y - n\\mu}{\\sqrt{n}\\,\\sigma}$ with $\\mu = p,\\; \\sigma = \\sqrt{p(1-p)}$.',
        workedSolution: `Mean $n p = ${mu}$, SD $= \\sqrt{${n}\\cdot 0.25} = ${sd}$. So $z = \\frac{${bound} - ${mu}}{${sd}} = ${k}$.`,
      }
    }

    case 'chi2-t-stat-gen': {
      // Compute t-statistic or chi-squared statistic
      const mode = pick(['t', 'chi'])
      if (mode === 't') {
        const xbar = pick([52, 54, 56])
        const mu0 = 50
        const s = pick([4, 6, 8])
        const n = pick([16, 25])
        const ans = Number((((xbar - mu0) * Math.sqrt(n)) / s).toFixed(4))
        return {
          promptLatex: `\\text{Sample } n=${n},\\; \\bar{x}=${xbar},\\; s=${s}. \\text{ Test } H_0: \\mu = ${mu0}. \\text{ Compute } |t|\\text{-statistic.}`,
          answer: ans,
          tolerance: 0.01,
          shortcutRule: 'One-sample $t$-stat $= \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$ with $\\text{df} = n - 1$ (used when population $\\sigma$ is unknown!).',
          workedSolution: `$t = \\frac{${xbar} - ${mu0}}{${s} / \\sqrt{${n}}} = \\frac{${xbar - mu0}}{${s}/${Math.sqrt(n)}} = ${ans}$.`,
        }
      }
      const o1 = pick([28, 30, 32])
      const e = 20
      const o2 = 40 - o1
      const chi = Number((((o1 - e) ** 2 / e) + ((o2 - e) ** 2 / e)).toFixed(4))
      return {
        promptLatex: `\\text{Observed coin counts in 40 tosses: } O_H = ${o1},\\; O_T = ${o2} \\text{ vs fair expected } E = 20 \\text{ each. Find Pearson } \\chi^2 \\text{ statistic.}`,
        answer: chi,
        tolerance: 0.01,
        shortcutRule: 'Chi-Squared Goodness-of-Fit: $\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$ with $\\text{df} = k - 1$.',
        workedSolution: `$\\chi^2 = \\frac{(${o1}-20)^2}{20} + \\frac{(${o2}-20)^2}{20} = \\frac{${(o1 - 20) ** 2}}{20} + \\frac{${(o2 - 20) ** 2}}{20} = ${chi}$.`,
      }
    }

    // =========================================================================
    // MODULES 6-7: LINEAR ALGEBRA
    // =========================================================================
    case 'rank-nullity-gen': {
      const m = pick([4, 5, 6])
      const n = pick([6, 7, 8])
      const r = pick([2, 3, 4].filter((x) => x <= m))
      const nullity = n - r
      return {
        promptLatex: `A \\in \\mathbb{R}^{${m} \\times ${n}} \\text{ has } \\text{rank}(A) = ${r}. \\text{ Find dimension of the solution space of } Ax = 0.`,
        answer: nullity,
        tolerance: 0.001,
        shortcutRule: 'Rank-Nullity: $\\text{rank}(A) + \\text{nullity}(A) = n$ (**number of columns**, NOT rows!).',
        workedSolution: `Nullity $= n - \\text{rank}(A) = ${n} - ${r} = ${nullity}$.`,
      }
    }

    case 'rotation-power-gen': {
      // M is rotation by 2pi/k, compute trace(M^(k*m + 1)) or M^k = I
      const k = pick([4, 5, 6])
      const power = pick([2025, 2026, 2027])
      const rem = power % k
      const traceVal = Number((2 * Math.cos((2 * Math.PI * rem) / k)).toFixed(4))
      return {
        promptLatex: `M = \\begin{bmatrix} \\cos(2\\pi/${k}) & -\\sin(2\\pi/${k}) \\\\ \\sin(2\\pi/${k}) & \\cos(2\\pi/${k}) \\end{bmatrix}. \\text{ Compute } \\text{trace}(M^{${power}}).`,
        answer: traceVal,
        tolerance: 0.01,
        shortcutRule: '2D Rotation Power = Angle Multiplication: $R(\\theta)^p = R(p\\theta)$, periodic with $R(2\\pi)=I_2$ (GATE 2026 Q.21!).',
        workedSolution: `${power} \\bmod ${k} = ${rem}$, so $M^{${power}} = R(${rem} \\cdot \\frac{2\\pi}{${k}})$. Trace $= 2\\cos(\\frac{${2 * rem}\\pi}{${k}}) = ${traceVal}$.`,
      }
    }

    case 'rank1-svd-gen': {
      const u = pick([
        [1, 2, 2],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [2, 3, 6],
      ])
      const normSq = u.reduce((s, x) => s + x * x, 0)
      return {
        promptLatex: `u = [${u.join(', ')}]^T \\text{ and } M = u u^T. \\text{ Find the sum of all singular values } \\sum_i \\sigma_i(M).`,
        answer: normSq,
        tolerance: 0.01,
        shortcutRule: 'Rank-1 Symmetric PSD $M = uu^T$: only $\\sigma_1 = \\|u\\|_2^2 = \\text{trace}(M)$, all other $\\sigma_i = 0$ (GATE 2024 Q.61!).',
        workedSolution: `Because $\\text{rank}(uu^T) = 1$, there is only 1 nonzero singular value $\\sigma_1 = \\|u\\|_2^2 = ${u.map((x) => `${x}^2`).join('+')} = ${normSq}$.`,
      }
    }

    // =========================================================================
    // MODULES 8-9: PYTHON & DSA
    // =========================================================================
    case 'linear-probe-gen': {
      const m = 10
      const a = pick([1, 3])
      const seq = [1, 4, 5, 6]
      const xNew = pick([14, 15, 24])
      const occ = new Set<number>()
      seq.forEach((v) => {
        let idx = (a * v) % m
        while (occ.has(idx)) idx = (idx + 1) % m
        occ.add(idx)
      })
      let finalIdx = (a * xNew) % m
      const h0 = finalIdx
      while (occ.has(finalIdx)) finalIdx = (finalIdx + 1) % m
      return {
        promptLatex: `\\text{Hash table size } m=10,\\; h(x) = ${a === 1 ? 'x' : `${a}x`} \\bmod 10 \\text{ with linear probing. After inserting } [${seq.join(', ')}], \\text{ at what index is } ${xNew} \\text{ stored?}`,
        answer: finalIdx,
        tolerance: 0.001,
        shortcutRule: 'Keep a small 10-slot occupancy array $[0..9]$ and step $(h(x) + i) \\bmod m$ until the first empty slot (GATE 2025 Q.18!).',
        workedSolution: `Occupied slots after $[${seq.join(', ')}]$: ${Array.from(occ).sort().join(', ')}. Now $h(${xNew}) = ${h0}$; probing sequentially lands at free slot **${finalIdx}**.`,
      }
    }

    case 'recursion-stack-gen': {
      // mystery(n) = mystery(n-1) + mystery(n-2) with base n<=0 => 1 call (like 2026 Q39)
      const n = pick([3, 4, 5])
      const calls = (k: number): number => (k <= 0 ? 1 : 1 + calls(k - 1) + calls(k - 2))
      const ans = calls(n)
      return {
        promptLatex: `\\text{In Python: } \\texttt{def f(n): return 1 if n<=0 else f(n-1)+f(n-2)}.\\text{ Total function activations for } \\texttt{f(${n})} \\text{ (incl. initial call)?}`,
        answer: ans,
        tolerance: 0.001,
        shortcutRule: 'Total Calls $C(n) = 1 + C(n-1) + C(n-2)$ — draw the tiny recursion tree or apply the recurrence (GATE 2026 Q.39!).',
        workedSolution: `$C(0)=1, C(-1)=1 \\implies C(1)=3, C(2)=5, C(3)=9, C(4)=15, C(5)=25$. So $C(${n}) = ${ans}$.`,
      }
    }

    case 'sort-swaps-gen': {
      // Inversion count = adjacent swaps in Insertion / Bubble sort!
      const arr = pick([
        [5, 3, 4, 1, 2],
        [4, 2, 5, 1, 3],
        [1, 3, 5, 2, 4],
        [4, 3, 2, 1, 5],
      ])
      let inv = 0
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) inv++
        }
      }
      return {
        promptLatex: `\\text{How many adjacent swaps does standard Insertion Sort perform on } [${arr.join(',\\, ')}]?`,
        answer: inv,
        tolerance: 0.001,
        shortcutRule: 'Swap = Inversion Theorem: Both standard Insertion Sort & Bubble Sort perform EXACTLY the number of **inversions** $(i < j, A[i] > A[j])$!',
        workedSolution: `Count elements to the left of each element that are strictly greater: total inversions $= ${inv}$ swaps.`,
      }
    }

    case 'bsearch-depth-gen': {
      const n = pick([100, 500, 1000, 2000])
      const ans = Math.floor(Math.log2(n)) + 1
      return {
        promptLatex: `\\text{Maximum 3-way comparisons to search an ABSENT target via Binary Search in a sorted array of } ${n} \\text{ elements?}`,
        answer: ans,
        tolerance: 0.001,
        shortcutRule: 'Binary Search Max Comparisons $= \\lfloor \\log_2 n \\rfloor + 1 = \\lceil \\log_2(n+1) \\rceil$ (GATE 2026 Q.31!).',
        workedSolution: `$\\lfloor \\log_2(${n}) \\rfloor + 1 = ${Math.floor(Math.log2(n))} + 1 = ${ans}$.`,
      }
    }

    // =========================================================================
    // MODULES 10-11: GRAPHS, AI SEARCH & LOGIC
    // =========================================================================
    case 'astar-trace-gen': {
      const gA = pick([2, 3])
      const hA = pick([4, 5])
      const gB = pick([4, 5])
      const hB = pick([1, 2])
      const fA = gA + hA
      const fB = gB + hB
      const diff = Math.abs(fA - fB)
      return {
        promptLatex: `\\text{From } S,\\; A \\text{ has } g(A)=${gA}, h(A)=${hA};\\; B \\text{ has } g(B)=${gB}, h(B)=${hB}.\\text{ What is } \\min(f(A), f(B)) \\text{ expanded first by } A^*\\text{?}`,
        answer: Math.min(fA, fB),
        tolerance: 0.001,
        shortcutRule: '$A^*$ ALWAYS expands the open-frontier node with smallest $f(n) = g(n) + h(n)$ (never $h(n)$ alone!).',
        workedSolution: `$f(A) = ${gA}+${hA} = ${fA}$, $f(B) = ${gB}+${hB} = ${fB}$. Difference $= ${diff}$, minimum $f$-value $= ${Math.min(fA, fB)}$.`,
      }
    }

    case 'alphabeta-bound-gen': {
      // MAX root -> MIN left has best v1; MIN right sees first child v2 < v1 -> alpha cut!
      const v1 = pick([5, 6, 8])
      const v2 = pick([2, 3, 4])
      return {
        promptLatex: `\\text{MAX root sees left MIN child }= ${v1}. \\text{ Right MIN child evaluates its first leaf }= ${v2} < ${v1}. \\text{ At what } \\alpha\\text{-cutoff threshold does MAX prune remaining leaves of right child?}`,
        answer: v1,
        tolerance: 0.001,
        shortcutRule: 'Alpha-Beta Rule: At a MIN node, if $\\text{value} \\le \\alpha$ (MAX ancestor’s best guaranteed score), PRUNE remaining siblings immediately!',
        workedSolution: `After left subtree, root MAX sets $\\alpha = ${v1}$. In right MIN node, seeing ${v2} forces $\\beta \\le ${v2} < \\alpha = ${v1}$, so MIN cannot raise above $\\alpha=${v1}$ — pruned!`,
      }
    }

    case 'truth-entailment-gen': {
      const k = pick([2, 3, 4])
      const rows = Math.pow(2, k)
      return {
        promptLatex: `\\text{How many truth assignments make } (p_1 \\lor p_2 \\lor \\dots \\lor p_${k}) \\text{ TRUE out of } ${rows} \\text{ total rows?}`,
        answer: rows - 1,
        tolerance: 0.001,
        shortcutRule: 'Complement Counting on Truth Tables: Only 1 assignment makes $p_1 \\lor \\dots \\lor p_k$ FALSE (all False), so $2^k - 1$ make it TRUE!',
        workedSolution: `$2^{${k}} - 1 = ${rows} - 1 = ${rows - 1}$.`,
      }
    }

    // =========================================================================
    // MODULES 12-13: DBMS & DATA WAREHOUSING
    // =========================================================================
    case 'fd-candidate-keys-gen': {
      // R(A,B,C,D) with A->B, B->C, C->A => 3 candidate keys (AD, BD, CD)
      const nCycles = pick([2, 3, 4])
      return {
        promptLatex: `R(A_1,\\dots,A_${nCycles}, D) \\text{ has cycle } A_1\\to A_2 \\to \\dots \\to A_${nCycles} \\to A_1 \\text{ (with } D \\text{ absent from all RHS)}.\\text{ Count candidate keys.}`,
        answer: nCycles,
        tolerance: 0.001,
        shortcutRule: 'Never-on-RHS Essential Core Rule: Any attribute never on the RHS ($D$) MUST appear in every candidate key; cycle members swap freely!',
        workedSolution: `$D$ must be in every key. Each $A_i$ closes the entire cycle $\{A_1,\\dots,A_${nCycles}\}$, giving **${nCycles}** candidate keys: $A_1D, \\dots, A_${nCycles}D$ (like GATE 2026 Q.17!).`,
      }
    }

    case 'er-tables-gen': {
      const m = pick([2, 3])
      const mv = pick([1, 2])
      const mnRel = pick([1, 2])
      const total = m + mv + mnRel
      return {
        promptLatex: `\\text{ER diagram has } ${m} \\text{ strong entities, } ${mv} \\text{ multivalued attribute(s), and } ${mnRel} \\text{ M:N relationship(s) (with no 1:1/1:N extras). Min 3NF tables?}`,
        answer: total,
        tolerance: 0.001,
        shortcutRule: 'ER-to-3NF Table Formula: 1 table per Strong Entity + 1 per Multivalued Attribute + 1 per M:N Relationship (1:N merges into N side!).',
        workedSolution: `$${m}$ (entities) $+ ${mv}$ (multivalued) $+ ${mnRel}$ (M:N) $= ${total}$ tables (GATE 2026 Q.61!).`,
      }
    }

    case 'btree-fanout-gen': {
      const blk = pick([1024, 2048, 4096])
      const pPtr = pick([8, 10])
      const kSize = pick([10, 11, 12])
      // p * pPtr + (p - 1) * kSize <= blk  => p * (pPtr + kSize) <= blk + kSize
      const pMax = Math.floor((blk + kSize) / (pPtr + kSize))
      return {
        promptLatex: `\\text{B+ Tree internal node: block } = ${blk}\\text{B},\\; \\text{node ptr } = ${pPtr}\\text{B},\\; \\text{key } = ${kSize}\\text{B}. \\text{ Max node pointers } p?`,
        answer: pMax,
        tolerance: 0.001,
        shortcutRule: 'Internal B+ Node Inequality: $p \\cdot P_{\\text{node}} + (p-1)\\cdot K \\le B$ — record pointers belong ONLY in leaf nodes (GATE 2026 Q.32!).',
        workedSolution: `$${pPtr}p + ${kSize}(p-1) \\le ${blk} \\implies ${pPtr + kSize}p \\le ${blk + kSize} \\implies p = \\lfloor \\frac{${blk + kSize}}{${pPtr + kSize}} \\rfloor = ${pMax}$.`,
      }
    }

    case 'olap-cube-gen': {
      const levels = pick([
        [3, 3, 3],
        [2, 3, 4],
        [2, 2, 2, 2],
      ])
      const ans = levels.reduce((acc, L) => acc * (L + 1), 1)
      return {
        promptLatex: `\\text{Data warehouse has } ${levels.length} \\text{ dimensions with hierarchy depths } [${levels.join(', ')}]. \\text{ Total distinct cuboids in the lattice?}`,
        answer: ans,
        tolerance: 0.001,
        shortcutRule: 'Cuboid Lattice Formula: $\\prod_{i=1}^d (L_i + 1)$ where $+1$ accounts for the `ALL` (apex) aggregation level (GATE 2026 Q.43!).',
        workedSolution: `Cuboids $= ${levels.map((L) => `(${L}+1)`).join(' \\times ')} = ${ans}$.`,
      }
    }

    // =========================================================================
    // MODULES 14-15: MACHINE LEARNING & BAYES NETS
    // =========================================================================
    case 'ols-ridge-loss-gen': {
      const w1 = pick([-3, -2, 2])
      const w2 = pick([3, 4])
      const x1 = 1
      const x2 = 2
      const lam = pick([0.1, 0.2, 0.5])
      const yTrue = x1 + x2
      const yHat = w1 * x1 + w2 * x2
      const mae = Math.abs(yTrue - yHat)
      const normSq = w1 * w1 + w2 * w2
      const ans = Number((mae + lam * normSq).toFixed(4))
      return {
        promptLatex: `w=[${w1}, ${w2}]^T,\\; x=[1, 2]^T,\\; y=3.\\text{ Compute } |y - w^Tx| + ${lam}\\|w\\|_2^2.`,
        answer: ans,
        tolerance: 0.01,
        shortcutRule: 'Read the loss norm carefully! GATE 2026 Q.55 mixed L1 error $|y-\\hat y|$ with $L_2^2$ penalty $\\lambda\\|w\\|_2^2$.',
        workedSolution: `$w^Tx = ${yHat} \\implies |3 - (${yHat})| = ${mae}$. Penalty $= ${lam}(${w1}^2 + ${w2}^2) = ${(lam * normSq).toFixed(2)}$. Total $= ${ans}$.`,
      }
    }

    case 'mlp-backprop-gen': {
      const l1 = pick([10, 20, 30])
      const l2 = pick([4, 5])
      const l3 = pick([2, 3])
      const l4 = 1
      const noBias = l1 * l2 + l2 * l3 + l3 * l4
      return {
        promptLatex: `\\text{Fully-connected MLP architecture } ${l1}-${l2}-${l3}-${l4} \\text{ with NO biases. Total learnable weights?}`,
        answer: noBias,
        tolerance: 0.001,
        shortcutRule: 'No-Bias MLP Parameters $= \\sum_k n_k n_{k+1}$ (add $+n_{k+1}$ per layer ONLY if biases exist — GATE 2026 Q.56!).',
        workedSolution: `$${l1}\\times${l2} + ${l2}\\times${l3} + ${l3}\\times${l4} = ${l1 * l2} + ${l2 * l3} + ${l3 * l4} = ${noBias}$.`,
      }
    }

    case 'confusion-metrics-gen': {
      const tp = pick([8, 9, 12])
      const fp = pick([2, 3, 4])
      const fn = pick([1, 2, 3])
      const prec = Number((tp / (tp + fp)).toFixed(4))
      return {
        promptLatex: `\\text{Confusion matrix counts: } \\text{TP}=${tp},\\; \\text{FP}=${fp},\\; \\text{FN}=${fn},\\; \\text{TN}=15.\\text{ Compute Precision (to 3 decimals).}`,
        answer: prec,
        tolerance: 0.005,
        shortcutRule: 'Precision $= \\frac{\\text{TP}}{\\text{TP}+\\text{FP}}$ (predicted-positive denominator), Recall $= \\frac{\\text{TP}}{\\text{TP}+\\text{FN}}$ (actual-positive denominator).',
        workedSolution: `$\\text{Precision} = \\frac{${tp}}{${tp} + ${fp}} = \\frac{${tp}}{${tp + fp}} \\approx ${prec}$.`,
      }
    }

    case 'pca-variance-gen': {
      const r = pick([10, 100])
      return {
        promptLatex: `\\text{Centered data in } \\mathbb{R}^{50} \\text{ has covariance eigenvalues } \\lambda_i = ${r}^{2-i} \\;(i=1\\dots 50).\\text{ Compute } \\max_{\\|u\\|_2=1} \\frac{1}{n}\\sum_k (u^T x^{(k)})^2.`,
        answer: r,
        tolerance: 0.01,
        shortcutRule: 'PCA = Rayleigh Quotient on Empirical Covariance $\\Sigma$: max projected variance along unit vector $= \\lambda_{\\max}(\\Sigma)$ (GATE 2025 Q.60!).',
        workedSolution: `For $i=1$, $\\lambda_1 = ${r}^{2-1} = ${r}$ (the largest eigenvalue). Thus max variance $= ${r}$.`,
      }
    }

    case 'bayesnet-cpt-gen': {
      const pU = pick([0.4, 0.5])
      const pV = pick([0.5, 0.6])
      const pWgivenUV = pick([0.8, 0.9, 1.0])
      const pZgivenW = pick([0.5, 0.7])
      const ans = Number((pU * pV * pWgivenUV * pZgivenW).toFixed(4))
      return {
        promptLatex: `\\text{DAG } U\\to W \\leftarrow V,\\; W\\to Z.\\text{ Given } P(U=1)=${pU}, P(V=1)=${pV}, P(W=1\\mid 1,1)=${pWgivenUV}, P(Z=1\\mid 1)=${pZgivenW},\\text{ find } P(1,1,1,1).`,
        answer: ans,
        tolerance: 0.002,
        shortcutRule: 'Bayes Net Chain Rule: Multiply local CPT factors $\\prod_i P(X_i \\mid \\text{Parents}(X_i))$ (GATE 2024 Q.64!).',
        workedSolution: `$P(1,1,1,1) = ${pU} \\times ${pV} \\times ${pWgivenUV} \\times ${pZgivenW} = ${ans}$.`,
      }
    }

    // =========================================================================
    // MODULES 16-17: GENERAL APTITUDE & CROSS-TOPIC SYNTHESIS
    // =========================================================================
    case 'ga-quant-series-gen': {
      const a = pick([2, 3, 4])
      const b = pick([3, 4, 5])
      // Interleaved series (1/a + 1/a^2 + ...) + (1/b + 1/b^2 + ...)
      const s1 = 1 / (a - 1)
      const s2 = 1 / (b - 1)
      const ans = Number((s1 + s2).toFixed(4))
      return {
        promptLatex: `\\text{Compute } \\frac{1}{${a}} + \\frac{1}{${b}} + \\frac{1}{${a * a}} + \\frac{1}{${b * b}} + \\frac{1}{${a * a * a}} + \\frac{1}{${b * b * b}} + \\dots`,
        answer: ans,
        tolerance: 0.005,
        shortcutRule: 'Split interleaved geometric series into odd-term sum + even-term sum (GATE 2024 GA Q.4!).',
        workedSolution: `Series A: $\\frac{1/${a}}{1 - 1/${a}} = \\frac{1}{${a - 1}}$. Series B: $\\frac{1/${b}}{1 - 1/${b}} = \\frac{1}{${b - 1}}$. Total $= ${s1.toFixed(4)} + ${s2.toFixed(4)} = ${ans}$.`,
      }
    }

    case 'cross-topic-hybrid-gen': {
      // Combine SGD + OLS or Rayleigh + Projection trace
      const rank = pick([4, 6, 8])
      const n = 10
      // Centering or projection matrix A of rank r in R^n: trace(A^2 + 2A) = 3*rank!
      const ans = 3 * rank
      return {
        promptLatex: `P \\in \\mathbb{R}^{${n}\\times ${n}} \\text{ is an orthogonal projection matrix with } \\text{rank}(P) = ${rank}.\\text{ Compute } \\text{trace}(P^2 + 2P).`,
        answer: ans,
        tolerance: 0.01,
        shortcutRule: 'Projection Super-Identity: $P^2 = P$ and eigenvalues $\\in \\{0, 1\\}$, so $\\text{trace}(P) = \\text{rank}(P)$!',
        workedSolution: `Since $P^2 = P$, $\\text{trace}(P^2 + 2P) = \\text{trace}(3P) = 3\\,\\text{rank}(P) = 3(${rank}) = ${ans}$.`,
      }
    }
  }
}

export const InfiniteNumericalGenerator: React.FC<{ generatorId: GeneratorId }> = ({ generatorId }) => {
  const [seed, setSeed] = useState(1)
  const [drill, setDrill] = useState<GeneratedDrill>(() => makeDrill(generatorId, 1))
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState<null | boolean>(null)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    setSeed(1)
    setDrill(makeDrill(generatorId, 1))
    setInput('')
    setChecked(null)
  }, [generatorId])

  const regenerate = () => {
    const nextSeed = seed + 1
    setSeed(nextSeed)
    setDrill(makeDrill(generatorId, nextSeed))
    setInput('')
    setChecked(null)
  }

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const num = Number(input.trim())
    if (Number.isNaN(num) || input.trim() === '') return
    const ok = Math.abs(num - drill.answer) <= drill.tolerance
    setChecked(ok)
    setStreak((s) => (ok ? s + 1 : 0))
  }

  return (
    <div className="mt-6 rounded-xl border s-surface p-5 s-rail-accent">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" style={{ color: 'var(--formula)' }} />
          <h4 className="font-bold s-text-primary text-sm">
            Infinite NAT Speed Drill — Practice Until Automatic
          </h4>
          {streak > 0 && (
            <span className="px-2 py-0.5 rounded-full border s-pill-ok text-xs font-mono">
              Streak: {streak}
            </span>
          )}
        </div>
        <button
          onClick={regenerate}
          className="px-3 py-1.5 rounded-lg s-btn-primary text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Generate New Numbers
        </button>
      </div>

      <div className="rounded-lg s-inset border p-4 mb-4">
        <MathText text={`$$${drill.promptLatex}$$`} />
      </div>

      <form onSubmit={handleCheck} className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setChecked(null)
          }}
          placeholder="Enter numerical answer (e.g. 0.5 or -4)"
          className="px-3.5 py-2 rounded-lg border s-input font-mono text-sm w-64"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg s-btn-primary text-sm font-semibold cursor-pointer transition"
        >
          Check NAT
        </button>
      </form>

      {checked !== null && (
        <div
          className={`mt-4 rounded-lg p-4 border text-sm space-y-2 ${
            checked ? 's-rail-ok' : 's-rail-bad'
          }`}
          style={{ borderColor: checked ? 'var(--ok-border)' : 'var(--bad-border)' }}
        >
          <div className="flex items-center gap-2 font-semibold">
            {checked ? (
              <>
                <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--ok)' }} />
                <span style={{ color: 'var(--ok-text)' }}>Spot on! Exact Answer: {Number(drill.answer.toFixed(4))}</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" style={{ color: 'var(--bad)' }} />
                <span style={{ color: 'var(--bad-text)' }}>Not quite — Exact Answer: {Number(drill.answer.toFixed(4))}</span>
              </>
            )}
          </div>
          <div className="text-xs s-inset p-2.5 rounded border" style={{ color: 'var(--formula-text)' }}>
            <strong>Direct Arsenal Shortcut: </strong>
            <MathText text={drill.shortcutRule} />
          </div>
          <div className="text-xs s-text-primary whitespace-pre-line">
            <MathText text={drill.workedSolution} />
          </div>
        </div>
      )}
    </div>
  )
}
