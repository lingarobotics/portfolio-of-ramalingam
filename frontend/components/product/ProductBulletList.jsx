import ProductSection from './ProductSection'

function ProductBulletList({
  title,
  items,
  className = 'mt-6',
  titleClassName,
  listClassName = 'space-y-2 text-sm text-slate-300',
  itemClassName = '',
}) {
  return (
    <ProductSection title={title} className={className} titleClassName={titleClassName}>
      <ul className={listClassName}>
        {items.map((item) => (
          <li key={item} className={itemClassName}>
            {item}
          </li>
        ))}
      </ul>
    </ProductSection>
  )
}

export default ProductBulletList