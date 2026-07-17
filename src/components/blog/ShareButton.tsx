'use client'

import { useState } from 'react'
import { Share2, Check, Link2, X } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
import { toast } from 'sonner'

export function ShareButton({ url, title }: { url: string; title: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success('Link copied!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Could not copy link.')
    }
    setOpen(false)
  }

  async function handleNativeShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // user cancelled — fall through to dropdown
      }
    }
    setOpen((o) => !o)
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`

  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        type="button"
        onClick={handleNativeShare}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-md pl-3 pr-4 py-2.5 rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0px_6px_20px_rgba(0,0,0,0.2)] transition-all duration-200 active:scale-95"
        aria-label="Share this article"
      >
        <Share2 className="w-4 h-4 text-dark shrink-0" strokeWidth={2} />
        <span className="text-sm font-semibold text-dark">Share</span>
      </button>

      {/* Dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 z-20 bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] overflow-hidden min-w-[180px] border border-gray-100">
            <button
              type="button"
              onClick={copyLink}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-dark hover:bg-[#F5F5F5] transition-colors text-left"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : (
                <Link2 className="w-4 h-4 text-muted shrink-0" />
              )}
              {copied ? 'Copied!' : 'Copy link'}
            </button>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-dark hover:bg-[#F5F5F5] transition-colors"
            >
              <X className="w-4 h-4 text-muted shrink-0" />
              Share on X
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-dark hover:bg-[#F5F5F5] transition-colors"
            >
              <FacebookIcon className="w-4 h-4 text-muted shrink-0" />
              Share on Facebook
            </a>
          </div>
        </>
      )}
    </div>
  )
}
