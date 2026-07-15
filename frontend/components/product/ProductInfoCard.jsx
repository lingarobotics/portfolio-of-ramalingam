function ProductInfoCard({
  title,
  description,
  children,
  className = '',
  titleClassName = 'text-sm font-semibold uppercase tracking-[0.16em] text-[#111111]',
  descriptionClassName = 'mt-2 text-sm leading-relaxed text-[#444444]',
}) {
  return (
    <article className={`rounded-none border border-[#111111] bg-white p-5 ${className}`.trim()}>
      <h2 className={titleClassName}>{title}</h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </article>
  )
}

export default ProductInfoCard