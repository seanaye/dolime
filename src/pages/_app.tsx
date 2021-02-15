import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { AppProvider } from '../contexts/main'
import { Layout } from '../components/layout'

function App({ Component, pageProps }) {
  return <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
}

export default App
