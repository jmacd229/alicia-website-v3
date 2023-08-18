import styled from "styled-components";
import { fontSize } from "styles/font";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const PopUpLayout = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  transition: bottom ease-in-out 500ms;
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
	font-size: ${fontSize("sm")};
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

  svg {
	fill: ${colors.grey.c};
	width: 10px;
	height: 10px;
  }
`;
