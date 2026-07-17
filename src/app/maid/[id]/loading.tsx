function Shimmer({ className }: { className: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
  );
}

export default function MaidRedirectLoading() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-26 lg:py-25">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
        {/* Back button */}
        <div className="mb-5">
          <Shimmer className="h-9 w-24 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* ── Left column ──────────────────────────────────────── */}
          <div className="w-full lg:max-w-[400px] lg:flex-1 lg:min-w-0 flex flex-col gap-5">
            {/* Hero card */}
            <div className="bg-white rounded-3xl p-6 flex flex-col gap-5">
              {/* Square image */}
              <Shimmer className="aspect-square w-full rounded-xl" />

              {/* Name + verified */}
              <div className="flex flex-col gap-2">
                <Shimmer className="h-6 w-40" />
                <Shimmer className="h-4 w-24" />
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Shimmer key={i} className="h-9 w-full" />
                ))}
              </div>

              {/* CTA button */}
              <Shimmer className="h-12 w-full rounded-2xl" />
            </div>

            {/* About — mobile only */}
            <div className="bg-white lg:hidden rounded-3xl p-6 flex flex-col gap-3">
              <Shimmer className="h-5 w-24" />
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-5/6" />
              <Shimmer className="h-4 w-4/6" />
            </div>
          </div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside className="w-full lg:flex-2 flex flex-col gap-4 lg:shrink-0">
            {/* Contact card */}
            <div className="bg-white rounded-3xl p-6">
              <Shimmer className="h-5 w-32 mb-5" />
              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <Shimmer key={i} className="h-12 w-full rounded-2xl" />
                ))}
              </div>
              <Shimmer className="h-12 w-full rounded-2xl mt-4" />
            </div>

            {/* About — desktop only */}
            <div className="bg-white hidden lg:flex flex-col gap-3 rounded-3xl p-6">
              <Shimmer className="h-5 w-24" />
              <Shimmer className="h-4 w-full mt-2" />
              <Shimmer className="h-4 w-full mt-1" />
              <Shimmer className="h-4 w-5/6 mt-1" />
              <Shimmer className="h-4 w-4/6 mt-1" />
            </div>

            {/* Personal info */}
            <div className="bg-white rounded-3xl p-6">
              <Shimmer className="h-5 w-40 mb-5" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Shimmer key={i} className="h-9 w-full" />
                ))}
              </div>
            </div>

            {/* Skills + Languages */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 bg-white rounded-3xl p-6">
                <Shimmer className="h-5 w-20 mb-5" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Shimmer key={i} className="h-7 w-16 rounded-xl" />
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-3xl p-6">
                <Shimmer className="h-5 w-24 mb-5" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <Shimmer key={i} className="h-7 w-20 rounded-xl" />
                  ))}
                </div>
              </div>
            </div>

            {/* Employment history */}
            <div className="bg-white rounded-3xl p-6">
              <Shimmer className="h-5 w-40 mb-5" />
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Shimmer className="h-5 w-48" />
                    <Shimmer className="h-4 w-32" />
                    <Shimmer className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
