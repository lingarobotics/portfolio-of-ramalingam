import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductSection from '../components/product/ProductSection'
import ProductWorkflow from '../components/product/ProductWorkflow'
import ProductRoadmap from '../components/product/ProductRoadmap'
import ProductTechList from '../components/product/ProductTechList'

const techStackIcons = [
  { name: 'Python', src: '/images/python.webp' },
  { name: 'React', src: '/images/react.webp' },
  { name: 'Vite', src: '/images/vite.webp' },
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
        <div>
          <ProductHero
            label="Experimental System Deep Dive"
            title="Bugsense AI - Product Overview"
            description={
              <>
                BugSense AI is an AI-assisted defect intelligence system that identifies duplicate software defects, groups related issues through semantic similarity, and improves defect report quality using vector search and natural language processing.

                The project was developed as a collaborative hackathon system where I led the software architecture, system integration, AI pipeline implementation, and engineering coordination.
              </>
            }
            status="Status: Experimental (Active)"
            statusClassName="inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-200"
            techStackItems={techStackIcons}
            stackReason="Tech stack choice: Python is used because the hackathon requirement demanded it and AI embedding workflows are strongly supported in Python tooling."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <ProductSection title="Industry Problem" className="mt-6">
            <p className="text-sm leading-relaxed text-slate-300">
              Large QA ecosystems produce thousands of defect reports across trackers like Jira, Bugzilla, GitHub Issues, and internal systems. Many reports describe the same issue with different wording, which slows triage and inflates defect counts.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {industryPainPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProductSection>

          <ProductWorkflow title="AI Workflow" items={workflow} />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductInfoCard
              title="AI Technology"
              description="Semantic representation is generated using sentence-transformers/all-MiniLM-L6-v2, producing dense embeddings used for nearest-neighbor retrieval over historical defect memory."
            >
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                FAISS powers high-speed vector similarity search, and clustering groups defect families to make triage more structured.
              </p>
            </ProductInfoCard>

            <ProductBulletList title="Core Features" items={coreFeatures} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />
          </div>

          <ProductSection title="System Architecture" className="mt-6">
            <p className="text-sm leading-relaxed text-slate-300">
              React frontend sends defect data to a FastAPI backend, which runs embedding generation, FAISS similarity search, duplicate decision logic, cluster assignment, and bug report enhancement before returning a structured response.
            </p>
          </ProductSection>

          <ProductTechList title="Technology Stack" items={techStack} />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductBulletList title="Project Structure" items={projectStructure} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />

            <ProductWorkflow title="Run Flow" items={runFlow} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />
          </div>

          <ProductSection title="API Endpoint" className="mt-6">
            <p className="text-sm leading-relaxed text-slate-300">
              Primary endpoint: POST /check-defect. Response includes decision, confidence, cluster_id, top_matches, and improved_report for frontend rendering.
            </p>
          </ProductSection>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductBulletList title="Impact for QA Teams" items={['Reduces duplicate bug reports', 'Improves report quality', 'Speeds up triage and debugging cycles', 'Keeps issue trackers cleaner and more reliable']} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />
          </div>

          <ProductOwnership
            paragraphs={[
              'This project was independently developed by Ramalingam Jayavelu, Founder of LGC Systems. No external organization or company holds ownership of this repository or its source code.',
              'Additional contributions by collaborators are acknowledged in the repository history.',
              'License: Proprietary - All Rights Reserved.',
            ]}
          />

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