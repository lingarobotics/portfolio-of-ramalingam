import { Link } from 'react-router-dom'

function isPresent(value) {
  return value !== null && value !== undefined && value !== ''
}

function CourseCard({ course, certificateId }) {
  return (
    <article className="rounded-none border border-[#111111] bg-white p-6 shadow-[8px_8px_0_rgba(17,17,17,0.08)] transition hover:bg-[#f5f5ef]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#444444]">
        {course.courseType || 'Course'}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-[#111111]">
        {course.title}
      </h3>

      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-[#666666]">Platform</dt>
          <dd className="mt-1 font-semibold text-[#111111]">{course.platform}</dd>
        </div>
        <div>
          <dt className="text-[#666666]">Completed</dt>
          <dd className="mt-1 font-semibold text-[#111111]">
            {isPresent(course.completedAt) ? course.completedAt : 'Date pending'}
          </dd>
        </div>
      </dl>

      <p className="mt-5 leading-relaxed text-[#444444]">{course.overview || course.purpose}</p>

      <Link
        to={`/professional-certificates/${certificateId}/courses/${course.id}`}
        className="mt-6 inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
      >
        Explore Course →
      </Link>
    </article>
  )
}

export default CourseCard
