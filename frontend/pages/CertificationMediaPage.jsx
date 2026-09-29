import { Link, useParams } from 'react-router-dom'
import certifications from '../data/certifications'
import CertificationMedia from '../components/CertificationMedia'

function CertificationMediaPage() {
  const { id, mediaId } = useParams()
  const certification = certifications.find((item) => item.id === id)
  const media = Array.isArray(certification?.media) ? certification.media : []

  if (!mediaId) {
    if (!certification || media.length === 0) {
      return <MediaNotFound certificationId={id} />
    }

    return (
      <main className="section-atmosphere min-h-screen">
        <div className="section-content mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link to={`/certifications/${certification.id}`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">← Back to Certification</Link>
          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444]">Supporting Learning Evidence</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-6xl">Images and learning documentation</h1>
            <p className="mt-5 max-w-3xl leading-relaxed text-[#444444]">Supporting images from the certification story, each presented with its caption and context.</p>
          </header>
          <div className="mt-10 space-y-8">
            {media.map((item) => (
              <article key={item.id} id={item.id} className="rounded-none border border-[#111111] bg-white p-5 shadow-[8px_8px_0_rgba(17,17,17,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">{item.type}</p>
                <h2 className="mt-2 text-2xl font-bold text-[#111111]">{item.label}</h2>
                <div className="mt-5 border border-[#111111] bg-[#f5f5ef] p-2 sm:p-4"><CertificationMedia media={item} /></div>
                {item.caption && <p className="mt-5 max-w-3xl border-l-4 border-[#111111] bg-[#f5f5ef] p-4 leading-relaxed text-[#444444]">{item.caption}</p>}
                <Link to={`/certifications/${certification.id}/media/${item.id}`} className="mt-5 inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">Open documentation page →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    )
  }

  const selectedMedia = media.find((item) => item.id === mediaId)

  if (!certification || !selectedMedia) return <MediaNotFound certificationId={id} />

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Link to={`/certifications/${certification.id}`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">← Back to Certification</Link>
        <section className="mt-8 rounded-none border border-[#111111] bg-white p-5 shadow-[8px_8px_0_rgba(17,17,17,0.08)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444]">Supporting {selectedMedia.type}</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-[#111111] sm:text-5xl">{selectedMedia.label}</h1>
          <div className="mt-8 border border-[#111111] bg-[#f5f5ef] p-2 sm:p-4"><CertificationMedia media={selectedMedia} /></div>
          {selectedMedia.caption && (
            <div className="mt-5 border-l-4 border-[#111111] bg-[#f5f5ef] p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">Documentation</p>
              <p className="mt-2 max-w-3xl leading-relaxed text-[#444444]">{selectedMedia.caption}</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

function MediaNotFound({ certificationId }) {
  return (
    <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Supporting Media</p>
        <h1 className="mt-4 text-4xl font-bold text-[#111111]">Media not found</h1>
        <Link to={`/certifications/${certificationId}`} className="mt-8 inline-flex border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold text-white">Back to Certification</Link>
      </div>
    </main>
  )
}

export default CertificationMediaPage