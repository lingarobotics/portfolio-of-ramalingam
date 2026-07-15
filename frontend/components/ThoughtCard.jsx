import { Link } from 'react-router-dom';

export default function ThoughtCard({ thought }) {
  return (
    <Link
      to={`/engineering-thoughts/${thought.id}`}
      className="group block h-full"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-none border border-[#111111] bg-white p-6 shadow-[8px_8px_0_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5f5ef]">

        {/* Preview Image */}
        <div className="relative overflow-hidden rounded-none border border-[#111111]">
          <img
            src={thought.slides?.[0]?.src}
            alt={thought.title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="relative mt-6 flex flex-1 flex-col">

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#444444]">
              {thought.category}
            </p>

            <p className="text-xs text-[#666666]">
              {thought.date}
            </p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#111111] transition-colors duration-300 group-hover:text-[#111111]">
            {thought.title}
          </h3>

          <p className="mt-4 flex-1 leading-7 text-[#444444]">
            {thought.summary}
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-[#111111] pt-5">

            <p className="text-sm text-[#666666]">
              @{thought.source}
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] transition-colors duration-300 group-hover:text-[#111111]">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

          </div>
        </div>
      </article>
    </Link>
  );
}
