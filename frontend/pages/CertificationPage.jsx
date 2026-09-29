import { Link, useParams } from 'react-router-dom'
import certifications from '../data/certifications'
import CertificationDocument from '../components/CertificationDocument'

function CertificationPage() {
  const { id } = useParams()
  const certification = certifications.find((item) => item.id === id)

  if (!certification) {
    return (
      <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Certification Record</p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111]">Certification not found</h1>
          <p className="mt-4 max-w-lg text-[#444444]">The requested certification document does not exist or has not been published yet.</p>
          <Link to="/" className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]">Back to Portfolio</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Link to="/" className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">← Back to Portfolio</Link>
        <div className="motion-rise mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444]">Certification Document</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-6xl">{certification.name}</h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#444444]">A structured record of credential details, assessment evidence, preparation, and supporting documents.</p>
        </div>
        <div className="mt-10"><CertificationDocument certification={certification} /></div>
      </div>
    </main>
  )
}

export default CertificationPage