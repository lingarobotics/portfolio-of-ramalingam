import { Link, useParams } from 'react-router-dom';

import blogs from '../data/blogs';
import ApplicableToList from '../components/ApplicableToList';

export default function BlogPage() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === id
  );

  if (!blog) {
    return (
      <main className="blog-not-found">
        <div>
          <h1>Blog Not Found</h1>

          <p>
            The requested article does not exist.
          </p>

          <Link to="/blogs">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-detail-page section-atmosphere">

      <div className="section-content blog-detail-container">

        {/* Back */}

        <Link
          to="/blogs"
          className="blog-detail-back"
        >
          ← Back to Perspectives
        </Link>

        {/* Origin */}

        <div className="blog-detail-origin">
          {blog.thoughtOrigin}
        </div>

        {/* Title */}

        <h1 className="blog-detail-title">
          {blog.title}
        </h1>

        {/* Meta */}

        <div className="blog-detail-meta">

          <span>
            {blog.date}
          </span>

          <span>
            @{blog.source}
          </span>

        </div>

        {/* Principle */}

        <section className="blog-detail-principle-card">

          <p className="blog-detail-section-label">
            Principle
          </p>

          <blockquote className="blog-detail-principle">
            {blog.principle}
          </blockquote>

        </section>

        {/* Trigger */}

        <section className="blog-detail-content-card">

          <h2>
            What Triggered This Thought?
          </h2>

          <p>
            {blog.trigger}
          </p>

        </section>

        {/* Applicable To */}

        <section className="blog-detail-content-card">

          <h2>
            Applicable To
          </h2>

          <p className="blog-detail-helper">
            This principle extends beyond the
            original event and can be applied
            across multiple domains.
          </p>

          <ApplicableToList
            items={blog.applicableTo}
          />

        </section>

        {/* CTA */}

        <section className="blog-detail-read-card">

          <h2>
            Read the Complete Article
          </h2>

          <p>
            This portfolio contains the distilled
            principle. The full article contains
            the reasoning, examples, observations,
            and supporting arguments behind it.
          </p>

          <a
            href={blog.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-detail-read-link"
          >
            Read on Hashnode →
          </a>

        </section>

      </div>

    </main>
  );
}
