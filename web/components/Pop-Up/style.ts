import { animated, AnimatedComponent, ElementType } from "react-spring";
import styled from "styled-components";
import { fontSize } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const PopUpLayout = styled<AnimatedComponent<ElementType>>(animated.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  ${media.largeUP} {
    width: 50%;
  }
`;

export const PopUpContainer = styled.div`
  position: relative;
  padding: ${spacing(1)} ${spacing(2)};
  background-color: ${colors.blue.a};
  border-top-left-radius: ${spacing(3)};
  border-top-right-radius: ${spacing(3)};
  border: 1px solid ${colors.white};
  border-bottom: none;
  ${shadow(2)}

  a {
    color: ${colors.jade.c};
  }

  p {
    margin: 0;
    font-size: ${fontSize("xs")};
    text-align: center;

    ${media.mediumUP} {
      font-size: ${fontSize("sm")};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  top: -4px;
  right: 4px;
  background-color: ${colors.grey.a};
  border: 1px solid ${colors.white};
  border-radius: 50%;
  padding: 2px;
  ${shadow(1)};
  cursor: pointer;

  svg {
    fill: ${colors.grey.c};
    width: 10px;
    height: 10px;
  }
`;
