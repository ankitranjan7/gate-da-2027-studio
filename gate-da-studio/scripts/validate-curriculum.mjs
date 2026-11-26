import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const katex = require('katex')

const VALID_SANDBOX_IDS = new Set([
  'series-growth-lab',
  'limit-xray-lab',
  'piecewise-gluer-lab',
  'relu-sigmoid-diff-lab',
  'taylor-maclaurin-lab',
  'extrema-convexity-sgd-lab',
  'bayes-posterior-lab',
  'distribution-clt-lab',
  'hypothesis-test-lab',
  'projection-eigen-lab',
  'rotation-svd-lab',
  'python-trace-lab',
  'hash-table-lab',
  'sorting-search-lab',
  'graph-astar-lab',
  'minimax-alphabeta-lab',
  'logic-truth-lab',
  'dbms-fd-ra-lab',
  'btree-olap-lab',
  'ml-svm-ridge-lab',
  'ml-pca-bayesnet-lab',
  'ga-synthesis-lab',
])

const VALID_GENERATOR_IDS = new Set([
  'double-series-gen',
  'rationalize-limit-gen',
  'piecewise-c1-gen',
  'sigmoid-sgd-gen',
  'maclaurin-limit-gen',
  'closed-interval-extrema-gen',
  'stars-bars-gen',
  'bayes-posterior-gen',
  'exp-memoryless-gen',
  'cdf-quantile-gen',
  'pairwise-var-gen',
  'streak-expectation-gen',
  'clt-prob-gen',
  'chi2-t-stat-gen',
  'rank-nullity-gen',
  'rotation-power-gen',
  'rank1-svd-gen',
  'linear-probe-gen',
  'recursion-stack-gen',
  'sort-swaps-gen',
  'bsearch-depth-gen',
  'astar-trace-gen',
  'alphabeta-bound-gen',
  'truth-entailment-gen',
  'fd-candidate-keys-gen',
  'er-tables-gen',
  'btree-fanout-gen',
  'olap-cube-gen',
  'ols-ridge-loss-gen',
  'mlp-backprop-gen',
  'confusion-metrics-gen',
  'pca-variance-gen',
  'bayesnet-cpt-gen',
  'ga-quant-series-gen',
  'cross-topic-hybrid-gen',
])

const rawArgs = process.argv.slice(2)
const requireGlossary = rawArgs.includes('--require-glossary')
const files = rawArgs.filter((arg) => arg !== '--require-glossary')
if (files.length === 0) {
  console.error('Usage: node scripts/validate-curriculum.mjs [--require-glossary] <ts-file> [...]')
  process.exit(1)
}

let totalChapters = 0
let totalQuestions = 0
let totalGlossaryTerms = 0
let totalMath = 0
const errors = []
const chapterIds = new Set()
const questionIds = new Set()

function checkMathString(str, loc, isRawBlock = false) {
  if (typeof str !== 'string') return
  if (/[\x08\x0c\x0b\r]/.test(str)) {
    errors.push(`${loc}: Contains unescaped control character (missing double backslash before \\f, \\b, \\r, \\v in LaTeX)`)
  }
  if (isRawBlock) {
    totalMath++
    try {
      katex.renderToString(str, { displayMode: true, throwOnError: true, strict: false })
    } catch (e) {
      errors.push(`${loc}: ${e.message} -> ${str.slice(0, 120)}`)
    }
    return
  }

  // Strip fenced code blocks before scanning for LaTeX math delimiters
  const withoutCode = str.replace(/```[a-zA-Z0-9_-]*\n[\s\S]*?```/g, ' ')

  const strippedDisplay = withoutCode.replace(/\$\$([\s\S]+?)\$\$/g, (_, inner) => {
    totalMath++
    try {
      katex.renderToString(inner, { displayMode: true, throwOnError: true, strict: false })
    } catch (e) {
      errors.push(`${loc} [$$]: ${e.message} -> ${inner.slice(0, 120)}`)
    }
    return ' '
  })

  strippedDisplay.replace(/\$([^\n$]+?)\$/g, (_, inner) => {
    totalMath++
    try {
      katex.renderToString(inner, { displayMode: false, throwOnError: true, strict: false })
    } catch (e) {
      errors.push(`${loc} [$]: ${e.message} -> ${inner.slice(0, 120)}`)
    }
    return ' '
  })
}

