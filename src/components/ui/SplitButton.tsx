import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type SplitButtonVariant = "primary" | "secondary";

interface SplitButtonProps {
  label?: string;
  /** primary: orange left + dark right (white text). secondary: white left + dark right (orange text). */
  variant?: SplitButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPos?: "left" | "right";
  bg?: string;
}

/**
 * Dark-filled cubic-bezier wave joining the two sections.
 * Scales from 44 px tall on mobile to 56 px on desktop.
 */
function SolidWave(
  props: React.SVGProps<SVGSVGElement> & { pathColor?: string },
) {
  const { pathColor, ...svgProps } = props;
  return (
    <svg
      width="13"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.000841141 0 13.12 56"
      {...svgProps}
    >
      <path
        d="M13.1191 56C9.41789 56 5.95912 54.1591 3.89202 51.0889L2.62335 49.2046C0.376952 45.8682 -0.474113 41.7849 0.252317 37.8288L6.12932 5.82314C6.74877 2.44969 9.68923 0 13.1191 0V56Z"
        fill={pathColor ?? "#1a1a1a"}
      />
    </svg>
  );
}

const variantStyles: Record<SplitButtonVariant, string> = {
  primary: "bg-primary text-white group-hover:bg-primary-600",
  secondary: "bg-white text-primary group-hover:bg-gray-50",
};

/**
 * Two-tone split pill button with hover animation.
 *
 * variant="primary" (default) → orange label | wave | dark arrow
 * variant="secondary"         → white label  | wave | dark arrow
 *
 * Renders as <Link> when `href` is provided, otherwise as <button>.
 */
export function SplitButton({
  label,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
  iconPos = "right",
  bg,
  ...others
}: SplitButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const inner = (
    <>
      {/* Left label section */}

      {iconPos === "left" && (
        <span className="inline-flex">
          {/* Right dark arrow section */}
          <span
            style={{
              background: bg ?? "",
            }}
            className="bg-dark text-white pl-3 pr-1 py-3 flex items-center justify-center shrink-0 lg:pl-4 lg:py-4 transition-colors duration-200 "
          >
            {icon || (
              <ArrowUpRight
                className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            )}
          </span>

          {/* Wave connector */}
          <SolidWave
            className="-mr-px -scale-x-100 -scale-y-100"
            fill="#6DA544"
            pathColor={bg}
          />
        </span>
      )}

      {label && (
        <span
          className={`${variantStyles[variant]} flex justify-center flex-1 items-center px-3 pr-6 py-3 text-sm font-semibold leading-5 whitespace-nowrap shrink-0 lg:px-3 lg:pr-4 2xl:px-4 2xl:pr-7 lg:py-4 lg:leading-6 transition-colors duration-200 -mr-3.25`}
        >
          {label}
        </span>
      )}

      {iconPos === "right" && (
        <span className="inline-flex">
          {/* Wave connector */}
          <SolidWave pathColor={bg} className="-mr-px" fill="#1a1a1a" />

          {/* Right dark arrow section */}
          <span
            style={{
              background: bg ?? "",
            }}
            className="bg-dark text-white pl-1 pr-3 py-3 flex items-center justify-center shrink-0 lg:pr-4 lg:py-4 transition-colors duration-200 "
          >
            {icon || (
              <ArrowUpRight
                className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            )}
          </span>
        </span>
      )}
    </>
  );

  const cls = `group cursor-pointer flex justify-between h-max items-stretch rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md font-semibold text-sm ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" {...others} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
