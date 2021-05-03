import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import { ApiProvider } from "../contexts/ApiContext"
import GlobalProvider from "../contexts/GlobalContext"
import { ModalProvider } from "../contexts/ModalContext"
import GlobalStyles from "../GlobalStyles"
import light from "../themes/light"

function MyApp({ Component, pageProps }) {
  return (      
      <ApiProvider>
        <ThemeProvider theme={light}>
          <GlobalStyles/>
          <ModalProvider>
            <GlobalProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </GlobalProvider>
          </ModalProvider>
        </ThemeProvider>
      </ApiProvider>
  )
}

export default MyApp
