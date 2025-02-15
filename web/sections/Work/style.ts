import Image from "next/image";
import styled from "styled-components";

import BaseButton from "components/Button";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const WorkContainer = styled.div.attrs({ id: "work" })`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing(5)};
  height: 500px;
  overflow: hidden;

  ${media.mediumUP} {
    height: 750px;
  }
`;

export const WorkTitle = styled.h2`
  text-align: center;
  ${fontStyle.IMPACT_THICK};
`;

export const MobileTitle = styled(WorkTitle)`
  margin-bottom: ${spacing(1)};
  font-size: ${fontSize("xl")};
  line-height: ${fontSize("xl")};
  padding: ${spacing(1)};
  ${media.mediumUP} {
    display: none;
  }
`;

export const DesktopTitle = styled(WorkTitle)`
  display: none;
  font-size: ${fontSize("xxl")};
  line-height: normal;
  background-color: ${colors.white};
  color: ${colors.grey.c};
  padding: ${spacing(4)} ${spacing(5)};
  border-top-right-radius: ${spacing(5)};
  border-top-left-radius: ${spacing(5)};
  ${media.mediumUP} {
    display: block;
  }
`;

export const WorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  ${media.mediumUP} {
    position: absolute;
    right: 7%;
    top: 10%;
    max-width: 50%;
    background-color: ${colors.grey.a};
    ${shadow(2)};
    border-radius: ${spacing(5)};
    z-index: 1;
  }

  ${media.largeUP} {
    max-width: 45%;
    top: 15%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  background-color: ${colors.grey.a};
  color: ${colors.black};
  padding: ${spacing(6)} ${spacing(3)};
  border-top: 1px solid ${colors.grey.b};
  border-bottom: 1px solid ${colors.grey.b};
  ${shadow(2)};

  p {
    margin: 0;
    font-size: ${fontSize("lg")};
  }

  ${media.mediumUP} {
    text-align: center;
    padding: 0 ${spacing(3)};
    font-size: ${fontSize("lg")};
    background-color: ${colors.grey.a};
    border: none;
    box-shadow: none;
  }

  ${media.largeUP} {
    padding: ${spacing(4)} ${spacing(3)};
  }
`;

export const StyledWorkButton = styled(BaseButton)<{ $isMobile: boolean }>`
  display: ${(props) => (props.$isMobile ? "flex" : "none")};
  font-size: ${fontSize("lg")};
  ${media.mediumUP} {
    display: ${(props) => (props.$isMobile ? "none" : "flex")};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.jade.c};
  max-height: 250px;

  ${media.mediumUP} {
    position: relative;
    max-height: unset;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 150%;
  height: auto;
  opacity: 0.7;
  top: -5%;

  ${media.mediumUP} {
    transform: none;
    width: 120%;
    left: -20%;
  }

  ${media.largeUP} {
    left: -20%;
    top: -15%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${media.mediumUP} {
    align-items: center;
    position: static;
    padding: ${spacing(3)} 0;
    padding-top: 0;
  }

  ${media.largeUP} {
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BookButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
