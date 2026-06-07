import { useState } from 'react';

function CourseCard({ course }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const conceptsToShow = isExpanded
    ? course.learningCoverage
    : course.learningCoverage.slice(0, 5);

  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
      "
    >
      <img
        src={course.imageSrc}
        alt={course.courseName}
        className="
          h-auto
          w-full
          border-b
          border-slate-800
          object-cover
        "
        loading="lazy"
      />

      <div className="p-6">

        <div className="flex flex-wrap items-center gap-2">

          <span
            className="
              rounded-full
              border
              border-cyan-400/30
              px-3
              py-1
              text-xs
              text-cyan-200
            "
          >
            {course.type}
          </span>

          <span
            className="
              rounded-full
              border
              border-slate-700
              px-3
              py-1
              text-xs
              text-slate-300
            "
          >
            {course.duration}
          </span>

        </div>

        <h3
          className="
            mt-4
            text-xl
            font-semibold
            text-slate-100
          "
        >
          {course.courseName}
        </h3>

        <p
          className="
            mt-3
            leading-relaxed
            text-slate-300
          "
        >
          {course.overview}
        </p>

        <div className="mt-5">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
              text-cyan-200
            "
          >
            Capability Built
          </p>

          <ul
            className="
              mt-3
              space-y-2
              text-sm
              text-slate-300
            "
          >
            {course.capabilityBuilt.map((capability) => (
              <li key={capability}>
                • {capability}
              </li>
            ))}
          </ul>

        </div>

        <div className="mt-5">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
              text-cyan-200
            "
          >
            Key Concepts
          </p>

          <div className="mt-3 flex flex-wrap gap-2">

            {course.keyConcepts.map((concept) => (
              <span
                key={concept}
                className="
                  rounded-full
                  border
                  border-slate-700
                  px-3
                  py-1
                  text-xs
                  text-slate-300
                "
              >
                {concept}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-5">

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="
              text-sm
              font-medium
              text-cyan-200
              transition
              hover:text-cyan-100
            "
          >
            {isExpanded
              ? 'Hide Learning Coverage'
              : 'View Learning Coverage'}
          </button>

          <div className="mt-3">

            <ul
              className="
                space-y-2
                text-sm
                text-slate-300
              "
            >
              {conceptsToShow.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

        <div className="mt-5">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
              text-cyan-200
            "
          >
            Role In Journey
          </p>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-slate-300
            "
          >
            {course.roleInJourney}
          </p>

        </div>

        <div className="mt-6 flex gap-3">

          <a
            href={course.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              rounded-xl
              border
              border-cyan-400/40
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-200
              transition
              hover:border-cyan-300
            "
          >
            View Certificate PDF
          </a>

        </div>

      </div>
    </article>
  );
}

export default CourseCard;
