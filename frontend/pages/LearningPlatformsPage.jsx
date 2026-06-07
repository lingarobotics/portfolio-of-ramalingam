import { Link } from 'react-router-dom';

import PlatformCard from '../components/learning/PlatformCard';

import platforms from '../data/learning/platforms';

function LearningPlatformsPage() {
  return (
    <main className="section-atmosphere min-h-screen">

      <div className="section-content mx-auto max-w-7xl px-4 py-16 sm:px-6">

        <section className="motion-rise">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-cyan-200
            "
          >
            Learning Journey
          </p>

          <h1
            className="
              mt-3
              text-4xl
              font-semibold
              tracking-tight
              text-slate-100
              sm:text-5xl
            "
          >
            Platforms That Shaped My Learning
          </h1>

          <p
            className="
              mt-5
              max-w-3xl
              leading-relaxed
              text-slate-300
            "
          >
            A collection of learning platforms,
            journeys,
            certificates,
            engineering lessons,
            and reflections documenting how knowledge evolved
            into practical capability.
          </p>

          <Link
            to="/"
            className="
              mt-6
              inline-flex
              items-center
              rounded-xl
              border
              border-slate-700
              px-4
              py-2
              text-sm
              text-slate-300
              transition
              hover:border-cyan-400/50
              hover:text-cyan-200
            "
          >
            ← Back to Portfolio
          </Link>

        </section>

        <section
          className="
            mt-12
            grid
            gap-6
          "
        >
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
            />
          ))}
        </section>

      </div>

    </main>
  );
}

export default LearningPlatformsPage;
