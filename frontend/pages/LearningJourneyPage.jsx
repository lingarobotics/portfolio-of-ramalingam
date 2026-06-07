import { Link, useParams } from 'react-router-dom';

import JourneyHero from '../components/learning/JourneyHero';
import JourneyTimeline from '../components/learning/JourneyTimeline';
import JourneyChapterCard from '../components/learning/JourneyChapterCard';

import internshipShortlistJourney from '../data/learning/infosys-springboard/journeys/internship-shortlist';

import chapter0AcceptingTheChallenge from '../data/learning/infosys-springboard/chapters/chapter-0-accepting-the-challenge';
import chapter1KnowingOopToImplementingOop from '../data/learning/infosys-springboard/chapters/chapter-1-knowing-oop-to-implementing-oop';
import chapter2UnderstandingCodeToUnderstandingRelationships from '../data/learning/infosys-springboard/chapters/chapter-2-understanding-code-to-understanding-relationships';
import chapter3DatabasesToSystemDesignThinking from '../data/learning/infosys-springboard/chapters/chapter-3-databases-to-system-design-thinking';

const chapters = [
  chapter0AcceptingTheChallenge,
  chapter1KnowingOopToImplementingOop,
  chapter2UnderstandingCodeToUnderstandingRelationships,
  chapter3DatabasesToSystemDesignThinking
];

function LearningJourneyPage() {
  const { platformSlug, domainSlug } = useParams();
  const journey = internshipShortlistJourney;

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="motion-rise">
          <Link
            to="/learning-platforms"
            className="inline-flex items-center rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
          >
            ← Back to Platforms
          </Link>
        </div>

        <div className="mt-6">
          <JourneyHero journey={journey} />
        </div>

        <div className="mt-10">
          <JourneyTimeline milestones={journey.milestones} />
        </div>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-slate-100">
            Learning Chapters
          </h2>

          <div className="mt-6 space-y-8">
            {chapters.map((chapter) => (
              <JourneyChapterCard
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-100">
            Certificates & Learning Evidence
          </h2>

          <p className="mt-4 mx-auto max-w-3xl leading-relaxed text-slate-300">
            The journey explains how understanding evolved.
            The certificates provide evidence of the learning
            path completed throughout the internship preparation.
          </p>

          <Link
            to={`/learning-certificates/${platformSlug}/${domainSlug}/${journey.slug}`}
            className="mt-6 inline-flex items-center rounded-xl border border-cyan-400/40 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-300"
          >
            View Certificates →
          </Link>
        </section>
      </div>
    </main>
  );
}

export default LearningJourneyPage;
