import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductSection from '../components/product/ProductSection'
import ProductTechList from '../components/product/ProductTechList'

const techStackIcons = [
  { name: 'Java', src: '/images/java.webp' },
  { name: 'Spring Boot', src: '/images/springboot.webp' },
  { name: 'PostgreSQL', src: '/images/postgresql.webp' },
  { name: 'React', src: '/images/react.webp' },
]

const systemGoals = [
  'Design a backend capable of supporting approximately 18,000 concurrent client requests during examination result publication.',
  'Provide reliable, low-latency result delivery under burst traffic conditions.',
  'Eliminate session and CAPTCHA bottlenecks from the critical result access path.',
  'Deliver secure, cache-friendly result retrieval through a scalable backend architecture.',
]



const legacyProblems = [
  'Session mismatch under concurrent load',
  'CAPTCHA failure at peak traffic',
  'Database bottlenecks and timeout chains',
  'Dynamic render instability and invalid data errors',
]

const architectureFlow = [
  'Exam Cell exports examination dataset',
  'Dataset is validated and transformed',
  'Result artifacts are generated',
  'Backend prepares optimized result delivery',
  'Result data is served through cache-friendly architecture',
  'Student client retrieves and renders examination results',
]


const securityLayers = [
  'HTTPS/TLS for encrypted transport',
  'Client-side DOB hash verification before render',
  'Optional signed short-lived token flow to limit bulk scraping',
]

const scalingBenefits = [
  'Minimizes repeated database access through caching strategies',
  'Reduces backend workload during burst traffic',
  'Separates result generation from result delivery',
  'Designed for predictable performance under high-read workloads',
]


const currentScope = [
  'Relational schema design',
  'High-read REST API architecture',
  'Caching strategy evaluation',
  'Request optimization',
  'Backend service design',
  'Security and access validation',
]

const backendEngineeringTopics = [
  'High-read backend architecture',
  'Relational schema design',
  'REST API contract design',
  'Caching strategies',
  'Connection management',
  'Operational observability',
  'Performance engineering',
  'Scalable backend systems',
]

const nextScope = [
  'Spring Boot implementation',
  'Performance benchmarking',
  'Operational observability using Spring Boot Actuator',
  'Load testing under concurrent traffic',
  'Deployment architecture',
]

const projectStructure = [
  'controller/ for REST endpoints',
  'service/ for business logic',
  'repository/ for persistence',
  'entity/ for relational models',
  'dto/ for request and response contracts',
  'config/ for Spring configuration',
  'cache/ for caching strategies',
  'monitoring/ for observability components',
]

function LgcResultGridOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div>
          <ProductHero
            label="Product Deep Dive"
            title="LGC ResultGrid - Product Overview"
            description="LGC ResultGrid is a backend engineering project focused on designing a scalable university examination result publication platform. The project explores high-read API architecture, relational data modeling, caching strategies, request optimization, and operational observability to improve reliability during peak result release periods."
            status="Status: Under Development"
            statusClassName="inline-flex rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200"
            techStackItems={techStackIcons}
            stackReason="Tech stack choice: Java is selected for backend robustness, stronger security posture, and long-term maintainability in system-level services."
            environment="IntelliJ IDEA Ultimate"
            environmentIcon="/images/intellijidea.webp"
            environmentReason="I chose IntelliJ IDEA Ultimate for robust backend engineering, especially Java and Spring Boot development, with stronger project structure tooling and debugging support."
          />

          <ProductBulletList title="System Goal" items={systemGoals} />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductBulletList title="Legacy Portal Failure Points" items={legacyProblems} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />

            <ProductSection title="Core Design Philosophy" className="mt-0">
              <p className="text-sm leading-relaxed text-slate-300">
                Design for scale before implementation.

                ResultGrid prioritizes backend architecture over user interface development by exploring high-read system design, separation of concerns, scalable relational modeling, caching, and reliable API design before implementation.
              </p>
            </ProductSection>
          </div>

          <ProductBulletList title="Core Architecture Flow" items={architectureFlow} />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductSection title="Result Storage Model" className="mt-0">
              <p className="text-sm leading-relaxed text-slate-300">
                Academic information is modeled through a normalized relational schema designed for maintainability and efficient query execution.

                The architecture separates data generation, persistence, caching, and result delivery into independent responsibilities, enabling scalable and reliable backend services.
              </p>
            </ProductSection>

            <ProductSection title="Result Access Flow" className="mt-0">
              <p className="text-sm leading-relaxed text-slate-300">
                The client submits examination credentials.

                The backend validates access requests, retrieves examination results through optimized data access paths, and returns structured responses for presentation.
              </p>
            </ProductSection>
          </div>

          <ProductBulletList title="Security Layers" items={securityLayers} />

          <ProductSection title="Why This System Scales" className="mt-6">
            <ul className="space-y-2 text-sm text-slate-300">
              {scalingBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The architecture is designed to support burst traffic through efficient backend design, cache-friendly response delivery, and scalable deployment strategies. Performance improvements may be further enhanced using CDN integration where appropriate.
            </p>
          </ProductSection>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProductBulletList title="Current Scope" items={currentScope} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />

            <ProductBulletList title="Planned Next Scope" items={nextScope} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4" />
          </div>

          <ProductBulletList title="Backend Engineering Exploration" items={backendEngineeringTopics} />

          <ProductBulletList title="Project Structure" items={projectStructure} />

          <ProductSection title="Status" className="mt-6">
            <p className="text-sm leading-relaxed text-slate-300">Currently in architectural design. The present focus is validating backend design decisions, relational modeling, caching strategies, API contracts, and scalability considerations before implementation begins.</p>
          </ProductSection>

          <ProductOwnership
            paragraphs={[
              'This project is owned by Ramalingam Jayavelu under LGC Systems.',
              'License: Proprietary - All Rights Reserved unless explicitly stated otherwise in the repository license file.',
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/LGC-ResultGrid"
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

export default LgcResultGridOverviewPage

