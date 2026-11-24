import React from 'react'
import katex from 'katex'

interface MathTextProps {
  text: string
  className?: string
  block?: boolean
}

/**
 * Renders strings containing $$display math$$, $inline math$, **bold**, and `inline code`
 * safely and cleanly using KaTeX.
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

  // Split by $$...$$ first, then $...$, then **...**, then `...`
  const tokens: React.ReactNode[] = []
  const displayRegex = /\$\$([\s\S]+?)\$\$/g
  let lastIdx = 0
  let match: RegExpExecArray | null

  const renderInlineSegment = (segment: string, keyPrefix: string) => {
    const inlineParts: React.ReactNode[] = []
    const inlineRegex = /\$([^\n$]+?)\$|\*\*([^*]+?)\*\*|`([^`]+?)`/g
    let idx = 0
    let m: RegExpExecArray | null
    let count = 0

    while ((m = inlineRegex.exec(segment)) !== null) {
      if (m.index > idx) {
        inlineParts.push(segment.slice(idx, m.index))
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
          <code
            key={`${keyPrefix}-c-${count++}`}
            className="px-1.5 py-0.5 rounded border s-pill-accent text-[0.85em] font-mono"
          >
            {m[3]}
          </code>
        )
      }
      idx = m.index + m[0].length
    }
    if (idx < segment.length) {
      inlineParts.push(segment.slice(idx))
    }
    return inlineParts
  }

  let segCount = 0
  while ((match = displayRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      tokens.push(...renderInlineSegment(text.slice(lastIdx, match.index), `seg-${segCount++}`))
    }
    const html = katex.renderToString(match[1], {
      displayMode: true,
      throwOnError: false,
      strict: false,
    })
    tokens.push(
      <div
        key={`disp-${segCount++}`}
        className="my-3 py-2.5 px-3.5 rounded-lg s-inset border overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
    lastIdx = match.index + match[0].length
  }

  if (lastIdx < text.length) {
    tokens.push(...renderInlineSegment(text.slice(lastIdx), `seg-end`))
  }

  return <span className={className}>{tokens}</span>
}
