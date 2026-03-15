import { Link } from 'react-router-dom'
import { useState } from 'react'

const semester1SubjectResults = [
  { code: 'CY3151', subject: 'Engineering Chemistry', category: 'Theory Papers', grade: 'B+' },
  { code: 'GE3151', subject: 'Problem Solving and Python Programming', category: 'Theory Papers', grade: 'B+' },
  { code: 'GE3152', subject: 'Heritage of Tamils', category: 'Theory Papers', grade: 'B+' },
  { code: 'HS3152', subject: 'Professional English I', category: 'Theory Papers', grade: 'B+' },
  { code: 'PH3151', subject: 'Engineering Physics', category: 'Theory Papers', grade: 'B+' },
  { code: 'BS3171', subject: 'Physics and Chemistry Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'GE3171', subject: 'Problem Solving and Python Programming Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'GE3172', subject: 'English Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'MA3151', subject: 'Matrices and Calculus', category: 'Engineering Mathematics', grade: 'B+' },
]

const semester2SubjectResults = [
  { code: 'BE3253', subject: 'Basic Electrical, Electronics, Engineering and Measurements', category: 'Theory Papers', grade: 'B+' },
  { code: 'GE3251', subject: 'Tamils and Technology', category: 'Theory Papers', grade: 'B+' },
  { code: 'HS3252', subject: 'Professional English II', category: 'Theory Papers', grade: 'B+' },
  { code: 'PH3259', subject: 'Applied Materials Science', category: 'Theory Papers', grade: 'A' },
  { code: 'BE3273', subject: 'Basic Electrical, Electronics, Engineering and Measurements Laboratory', category: 'Practical Papers', grade: 'A+' },
  { code: 'GE3271', subject: 'Engineering Practices Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'GE3272', subject: 'Communication Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'GE3251', subject: 'Engineering Graphics', category: 'Drawing', grade: 'A' },
  { code: 'MA3251', subject: 'Statistics and Numerical Methods', category: 'Engineering Mathematics', grade: 'A' },
]

const semester3SubjectResults = [
  { code: 'MR3391', subject: 'Digital Electronics and Microprocessor', category: 'Theory Papers', grade: 'B' },
  { code: 'MR3392', subject: 'Electrical Drives and Actuators', category: 'Theory Papers', grade: 'B+' },
  { code: 'GE3361', subject: 'Professional Development', category: 'Practical Papers', grade: 'O' },
  { code: 'MR3361', subject: 'Electrical Drives and Actuators Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'RA3301', subject: 'Robot Kinematics', category: 'Practical Papers', grade: 'A' },
  { code: 'RA3311', subject: 'Robot Modelling and Simulation Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'MA3351', subject: 'Transforms and Partial Differential Equations', category: 'Engineering Mathematics', grade: 'B+' },
  { code: 'ME3351', subject: 'Engineering Mechanics', category: 'Problem Solving Papers', grade: 'A+' },
  { code: 'MR3351', subject: 'Fluid Mechanics and Thermal Systems', category: 'Problem Solving Papers', grade: 'B+' },
]

const semester4SubjectResults = [
  { code: 'GE3451', subject: 'Environmental Sciences and Sustainability', category: 'Theory Papers', grade: 'B' },
  { code: 'ME3493', subject: 'Manufacturing Technology', category: 'Theory Papers', grade: 'B+' },
  { code: 'MR3491', subject: 'Sensors and Instrumentation', category: 'Theory Papers', grade: 'B' },
  { code: 'MR3591', subject: 'Fluid Power Systems and Industrial Automation', category: 'Theory Papers', grade: 'B+' },
  { code: 'ME3382', subject: 'Manufacturing Technology Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'MR3461', subject: 'Sensors and Instrumentation Laboratory', category: 'Practical Papers', grade: 'O' },
  { code: 'MR3452', subject: 'Control Systems Engineering', category: 'Integrated Papers', grade: 'A' },
  { code: 'RA3401', subject: 'Design of Robot Elements', category: 'Design Theory', grade: 'A' },
  { code: 'NM1009', subject: 'Naan Mudhalvan Paper', category: 'Excluded from GPA', grade: 'O' },
]

const semester5SubjectResults = [
  { code: 'RA3501', subject: 'Robot Path Planning and Programming', category: 'Theory Papers', grade: 'A' },
  { code: 'MR3561', subject: 'Industrial Automation', category: 'Practical Papers', grade: 'O' },
  { code: 'CME339', subject: 'Additive Manufacturing', category: 'Integrated Papers', grade: 'A' },
  { code: 'MR3492', subject: 'Embedded Systems and Programming', category: 'Integrated Papers', grade: 'A' },
  { code: 'CMR334', subject: 'Automotive Mechatronics', category: 'Professional Elective Papers', grade: 'B+' },
  { code: 'CMR355', subject: 'Medical Mechatronics', category: 'Professional Elective Papers', grade: 'B+' },
  { code: 'CRA334', subject: 'Agricultural Robotics and Automation', category: 'Professional Elective Papers', grade: 'B+' },
  { code: 'MX3084', subject: 'Disaster Risk Reduction and Management', category: 'Mandatory Course', grade: 'O' },
]

const paperCategories = [
  'Theory Papers',
  'Practical Papers',
  'Drawing',
  'Engineering Mathematics',
  'Problem Solving Papers',
  'Integrated Papers',
  'Design Theory',
  'Professional Elective Papers',
  'Mandatory Course',
  'Excluded from GPA',
]

const commonAcademicSupportDoc = {
  label: 'Common Academic Support Doc (Major + Minor, Across Semesters)',
  link: 'https://drive.google.com/file/d/1sOoWx8gMG968hwSY6VAqBcHW158xKczo/view?usp=sharing',
}

const minorPerformance = [
  { code: 'CCS375', paper: 'Web Technologies', type: 'Integrated Paper', grade: 'A' },
  { code: 'CCS332', paper: 'App Development', type: 'Integrated Paper', grade: 'A' },
]

const minorSemester6Running = [
  { code: 'CCS336', paper: 'Cloud Services Management', type: 'Integrated Paper', status: 'Running (Semester 6)' },
  { code: 'CCS374', paper: 'Web Application Security', type: 'Integrated Paper', status: 'Running (Semester 6)' },
]

const semester6CurrentPapers = [
  {
    code: 'RA3601',
    subject: 'Robot Dynamics and Control (RDC)',
    category: 'Core Paper',
  },
  {
    code: 'OCS352',
    subject: 'IoT Concepts and Applications (OE-I)',
    category: 'Open Elective',
  },
  {
    code: 'CRA341',
    subject: 'Applied Image Processing (PE-V)',
    category: 'Professional Elective',
  },
  {
    code: 'CRA331',
    subject: 'Robots and Systems in Smart Manufacturing (PE-VI)',
    category: 'Professional Elective',
  },
  {
    code: 'CMR333',
    subject: 'Computer Aided Inspection and Testing (PE-VII)',
    category: 'Professional Elective',
  },
  {
    code: 'RA3611',
    subject: 'Robot Kinematics and Dynamics Laboratory (RKD LAB)',
    category: 'Laboratory',
  },
  {
    code: 'RA3612',
    subject: 'Mini Project',
    category: 'Project',
  },
]

const semester6EngagementComponents = [
  { label: 'Naan Mudhalvan Courses' },
  { label: 'EST (Aptitude and Soft Skill)' },
  { label: 'Moodles' },
  { label: 'Clubs / Mentoring / Library' },
]

function AcademicPerformanceSummaryPage() {
  const [openSemesterId, setOpenSemesterId] = useState('')
  const [openCurrentSectionId, setOpenCurrentSectionId] = useState('')
  const [openMinorSectionId, setOpenMinorSectionId] = useState('')

  const semesterSections = [
    { id: 'sem-1', title: 'Semester 1 Results (GPA: 7.68)', rows: semester1SubjectResults },
    { id: 'sem-2', title: 'Semester 2 Results (GPA: 8.17)', rows: semester2SubjectResults },
    { id: 'sem-3', title: 'Semester 3 Results (GPA: 7.84)', rows: semester3SubjectResults },
    {
      id: 'sem-4',
      title: 'Semester 4 Results (GPA: 7.64)',
      rows: semester4SubjectResults,
      note: 'GPA note: Semester 4 GPA calculation excludes the Naan Mudhalvan paper, while the paper is still listed here for record consistency.',
    },
    { id: 'sem-5', title: 'Semester 5 Results (GPA: 7.75)', rows: semester5SubjectResults },
  ]

  const toggleSemester = (semesterId) => {
    setOpenSemesterId((current) => (current === semesterId ? '' : semesterId))
  }

  const toggleCurrentSection = (sectionId) => {
    setOpenCurrentSectionId((current) => (current === sectionId ? '' : sectionId))
  }

  const toggleMinorSection = (sectionId) => {
    setOpenMinorSectionId((current) => (current === sectionId ? '' : sectionId))
  }

  const renderSemesterTable = (title, rows) => (
    <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{title}</p>

      <div className="mt-3 overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full table-fixed text-left text-sm">
          <thead className="bg-slate-900/80 text-slate-300">
            <tr>
              <th className="w-[70px] px-4 py-3 font-semibold">No.</th>
              <th className="px-4 py-3 font-semibold">Subject Code</th>
              <th className="px-4 py-3 font-semibold">Subject</th>
              <th className="px-4 py-3 font-semibold">Grade</th>
            </tr>
          </thead>
          <tbody>
            {paperCategories.flatMap((category) => {
              const categoryRows = rows.filter((item) => item.category === category)
              if (categoryRows.length === 0) {
                return []
              }

              const headerRow = (
                <tr key={`${title}-${category}-header`} className="border-t border-slate-800 bg-slate-950/70 text-cyan-200">
                  <td className="px-4 py-3 text-center font-semibold" colSpan={4}>{category}</td>
                </tr>
              )

              const valueRows = categoryRows.map((item, index) => (
                <tr key={`${title}-${item.code}-${item.subject}`} className="border-t border-slate-800 text-slate-200">
                  <td className="px-4 py-3 align-top text-slate-400">{index + 1}</td>
                  <td className="px-4 py-3 align-top break-words">{item.code}</td>
                  <td className="px-4 py-3 align-top break-words">{item.subject}</td>
                  <td className="px-4 py-3 align-top break-words">{item.grade}</td>
                </tr>
              ))

              return [headerRow, ...valueRows]
            })}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_14%_20%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Academic Performance</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Academic Performance Summary</h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            This page provides semester-wise academic performance details for my major degree and the completed papers from my minor degree track.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5">
              <h2 className="text-lg font-semibold text-cyan-200">Major Degree - Robotics and Automation</h2>
              <p className="mt-2 text-sm text-slate-300">Completed through Semester 5.</p>
              <p className="mt-2 text-sm text-slate-100">
                <span className="font-semibold text-cyan-200">Major CGPA:</span> 7.82
              </p>

              <div className="mt-5 space-y-3">
                {semesterSections.map((section) => (
                  <section key={section.id} className="rounded-xl border border-slate-800 bg-slate-900/55">
                    <button
                      type="button"
                      onClick={() => toggleSemester(section.id)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      aria-expanded={openSemesterId === section.id}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{section.title}</span>
                      <span className="text-lg text-cyan-200">{openSemesterId === section.id ? '−' : '+'}</span>
                    </button>

                    {openSemesterId === section.id ? (
                      <div className="border-t border-slate-800 px-3 pb-3">
                        {renderSemesterTable(section.title, section.rows)}
                        {section.note ? <p className="mt-3 text-xs text-slate-400">{section.note}</p> : null}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                <button
                  type="button"
                  onClick={() => toggleCurrentSection('major-sem6')}
                  className="flex w-full items-center justify-between gap-3 text-left"
                  aria-expanded={openCurrentSectionId === 'major-sem6'}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Semester (VI) - Major Timetable Papers and Mini Project</span>
                  <span className="text-lg text-cyan-200">{openCurrentSectionId === 'major-sem6' ? '−' : '+'}</span>
                </button>

                {openCurrentSectionId === 'major-sem6' ? (
                  <>
                    <p className="mt-3 text-sm text-slate-300">
                      This section reflects the current Semester VI academic structure from timetable planning. These are ongoing papers/components and not final result grades.
                    </p>

                    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full min-w-[560px] text-left text-sm">
                        <thead className="bg-slate-900/80 text-slate-300">
                          <tr>
                            <th className="px-4 py-3 font-semibold">Subject Code</th>
                            <th className="px-4 py-3 font-semibold">Subject</th>
                            <th className="px-4 py-3 font-semibold">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester6CurrentPapers.map((item) => (
                            <tr key={item.code} className="border-t border-slate-800 text-slate-200">
                              <td className="px-4 py-3 align-top break-words">{item.code}</td>
                              <td className="px-4 py-3 align-top break-words">{item.subject}</td>
                              <td className="px-4 py-3 align-top break-words">{item.category}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Additional Ongoing Components</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">
                        {semester6EngagementComponents.map((item) => (
                          <li key={item.label}>{item.label}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5">
              <h2 className="text-lg font-semibold text-cyan-200">Minor Degree - CSE (Full Stack Development)</h2>
              <p className="mt-2 text-sm text-slate-300">Completed papers in Semester 5 with strong performance.</p>
              <p className="mt-2 text-sm text-slate-100">
                <span className="font-semibold text-cyan-200">Minor CGPA:</span> 8.00
              </p>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                <button
                  type="button"
                  onClick={() => toggleMinorSection('minor-sem5')}
                  className="flex w-full items-center justify-between gap-3 text-left"
                  aria-expanded={openMinorSectionId === 'minor-sem5'}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Semester 5 - Minor Results (GPA: 8.00)</span>
                  <span className="text-lg text-cyan-200">{openMinorSectionId === 'minor-sem5' ? '−' : '+'}</span>
                </button>

                {openMinorSectionId === 'minor-sem5' ? (
                  <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full min-w-[320px] text-left text-sm">
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
                            <td className="px-4 py-3">{item.code}</td>
                            <td className="px-4 py-3">{item.paper}</td>
                            <td className="px-4 py-3">{item.type}</td>
                            <td className="px-4 py-3">{item.grade}</td>
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
                  onClick={() => toggleMinorSection('minor-sem6')}
                  className="flex w-full items-center justify-between gap-3 text-left"
                  aria-expanded={openMinorSectionId === 'minor-sem6'}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Semester (VI) - Minor Running Papers</span>
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
                            <td className="px-4 py-3">{item.code}</td>
                            <td className="px-4 py-3">{item.paper}</td>
                            <td className="px-4 py-3">{item.type}</td>
                            <td className="px-4 py-3">{item.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </div>

            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Common Academic Support Doc</p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
              <p className="text-sm text-slate-200">{commonAcademicSupportDoc.label}</p>
              <a
                href={commonAcademicSupportDoc.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 hover:underline"
              >
                Open Link
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicPerformanceSummaryPage
