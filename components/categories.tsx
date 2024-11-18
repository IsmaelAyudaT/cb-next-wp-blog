export default function Categories({ categories }) {
  const edges = categories?.edges || []

  return (
    <span className="ml-5 font-black">
      Categoría:
      {edges.length > 0 ? (
        edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories?.node?.name || 'No categories'}</span>
      )}
    </span>
  )
}