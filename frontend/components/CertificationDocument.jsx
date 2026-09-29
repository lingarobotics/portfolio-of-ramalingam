import { Link } from 'react-router-dom'

function isPresent(value) {
  return value !== null && value !== undefined && value !== ''
}

function comparableUrl(value) {
  if (!isPresent(value)) return ''

  try {
    return new URL(value, window.location.origin).pathname
  } catch {
    return value
  }
}

function DocumentSection({ title, children }) {
  return (
    <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">{title}</h2>
      <div className="mt-4 leading-relaxed text-[#444444]">{children}</div>
    </section>
  )
}

function EvidenceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-none border border-[#111111] bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]"
    >
      {children}
    </a>
  )
}

function CertificationDocument({ certification }) {
  const topicsLearned = Array.isArray(certification.topicsLearned) ? certification.topicsLearned : []
  const evidence = Array.isArray(certification.evidence) ? certification.evidence : []
  const media = Array.isArray(certification.media) ? certification.media : []
  const storySections = Array.isArray(certification.story?.sections) ? certification.story.sections : []
  const dedicatedEvidenceUrls = new Set([certification.certificateFile, certification.credentialUrl, certification.scoreReport].filter(isPresent).map(comparableUrl))
  const additionalEvidence = evidence.filter((item) => !dedicatedEvidenceUrls.has(comparableUrl(item.url)))
  const hasEvidence = isPresent(certification.credentialUrl) || isPresent(certification.scoreReport) || additionalEvidence.length > 0

  return (
    <article aria-label={`${certification.name} certification document`}>
      <header className="rounded-none border border-[#111111] border-l-4 bg-white p-5 shadow-[8px_8px_0_rgba(17,17,17,0.08)] sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444]">{certification.issuer}</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#111111] sm:text-5xl">{certification.name}</h1>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {isPresent(certification.issueDate) && <div><dt className="text-[#666666]">Issue date</dt><dd className="mt-1 font-semibold text-[#111111]">{certification.issueDate}</dd></div>}
          {isPresent(certification.expirationDate) && <div><dt className="text-[#666666]">Expiration</dt><dd className="mt-1 font-semibold text-[#111111]">{certification.expirationDate}</dd></div>}
          {isPresent(certification.score) && <div><dt className="text-[#666666]">Score</dt><dd className="mt-1 font-semibold text-[#111111]">{certification.score}</dd></div>}
          {isPresent(certification.exam) && <div><dt className="text-[#666666]">Exam</dt><dd className="mt-1 font-semibold text-[#111111]">{certification.exam}</dd></div>}
          {isPresent(certification.duration) && <div><dt className="text-[#666666]">Duration</dt><dd className="mt-1 font-semibold text-[#111111]">{certification.duration}</dd></div>}
          {isPresent(certification.credentialId) && <div><dt className="text-[#666666]">Credential ID</dt><dd className="mt-1 break-words font-semibold text-[#111111]">{certification.credentialId}</dd></div>}
        </dl>
      </header>

      {storySections.length > 0 && (
        <section className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444]">Primary narrative</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">{certification.story.title}</h2>
          <div className="mt-6 space-y-6">
            {storySections.map((section, index) => {
              const linkedMedia = Array.isArray(section.mediaLinks)
                ? section.mediaLinks.filter((link) => media.some((item) => item.id === link.mediaId))
                : []

              return (
                <article key={`${section.heading}-${index}`} className="rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#111111]">{section.heading}</h3>
                  <p className="mt-4 max-w-3xl whitespace-pre-line leading-8 text-[#444444]">{section.text}</p>
                  {linkedMedia.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-3 border-t border-[#111111]/20 pt-4">
                      {linkedMedia.map((link) => <Link key={link.mediaId} to={`/certifications/${certification.id}/media/${link.mediaId}`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">{link.label} →</Link>)}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>
      )}

      {topicsLearned.length > 0 && (
        <DocumentSection title="Topics Learned">
          <ul className="grid gap-2 sm:grid-cols-2">
            {topicsLearned.map((topic) => <li key={topic}>• {topic}</li>)}
          </ul>
        </DocumentSection>
      )}

      {hasEvidence && (
        <DocumentSection title="Supporting Evidence">
          {(isPresent(certification.credentialUrl) || isPresent(certification.scoreReport)) && (
            <div className="flex flex-wrap gap-3">
              {isPresent(certification.credentialUrl) && <EvidenceLink href={certification.credentialUrl}>Verify Credential ↗</EvidenceLink>}
              {isPresent(certification.scoreReport) && <EvidenceLink href={certification.scoreReport}>View Score Report ↗</EvidenceLink>}
            </div>
          )}
          {additionalEvidence.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3 border-t border-[#111111]/20 pt-5">
              {additionalEvidence.map((item) => <EvidenceLink key={`${item.label}-${item.url}`} href={item.url}>{item.label} ↗</EvidenceLink>)}
            </div>
          )}
        </DocumentSection>
      )}

      {media.length > 0 && (
        <DocumentSection title="Supporting Media">
          <Link to={`/certifications/${certification.id}/media`} className="inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]">View supporting images for learning →</Link>
        </DocumentSection>
      )}

      {isPresent(certification.certificateFile) && (
        <DocumentSection title="E-Certificate Document">
          <iframe src={certification.certificateFile} title={`${certification.name} e-certificate`} className="h-[32rem] w-full border border-[#111111] bg-[#f5f5ef] sm:h-[44rem]" />
        </DocumentSection>
      )}

      {isPresent(certification.notes) && <DocumentSection title="Notes"><p>{certification.notes}</p></DocumentSection>}
    </article>
  )
}

export default CertificationDocument