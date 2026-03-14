import skills from '../data/skills'
import { Link } from 'react-router-dom'

const skillIconMap = {
  Java: '/images/java.png',
  JavaScript: '/images/javascript.png',
  TypeScript: '/images/typescript.png',
  Python: '/images/python.png',
  React: '/images/react.png',
  Vite: '/images/vite.jpeg',
  'Tailwind CSS': '/images/tailwindcss.png',
  'Java Backend Development': '/images/java.png',
  PostgreSQL: '/images/postgresql.png',
  'MongoDB Atlas (basic)': '/images/mongodb.png',
  'Cloud Fundamentals': '/images/cloud.png',
  'Data Structures and Algorithms (foundational)': '/images/dsa.png',
  Git: '/images/git.png',
  GitHub: '/images/github.png',
  'IntelliJ IDEA Ultimate': '/images/intellijidea.png',
  'VS Code': '/images/vscode.png',
}

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Skills & Technical Focus</h2>
        <Link
          to="/github-workflow-proof"
          className="inline-flex rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
        >
          Open GitHub Workflow Proof
        </Link>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_26px_rgba(34,211,238,0.12)]"
          >
            <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-200 transition duration-300 [overflow-wrap:anywhere] hover:border-cyan-400/50 hover:text-cyan-100"
                >
                  {skillIconMap[item] ? (
                    <img
                      src={skillIconMap[item]}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 rounded-sm object-cover"
                    />
                  ) : null}
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
