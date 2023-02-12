import { Html, Head, Main, NextScript } from "next/document";
import colors from "styles/palette";

const MyDocument = () => (
  <Html lang="en">
    <Head title="Dr. Alicia MacDougall">
    <meta name="theme-color" content={colors.grey.a}/>
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
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
