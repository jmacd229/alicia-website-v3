import styled, { css } from "styled-components";
import media from "./media";

const FONT_SIZES = {
  xs: 1.5,
  sm: 1.75,
  regular: 2.25,
  lg: 2.5,
  xl: 4,
  xxl: 6,
  "3xl": 9,
};

const FONT_UNIT = "rem";

export const fontSize = (size: keyof typeof FONT_SIZES = "regular") =>
  `${FONT_SIZES[size]}${FONT_UNIT}`;

export const fontStyle = {
  CURSIVE: css`
    font-family: "Dancing Script", cursive;
  `,
  IMPACT: css`
    font-family: "Roboto Slab", cursive;
  `,
  IMPACT_THICK: css`
    font-family: "Roboto Slab Black", cursive;
  `,
  IMPACT_THIN: css`
    font-family: "eratolig";
    word-spacing: 2px;

    ${media.medium} {
      letter-spacing: 1px;
      word-spacing: 3px;
    }
  `,
};

export const Cursive = styled.span`
  ${fontStyle.CURSIVE};
`;
