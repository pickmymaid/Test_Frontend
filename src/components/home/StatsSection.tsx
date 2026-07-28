const stats = [
  { value: "10k", suffix: "+", label: "Happy Customers", orange: false },
  { value: "24", suffix: "hrs", label: "Average Match Time", orange: false },
  { value: "5k", suffix: "+", label: "Verified Maids", orange: false },
  { value: "2,500", suffix: "+", label: "Client Reviews", orange: false },
];

export function StatsSection() {
  return (
    <section
      className="bg-transparent border-t border-gray-100 lg:border-none py-10 lg:py-14 z-10"
      aria-label="Platform statistics"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0">
        <dl className="grid grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label, orange }) => (
            <div
              key={label}
              className="flex flex-col lg:items-center first:items-start border-r border-gray-100 last:border-r-0 "
            >
              <dt className="text-2xl sm:text-4xl 2xl:text-5xl lg:text-4xl font-bold text-dark leading-none mb-1.5">
                {orange ? (
                  <span className="text-primary">
                    {value}
                    {suffix}
                  </span>
                ) : (
                  <>
                    {value}
                    <span className="text-primary">{suffix}</span>
                  </>
                )}
              </dt>
              <dd className="text-xs 2xl:text-sm text-muted font-medium max-w-[80%] sm:max-w-full">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
