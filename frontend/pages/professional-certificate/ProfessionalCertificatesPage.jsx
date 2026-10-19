import professionalCertificatesData from '../../data/professional-certificate/professional-certificate'
import ProfessionalCertificateCard from '../../components/professional-certificate/components/ProfessionalCertificateCard'

function ProfessionalCertificatesPage() {
  const certificates = Array.isArray(professionalCertificatesData.professionalCertificates)
    ? professionalCertificatesData.professionalCertificates
    : []

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Link to="/" className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] mb-8">
          ← Back to Portfolio
        </Link>

        <div className="motion-rise mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#444444]">
            Professional Certificates
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Professional Certificates
          </h1>
          <p className="mt-6 max-w-4xl leading-relaxed text-[#444444]">
            Structured learning paths completed on LinkedIn Learning, each with its own
            credential, course records, and documented learning entries.
          </p>
        </div>

        {certificates.length > 0 ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <ProfessionalCertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-3xl leading-relaxed text-[#444444]">
            Professional Certificate records will appear here as documented evidence is added.
          </p>
        )}
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'

export default ProfessionalCertificatesPage
