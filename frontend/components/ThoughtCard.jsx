import { Link } from 'react-router-dom';

export default function ThoughtCard({ thought }) {
  return (
    <Link
      to={`/engineering-thoughts/${thought.id}`}
      className="group block h-full"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/60">

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        {/* Preview Image */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/70">
          <img
            src={thought.slides?.[0]?.src}
            alt={thought.title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="relative mt-6 flex flex-1 flex-col">

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">
              {thought.category}
            </p>

            <p className="text-xs text-slate-500">
              {thought.date}
            </p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-100 transition-colors duration-300 group-hover:text-white">
            {thought.title}
          </h3>

          <p className="mt-4 flex-1 leading-7 text-slate-400">
            {thought.summary}
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-800/70 pt-5">

            <p className="text-sm text-slate-500">
              @{thought.source}
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors duration-300 group-hover:text-white">
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