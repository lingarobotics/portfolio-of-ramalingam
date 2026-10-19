import { Link, useParams } from 'react-router-dom'
import professionalCertificatesData from '../../data/professional-certificate/professional-certificate'
import CourseCard from '../../components/professional-certificate/components/CourseCard'

function ProfessionalCertificateJourneyPage() {
  const { id } = useParams()
  const certificates = Array.isArray(professionalCertificatesData.professionalCertificates)
    ? professionalCertificatesData.professionalCertificates
    : []
  const certificate = certificates.find((item) => item.id === id)

  if (!certificate) {
    return (
      <main className="section-atmosphere flex min-h-screen items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#444444]">Learning Journey</p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111]">Certificate not found</h1>
          <p className="mt-4 max-w-lg text-[#444444]">The requested Professional Certificate does not exist.</p>
          <Link to="/" className="mt-8 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:bg-[#2a2a2a]">Back to Portfolio</Link>
        </div>
      </main>
    )
  }

  const allCourses = Array.isArray(professionalCertificatesData.courses)
    ? professionalCertificatesData.courses
    : []
  const courses = Array.isArray(certificate.courseIds)
    ? certificate.courseIds
      .map((courseId) => allCourses.find((course) => course.id === courseId && course.certificateId === id))
      .filter(Boolean)
    : []

  return (
    <main className="section-atmosphere min-h-screen">
      <div className="section-content mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Link to={`/professional-certificates/${id}`} className="inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef] mb-8">
          ← Back to {certificate.title}
        </Link>
        <Link to="/" className="sm:ml-4 inline-flex items-center rounded-none border border-[#111111] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#f5f5ef]">
          Back to Portfolio
        </Link>

        <div className="motion-rise mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#444444]">
            Learning Journey · {certificate.platform}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-5xl">
            {certificate.title}
          </h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#444444]">
            Courses in this Professional Certificate, in the documented learning order.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} certificateId={id} />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-3xl leading-relaxed text-[#444444]">
            No courses have been documented for this Professional Certificate yet.
          </p>
        )}
      </div>
    </main>
  )
}

export default ProfessionalCertificateJourneyPage
