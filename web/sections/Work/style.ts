import styled from "styled-components";
import Image from "next/image";

import { fontSize, fontStyle } from "styles/font";
import colors from "styles/palette";
import spacing from "styles/spacing";
import { shadow } from "styles/shadows";
import media from "styles/media";
import BaseButton from "components/Button";

export const WorkContainer = styled.div.attrs({ id: "work" })`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing(5)};
  height: 650px;
  overflow: hidden;

  ${media.medium} {
    height: 750px;
  }
`;

export const WorkTitle = styled.h2`
  text-align: center;
  ${fontStyle.IMPACT_THICK};
  color: ${colors.grey.c};
`;

export const MobileTitle = styled(WorkTitle)`
  margin-bottom: ${spacing(1)};
  font-size: ${fontSize("xl")};
  line-height: ${fontSize("xl")};
  ${media.medium} {
    display: none;
  }
`;

export const DesktopTitle = styled(WorkTitle)`
  display: none;
  font-size: ${fontSize("xxl")};
  line-height: ${fontSize("xxl")};
  background-color: ${colors.white};
  padding: ${spacing(3)};
  border-top-right-radius: ${spacing(5)};
  border-top-left-radius: ${spacing(5)};
  ${media.medium} {
    display: block;
  }
`;

export const WorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.medium} {
    position: absolute;
    right: 5%;
    top: 10%;
    max-width: 60%;
    background-color: ${colors.blue.a};
    ${shadow(2)};
    border-radius: ${spacing(5)};
    z-index: 1;
  }

  ${media.large} {
    max-width: 50%;
    top: 15%;
  }
`;

export const TextContent = styled.div`
  background-color: ${colors.grey.a};
  color: ${colors.black};
  padding: ${spacing(2)} ${spacing(3)};
  padding-top: 0;
  border-top: 1px solid ${colors.grey.b};
  border-bottom: 1px solid ${colors.grey.b};
  ${shadow(2)};

  ${media.medium} {
    text-align: center;
    padding: 0 ${spacing(3)};
    font-size: ${fontSize("lg")};
    background-color: ${colors.blue.a};
    border: none;
    box-shadow: none;
  }

  ${media.large} {
    padding: ${spacing(2)};
  }
`;

export const StyledWorkButton = styled(BaseButton)<{ $isMobile: boolean }>`
  display: ${(props) => (props.$isMobile ? "flex" : "none")};
  ${media.medium} {
    display: ${(props) => (props.$isMobile ? "none" : "flex")};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.jade.c};
  max-height: 350px;

  ${media.medium} {
    position: relative;
    max-height: unset;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 120%;
  height: auto;
  opacity: 0.7;
  transform: scaleX(-1);

  ${media.medium} {
    transform: none;
    left: -30%;
  }

  ${media.large} {
    left: -20%;
    top: -15%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  position: absolute;
  bottom: -100%;
  left: 5%;
  z-index: 1;

  ${media.medium} {
    align-items: center;
    position: static;
    padding: ${spacing(3)};
    padding-top: 0;
  }

  ${media.large} {
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
