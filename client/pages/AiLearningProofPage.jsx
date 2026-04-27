import { Link } from 'react-router-dom'

const aiLearningProofs = [
  {
    id: 'ai-doubt-driven-learning',
    title: 'Doubt-Driven Java Learning',
    image: '/images/AI_Leveraged_Doubt_Driven_Learning.png',
    meaning:
      'In this screenshot, I asked concept-level Java questions around primitives, autoboxing, and unboxing. This shows that I use AI to understand language design decisions deeply instead of memorizing syntax.',
  },
  {
    id: 'ai-dsa-concepts',
    title: 'AI-Assisted DSA Concept Learning',
    image: '/images/AI_Assisted_DSA_Concept_Learning.png',
    meaning:
      'This conversation represents how I leverage AI to break down DSA logic into understandable chunks and verify my reasoning. I use it as a thinking partner while building problem-solving clarity.',
  },
  {
    id: 'ai-arc26-planning',
    title: 'ARC26 Planning and Execution Tracking',
    image: '/images/AI_Leveraged_ARC26_Planning_And_Execution_Tracking.png',
    meaning:
      'This screenshot reflects how I use AI for structured planning and execution tracking. I convert broad goals into practical, sequenced tasks and keep momentum through disciplined follow-through.',
  },
  {
    id: 'ai-scaler-clarification',
    title: 'Scaler Quiz Concept Clarification',
    image: '/images/AI_Leveraged_Scaler_Quiz_Concept_Clarification.png',
    meaning:
      'Here I used AI to clarify quiz concepts and close understanding gaps quickly. This helps me learn from mistakes immediately and strengthen my fundamentals before moving ahead.',
  },
  {
    id: 'ai-cloud-learning',
    title: 'Learning Cloud Computing',
    image: '/images/AI_Leveraged_Learning_Cloud_Computing.png',
    meaning:
      'This screenshot shows my cloud learning process using AI to understand terminology and architecture ideas in a practical way. I use it to connect abstract concepts with real implementation thinking.',
  },
  {
    id: 'ai-fcc-javascript-learning',
    title: 'freeCodeCamp JavaScript Learning Support',
    image: '/images/AI_Leveraged_Learning_freeCodeCamp_JavaScript.png',
    meaning:
      'I used AI alongside freeCodeCamp JavaScript content to strengthen concept retention and coding confidence. This demonstrates my habit of active learning through explanation, practice, and reflection.',
  },
  {
    id: 'ai-english-growth',
    title: 'English B1 Word Meaning and Usage',
    image: '/images/AI_Leveraged_English_B1_Word_Meaning_And_Usage.png',
    meaning:
      'This conversation shows that I also leverage AI to improve communication, not just technical coding skills. Better language clarity helps me collaborate better and present ideas more effectively.',
  },
]

function AiLearningProofPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(45,212,191,0.14),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">AI Learning Evidence</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How I Leverage AI for Real Learning</h1>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            I leverage AI as a learning amplifier. These screenshots show my first-person workflow: asking deep questions,
            clarifying doubts, planning execution, and translating understanding into consistent action.
          </p>

          <div className="mt-8 space-y-6">
            {aiLearningProofs.map((item, index) => (
              <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Screenshot {index + 1}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h2>

                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-4 h-56 w-full rounded-xl border border-slate-800 bg-slate-950/70 object-contain p-1 sm:h-72"
                  loading="lazy"
                />

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">What This Meant to Me</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.meaning}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiLearningProofPage
