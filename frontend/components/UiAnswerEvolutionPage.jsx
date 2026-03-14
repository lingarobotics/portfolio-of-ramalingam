import { Link } from 'react-router-dom'

const uiAnswerProofs = [
  {
    id: 'ui-answer-01',
    title: 'UI Answer Layout Iteration 01',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_01.png',
    meaning:
      'In this first snapshot, I established the base answer-format structure so the screen could present marks and layout blocks in a consistent foundation.',
  },
  {
    id: 'ui-answer-02',
    title: 'UI Answer Layout Iteration 02',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_02.png',
    meaning:
      'In this version, I refined the initial structure to improve how answer sections are separated and interpreted at a glance.',
  },
  {
    id: 'ui-answer-03',
    title: 'UI Answer Layout Iteration 03',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_03.png',
    meaning:
      'Here I continued tuning format clarity so mark-related information and answer composition follow a more readable visual order.',
  },
  {
    id: 'ui-answer-04',
    title: 'UI Answer Layout Iteration 04',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_04.png',
    meaning:
      'This snapshot reflects another pass where I improved alignment and structure depth to make the answer format easier to evaluate quickly.',
  },
  {
    id: 'ui-answer-05',
    title: 'UI Answer Layout Iteration 05',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_05.png',
    meaning:
      'In this stage, I adjusted layout consistency further so repeated answer-format components behave in a more stable and predictable way.',
  },
  {
    id: 'ui-answer-06',
    title: 'UI Answer Layout Iteration 06',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_06.png',
    meaning:
      'This iteration shows my focus on structure polish, where I tightened presentation flow between marks, sections, and answer framing.',
  },
  {
    id: 'ui-answer-07',
    title: 'UI Answer Layout Iteration 07',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_07.png',
    meaning:
      'Here I pushed readability and structural balance so the full answer format appears cleaner and easier to consume during review.',
  },
  {
    id: 'ui-answer-08',
    title: 'UI Answer Layout Iteration 08',
    image: '/images/UI_Answer_Format_Mark_Structure_Layout_08.png',
    meaning:
      'This latest snapshot captures the matured version of my answer-format layout work, showing the final stabilized structure after multiple refinement cycles.',
  },
]

function UiAnswerEvolutionPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Early Development Evidence</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">UI Answer Format Evolution</h1>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            These screenshots document how I iterated on answer-format UI structure over time. I use this as proof of layout thinking,
            refinement discipline, and consistency in making each version more review-friendly.
          </p>

          <div className="mt-8 space-y-6">
            {uiAnswerProofs.map((item, index) => (
              <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Iteration {index + 1}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h2>

                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-4 h-auto w-full rounded-xl border border-slate-800 object-cover"
                  loading="lazy"
                />

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">What This Meant to Me</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.meaning}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-400/60 hover:text-emerald-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UiAnswerEvolutionPage
