import { Link } from 'react-router-dom';

function PlatformCard({ platform }) {
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
      <div className="flex flex-col gap-4">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#444444]">
            Learning Platform
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#111111]">
            {platform.name}
          </h2>

          <p className="mt-3 leading-relaxed text-[#444444]">
            {platform.description}
          </p>

        </div>

        <div className="flex flex-wrap gap-2">

          {platform.tags.map((tag) => (
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

        <div className="grid gap-3 sm:grid-cols-3">

          <div className="rounded-none border border-[#111111] bg-[#f5f5ef] p-3">
            <p className="text-xs text-[#666666]">
              Domains
            </p>

            <p className="mt-1 text-lg font-semibold text-[#111111]">
              {platform.domainsCount}
            </p>
          </div>

          <div className="rounded-none border border-[#111111] bg-[#f5f5ef] p-3">
            <p className="text-xs text-[#666666]">
              Journeys
            </p>

            <p className="mt-1 text-lg font-semibold text-[#111111]">
              {platform.journeysCount}
            </p>
          </div>

          <div className="rounded-none border border-[#111111] bg-[#f5f5ef] p-3">
            <p className="text-xs text-[#666666]">
              Certificates
            </p>

            <p className="mt-1 text-lg font-semibold text-[#111111]">
              {platform.certificatesCount}
            </p>
          </div>

        </div>

        <div>

          <Link
            to={`/learning-platforms/${platform.slug}`}
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
            Explore Platform →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default PlatformCard;
