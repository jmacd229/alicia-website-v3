import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";
import colors from "styles/palette";

// Taken from https://reacthustle.com/blog/nextjs-styled-components-ssr-typescript
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
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

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N84THGP');`}</Script>
          <meta name="theme-color" content={colors.grey.a} />
          <link
            rel="preload"
            href="/fonts/eratolig-webfont.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/RobotoSlab.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/RobotoSlab-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/DancingScript-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N84THGP"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
