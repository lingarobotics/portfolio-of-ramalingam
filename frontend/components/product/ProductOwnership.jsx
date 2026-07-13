function ProductOwnership({
  title = 'Ownership and License',
  paragraphs,
  className = 'mt-6',
  titleClassName = 'text-xs font-semibold uppercase tracking-[0.14em] text-amber-100',
  paragraphClassName = 'mt-3 text-sm leading-relaxed text-amber-50/95',
}) {
  return (
    <div className={`rounded-xl border border-amber-500/35 bg-amber-500/8 p-4 ${className}`.trim()}>
      <p className={titleClassName}>{title}</p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={paragraphClassName}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default ProductOwnership