function JourneyTimeline({ milestones }) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        sm:p-8
      "
    >
      <h2
        className="
          text-2xl
          font-semibold
          text-slate-100
        "
      >
        Journey Timeline
      </h2>

      <div className="mt-8 space-y-6">

        {milestones.map((milestone, index) => (
          <div
            key={milestone.title}
            className="flex gap-4"
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/40
                bg-cyan-400/10
                text-sm
                font-semibold
                text-cyan-200
              "
            >
              {index + 1}
            </div>

            <div
              className="
                flex-1
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/60
                p-5
              "
            >
              <h3
                className="
                  text-lg
                  font-semibold
                  text-slate-100
                "
              >
                {milestone.title}
              </h3>

              <p
                className="
                  mt-2
                  leading-relaxed
                  text-slate-300
                "
              >
                {milestone.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default JourneyTimeline;
