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
  margin-top: ${spacing(5)};
`;

export const WorkTitle = styled.h3`
  position: relative;
  text-align: center;
  ${fontStyle.IMPACT};
  font-weight: 200;
  letter-spacing: -3px;
  word-spacing: 3px;
`;

export const MobileTitle = styled(WorkTitle)`
  ${media.medium} {
    display: none;
  }
`;

export const DesktopTitle = styled(WorkTitle)`
  display: none;
  position: absolute;
  top: 8%;
  left: 0;
  padding: 0;
  width: 100%;
  white-space: nowrap;
  z-index: 1;
  ${media.medium} {
    display: block;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 10%;
    width: 80%;
    bottom: 5%;
    border-radius: 50%;
    height: 3px;
    background-color: ${colors.blue.b};
  }
`;

export const WorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 750px;

  ${media.medium} {
    flex-direction: row;
  }
`;

export const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
  padding: ${spacing(2)} ${spacing(4)};
  background-color: ${colors.grey.a};
  ${shadow(1)};
  z-index: 1;
  ${media.medium} {
    position: absolute;
    justify-content: center;
    text-align: center;
    width: 450px;
    height: 50%;
    top: 10%;
    left: 0%;
    padding: ${spacing(6)} ${spacing(8)};
    border-radius: ${spacing(5)};
    ${shadow(2)};
    p {
      font-size: ${fontSize("lg")};
    }
  }

  ${media.large} {
    width: 45%;
    left: 5%;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 120%;
  height: auto;
  opacity: 0.7;
  border-bottom: ${spacing(2)} solid ${colors.blue.a};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110%;
  left: 2.5%;
  gap: ${spacing(2)};

  ${media.medium} {
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
