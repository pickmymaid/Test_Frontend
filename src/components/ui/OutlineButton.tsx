import React, { type ReactNode } from "react";
import Link from "next/link";

interface OutlineButtonProps {
  /** 'left' → wave on left, children on right. 'right' → children on left, wave on right. */
  curve: "left" | "right";
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  "aria-label"?: string;
  className?: string;
  disabled?: boolean;
  stroke?: string;
}

/**
 * Outlined wave for curve="left".
 * Arc runs from top-right → curves left → back to bottom-right.
 * Acts as the concave left border of the children section.
 */
function WaveLeft({ stroke }: { stroke?: string }) {
  return (
    <svg width='13' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 56">
      <path
        d="M13.6035 55.4844C9.88243 55.4844 6.38463 53.7091 4.188 50.7055L3.3122 49.508C0.944846 46.271 0.0144683 42.2022 0.73977 38.2581L6.61221 6.32406C7.23258 2.95055 10.1734 0.501179 13.6035 0.501179"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

/**
 * Outlined wave for curve="right" (mirrored).
 * Acts as the concave right border of the children section.
 */
function WaveRight({ stroke }: { stroke?: string }) {
  return (
    <svg 
      width='13' 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 13 56"
    > 	
      <path 
        d="M5.98838e-05 0.5C3.66681 0.5 7.09539 2.31656 9.15472 5.3504L10.369 7.13923C12.6072 10.4366 13.4555 14.4833 12.7301 18.4019L6.92945 49.7357C6.31104 53.0762 3.39734 55.5 5.98838e-05 55.5 " 
        stroke={stroke} 
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      ></path> 
    </svg>
  );
}

/**
 * Outlined scalloped button that accepts any children.
 *
 * curve="left"  →  [wave][border + children]   e.g. next / →
 * curve="right" →  [border + children][wave]   e.g. prev / ←
 *
 * Usage:
 *   <OutlineButton curve="left"><ArrowRight className="w-5 h-5" /></OutlineButton>
 *   <OutlineButton curve="left">View All</OutlineButton>
 *   <OutlineButton curve="right"><ArrowLeft className="w-5 h-5" /></OutlineButton>
 *
 * Renders as <Link> when `href` is provided, otherwise as <button>.
 */
export function OutlineButton({
  curve,
  children,
  href,
  target,
  onClick,
  "aria-label": ariaLabel,
  className = "",
  disabled,
  stroke = "#b5b5b5",
  ...otherProps
}: OutlineButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  const isLeft = curve === "left";

  const inner = isLeft ? (
    <>
      <WaveLeft stroke={stroke} />
      <span 
        className={`border-t-[1.5px] flex-1 text-center border-r-[1.5px] border-b-[1.5px] rounded-tr-2xl rounded-br-2xl pl-1 pr-3 py-3 lg:pr-4 lg:py-1 flex items-center justify-center text-dark gap-1.5 transition-colors duration-200 group-hover:text-dark/70`}
        style={{
          borderColor: stroke
        }}
      >
        {children}
      </span>
    </>
  ) : (
    <>
      <span 
        className={`border-t-[1.5px] flex-1 text-center border-l-[1.5px] border-b-[1.5px] rounded-tl-2xl rounded-bl-2xl pl-3 pr-1 py-3 lg:pl-4 lg:py-1 flex items-center justify-center text-dark gap-1.5 transition-colors duration-200 group-hover:text-dark/70`}
        style={{
          borderColor: stroke
        }}  
      >
        {children}
      </span>
      <span className="-ml-px">
        <WaveRight stroke={stroke}/>
      </span>
    </>
  );

  const cls = `group flex justify-between cursor-pointer items-stretch transition-opacity duration-200 hover:opacity-70 font-semibold text-sm ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        aria-label={ariaLabel}
        className={cls}
        onClick={onClick}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
      disabled={disabled}
      {...otherProps}
    >
      {inner}
    </button>
  );
}
