import { useShopifyProductsQuery } from '../types/shopify'

const ProductList: React.FC = () => {
  const [{ data, fetching, error }] = useShopifyProductsQuery()

  console.log({ data, error })
  if (fetching) return (<div className="text-light">Loading</div>)

  return (<>
    <ul>
    { data.products.edges.map(({ node }) => (
        <li key={node.id}>
          <a>{node.title}</a>
        </li>
      ))
    }
    </ul>
  </>)
}

export default ProductList
