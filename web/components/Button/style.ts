import styled, { css } from "styled-components";
import { fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";
import { ButtonState, ButtonVariant } from "./types";

const VARIANT_COLOR_MAPPING: Record<
  ButtonState,
  Record<ButtonVariant, string>
> = {
  regular: { primary: colors.blue.b, secondary: colors.blue.a },
  hover: { primary: colors.blue.a, secondary: colors.blue.b },
};

const SVG_COLOR_MAPPING: Record<ButtonState, Record<ButtonVariant, string>> = {
  regular: { primary: colors.blue.a, secondary: colors.grey.a },
  hover: { primary: colors.grey.a, secondary: colors.blue.a },
};

const buttonStyle = css<{ variant: ButtonVariant }>`
  ${({ variant }) => css`
    border: 3px solid ${colors.white};
    color: ${colors.black};
    background-color: ${VARIANT_COLOR_MAPPING.regular[variant]};
    padding: ${spacing(1)} ${spacing(2)};
    border-radius: ${spacing(4)};
    ${fontStyle.IMPACT};
    text-decoration: none;
    z-index: 1;
    ${shadow(1)}
    transition: background-color 100ms ease-in-out,  stroke linear 100ms;

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

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${buttonStyle}
`;

export const StyledLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})<{ variant: ButtonVariant }>`
  ${buttonStyle}
`;
