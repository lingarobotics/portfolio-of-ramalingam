import { useState } from 'react'

function CertificatePdf({ src, title }) {
  const [hasError, setHasError] = useState(false)

  if (!src) return null

  return (
    <div>
      <div className="hidden sm:block">
        {hasError ? (
          <p className="border border-[#111111] bg-[#f5f5ef] p-4 leading-relaxed text-[#444444]">
            This PDF could not be embedded in the page. Use the button below to open the document directly.
          </p>
        ) : (
          <iframe
            src={src}
            title={title}
            onError={() => setHasError(true)}
            className="h-[32rem] w-full border border-[#111111] bg-[#f5f5ef] sm:h-[44rem]"
          />
        )}
      </div>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-none border border-[#111111] bg-[#111111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] sm:w-auto sm:bg-white sm:px-4 sm:py-2 sm:text-[#111111] sm:normal-case sm:tracking-normal sm:shadow-none sm:hover:bg-[#f5f5ef]"
      >
        Open PDF ↗
      </a>
    </div>
  )
}

export default CertificatePdf
