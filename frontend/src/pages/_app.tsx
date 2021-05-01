import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { ApiProvider } from "../contexts/ApiContext"
import GlobalProvider from "../contexts/GlobalContext"
import GlobalStyles from "../GlobalStyles"
import light from "../themes/light"

function MyApp({ Component, pageProps }) {
  return (      
      <ApiProvider>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
      </ApiProvider>
  )
}

export default MyApp
