import styled from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

export const FooterContainer = styled.div`
  position: relative;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

  a,
  button {
    font-family: "eratolig";
    color: ${colors.white};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Author = styled.div`
  font-size: ${fontSize("sm")};
  ${fontStyle.IMPACT};
  width: 50%;

  ${media.mediumUP} {
    width: unset;
  }
`;

export const modalStyle = {
  content: {
    padding: spacing(5),
  },
  overlay: {
    zIndex: 4,
    width: "80vw",
    height: "80vh",
    top: "10%",
    left: "10%",
    overflow: "auto",
    borderRadius: spacing(5),
  },
};

export const CloseButtonContainer = styled.div`
  position: fixed;
  bottom: 5%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
