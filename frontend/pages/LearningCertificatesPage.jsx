import { Link } from 'react-router-dom';

import CourseCard from '../components/learning/CourseCard';

import courses from '../data/learning/infosys-springboard/courses';

const courseGroups = [
  {
    label: 'Java & OOP',
    learningArea: 'Java & OOP'
  },
  {
    label: 'Data & Databases',
    learningArea: 'Data & Databases'
  },
  {
    label: 'Software Engineering & Agile',
    learningArea: 'Software Engineering & Agile'
  }
].map((group) => ({
  ...group,
  courses: courses.filter(
    (course) => course.learningArea === group.learningArea
  )
}));

function LearningCertificatesPage() {
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
            Learning Evidence
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
            Certificates & Capabilities
          </h1>

          <p
            className="
              mt-5
              max-w-4xl
              leading-relaxed
              text-slate-300
            "
          >
            Certificates represent completed learning milestones.
            More importantly, each learning artifact contributed
            toward building practical capabilities, engineering
            thinking, and system-level understanding.
          </p>

          <Link
            to={-1}
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
            ← Back
          </Link>

        </section>

        <section className="mt-12">

          {courseGroups.map((group) => (
            <section
              key={group.learningArea}
              className="mt-16 first:mt-0"
            >
              <h2
                className="
                  text-3xl
                  font-semibold
                  text-slate-100
                "
              >
                {group.label}
              </h2>

              <div
                className="
                  mt-6
                  grid
                  gap-6
                  lg:grid-cols-2
                "
              >
                {group.courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                ))}
              </div>
            </section>
          ))}

        </section>

      </div>

    </main>
  );
}

export default LearningCertificatesPage;
