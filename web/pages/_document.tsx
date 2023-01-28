import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head>
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
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
