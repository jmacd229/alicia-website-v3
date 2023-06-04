import styled from "styled-components";
import colors from "styles/palette";
import { fontSize, fontStyle } from "styles/font";
import spacing from "styles/spacing";
import media from "styles/media";

export const FooterContainer = styled.div`
  position: relative;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${spacing(2)};
  background-color: ${colors.blue.c};
  border-top: 1px solid ${colors.blue.b};
  color: ${colors.white};
  font-family: "eratolig";
  font-size: ${fontSize("xs")};

  > svg {
    position: absolute;
    right: ${spacing(2)};
    top: ${spacing(2)};
  }

   a {
    color: ${colors.white};
  }
`;

export const Author = styled.div`
  font-size: ${fontSize("sm")};
  ${fontStyle.IMPACT};
  width: 50%;

  ${media.medium} {
    width: unset;
  }
`;
