import styled from "styled-components";
import Image from "next/image";

import { fontSize, fontStyle } from "styles/font";
import colors from "styles/palette";
import spacing from "styles/spacing";
import { shadow } from "styles/shadows";
import media from "styles/media";

export const WorkContainer = styled.div.attrs({ id: "work" })`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: ${spacing(5)} 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -75px;
    right: 0;
    height: 150px;
    width: 33%;
    background-color: ${colors.blue.b};
    border-top-left-radius: ${spacing(20)};
    border-bottom-left-radius: ${spacing(20)};
    z-index: -1;

    ${media.large} {
      right: unset;
      left: 0;
      width: 66%;
      height: 250px;
      border-top-right-radius: ${spacing(20)};
      border-bottom-right-radius: ${spacing(20)};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const WorkTitle = styled.h3`
  position: relative;
  padding: 0 ${spacing(5)};
  ${fontStyle.IMPACT_THIN};
`;

export const MobileTitle = styled(WorkTitle)`
  ${media.large} {
    display: none;
  }
`;

export const DesktopTitle = styled(WorkTitle)`
  display: none;
  position: absolute;
  top: 5%;
  left:0;
  padding: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
  ${media.large} {
    display: block;
  }
`;

export const WorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 750px;
  overflow: hidden;

  ${media.large} {
    flex-direction: row;
  }
`;

export const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
  padding: ${spacing(3)} ${spacing(4)};
  background-color: ${colors.blue.a};
  border-top-right-radius: ${spacing(10)};
  border-bottom-right-radius: ${spacing(10)};
  ${shadow(1)};
  z-index: 1;
  ${media.large} {
    position: absolute;
	justify-content: center;
	text-align: center;
    width: 45%;
    height: 50%;
    top: 10%;
    left: 5%;
    padding: ${spacing(6)} ${spacing(8)};
    border-radius: ${spacing(10)};
    background-color: ${colors.grey.a};
    ${shadow(2)};
    p {
      font-size: ${fontSize("lg")};
    }
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 120%;
  height: 100%;
  margin-top: -${spacing(6)};
  opacity: 0.7;

  ${media.large} {
    margin-top: 0;
    border-top: ${spacing(2)} solid ${colors.blue.b};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110%;
  left: 10%;
  gap: ${spacing(2)};

  ${media.large} {
    flex-direction: row-reverse;
    position: absolute;
    top: 75%;
    left: 0;
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonAndImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const BookButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
