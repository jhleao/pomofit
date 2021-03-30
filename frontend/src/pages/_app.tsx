import { ThemeProvider } from "styled-components"
import { ApiProvider } from "../contexts/ApiContext"
import GlobalStyles from "../GlobalStyles"
import light from "../themes/light"

function MyApp({ Component, pageProps }) {
  return (      
      <ApiProvider>
        <Component {...pageProps} />
      </ApiProvider>
  )
}

export default MyApp
