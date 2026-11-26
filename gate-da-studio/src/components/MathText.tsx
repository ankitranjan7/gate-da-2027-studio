import React from 'react'
import katex from 'katex'

interface MathTextProps {
  text: string
  className?: string
  block?: boolean
}

const CODE_KEYWORDS = new Set([
  // Python
  'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'not', 'and', 'or', 'is',
  'nonlocal', 'global', 'lambda', 'class', 'import', 'from', 'as', 'try', 'except', 'raise',
  'pass', 'break', 'continue', 'True', 'False', 'None', 'print', 'range', 'len', 'id',
  // SQL
  'SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'HAVING', 'ORDER', 'JOIN', 'LEFT', 'RIGHT',
  'INNER', 'OUTER', 'ON', 'AS', 'AND', 'OR', 'NOT', 'NULL', 'IS', 'IN', 'EXISTS', 'DISTINCT',
  'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'UNION', 'EXCEPT', 'INTERSECT', 'CREATE', 'TABLE',
])

function highlightCodeLine(line: string, lang: string): React.ReactNode {
  const isSql = lang.toLowerCase() === 'sql'
  const commentMarker = isSql ? '--' : '#'

  // Split trailing comment cleanly (ignoring markers inside quotes)
  let codePart = line
  let commentPart = ''
  let inQuote: string | null = null
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuote) {
      if (ch === inQuote && line[i - 1] !== '\\') inQuote = null
    } else if (ch === '"' || ch === "'") {
      inQuote = ch
    } else if (
      (commentMarker === '#' && ch === '#') ||
      (commentMarker === '--' && ch === '-' && line[i + 1] === '-')
    ) {
      codePart = line.slice(0, i)
      commentPart = line.slice(i)
      break
    }
  }

  const tokenRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b[A-Za-z_][A-Za-z0-9_]*\b|\b\d+(?:\.\d+)?\b)/g
  const parts: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  let key = 0

  while ((m = tokenRegex.exec(codePart)) !== null) {
    if (m.index > last) parts.push(codePart.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('"') || tok.startsWith("'")) {
      parts.push(
        <span key={key++} style={{ color: 'var(--ok-text)' }}>
          {tok}
        </span>
      )
    } else if (/^\d/.test(tok)) {
      parts.push(
        <span key={key++} style={{ color: 'var(--formula-text)' }}>
          {tok}
        </span>
      )
    } else if (CODE_KEYWORDS.has(tok) || (isSql && CODE_KEYWORDS.has(tok.toUpperCase()))) {
      parts.push(
        <span key={key++} className="font-semibold" style={{ color: 'var(--accent-text)' }}>
          {tok}
        </span>
      )
    } else {
      parts.push(tok)
    }
    last = m.index + tok.length
  }
  if (last < codePart.length) parts.push(codePart.slice(last))

  if (commentPart) {
    parts.push(
      <span key="cmt" className="italic" style={{ color: 'var(--text-muted)' }}>
        {commentPart}
      </span>
    )
  }

  return parts.length > 0 ? parts : ' '
}

