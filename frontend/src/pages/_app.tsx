import Layout from '@components/Layout';
import { ApiProvider } from '@contexts/ApiContext';
import GlobalProvider from '@contexts/GlobalContext';
import { ModalProvider } from '@contexts/ModalContext';
import '../fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider>
      <ModalProvider>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
      </ModalProvider>
    </ApiProvider>
  );
}

export default MyApp;
