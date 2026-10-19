import CertificatePdf from './CertificatePdf'

function isPresent(value) {
  return value !== null && value !== undefined && value !== ''
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

function CertificateEvidence({ certificate }) {
  const credentialUrl = certificate.credentialUrl
  const pdfPath = certificate.pdfPath
  const credentialId = certificate.credentialId

  const hasEvidence = isPresent(credentialUrl) || isPresent(pdfPath) || isPresent(credentialId)

  if (!hasEvidence) return null

  return (
    <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111] mb-3">Certificate Evidence</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {isPresent(credentialId) && (
            <span className="border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111]">
              Credential ID: {credentialId}
            </span>
          )}
          {isPresent(credentialUrl) && <EvidenceLink href={credentialUrl}>Verify Credential ↗</EvidenceLink>}
        </div>
        {isPresent(pdfPath) && (
          <div className="mt-5 border-t border-[#111111]/20 pt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">E-Certificate Document</h3>
            <div className="mt-4">
              <CertificatePdf src={pdfPath} title={`${certificate.title} e-certificate`} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CertificateEvidence
