function ProductOwnership({
  title = 'Ownership and License',
  paragraphs,
  className = 'mt-6',
  titleClassName = 'text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]',
  paragraphClassName = 'mt-3 text-sm leading-relaxed text-[#444444]',
}) {
  return (
    <div className={`rounded-none border border-[#111111] bg-[#f5f5ef] p-4 ${className}`.trim()}>
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