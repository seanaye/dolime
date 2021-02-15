import { useProductListQuery } from 'src/types/shopify'
import { ProductCard } from '../product-card/product-card'

const ProductList: React.FC = () => {
  const [{ data, fetching, error }] = useProductListQuery()

  if (fetching) return (<div className="text-light">Loading</div>)

  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
    { data.products.edges.map(({ node }) => <ProductCard data={node}/>)}
  </div>)
}

export default ProductList
