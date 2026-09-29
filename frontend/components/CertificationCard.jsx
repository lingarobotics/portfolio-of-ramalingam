import { Link } from 'react-router-dom'

function CertificationCard({ certification }) {
  return (
    <article className="rounded-none border border-[#111111] bg-white p-6 shadow-[8px_8px_0_rgba(17,17,17,0.08)] transition hover:bg-[#f5f5ef]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#444444]">
        Certification
      </p>

      <h3 className="mt-3 text-2xl font-bold text-[#111111]">
        {certification.name}
      </h3>

      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-[#666666]">Issuer</dt>
          <dd className="mt-1 font-semibold text-[#111111]">{certification.issuer}</dd>
        </div>
        <div>
          <dt className="text-[#666666]">Issued</dt>
          <dd className="mt-1 font-semibold text-[#111111]">{certification.issueDate || 'Date pending'}</dd>
        </div>
        <div>
          <dt className="text-[#666666]">Result</dt>
          <dd className="mt-1 font-semibold text-[#111111]">
            {certification.score !== null && certification.score !== undefined && certification.score !== ''
              ? `${certification.score}%`
              : 'Credential record'}
          </dd>
        </div>
      </dl>

      <Link
        to={`/certifications/${certification.id}`}
        className="mt-6 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
      >
        View Certification →
      </Link>
    </article>
  )
}

export default CertificationCard