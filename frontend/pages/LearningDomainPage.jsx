import { Link, useParams } from 'react-router-dom';

import JourneyCard from '../components/learning/JourneyCard';

import infosysSpringboardDomains from '../data/learning/infosys-springboard/domains';

import internshipShortlistJourney from '../data/learning/infosys-springboard/journeys/internship-shortlist';

function LearningDomainPage() {
  const {
    platformSlug,
    domainSlug
  } = useParams();

  const domain = infosysSpringboardDomains.find(
    (item) => item.slug === domainSlug
  );

  if (!domain) {
    return (
      <main className="min-h-screen p-8 text-slate-100">
        Domain not found.
      </main>
    );
  }

  const journeys = [internshipShortlistJourney];

  return (
    <main className="section-atmosphere min-h-screen">

      <div className="section-content mx-auto max-w-7xl px-4 py-16 sm:px-6">

        <section>

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-cyan-200
            "
          >
            Learning Domain
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
            {domain.name}
          </h1>

          <p
            className="
              mt-5
              max-w-4xl
              leading-relaxed
              text-slate-300
            "
          >
            {domain.description}
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
            Learning Journeys
          </h2>

          <div className="mt-6 grid gap-6">

            {journeys.map((journey) => (
              <JourneyCard
                key={journey.id}
                journey={journey}
                platformSlug={platformSlug}
                domainSlug={domainSlug}
              />
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}

export default LearningDomainPage;
