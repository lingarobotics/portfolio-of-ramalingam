function JourneyHero({ journey }) {
  return (
    <section
      className="
        rounded-none
        border
        border-[#111111]
        bg-white
        p-6
        sm:p-8
        shadow-[8px_8px_0_rgba(17,17,17,0.08)]
      "
    >
      <div className="max-w-4xl">

        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#444444]">
          {journey.hero.badge}
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-bold
            tracking-tight
            text-[#111111]
            sm:text-5xl
          "
        >
          {journey.title}
        </h1>

        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-[#444444]
          "
        >
          {journey.hero.description}
        </p>

      </div>

      <div
        className="
          mt-8
          grid
          gap-4
          md:grid-cols-3
        "
      >
        {journey.hero.metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              rounded-none
              border
              border-[#111111]
              bg-[#f5f5ef]
              p-5
            "
          >
            <p className="text-sm text-[#666666]">
              {metric.label}
            </p>

            <p
              className="
                mt-2
                text-2xl
                font-semibold
                text-[#111111]
              "
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">

        <h2
          className="
            text-xl
            font-semibold
            text-[#111111]
          "
        >
          Journey Overview
        </h2>

        <div className="mt-5 space-y-5">

          <div>
            <h3 className="text-sm font-semibold text-[#111111]">
              Challenge
            </h3>

            <p className="mt-2 leading-relaxed text-[#444444]">
              {journey.overview.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#111111]">
              Approach
            </h3>

            <p className="mt-2 leading-relaxed text-[#444444]">
              {journey.overview.approach}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#111111]">
              Outcome
            </h3>

            <p className="mt-2 leading-relaxed text-[#444444]">
              {journey.overview.outcome}
            </p>
          </div>

        </div>

      </div>

      <div className="mt-10">

        <h2
          className="
            text-xl
            font-semibold
            text-slate-100
          "
        >
          Core Principles
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">

          {journey.principles.map((principle) => (
            <span
              key={principle}
              className="
                rounded-none
                border
                border-[#111111]
                px-4
                py-2
                text-sm
                text-[#111111]
              "
            >
              {principle}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default JourneyHero;
