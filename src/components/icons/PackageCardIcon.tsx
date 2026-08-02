import * as React from "react";

export function PackageCardIcon({
  strokeWidth = 2,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <line x1="3" y1="11" x2="21" y2="11" />
      <circle cx="8" cy="15.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="15.5" r="0.75" fill="currentColor" stroke="none" />
      <rect x="14.5" y="14.75" width="4" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
