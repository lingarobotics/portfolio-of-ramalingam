import { Link, useParams } from 'react-router-dom'
import professionalCertificatesData from '../../data/professional-certificate/professional-certificate'
import CertificateEvidence from '../../components/professional-certificate/components/CertificateEvidence'
import SharedMedia from '../../components/professional-certificate/components/SharedMedia'

function isPresent(value) {
  return value !== null && value !== undefined && value !== ''
}

function ProfessionalCertificatePage() {
  const { id } = useParams()
  const certificates = Array.isArray(professionalCertificatesData.professionalCertificates)
    ? professionalCertificatesData.professionalCertificates
    : []
  const certificate = certificates.find((item) => item.id === id)
  const courses = Array.isArray(professionalCertificatesData.courses)
    ? professionalCertificatesData.courses
    : []

  if (!certificate) {
    return (
      <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Professional Certificate</p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111]">Certificate not found</h1>
          <p className="mt-4 max-w-lg text-[#444444]">The requested Professional Certificate does not exist.</p>
          <Link to="/" className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]">Back to Portfolio</Link>
        </div>
      </main>
    )
  }

  const certificateCourseIds = Array.isArray(certificate.courseIds) ? certificate.courseIds : []
  const certificateMediaIds = new Set(
    courses
      .filter((course) => certificateCourseIds.includes(course.id))
      .flatMap((course) => Array.isArray(course.mediaRefs) ? course.mediaRefs : [])
  )
  const sharedMedia = Array.isArray(professionalCertificatesData.sharedMedia)
    ? professionalCertificatesData.sharedMedia
    : []
  const certificateSharedMedia = sharedMedia.filter((media) => certificateMediaIds.has(media.id))

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Link to="/" className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] mb-8">
          ← Back to Portfolio
        </Link>

        <div className="motion-rise mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#444444]">
            Professional Certificate · {certificate.platform}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-6xl">
            {certificate.title}
          </h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#444444]">
            {certificate.overview}
          </p>
        </div>

        <header className="mt-10 rounded-none border border-[#111111] border-l-4 bg-white p-5 shadow-[8px_8px_0_rgba(17,17,17,0.08)] sm:p-7">
          <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="text-[#666666]">Provider</dt>
            <dd className="mt-1 font-semibold text-[#111111]">{certificate.provider}</dd>
          </div>
          <div>
            <dt className="text-[#666666]">Platform</dt>
            <dd className="mt-1 font-semibold text-[#111111]">{certificate.platform}</dd>
          </div>
          <div>
            <dt className="text-[#666666]">Category</dt>
            <dd className="mt-1 font-semibold text-[#111111]">{certificate.category}</dd>
          </div>
          <div>
            <dt className="text-[#666666]">Completed</dt>
            <dd className="mt-1 font-semibold text-[#111111]">
              {isPresent(certificate.completedAt) ? certificate.completedAt : 'Date pending'}
            </dd>
          </div>
          <div>
            <dt className="text-[#666666]">Credential ID</dt>
            <dd className="mt-1 break-all font-semibold text-[#111111]">
              {isPresent(certificate.credentialId) ? certificate.credentialId : 'Not provided'}
            </dd>
          </div>
          <div>
            <dt className="text-[#666666]">Duration</dt>
            <dd className="mt-1 font-semibold text-[#111111]">
              {isPresent(certificate.duration) ? certificate.duration : 'Not specified'}
            </dd>
          </div>
          </dl>
        </header>

        <CertificateEvidence certificate={certificate} />

        {certificateSharedMedia.length > 0 && (
          <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Learning in Practice</h2>
            <p className="mt-4 leading-relaxed text-[#444444]">
              Supporting evidence from the learning methods documented in this Professional Certificate.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {certificateSharedMedia.map((media) => (
                <SharedMedia key={media.id} media={media} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111] mb-3">Purpose</h2>
          <p className="leading-relaxed text-[#444444]">{certificate.purpose}</p>
          {certificate.reasons?.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">Reasons for completing it</h3>
              <ul className="mt-3 space-y-2 leading-relaxed text-[#444444]">
                {certificate.reasons.map((reason) => <li key={reason} className="pl-4 border-l-2 border-[#111111]">{reason}</li>)}
              </ul>
            </div>
          )}
        </section>

        <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111] mb-3">Learning Approach</h2>
          <p className="leading-relaxed text-[#444444]">{certificate.learningApproach.method}</p>
          <p className="mt-4 leading-relaxed text-[#444444]">{certificate.learningApproach.aiRole}</p>
          {certificate.learningApproach.handsOnProgression.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">Hands-on Progression</h3>
              <ul className="mt-3 space-y-2 leading-relaxed text-[#444444]">
                {certificate.learningApproach.handsOnProgression.map((stage, index) => (
                  <li key={index} className="pl-4 border-l-2 border-[#111111]">
                    <span className="font-semibold text-[#111111]">{stage.stage}</span> ({stage.tool}): {stage.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {isPresent(certificate.narrative) && (
          <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111] mb-3">Narrative</h2>
            <p className="leading-relaxed text-[#444444]">{certificate.narrative}</p>
          </section>
        )}

        {isPresent(certificate.assessmentReflection) && (
          <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111] mb-3">Assessment Reflection</h2>
            <p className="leading-relaxed text-[#444444]">{certificate.assessmentReflection}</p>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to={`/professional-certificates/${certificate.id}/journey`}
            className="inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
          >
            Explore Learning Journey →
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProfessionalCertificatePage
