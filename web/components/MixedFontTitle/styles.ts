import styled from "styled-components";
import { fontStyle, fontSize } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

export const TitleContainer = styled.h3`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize("xxl")};
  white-space: nowrap;

  ${media.medium} {
    font-size: ${fontSize("3xl")};
  }
`;

export const Regular = styled.span`
  ${fontStyle.IMPACT_THICK};
`;

export const Cursive = styled.span`
  ${fontStyle.CURSIVE};
  display: inline-block;
  line-height: ${fontSize("xxl")};
  color: ${colors.blue.c};
  border-bottom: 3px solid ${colors.blue.c};
  padding: 0 ${spacing(4)};

  ${media.medium} {
    line-height: ${fontSize("3xl")};
  }
`;
