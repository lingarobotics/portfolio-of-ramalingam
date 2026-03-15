import { Link } from 'react-router-dom'

const githubProofItems = [
  {
    id: 'system-files-staged-mistake',
    title: 'Git Learning: Accidental System File Staging and Recovery',
    pdf: '/A_Small_Git_Mistake_That_Can_Break_Your_Entire_System.pdf',
    meaning:
      'In this learning incident, I accidentally staged files from my user-level system path instead of only project files. I corrected the repo scope, removed unintended staged content, and reinforced safe Git habits like checking repository root and using status checks before commit.',
  },
  {
    id: 'pull-from-local',
    title: 'Pulling from Local Workflow Snapshot',
    image: '/images/pullfromlocal.jpeg',
    meaning:
      'In this portfolio repo, I first sync local and remote before feature work. This reduces merge conflicts and keeps my branch history clean for review.',
  },
  {
    id: 'pr-1',
    title: 'PR 1: PR Opened with Scope Summary',
    image: '/images/PR1.png',
    meaning:
      'This screenshot shows how I open a pull request with a clear summary so reviewers immediately understand the purpose and scope of changes.',
  },
  {
    id: 'pr-2',
    title: 'PR 2: Branch-to-PR Workflow',
    image: '/images/PR2.png',
    meaning:
      'This PR proof captures my branch workflow: commit locally, push branch, and raise a PR instead of committing directly to the main branch.',
  },
  {
    id: 'pr-3',
    title: 'PR 3: Reviewable Commit Trail',
    image: '/images/PR3.png',
    meaning:
      'This screenshot demonstrates that I keep an inspectable commit trail inside PRs, making each code change traceable and easy to review.',
  },
  {
    id: 'pr-4',
    title: 'PR 4: Files Changed Inspection',
    image: '/images/PR4.png',
    meaning:
      'This PR image highlights my files-changed review habit: I verify diff quality and scope before merge to avoid accidental or noisy updates.',
  },
  {
    id: 'pr-5',
    title: 'PR 5: Description and Context Quality',
    image: '/images/PR5.png',
    meaning:
      'This snapshot reflects how I provide enough PR context so someone reading the thread can understand what changed, why it changed, and what to verify.',
  },
  {
    id: 'pr-6',
    title: 'PR 6: Incremental Delivery Practice',
    image: '/images/PR6.png',
    meaning:
      'This PR evidence shows incremental delivery: I split work into manageable review units so merges are safer and easier to reason about.',
  },
  {
    id: 'pr-7',
    title: 'PR 7: Review Conversation Readiness',
    image: '/images/PR7.png',
    meaning:
      'This screenshot represents review-readiness: my PRs are structured to support discussion, feedback loops, and clear decision-making before merge.',
  },
  {
    id: 'pr-8',
    title: 'PR 8: Merge-Safe Change Boundaries',
    image: '/images/PR8.png',
    meaning:
      'This PR demonstrates controlled scope boundaries, which helps reduce merge risk and keeps each change set focused on one intent.',
  },
  {
    id: 'pr-9',
    title: 'PR 9: Traceable GitHub History',
    image: '/images/PR9.png',
    meaning:
      'This screenshot shows how I use PRs to build a clean and traceable GitHub history, where every merge documents a concrete step in progress.',
  },
  {
    id: 'pr-10',
    title: 'PR 10: End-to-End PR Discipline',
    image: '/images/PR10.png',
    meaning:
      'This final PR proof summarizes my workflow discipline: local updates, branch push, PR creation, reviewability, and merge with documented context.',
  },
]

function GitHubWorkflowProofPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_84%_8%,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Git and GitHub Practice</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How I Use Git and GitHub in Real Work</h1>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            I use Git and GitHub as a disciplined engineering workflow: local sync, incremental commits, review-ready pull requests,
            and traceable iteration. These screenshots show that process in action.
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-400">
            Each note below focuses on PR workflow evidence: scope, reviewability, traceability, and merge discipline.
          </p>

          <div className="mt-8 space-y-6">
            {githubProofItems.map((item, index) => (
              <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Proof {index + 1}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h2>

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-4 h-56 w-full rounded-xl border border-slate-800 bg-slate-950/70 object-contain p-1 sm:h-72"
                    loading="lazy"
                  />
                ) : null}

                {item.pdf ? (
                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Document Evidence</p>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                    >
                      Open Git Learning PDF
                    </a>
                  </div>
                ) : null}

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

export default GitHubWorkflowProofPage
