import { Link } from 'react-router-dom';

function JourneyCard({
  platformSlug,
  domainSlug,
  journey
}) {
  return (
    <article
      className="
        rounded-none
        border
        border-[#111111]
        bg-white
        p-6
        shadow-[8px_8px_0_rgba(17,17,17,0.08)]
        transition
        hover:bg-[#f5f5ef]
      "
    >
      <div className="flex h-full flex-col">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#444444]">
            Learning Journey
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#111111]">
            {journey.title}
          </h2>

          <p className="mt-4 leading-relaxed text-[#444444]">
            {journey.hero.description}
          </p>

        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">

          {journey.hero.metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-none
                border
                border-[#111111]
                bg-[#f5f5ef]
                p-3
              "
            >
              <p className="text-xs text-[#666666]">
                {metric.label}
              </p>

              <p className="mt-1 text-lg font-semibold text-[#111111]">
                {metric.value}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 flex flex-wrap gap-2">

          {journey.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-none
                border
                border-[#111111]
                px-3
                py-1
                text-xs
                text-[#444444]
              "
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="mt-6">

          <Link
            to={`/learning-journeys/${platformSlug}/${domainSlug}/${journey.slug}`}
            className="
              inline-flex
              items-center
                rounded-none
              border
                border-[#111111]
              px-4
              py-2
              text-sm
              font-medium
                text-[#111111]
              transition
                hover:bg-[#f5f5ef]
            "
          >
            Open Journey →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default JourneyCard;
