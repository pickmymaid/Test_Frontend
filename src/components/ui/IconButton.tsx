import { ArrowLeft, ArrowRight } from 'lucide-react'

interface IconButtonProps {
  /** 'left' → wave on left, arrow points right (→). 'right' → wave on right, arrow points left (←). */
  curve: 'left' | 'right'
  onClick?: () => void
  'aria-label'?: string
  className?: string
}

/**
 * Outlined wave for curve="left": arc curves inward on the left side.
 * Path goes from top-right (14,0) → curves left → back to bottom-right (14,56).
 * Serves as the concave left border of the adjacent arrow section.
 */
function WaveLeft() {
  return (
    <svg
      width="14"
      height="56"
      viewBox="0 0 14 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M14 0 C0 0,0 56,14 56"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1"
      />
    </svg>
  )
}

/**
 * Outlined wave for curve="right": mirrored arc, inward on the right side.
 * Serves as the concave right border of the adjacent arrow section.
 */
function WaveRight() {
  return (
    <svg
      width="14"
      height="56"
      viewBox="0 0 14 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M0 0 C14 0,14 56,0 56"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1"
      />
    </svg>
  )
}

/**
 * Outlined scalloped icon button used for carousel navigation.
 *
 * curve="left"  →  [wave][border + →]   (Next button)
 * curve="right" →  [border + ←][wave]   (Prev button)
 */
export function IconButton({
  curve,
  onClick,
  'aria-label': ariaLabel,
  className = '',
}: IconButtonProps) {
  const isLeft = curve === 'left'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (isLeft ? 'Next' : 'Previous')}
      className={`inline-flex items-stretch ${className}`}
    >
      {isLeft ? (
        <>
          <WaveLeft />
          <span className="border-t border-r border-b border-dark rounded-tr-2xl rounded-br-2xl pl-1 pr-4 py-4 flex items-center justify-center text-dark">
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
          </span>
        </>
      ) : (
        <>
          <span className="border-t border-l border-b border-dark rounded-tl-2xl rounded-bl-2xl pl-4 pr-1 py-4 flex items-center justify-center text-dark">
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </span>
          <WaveRight />
        </>
      )}
    </button>
  )
}
