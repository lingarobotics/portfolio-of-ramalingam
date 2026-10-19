function LearningEntry({ entry }) {
  const categoryLabels = {
    'learning-outcomes': 'Learning Outcomes',
    'doubts-questions': 'Doubts & Questions',
    'new-learning': 'New Learning',
    realizations: 'Realizations',
    corrections: 'Corrections',
    application: 'Application',
    reflection: 'Reflection'
  }

  const label = categoryLabels[entry.category] || entry.category

  return (
    <article key={entry.id} className="border-2 border-[#111111] bg-white shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
            {String(entry.date || 'Date not recorded')}
          </span>
          <span className="border border-[#111111] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111111]">
            {label}
          </span>
        </div>

        <h3 className="mt-1 text-xl font-bold text-[#111111]">{entry.title}</h3>
        <p className="mt-4 leading-relaxed text-[#444444] whitespace-pre-line">{entry.content}</p>
      </div>
    </article>
  )
}

export default LearningEntry
