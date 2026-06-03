import { Link } from 'react-router-dom';

import blogs from '../data/blogs';
import BlogCard from '../components/BlogCard';

import '../styles/blogs.css';

export default function BlogsPage() {
  return (
    <main className="blogs-page section-atmosphere">

      <div className="section-content blogs-container">

        <Link
          to="/"
          className="blogs-back motion-rise"
        >
          ← Back to Portfolio
        </Link>

        <section className="blogs-hero motion-rise motion-rise-delay-1">

          <p className="blogs-kicker">
            Engineering Perspectives
          </p>

          <h1 className="blogs-heading">
            Principles derived from
            real experiences.
          </h1>

          <p className="blogs-description">
            These articles document observations,
            reasoning patterns,
            lessons learned,
            and principles extracted from software engineering,
            AI,
            learning,
            internships,
            systems thinking,
            constraints,
            and real-world experiences.
          </p>

        </section>

        <section className="blogs-philosophy motion-rise motion-rise-delay-2">

          <div className="blogs-philosophy-card">

            <h2>
              Why This Section Exists
            </h2>

            <p>
              Most events are temporary.
              Principles survive longer.

              These articles are not intended to teach
              frameworks or technologies.

              They document observations,
              reasoning,
              and transferable principles that emerged
              while building systems,
              learning new concepts,
              solving problems,
              and navigating opportunities.
            </p>

          </div>

        </section>

        <section className="blogs-archive motion-rise motion-rise-delay-3">

          <div className="blogs-archive-header">

            <h2>
              Perspective Archive
            </h2>

            <div className="blogs-archive-actions">

              <span className="blogs-count">
                {blogs.length} Articles
              </span>

              <a
                href="https://thoughts-of-linga.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="blogs-publication-link"
              >
                Blogs Of Linga →
              </a>

            </div>

          </div>

          <div className="blogs-grid">

            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}