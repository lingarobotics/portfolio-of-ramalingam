import { Link } from 'react-router-dom'

const proofItems = [
  {
    id: 'devtools-debug',
    title: 'Runtime Debugging with Browser DevTools',
    image: '/images/API_Endpoint_Failure_Debugging_Session.png',
    alt: 'Browser devtools showing API failure debugging session for auth flow',
    explanation:
      'In this screenshot, I am validating my auth flow with browser DevTools while reproducing an API failure. I inspect console and network signals, confirm the failing endpoint, and use that evidence to isolate backend/auth integration issues before applying fixes.',
  },
  {
    id: 'domain-email-proof',
    title: 'Production Email Authentication via Domain DNS Records',
    image: '/images/LGC_Production_Email_Auth_Proof.png',
    alt: 'Domain DNS email records proving SPF DKIM and DMARC style authentication setup',
    explanation:
      'This proof shows I configured domain-level email authentication records for professional outbound mail. I set up digitally signed email delivery through my own domain so messages are verified, trustable, and far less likely to be flagged as spam.',
  },
]

function LgcConceptAiProofPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.14),transparent_34%),radial-gradient(circle_at_84%_8%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">LGC Concept AI - Product Proof</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Auth Flow and Debugging Evidence</h1>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            These proof snapshots show how I work in real product conditions: I debug runtime failures with evidence, and I configure
            production-grade infrastructure details like authenticated domain email delivery.
          </p>

          <div className="mt-8 space-y-6">
            {proofItems.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Evidence Snapshot</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h2>

                <img
                  src={item.image}
                  alt={item.alt}
                  className="mt-4 h-auto w-full rounded-xl border border-slate-800 object-cover"
                  loading="lazy"
                />

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">What This Meant to Me</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.explanation}</p>
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

export default LgcConceptAiProofPage
