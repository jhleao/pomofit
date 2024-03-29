import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' type='image/png' href='favicon.png' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage(
        { enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) },
      );

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
