export default function ApplicableToList({ items }) {
  return (
    <div className="blog-detail-applicable-grid">
      {items.map((item) => (
        <div
          key={item}
          className="blog-detail-applicable-card"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
