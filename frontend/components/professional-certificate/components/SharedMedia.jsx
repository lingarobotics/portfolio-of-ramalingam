import { useState } from 'react'

function SharedMedia({ media }) {
  const [hasError, setHasError] = useState(false)

  return (
    <article className="rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#444444]">
        {media.type || 'Learning Method Evidence'}
      </p>
      <h3 className="mt-3 text-xl font-bold text-[#111111]">{media.caption}</h3>
      <a href={media.path} target="_blank" rel="noopener noreferrer" className="mt-4 block border border-[#111111]/20 bg-[#f5f5ef] p-2 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]">
        {hasError ? (
          <p className="p-4 leading-relaxed text-[#444444]">This learning image is not available. Use the link below to try opening the source directly.</p>
        ) : (
          <img src={media.path} alt={media.alt || media.caption} onError={() => setHasError(true)} className="h-auto max-h-[60vh] w-full object-contain" loading="lazy" />
        )}
      </a>
      {media.usage && <p className="mt-4 leading-relaxed text-[#444444]">{media.usage}</p>}
      <a href={media.path} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]">
        Open Full-Size Image ↗
      </a>
    </article>
  )
}

export default SharedMedia
