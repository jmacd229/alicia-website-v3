import styled, { css } from "styled-components";
import media from "./media";
import { Dancing_Script, Roboto_Slab } from "@next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
});

export type FontSize = keyof typeof FONT_SIZES;

const FONT_SIZES = {
  xs: 1.5,
  sm: 1.75,
  regular: 2.25,
  lg: 2.5,
  xl: 4,
  xxl: 6.5,
  "3xl": 9,
};

const FONT_UNIT = "rem";

const FONT_SIZE_KEYS = Object.keys(FONT_SIZES) as FontSize[];

// Modifier allows you to retrieve the next highest or smallest
export const fontSize = (
  size: FontSize = "regular",
  modifier?: "larger" | "smaller"
) => {
  let modifiedSize = size;
  if (modifier) {
    const sizeIndex = FONT_SIZE_KEYS.findIndex((key) => key === size);
    modifiedSize = FONT_SIZE_KEYS[sizeIndex + (modifier === "larger" ? 1 : -1)];
  }
  return `${FONT_SIZES[modifiedSize]}${FONT_UNIT}`;
};

export const fontStyle = {
  CURSIVE: css`
    font-family: ${dancingScript.style.fontFamily};
  `,
  IMPACT: css`
    font-family: ${robotoSlab.style.fontFamily};
    font-weight: 400;
  `,
  IMPACT_THICK: css`
    font-family: ${robotoSlab.style.fontFamily};
    font-weight: 900;
  `,
  IMPACT_THIN: css`
    font-family: ${robotoSlab.style.fontFamily};
    font-weight: 200;
    letter-spacing: 1px;
    word-spacing: 3px;
  `,
};

export const Cursive = styled.span`
  ${fontStyle.CURSIVE};
`;