function walkStrings(obj, loc, keyName = '') {
  if (typeof obj === 'string') {
    checkMathString(obj, loc, keyName === 'formulaLatex' || keyName === 'directWeaponLatex')
    return
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => walkStrings(item, `${loc}[${i}]`, keyName))
    return
  }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      walkStrings(v, `${loc}.${k}`, k)
    }
  }
}

for (const file of files) {
  const abs = path.resolve(file)
  const tmpOut = `/tmp/val_${path.basename(abs, '.ts')}_${process.pid}.cjs`
  try {
    esbuild.buildSync({
      entryPoints: [abs],
      bundle: true,
      platform: 'node',
      format: 'cjs',
      outfile: tmpOut,
      logLevel: 'silent',
    })
    const mod = require(tmpOut)
    const exportedKey = Object.keys(mod).find((k) => Array.isArray(mod[k]))
    if (!exportedKey) {
      errors.push(`${file}: No exported ChapterData[] array found`)
      continue
    }
    const chapters = mod[exportedKey]
    for (const ch of chapters) {
      totalChapters++
      if (!ch.id || chapterIds.has(ch.id)) errors.push(`${file}: Duplicate/missing chapter id ${ch.id}`)
      chapterIds.add(ch.id)
      if (!ch.concepts?.length) errors.push(`${ch.id}: Missing concepts`)
      if (!ch.howToThinkPlaybook?.length) errors.push(`${ch.id}: Missing howToThinkPlaybook`)
      if (!ch.arsenalCards?.length) errors.push(`${ch.id}: Missing arsenalCards`)
      if (!ch.questions?.length) errors.push(`${ch.id}: Missing questions`)
      if (!VALID_GENERATOR_IDS.has(ch.generatorId)) errors.push(`${ch.id}: Invalid generatorId "${ch.generatorId}"`)

      if (!Array.isArray(ch.glossary) || ch.glossary.length < 6) {
        errors.push(`${ch.id}: glossary must be an array of at least 6 terms`)
      } else {
        ch.glossary.forEach((g, i) => {
          if (!g || typeof g.term !== 'string' || !g.term.trim()) {
            errors.push(`${ch.id}.glossary[${i}]: missing non-empty term`)
          }
          if (!g || typeof g.plainEnglish !== 'string' || !g.plainEnglish.trim()) {
            errors.push(`${ch.id}.glossary[${i}]: missing non-empty plainEnglish`)
          }
          if (!g || typeof g.tinyExample !== 'string' || !g.tinyExample.trim()) {
            errors.push(`${ch.id}.glossary[${i}]: missing non-empty tinyExample`)
          }
        })
        totalGlossaryTerms += ch.glossary.length
      }

      for (const c of ch.concepts || []) {
        if (c.sandboxId && !VALID_SANDBOX_IDS.has(c.sandboxId)) {
          errors.push(`${ch.id}.${c.id}: Invalid sandboxId "${c.sandboxId}"`)
        }
      }

      for (const q of ch.questions || []) {
        totalQuestions++
        if (!q.id || questionIds.has(q.id)) errors.push(`${ch.id}: Duplicate/missing question id ${q.id}`)
        questionIds.add(q.id)
        if (q.type === 'MCQ' && (!Array.isArray(q.correctOptions) || q.correctOptions.length !== 1)) {
          errors.push(`${q.id}: MCQ must have correctOptions length 1`)
        }
        if (q.type === 'MSQ' && (!Array.isArray(q.correctOptions) || q.correctOptions.length === 0)) {
          errors.push(`${q.id}: MSQ missing correctOptions`)
        }
        if (
          q.type === 'NAT' &&
          (!q.natAnswer || typeof q.natAnswer.min !== 'number' || typeof q.natAnswer.max !== 'number')
        ) {
          errors.push(`${q.id}: NAT missing natAnswer.{min,max}`)
        }
      }

      walkStrings(ch, `${path.basename(file)}:${ch.id}`)
    }
  } catch (err) {
    errors.push(`${file}: Build/eval error: ${err.message}`)
  } finally {
    if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut)
  }
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s):`)
  errors.slice(0, 40).forEach((e) => console.error(' -', e))
  process.exit(1)
}
console.log(
  `OK: ${files.length} file(s), ${totalChapters} chapter(s), ${totalQuestions} question(s), ${totalGlossaryTerms} glossary term(s), ${totalMath} KaTeX expression(s) verified clean.`
)
