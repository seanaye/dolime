import { GetStaticProps } from 'next'
import { getClient, wrapComponent } from '../lib/urql'
import { ProductListDocument } from '../types/shopify'

import ProductList from '../components/product-list/product-list'

const Home: React.FC = () => {
  return <ProductList />
}

export const getStaticProps: GetStaticProps = async () => {
  const { client, ssrCache } = getClient()
  await client.query(ProductListDocument).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 600
  }
}

export default wrapComponent(Home)

