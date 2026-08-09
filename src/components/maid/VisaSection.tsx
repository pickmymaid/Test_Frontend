import React from "react";

export default function VisaSection({ status, expiryDate }: { status: string; expiryDate?: string }) {
  const statusContainerCls = `rounded-2xl p-4 bg-primary-50 flex flex-col gap-1`;
  const statusText = `text-base lg:text-lg text-primary font-semibold`;

  const formattedExpiry = expiryDate
    ? new Date(expiryDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

  return (
    <div className="bg-white rounded-3xl p-6">
      <h2 className="text-base font-semibold text-dark mb-5 flex items-center gap-2">
        Visa Details
      </h2>
      <div className="flex flex-col gap-3">
        <div className={statusContainerCls}>
          <h6 className="text-sm text-[#6F6F6F]">Current Status</h6>
          <p>
            <strong className={statusText}>{status}</strong>
          </p>
        </div>
        {formattedExpiry && (
          <div className="flex items-center justify-between gap-2 bg-[#f5f5f5] px-3 py-2 rounded-lg">
            <span className="text-xs font-medium text-dark tracking-[0.5px]">Date of Visa Expiry</span>
            <span className="text-xs font-medium text-dark/60 text-right tracking-[0.5px]">{formattedExpiry}</span>
          </div>
        )}
      </div>
    </div>
  );
}