const CodeBlock: React.FC<{ lang: string; code: string }> = ({ lang, code }) => {
  const cleaned = code.replace(/^\n+|\n+$/g, '')
  const lines = cleaned.split('\n')
  const showLineNumbers = lines.length >= 2

  return (
    <div
      className="my-3 rounded-xl border s-inset overflow-hidden text-left"
      style={{ borderColor: 'var(--border-strong)' }}
    >
      {lang && (
        <div className="px-3.5 py-1.5 border-b s-border flex items-center justify-between text-[10px] font-mono uppercase tracking-wider s-text-muted s-elevated">
          <span>{lang}</span>
          <span>{lines.length} {lines.length === 1 ? 'line' : 'lines'}</span>
        </div>
      )}
      <pre className="p-3.5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono s-text-primary m-0">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex min-w-max">
              {showLineNumbers && (
                <span
                  className="select-none pr-3.5 text-right shrink-0 w-7 text-[11px]"
                  style={{ color: 'var(--text-muted)', opacity: 0.65 }}
                >
                  {i + 1}
                </span>
              )}
              <span className="whitespace-pre">{highlightCodeLine(line, lang)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

/**
 * Renders strings containing fenced ```lang code blocks```, $$display math$$,
 * $inline math$, **bold**, *italic*, `inline code`, and newlines cleanly.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '', block = false }) => {
  if (block) {
    const html = katex.renderToString(text, {
      displayMode: true,
      throwOnError: false,
      strict: false,
    })
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  }

  const renderPlainWithBreaks = (raw: string, keyPrefix: string): React.ReactNode[] => {
    if (!raw.includes('\n')) return [raw]
    const lines = raw.split('\n')
    const out: React.ReactNode[] = []
    lines.forEach((ln, idx) => {
      if (idx > 0) out.push(<br key={`${keyPrefix}-br-${idx}`} />)
      if (ln) out.push(ln)
    })
    return out
  }

  const renderInlineSegment = (segment: string, keyPrefix: string): React.ReactNode[] => {
    const inlineParts: React.ReactNode[] = []
    const inlineRegex = /\$([^\n$]+?)\$|\*\*([^*]+?)\*\*|\*([^*\n]+?)\*|`([^`]+?)`/g
    let idx = 0
    let m: RegExpExecArray | null
    let count = 0

    while ((m = inlineRegex.exec(segment)) !== null) {
      if (m.index > idx) {
        inlineParts.push(...renderPlainWithBreaks(segment.slice(idx, m.index), `${keyPrefix}-t-${count++}`))
      }
      if (m[1] !== undefined) {
        const html = katex.renderToString(m[1], {
          displayMode: false,
          throwOnError: false,
          strict: false,
        })
        inlineParts.push(
          <span
            key={`${keyPrefix}-m-${count++}`}
            className="inline-block align-baseline mx-0.5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      } else if (m[2] !== undefined) {
        inlineParts.push(
          <strong key={`${keyPrefix}-b-${count++}`} className="font-semibold s-text-primary">
            {renderInlineSegment(m[2], `${keyPrefix}-bi-${count}`)}
          </strong>
        )
      } else if (m[3] !== undefined) {
        inlineParts.push(
          <em key={`${keyPrefix}-i-${count++}`} className="italic">
            {renderInlineSegment(m[3], `${keyPrefix}-ii-${count}`)}
          </em>
        )
      } else if (m[4] !== undefined) {
        inlineParts.push(
          <code
            key={`${keyPrefix}-c-${count++}`}
            className="px-1.5 py-0.5 rounded border s-pill-accent text-[0.85em] font-mono break-words"
          >
            {m[4]}
          </code>
        )
      }
      idx = m.index + m[0].length
    }
    if (idx < segment.length) {
      inlineParts.push(...renderPlainWithBreaks(segment.slice(idx), `${keyPrefix}-end`))
    }
    return inlineParts
  }

  const renderMathAndInline = (chunk: string, keyPrefix: string): React.ReactNode[] => {
    const out: React.ReactNode[] = []
    const displayRegex = /\$\$([\s\S]+?)\$\$/g
    let lastIdx = 0
    let match: RegExpExecArray | null
    let segCount = 0

    while ((match = displayRegex.exec(chunk)) !== null) {
      if (match.index > lastIdx) {
        out.push(...renderInlineSegment(chunk.slice(lastIdx, match.index), `${keyPrefix}-seg-${segCount++}`))
      }
      const html = katex.renderToString(match[1], {
        displayMode: true,
        throwOnError: false,
        strict: false,
      })
      out.push(
        <div
          key={`${keyPrefix}-disp-${segCount++}`}
          className="my-3 py-2.5 px-3.5 rounded-lg s-inset border overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
      lastIdx = match.index + match[0].length
    }
    if (lastIdx < chunk.length) {
      out.push(...renderInlineSegment(chunk.slice(lastIdx), `${keyPrefix}-tail`))
    }
    return out
  }

  // First split out fenced multi-line code blocks ```lang\n...\n```
  const tokens: React.ReactNode[] = []
  const fenceRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g
  let lastFenceIdx = 0
  let fenceMatch: RegExpExecArray | null
  let blockCount = 0

  while ((fenceMatch = fenceRegex.exec(text)) !== null) {
    if (fenceMatch.index > lastFenceIdx) {
      const before = text.slice(lastFenceIdx, fenceMatch.index).replace(/\n+$/, '')
      if (before) {
        tokens.push(...renderMathAndInline(before, `pre-${blockCount}`))
      }
    }
    tokens.push(
      <CodeBlock
        key={`code-${blockCount++}`}
        lang={fenceMatch[1] || 'code'}
        code={fenceMatch[2]}
      />
    )
    lastFenceIdx = fenceMatch.index + fenceMatch[0].length
    // Consume a single trailing newline right after closing ``` so we don't render an extra blank <br/>
    if (text[lastFenceIdx] === '\n') lastFenceIdx += 1
  }

  if (lastFenceIdx < text.length) {
    tokens.push(...renderMathAndInline(text.slice(lastFenceIdx), 'post-end'))
  }

  return <span className={className}>{tokens}</span>
}
