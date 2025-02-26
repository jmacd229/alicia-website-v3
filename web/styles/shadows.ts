import { css } from "styled-components";

const SHADOW_COLOR = "0deg 0% 43%";

export const shadow = (level: 1 | 2 | 3, inset = false) => css`
  ${level === 1 &&
  css`
    box-shadow:
      ${inset ? "inset" : ""} 0.5px 0.5px 0.8px hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 0.8px 0.8px 1.3px -1.2px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 1.9px 2px 3.1px -2.5px hsl(${SHADOW_COLOR} / 0.34);
  `}
  ${level === 2 &&
  css`
    box-shadow:
      ${inset ? "inset" : ""} 0.5px 0.5px 0.8px hsl(${SHADOW_COLOR} / 0.36),
      ${inset ? "inset" : ""} 1.6px 1.6px 2.5px -0.8px
        hsl(${SHADOW_COLOR} / 0.36),
      ${inset ? "inset" : ""} 4px 4.1px 6.4px -1.7px hsl(${SHADOW_COLOR} / 0.36),
      ${inset ? "inset" : ""} 9.7px 9.9px 15.6px -2.5px
        hsl(${SHADOW_COLOR} / 0.36);
  `}
  ${level === 3 &&
  css`
    box-shadow:
      ${inset ? "inset" : ""} 0.5px 0.5px 0.8px hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 2.8px 2.9px 4.5px -0.4px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 5.3px 5.4px 8.5px -0.7px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 8.7px 8.8px 13.9px -1.1px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 13.9px 14.1px 22.3px -1.4px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 21.8px 22.1px 34.9px -1.8px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 33.1px 33.6px 53.1px -2.1px
        hsl(${SHADOW_COLOR} / 0.34),
      ${inset ? "inset" : ""} 48.7px 49.5px 78.1px -2.5px
        hsl(${SHADOW_COLOR} / 0.34);
  `}
`;
