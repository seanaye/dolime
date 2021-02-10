import type { GetStaticProps } from 'next'
import { getClient, wrapComponent } from '../lib/urql'
import { ShopifyProductsDocument } from '../types/shopify'

import ProductList from '../components/product-list'

const Home: React.FC = () => {
  return (<>
    <h1 className="text-2xl">Shopify Products</h1>
    <ProductList />
  </>)
}

export const getStaticProps: GetStaticProps = async () => {
  const { client, ssrCache } = getClient()
  await client.query(ShopifyProductsDocument).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 600
  }
}

export default wrapComponent(Home)

