import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useProductListQuery } from 'src/types/shopify'
import { ProductCard } from '../product-card/product-card'

const ProductList: React.FC = () => {
  const [{ data, fetching, error }] = useProductListQuery()

  if (fetching) return (<div className="text-light">Loading</div>)

  return (<div>
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry gutter={"6px"}>
        { data.products.edges.map(({ node }) => <ProductCard data={node}/>)}
      </Masonry>
    </ResponsiveMasonry>
  </div>)
}

export default ProductList
