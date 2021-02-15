import { useRouter } from 'next/router'
import { Layout } from '../../components/layout'

const ProductPage: React.FC = props => {
  const router = useRouter()

  console.log({ q: router.query })
  const { id } = router.query

  return <Layout>Page id is: {id}</Layout>
}

export default ProductPage
