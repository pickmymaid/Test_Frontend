import sanitizeHtml from 'sanitize-html'

// Whitelisted inline-style properties/values a rich-text editor might emit.
// Anything else (including url()-based properties, which can be abused for
// UI spoofing or data exfiltration) is stripped rather than allowing the
// `style` attribute through unrestricted.
const ALLOWED_STYLE_PROPERTIES: Record<string, Record<string, RegExp[]>> = {
  '*': {
    color: [/^#(0x)?[0-9a-f]+$/i, /^rgb\(/i, /^[a-z]+$/i],
    'background-color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(/i, /^[a-z]+$/i],
    'text-align': [/^left$|^right$|^center$|^justify$/],
    'font-weight': [/^\d+$|^bold$|^normal$/],
    'font-style': [/^italic$|^normal$/],
    'text-decoration': [/^underline$|^line-through$|^none$/],
  },
}

/**
 * For long-form, backend-authored HTML that legitimately needs images,
 * embedded video, and tables (blog posts).
 */
export function sanitizeRichHtml(html: string | null | undefined): string {
  return sanitizeHtml(html ?? '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['style', 'class'],
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'srcset', 'alt', 'width', 'height', 'loading'],
      iframe: ['src', 'width', 'height', 'allowfullscreen', 'frameborder'],
      table: ['border', 'cellpadding', 'cellspacing', 'width'],
      td: ['colspan', 'rowspan', 'align', 'valign', 'width'],
      th: ['colspan', 'rowspan', 'align', 'valign', 'width', 'scope'],
      col: ['span', 'width'],
      colgroup: ['span'],
    },
    allowedStyles: ALLOWED_STYLE_PROPERTIES,
    allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com'],
  })
}

/**
 * For short, backend-authored HTML fields that only ever need basic text
 * formatting (maid bio notes, employment-history descriptions) — no images,
 * embeds, or tables.
 */
export function sanitizeBasicHtml(html: string | null | undefined): string {
  return sanitizeHtml(html ?? '', {
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ['href', 'name', 'target', 'rel'],
    },
    allowedStyles: ALLOWED_STYLE_PROPERTIES,
  })
}
