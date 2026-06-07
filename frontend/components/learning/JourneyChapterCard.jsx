function JourneyChapterCard({ chapter }) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        sm:p-8
      "
    >
      <div className="flex flex-wrap items-center gap-3">

        <span
          className="
            rounded-full
            border
            border-cyan-400/30
            px-3
            py-1
            text-xs
            font-medium
            text-cyan-200
          "
        >
          {chapter.phase}
        </span>

      </div>

      <h2
        className="
          mt-4
          text-3xl
          font-semibold
          tracking-tight
          text-slate-100
        "
      >
        {chapter.title}
      </h2>

      <p
        className="
          mt-4
          text-lg
          leading-relaxed
          text-slate-300
        "
      >
        {chapter.summary}
      </p>

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-slate-800
          bg-slate-950/60
          p-5
        "
      >
        <div
          className="
            whitespace-pre-line
            leading-relaxed
            text-slate-300
          "
        >
          {chapter.narrative}
        </div>
      </div>

      <div className="mt-8">

        <h3
          className="
            text-lg
            font-semibold
            text-slate-100
          "
        >
          Key Lessons
        </h3>

        <ul
          className="
            mt-4
            space-y-3
            text-slate-300
          "
        >
          {chapter.keyLessons.map((lesson) => (
            <li key={lesson}>
              • {lesson}
            </li>
          ))}
        </ul>

      </div>

      <div className="mt-8 flex flex-wrap gap-2">

        {chapter.tags.map((tag) => (
          <span
            key={tag}
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
            {tag}
          </span>
        ))}

      </div>

    </article>
  );
}

export default JourneyChapterCard;
