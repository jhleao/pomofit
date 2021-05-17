import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' type='image/png' href='favicon.png' />
          {/* <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap' /> */}
        
          <link
            rel="preload"
            href="/fonts/Rajdhani-SemiBold.ttf"
            as="Rajdhani"
            type="font/ttf"
          />
        
          <link
            rel="preload"
            href="/fonts/Inter-SemiBold.ttf"
            as="Inter"
            type="font/ttf"
          />
        
          <link
            rel="preload"
            href="/fonts/Inter-Bold.ttf"
            as="Inter"
            type="font/ttf"
          />

          <style jsx global>{`
            @font-face {
              font-family: "Inter";
              // src: url("/fonts/Inter/Inter-SemiBold.ttf");
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }

            @font-face {
              font-family: "Inter";
              // src: url("/fonts/Inter/Inter-Bold.ttf");
              font-style: normal;
              font-weight: 800;
              font-display: swap;
            }

            @font-face {
              font-family: "Rajdhani";
              // src: url("/fonts/Rajdhani/Rajdhani-SemiBold.ttf");
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }
          `}</style>
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
