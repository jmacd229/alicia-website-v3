import styled, { css } from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";
import { ButtonSize, ButtonState, ButtonStyleProperties, ButtonVariant } from "./types";

const VARIANT_COLOR_MAPPING: Record<
  ButtonState,
  Record<ButtonVariant, string>
> = {
  regular: {
    primary: colors.blue.b,
    secondary: colors.blue.a,
    tertiary: colors.jade.a,
  },
  hover: {
    primary: colors.blue.a,
    secondary: colors.blue.b,
    tertiary: colors.jade.b,
  },
};

const SVG_COLOR_MAPPING: Record<ButtonState, Record<ButtonVariant, string>> = {
  regular: {
    primary: colors.blue.a,
    secondary: colors.grey.a,
    tertiary: colors.jade.b,
  },
  hover: {
    primary: colors.grey.a,
    secondary: colors.blue.a,
    tertiary: colors.jade.a,
  },
};

const buttonStyle = css<ButtonStyleProperties>`
  ${({ variant, size }) => css`
    display: flex;
    align-items: center;
    border: 3px solid ${colors.white};
    color: ${variant === "tertiary" ? colors.white : colors.black};
    background-color: ${VARIANT_COLOR_MAPPING.regular[variant]};
    padding: ${spacing(1)} ${spacing(2)};
    border-radius: ${spacing(4)};
    text-decoration: none;
    transform: translateZ(0); // Fix for Safari
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
    ${shadow(1)}
    transition: background-color 100ms ease-in-out,  stroke linear 100ms;
    ${fontStyle.IMPACT};

    ${size === "regular"
      ? css`
          height: 32px;
          padding: 0 ${spacing(1)};
          ${media.medium} {
            padding: 0 ${spacing(4)};
            height: 64px;
          }
        `
      : css`
          height: 48px;
          padding: 0 ${spacing(3)};
          ${media.medium} {
            padding: 0 ${spacing(4)};
            height: 64px;
          }
        `}

    > span {
      width: 100%;
      z-index: 1;
    }

    svg * {
      stroke: ${SVG_COLOR_MAPPING.regular[variant]};
    }

    &:hover {
      background-color: ${VARIANT_COLOR_MAPPING.hover[variant]};
      svg * {
        stroke: ${SVG_COLOR_MAPPING.hover[variant]};
      }
    }
  `}
`;

export const StyledButton = styled.button<ButtonStyleProperties>`
  ${buttonStyle}
`;

export const StyledLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})<ButtonStyleProperties>`
  ${buttonStyle}
`;

export const AnimationContainer = styled.div<{size: ButtonSize}>`
  display: none;
  width: 0;
  margin-left: ${({size}) => size === 'large' ? '-24%' : '-36%'};
  > div {
    width: 96px;
  }

  ${media.medium} {
    display: block;
  }
`;
