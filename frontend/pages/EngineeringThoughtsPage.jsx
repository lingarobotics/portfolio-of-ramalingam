import { Link } from 'react-router-dom';

import thoughts from '../data/thoughts';
import ThoughtCard from '../components/ThoughtCard';

export default function EngineeringThoughtsPage() {
  return (
    <main className="section-atmosphere min-h-screen bg-slate-950 px-6 py-24">
      <div className="section-content mx-auto flex max-w-6xl flex-col gap-20">

        {/* Hero Section */}
        <section className="motion-rise max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-400/80">
            Engineering Thoughts
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            What I think.
            <span className="block text-slate-400">
              How I think.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            This section is not meant to showcase projects,
            achievements, or technical stacks.

            It exists to reflect my thinking,
            my perspective toward technology,
            problem solving,
            engineering,
            AI,
            learning,
            and the mindset behind how I approach building systems.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                What This Contains
              </p>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Perspectives</li>
                <li>• Engineering philosophy</li>
                <li>• System thinking</li>
                <li>• AI leverage mindset</li>
                <li>• Thought processes</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-emerald-500/10 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                Core Idea
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                Projects show what someone built.

                Thoughts reveal who someone really is,
                how they reason,
                and how they see the world while building.
              </p>
            </div>

          </div>
        </section>

        {/* Engineering Journal */}
        <section className="motion-rise motion-rise-delay-1">

          <div className="overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm">

            <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Engineering Journal
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-100">
                  Expanded reflections published on Hashnode.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  These portfolio reflections present the visual flow and core ideas.

                  Expanded engineering journals explore the deeper implementation context,
                  debugging experiences,
                  systems reasoning,
                  architectural observations,
                  AI leverage mindset,
                  and thought processes behind these reflections.
                </p>

              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://thoughts-of-linga.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/15 hover:text-white"
                >
                  Visit Engineering Journal

                  <span className="transition-transform duration-300 hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

            </div>

          </div>

        </section>

        {/* Thought Archive */}
        <section className="motion-rise motion-rise-delay-1">
          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-slate-100">
              Thought Archive
            </h2>

            <p className="text-sm text-slate-500">
              {thoughts.length} reflection{thoughts.length > 1 ? 's' : ''}
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {thoughts.map((thought) => (
              <ThoughtCard
                key={thought.id}
                thought={thought}
              />
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex rounded-2xl border border-slate-700 bg-slate-950/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
          >
            Back to Portfolio
          </Link>
        </div>

      </div>
    </main>
  );
}