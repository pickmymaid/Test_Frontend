import React, { SVGProps } from "react";

export default function Student(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6V13.5"
        stroke="#FF7442"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 20.25C6.72187 17.9925 9.10406 16.5 12 16.5C14.8959 16.5 17.2781 17.9925 18.75 20.25"
        stroke="#FF7442"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 6L12 9L3 6L12 3L21 6Z"
        stroke="#FF7442"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8756 7.71094C16.5625 8.46261 17.0159 9.3978 17.1808 10.4026C17.3456 11.4074 17.2147 12.4385 16.8039 13.3702C16.3932 14.3019 15.7204 15.094 14.8674 15.6502C14.0145 16.2063 13.0182 16.5024 12 16.5024C10.9818 16.5024 9.98552 16.2063 9.13257 15.6502C8.27963 15.094 7.60682 14.3019 7.19609 13.3702C6.78535 12.4385 6.65442 11.4074 6.81924 10.4026C6.98406 9.3978 7.43751 8.46261 8.12438 7.71094"
        stroke="#FF7442"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
