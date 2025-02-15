import styled, { css } from "styled-components";
import { fontSize, FontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

export const TitleContainer = styled.h2<{
  $wrap: boolean;
}>`
  display: flex;
  position: relative;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
  align-items: center;
  justify-content: center;
  text-align: center;
  ${media.mediumUP} {
    white-space: ${({ $wrap }) => ($wrap ? "normal" : "nowrap")};
  }
`;

const fontSizeStyle = css<{
  $fontSize: FontSize;
  $responsive: boolean;
}>`
  font-size: ${({ $fontSize, $responsive }) =>
    fontSize($fontSize, $responsive ? "smaller" : undefined)};
  line-height: ${({ $fontSize, $responsive }) =>
    fontSize($fontSize, $responsive ? "smaller" : undefined)};
  ${media.mediumUP} {
    font-size: ${({ $fontSize }) => fontSize($fontSize)};
    line-height: ${({ $fontSize }) => fontSize($fontSize)};
  }
`;

export const Regular = styled.span<{
  $fontSize: FontSize;
  $responsive: boolean;
}>`
  ${fontStyle.IMPACT_THICK};
  ${fontSizeStyle}
`;

export const Cursive = styled.span<{
  $fontSize: FontSize;
  $underline: boolean;
  $responsive: boolean;
}>`
  ${fontStyle.CURSIVE};
  display: inline-block;
  color: ${colors.blue.c};
  ${({ $underline }) =>
    $underline &&
    css`
      border-bottom: 3px solid ${colors.blue.c};
    `};
  padding: 0 ${spacing(4)};
  ${fontSizeStyle}
`;
