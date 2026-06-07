import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="blog-card group"
    >
      <article>

        <div className="blog-origin">
          {blog.thoughtOrigin}
        </div>

        <h3 className="blog-title">
          {blog.title}
        </h3>

        <div className="blog-principle-section">

          <p className="blog-label">
            Principle
          </p>

          <p className="blog-principle">
            {blog.principle}
          </p>

        </div>

        <div className="blog-applicable">

          <p className="blog-label">
            Applicable To
          </p>

          <div className="blog-tags">

            {blog.applicableTo.slice(0, 3).map((item) => (
              <span
                key={item}
                className="blog-tag"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        <div className="blog-footer">

          <span className="blog-source">
            @{blog.source}
          </span>

          <span className="blog-explore">
            Explore →
          </span>

        </div>

      </article>
    </Link>
  );
}
