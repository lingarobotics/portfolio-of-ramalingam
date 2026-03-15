import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'Python', src: '/images/python.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
]

const industryPainPoints = [
  'Duplicate defects reported with different wording',
  'Poorly written descriptions with missing reproduction details',
  'High triage friction in large issue trackers',
  'Keyword search misses semantic equivalence',
]

const workflow = [
  'Tester submits a bug report',
  'Text preprocessing runs on title, description, and steps',
  'Sentence-Transformer embeddings are generated',
  'FAISS vector similarity search retrieves nearest historical reports',
  'Duplicate classification is computed',
  'DBSCAN-style cluster assignment groups related defects',
  'Bug report enhancement generates clearer output',
  'Structured response is returned to the frontend',
]

const coreFeatures = [
  'Duplicate classification: duplicate, possible_duplicate, new_defect',
  'Top-5 similar bug retrieval with similarity scores',
  'Automatic bug-report clarity enhancement',
  'Cluster-level visibility for bug families',
]

const techStack = [
  'Backend: Python, FastAPI, Uvicorn, Pydantic',
  'AI and ML: Sentence Transformers, FAISS, Scikit-learn, PyTorch',
  'Data and Processing: NumPy, Pandas',
  'Frontend: React, Vite, Axios',
  'Testing: Pytest',
]

const projectStructure = [
  'ai/embedding_engine.py, vector_store.py, similarity_search.py',
  'clustering/cluster_engine.py, cluster_utils.py',
  'enhancer/report_enhancer.py',
  'services/defect_service.py',
  'api-backend/api/main.py, routes.py, schemas.py, response_builder.py',
  'utils/preprocessing.py, text_utils.py',
  'scripts/build_index.py',
  'models/vector_index/',
  'tests/',
  'frontend/',
]

const runFlow = [
  'Install dependencies: pip install -r requirements.txt',
  'Build index: python scripts/build_index.py',
  'Start backend: python run_server.py',
  'Start frontend: cd frontend, npm install, npm run dev',
]

const futureEnhancements = [
  'Jira integration',
  'GitHub Issues integration',
  'LLM-powered bug summarization',
  'Bug severity prediction',
  'Real-time defect deduplication',
  'Distributed vector database support',
]

function BugsenseAiOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Experimental System Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Bugsense AI - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built Bugsense AI as an AI-powered defect intelligence system that detects duplicate bug reports, clusters related defects, and improves poorly written reports using semantic similarity and vector search.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-200">Status: Experimental (Active)</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: Python is used because the hackathon requirement demanded it and AI embedding workflows are strongly supported in Python tooling."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Industry Problem</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Large QA ecosystems produce thousands of defect reports across trackers like Jira, Bugzilla, GitHub Issues, and internal systems. Many reports describe the same issue with different wording, which slows triage and inflates defect counts.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {industryPainPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">AI Workflow</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">AI Technology</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Semantic representation is generated using sentence-transformers/all-MiniLM-L6-v2, producing dense embeddings used for nearest-neighbor retrieval over historical defect memory.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                FAISS powers high-speed vector similarity search, and clustering groups defect families to make triage more structured.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Features</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {coreFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">System Architecture</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              React frontend sends defect data to a FastAPI backend, which runs embedding generation, FAISS similarity search, duplicate decision logic, cluster assignment, and bug report enhancement before returning a structured response.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Technology Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Structure</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {projectStructure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Run Flow</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {runFlow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">API Endpoint</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Primary endpoint: POST /check-defect. Response includes decision, confidence, cluster_id, top_matches, and improved_report for frontend rendering.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Impact for QA Teams</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Reduces duplicate bug reports</li>
                <li>Improves report quality</li>
                <li>Speeds up triage and debugging cycles</li>
                <li>Keeps issue trackers cleaner and more reliable</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Future Enhancements</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {futureEnhancements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and License</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This project was independently developed by Ramalingam Jayavelu, Founder of LGC Systems. No external organization or company holds ownership of this repository or its source code.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              Additional contributions by collaborators are acknowledged in the repository history.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              License: Proprietary - All Rights Reserved.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/bug-duplicate-detector-ai-system"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
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

export default BugsenseAiOverviewPage
