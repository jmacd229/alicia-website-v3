import { createGlobalStyle } from "styled-components";
import { fontSize, fontStyle } from "./font";
import media from "./media";
import colors from "./palette";

export default createGlobalStyle`
:root {
	font-size: 8px;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  h1,h2,h3,h4,h5,h6 {
    margin: unset;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: inherit;
    border-radius: 0px;
  }

  p {
    font-size: ${fontSize("regular")};

    ${media.medium}{
      font-size: ${fontSize("regular")};
    }
  }

  body {
    font-weight: 400;
    height: 100%;
    font-size: ${fontSize("regular")};
    background-color: ${colors.white};
    color: ${colors.black};
    overflow-x: hidden;
    margin: 0;
  }

  @font-face {
    font-family: 'eratolig';
    src: url('/fonts/eratolig-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'Roboto Slab Black';
    src: url('/fonts/RobotoSlab-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/RobotoSlab.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'Dancing Script';
    src: url('/fonts/DancingScript-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('/fonts/SourceSansPro.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap
}

*:focus {
  box-shadow: none !important;
  outline: 3px solid ${colors.highlight};
}



h2 {
  font-size: ${fontSize("xxl")};
  line-height: ${fontSize("xxl")};
  
  ${media.medium} {
    font-size: ${fontSize("3xl")};
    line-height: ${fontSize("3xl")};
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
