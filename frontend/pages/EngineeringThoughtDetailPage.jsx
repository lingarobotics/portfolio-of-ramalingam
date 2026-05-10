import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import thoughts from '../data/thoughts';
import ThoughtSlide from '../components/ThoughtSlide';

export default function EngineeringThoughtDetailPage() {
  const { id } = useParams();

  const thought = useMemo(
    () => thoughts.find((item) => item.id === id),
    [id]
  );

  if (!thought) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">
            Engineering Thoughts
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-slate-100">
            Thought not found
          </h1>

          <p className="mt-4 max-w-lg text-slate-400">
            The reflection you are trying to access does not exist
            or may have been moved.
          </p>

          <Link
            to="/engineering-thoughts"
            className="mt-8 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/15 hover:text-white"
          >
            Back to Thoughts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-atmosphere min-h-screen bg-slate-950">

      {/* Hero */}
      <section className="section-content mx-auto max-w-5xl px-6 pt-24">
        <Link
          to="/engineering-thoughts"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-200"
        >
          ← Back to Engineering Thoughts
        </Link>

        <div className="motion-rise mt-10">

          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">
            {thought.category}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            {thought.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {thought.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>{thought.date}</span>
            <span>•</span>
            <span>@{thought.source}</span>
          </div>

        </div>
      </section>

      {/* Slides */}
      <section className="section-content mx-auto mt-20 flex max-w-5xl flex-col gap-32 px-6 pb-32">
        {thought.slides.map((slide) => (
          <ThoughtSlide
            key={slide.order}
            slide={slide}
          />
        ))}
      </section>

      {/* Final Insight */}
      <section className="section-content mx-auto max-w-4xl px-6 pb-32">
        <div className="motion-rise rounded-[2rem] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-emerald-500/10 p-10 backdrop-blur-sm">

          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
            Overall Insight
          </p>

          <p className="mt-6 text-xl leading-9 text-slate-200">
            {thought.overallInsight}
          </p>

        </div>
      </section>

    </main>
  );
}