import { initUrqlClient, withUrqlClient } from 'next-urql'
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from 'urql'

const url = 'https://dolime-photography.myshopify.com/api/2021-01/graphql.json'
const headers = {
  'X-Shopify-Storefront-Access-Token': '6a7a8063d5690039010e221b995b7e11'
}


export const getClient = () => {
  const ssrCache = ssrExchange({ isClient: false })
  return {
    ssrCache,
    client: initUrqlClient({
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      url,
      fetchOptions: { headers }
    }, false),
  }
}

export const wrapComponent = (c: React.FC) => {
  return withUrqlClient(ssr => ({
    url,
    fetchOptions: { headers }
  }),
  { ssr: false }                     
  )(c)
}

