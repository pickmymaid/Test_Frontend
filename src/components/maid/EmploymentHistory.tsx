import { Clock } from "lucide-react";
import type { ApiMaidEmploymentHistory } from "@/types";
import { sanitizeBasicHtml } from "@/lib/sanitizeHtml";

function formatDuration(years: number): string {
  return years === 1 ? "1 Year" : `${years} Years`;
}

export function EmploymentHistory({
  history,
}: {
  history: ApiMaidEmploymentHistory[];
}) {
  if (!history || history.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8">
      <h2 className="text-md lg:text-xl font-semibold text-dark tracking-[0.13px] mb-6">
        Employment History
      </h2>
      <div className="flex flex-col">
        {history.map((entry, i) => {
          const isLast = i === history.length - 1;
          const duration = entry.experiance ?? 0;
          return (
            <div key={entry._id || i} className="flex gap-[18px] lg:gap-6">
              {/* Dot + connector line */}
              <div className="flex flex-col items-center shrink-0 mt-0.5">
                <div className="flex items-center justify-center w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-primary/10 shrink-0">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary shrink-0" />
                </div>
                <div className="w-0.5 flex-1 bg-primary/20 my-2" />
              </div>

              {/* Entry card */}
              <div className={`flex-1 min-w-0 ${!isLast ? "pb-6" : ""}`}>
                <div className="bg-[#f5f5f5] rounded-2xl p-5 lg:px-8 lg:pb-8 lg:pt-6 flex flex-col gap-6">
                  {/* Header: stacked on mobile, row on desktop */}
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base lg:text-md font-bold text-[#212121] tracking-[0.25px] leading-6 lg:leading-[30px]">
                        {entry.title}
                      </p>
                      {entry.location && (
                        <p className="text-sm lg:text-md text-[#6f6f6f] tracking-[0.5px] lg:tracking-[0.25px] leading-5 lg:leading-6">
                          {entry.location}
                        </p>
                      )}
                    </div>
                    {duration > 0 && (
                      <div className="flex items-center gap-2 border border-primary rounded-full pl-2 pr-4 py-2 shrink-0 self-start shadow-[inset_1px_1px_2px_0px_rgba(0,0,0,0.1)]">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-primary shrink-0" />
                        <span className="text-xs lg:text-md font-bold text-primary tracking-[0.5px] lg:tracking-[0.25px] whitespace-nowrap">
                          {formatDuration(duration)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {entry.job_description && (
                    <div
                      className="text-sm lg:text-md text-[#212121] tracking-[0.5px] lg:tracking-[0.25px] leading-5 lg:leading-6 prose prose-sm max-w-none prose-p:my-0"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeBasicHtml(entry.job_description),
                      }}
                    />
                  )}

                  {entry.reason_leaving && (
                    <p className="text-sm">
                      <b>Reason Leaving: </b> {" "}{entry.reason_leaving}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
