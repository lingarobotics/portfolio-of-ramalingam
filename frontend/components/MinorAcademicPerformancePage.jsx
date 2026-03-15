import { useState } from 'react'
import { Link } from 'react-router-dom'

const minorPerformance = [
  { code: 'CCS375', paper: 'Web Technologies', type: 'Integrated Paper', grade: 'A' },
  { code: 'CCS332', paper: 'App Development', type: 'Integrated Paper', grade: 'A' },
]

const minorSemester6Running = [
  { code: 'CCS336', paper: 'Cloud Services Management', type: 'Integrated Paper', status: 'Running (Semester 6)' },
  { code: 'CCS374', paper: 'Web Application Security', type: 'Integrated Paper', status: 'Running (Semester 6)' },
]

const commonAcademicSupportDocLink = 'https://drive.google.com/drive/folders/1pzmFeUqYxGnlFFjdanNDU4roEdJfp91i?usp=drive_link'

function MinorAcademicPerformancePage() {
  const [openMinorSectionId, setOpenMinorSectionId] = useState('')

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_14%_20%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Academic Performance</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Minor Degree Performance</h1>
          <p className="mt-3 text-sm text-slate-300">CSE (Full Stack Development)</p>
          <p className="mt-2 text-sm text-slate-100"><span className="font-semibold text-cyan-200">Minor CGPA:</span> 8.00</p>

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
            <button
              type="button"
              onClick={() => setOpenMinorSectionId((current) => (current === 'minor-sem5' ? '' : 'minor-sem5'))}
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={openMinorSectionId === 'minor-sem5'}
            >
              <span className="text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-cyan-200 sm:text-xs">Semester 5 - Minor Results (GPA: 8.00)</span>
              <span className="text-lg text-cyan-200">{openMinorSectionId === 'minor-sem5' ? '−' : '+'}</span>
            </button>

            {openMinorSectionId === 'minor-sem5' ? (
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead className="bg-slate-900/80 text-slate-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Subject Code</th>
                      <th className="px-4 py-3 font-semibold">Paper</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minorPerformance.map((item) => (
                      <tr key={item.code} className="border-t border-slate-800 text-slate-200">
                        <td className="px-4 py-3 align-top">{item.code}</td>
                        <td className="px-4 py-3 align-top whitespace-normal">{item.paper}</td>
                        <td className="px-4 py-3 align-top">{item.type}</td>
                        <td className="px-4 py-3 align-top">{item.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
            <button
              type="button"
              onClick={() => setOpenMinorSectionId((current) => (current === 'minor-sem6' ? '' : 'minor-sem6'))}
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={openMinorSectionId === 'minor-sem6'}
            >
              <span className="text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-cyan-200 sm:text-xs">Current Semester (VI) - Minor Running Papers</span>
              <span className="text-lg text-cyan-200">{openMinorSectionId === 'minor-sem6' ? '−' : '+'}</span>
            </button>

            {openMinorSectionId === 'minor-sem6' ? (
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead className="bg-slate-900/80 text-slate-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Subject Code</th>
                      <th className="px-4 py-3 font-semibold">Paper</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minorSemester6Running.map((item) => (
                      <tr key={item.code} className="border-t border-slate-800 text-slate-200">
                        <td className="px-4 py-3 align-top">{item.code}</td>
                        <td className="px-4 py-3 align-top whitespace-normal">{item.paper}</td>
                        <td className="px-4 py-3 align-top">{item.type}</td>
                        <td className="px-4 py-3 align-top">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Common Academic Support Doc</p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
              <p className="text-sm text-slate-200">Major + Minor (All Semester Proofs)</p>
              <a href={commonAcademicSupportDocLink} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 hover:underline">
                Open Link
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link to="/" className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MinorAcademicPerformancePage
