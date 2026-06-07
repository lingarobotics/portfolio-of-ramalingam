import { Link, useParams } from 'react-router-dom';

import DomainCard from '../components/learning/DomainCard';

import platforms from '../data/learning/platforms';

import infosysSpringboardDomains from '../data/learning/infosys-springboard/domains';

function LearningPlatformPage() {
  const { platformSlug } = useParams();

  const platform = platforms.find(
    (item) => item.slug === platformSlug
  );

  if (!platform) {
    return (
      <main className="min-h-screen p-8 text-slate-100">
        Platform not found.
      </main>
    );
  }
  const domains =
    platform.slug === 'infosys-springboard'
      ? infosysSpringboardDomains
      : [];

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
            Learning Platform
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
            {platform.name}
          </h1>

          <p
            className="
              mt-5
              max-w-4xl
              leading-relaxed
              text-slate-300
            "
          >
            {platform.description}
          </p>

          <Link
            to="/learning-platforms"
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
            ← Back to Platforms
          </Link>

        </section>

        <section className="mt-12">

          <h2
            className="
              text-2xl
              font-semibold
              text-slate-100
            "
          >
            Learning Domains
          </h2>

          <div
            className="
              mt-6
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            {domains.map((domain) => (
              <DomainCard
                key={domain.id}
                domain={domain}
                platformSlug={platform.slug}
              />
            ))}
          </div>

        </section>

      </div>

    </main>
  );
}

export default LearningPlatformPage;
