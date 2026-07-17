import * as React from "react";

const PATH =
  "M12 20.9999L20.3775 12.5024C21.2567 11.6232 21.7506 10.4308 21.7506 9.18739C21.7506 7.94402 21.2567 6.75158 20.3775 5.87239C19.4983 4.99319 18.3059 4.49927 17.0625 4.49927C15.8191 4.49927 14.6267 4.99319 13.7475 5.87239L12 7.49989L10.2525 5.87239C9.37332 4.99319 8.18087 4.49927 6.93751 4.49927C5.69414 4.49927 4.5017 4.99319 3.62251 5.87239C2.74331 6.75158 2.24939 7.94402 2.24939 9.18739C2.24939 10.4308 2.74331 11.6232 3.62251 12.5024L12 20.9999Z";

export function HeartStraight({
  filled,
  ...props
}: React.SVGProps<SVGSVGElement> & { filled?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {filled ? (
        <path d={PATH} fill="#FF7442" stroke="#FF7442" strokeWidth="0.5" />
      ) : (
        <g opacity="0.4">
          <path d={PATH} stroke="#1A1A1A" />
        </g>
      )}
    </svg>
  );
}
