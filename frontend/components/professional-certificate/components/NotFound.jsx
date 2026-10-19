import { Link } from 'react-router-dom'

function NotFound({ type, id, backLink, backLabel }) {
  return (
    <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">
          {type} Not Found
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#111111]">
          {type} not found
        </h1>
        <p className="mt-4 max-w-lg text-[#444444]">
          The requested {type.toLowerCase()} does not exist or has not been published yet.
        </p>
        {backLink && (
          <Link
            to={backLink}
            className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]"
          >
            {backLabel || 'Back to Portfolio'}
          </Link>
        )}
      </div>
    </main>
  )
}

export default NotFound
