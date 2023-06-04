import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import styled, { ServerStyleSheet } from "styled-components";
import colors from "styles/palette";

const GoogleTagManager = styled.iframe`
  display: none;
  visibility: hidden;
`;

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
          <noscript>
            <GoogleTagManager
              src="https://www.googletagmanager.com/ns.html?id=GTM-N84THGP"
              height="0"
              width="0"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
