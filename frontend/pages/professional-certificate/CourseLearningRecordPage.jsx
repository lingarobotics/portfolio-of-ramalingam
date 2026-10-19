import { Link, useParams } from 'react-router-dom'
import professionalCertificatesData from '../../data/professional-certificate/professional-certificate'
import LearningEntry from '../../components/professional-certificate/components/LearningEntry'
import CourseEvidence from '../../components/professional-certificate/components/CourseEvidence'
import SharedMedia from '../../components/professional-certificate/components/SharedMedia'

function isPresent(value) {
  return value !== null && value !== undefined && value !== ''
}

function CourseLearningRecordPage() {
  const { id: certificateId, courseId } = useParams()
  const certificates = Array.isArray(professionalCertificatesData.professionalCertificates)
    ? professionalCertificatesData.professionalCertificates
    : []
  const certificate = certificates.find((item) => item.id === certificateId)

  if (!certificate) {
    return (
      <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Course Record</p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111]">Certificate not found</h1>
          <p className="mt-4 max-w-lg text-[#444444]">The requested Professional Certificate does not exist.</p>
          <Link to="/" className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]">Back to Portfolio</Link>
        </div>
      </main>
    )
  }

  const courses = Array.isArray(professionalCertificatesData.courses)
    ? professionalCertificatesData.courses
    : []
  const course = courses.find((item) => item.id === courseId && item.certificateId === certificateId)

  if (!course) {
    return (
      <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Course Record</p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111]">Course not found</h1>
          <p className="mt-4 max-w-lg text-[#444444]">The requested course does not exist in this Professional Certificate.</p>
          <Link to={`/professional-certificates/${certificateId}/journey`} className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]">Back to Learning Journey</Link>
        </div>
      </main>
    )
  }

  const entries = Array.isArray(course.entries) ? course.entries : []
  const sharedMedia = Array.isArray(professionalCertificatesData.sharedMedia)
    ? professionalCertificatesData.sharedMedia
    : []
  const courseMediaRefs = Array.isArray(course.mediaRefs) ? course.mediaRefs : []
  const courseSharedMedia = sharedMedia.filter((m) => courseMediaRefs.includes(m.id))

  const categoryLabels = {
    'learning-outcomes': 'Learning Outcomes',
    'doubts-questions': 'Doubts & Questions',
    'new-learning': 'New Learning',
    realizations: 'Realizations',
    corrections: 'Corrections',
    application: 'Application',
    reflection: 'Reflection'
  }

  const entriesByCategory = {}
  entries.forEach((entry) => {
    if (!entriesByCategory[entry.category]) entriesByCategory[entry.category] = []
    entriesByCategory[entry.category].push(entry)
  })

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Link to={`/professional-certificates/${certificateId}/journey`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] mb-8 transition hover:bg-[#f5f5ef]">
          ← Back to Learning Journey
        </Link>
        <Link to={`/professional-certificates/${certificateId}`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] mb-8 transition hover:bg-[#f5f5ef] sm:ml-4">
          Back to {certificate.title}
        </Link>
        <Link to="/" className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] mb-8 transition hover:bg-[#f5f5ef] sm:ml-4">
          Back to Portfolio
        </Link>

        <div className="motion-rise mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#444444]">
            Course Record · {course.platform}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-4xl leading-relaxed text-[#444444]">{course.purpose}</p>
          <p className="mt-4 leading-relaxed text-[#444444]">{course.overview}</p>
        </div>

        <div className="mt-10 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="text-[#666666]">Platform</dt>
            <dd className="mt-1 font-semibold text-[#111111]">{course.platform}</dd>
          </div>
          <div>
            <dt className="text-[#666666]">Type</dt>
            <dd className="mt-1 font-semibold text-[#111111]">{course.courseType}</dd>
          </div>
          <div>
            <dt className="text-[#666666]">Completed</dt>
            <dd className="mt-1 font-semibold text-[#111111]">
              {isPresent(course.completedAt) ? course.completedAt : 'Date pending'}
            </dd>
          </div>
          <div>
            <dt className="text-[#666666]">Credential ID</dt>
            <dd className="mt-1 break-all font-semibold text-[#111111]">
              {isPresent(course.credentialId) ? course.credentialId : 'Not provided'}
            </dd>
          </div>
          <div>
            <dt className="text-[#666666]">Duration</dt>
            <dd className="mt-1 font-semibold text-[#111111]">
              {isPresent(course.duration) ? course.duration : 'Not specified'}
            </dd>
          </div>
        </div>

        <CourseEvidence course={course} />

        {isPresent(course.repositoryUrl) && (
          <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Practice Repository</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#444444]">
              I used this repository for my independent IntelliJ IDEA practice connected to this course.
            </p>
            <a
              href={course.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex max-w-full items-center break-all rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2"
            >
              Open IntelliJ OOP Practice Repository ↗
            </a>
          </section>
        )}

        {Array.isArray(course.learningMethod) && course.learningMethod.length > 0 && (
          <section className="mt-6 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Learning Approach</h2>
            <ul className="mt-4 space-y-2 leading-relaxed text-[#444444]">
              {course.learningMethod.map((item) => <li key={item} className="pl-4 border-l-2 border-[#111111]">{item}</li>)}
            </ul>
          </section>
        )}

        {Object.keys(entriesByCategory).length > 0 && (
          <section className="mt-10 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Learning Entries</h2>
            <div className="mt-6 space-y-8">
              {Object.entries(entriesByCategory).map(([category, categoryEntries]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666] mb-3">
                    {categoryLabels[category] || category}
                  </h3>
                  <div className="space-y-4">
                    {categoryEntries.map((entry) => (
                      <LearningEntry key={entry.id} entry={entry} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {courseSharedMedia.length > 0 && (
          <section className="mt-10 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Shared Learning Method Evidence</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {courseSharedMedia.map((media) => (
                <SharedMedia key={media.id} media={media} />
              ))}
            </div>
          </section>
        )}

        {Array.isArray(course.doubtsAndAnswers) && course.doubtsAndAnswers.length > 0 && (
          <section className="mt-10 rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#111111]">Doubts & Answers</h2>
            <div className="mt-6 space-y-6">
              {course.doubtsAndAnswers.map((qa) => (
                <article key={qa.id} className="rounded-none border border-[#111111] bg-white p-5 shadow-[6px_6px_0_rgba(17,17,17,0.06)] sm:p-7">
                  <h3 className="mt-1 text-xl font-bold text-[#111111]">{qa.question}</h3>
                  <p className="mt-3 leading-relaxed text-[#444444]">{qa.answer}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">{qa.answerType}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to={`/professional-certificates/${certificateId}/journey`}
            className="inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
          >
            Back to Learning Journey
          </Link>
          <Link
            to={`/professional-certificates/${certificateId}`}
            className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] sm:ml-4"
          >
            Back to Certificate
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] sm:ml-4"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CourseLearningRecordPage
