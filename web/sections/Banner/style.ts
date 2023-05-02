import Image from "next/image";
import styled, { css } from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors, { rgbColors } from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

const BANNER_HEIGHT = "650px";
const getTextBorderRadius = (scale = 0) => spacing(5 - scale);

const BORDER_STYLE = (color: string) => css`
  border-top: 6px solid ${color};
  border-bottom: 6px solid ${color};
`;

export const BannerContainer = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${colors.grey.a};
  border-bottom: ${spacing(8)} solid ${colors.blue.b};

  ${media.medium} {
    flex-direction: row;
  }

  ${media.large} {
    height: ${BANNER_HEIGHT};
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 120%;
  height: auto;
  background-color: ${colors.jade.c};
  border-bottom: 6px solid ${colors.blue.b};

  ${media.medium} {
    width: 100%;
    ${BORDER_STYLE(colors.blue.b)}
    flex: 50%;
    margin-left: ${spacing(3)};
    border-radius: ${spacing(3)};
  }

  ${media.large} {
    margin-left: 0;
    border: none;
    border-radius: 0;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 0;
  opacity: 0.8;

  ${media.medium} {
    border-radius: ${spacing(3)};
  }

  ${media.large} {
    border-radius: 0;
  }
`;

export const TextBoxContainer = styled.div`
  flex: 50%;
  top: 6vw;
  right: ${spacing(4)};
  display: flex;
  max-width: 700px;
  z-index: 1;
  justify-content: center;

  ${media.large} {
    position: absolute;
    width: 45%;
    ${shadow(1)}
    border-radius: ${spacing(8)};
    ${BORDER_STYLE(`rgba(${rgbColors.blue.c},0.6)`)}
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.grey.a};

  ${media.medium} {
    border: none;
  }

  ${media.large} {
    ${BORDER_STYLE(colors.blue.b)};
    border-radius: ${getTextBorderRadius()};
  }
`;

export const Title = styled.h2`
  background-color: ${colors.white};
  text-align: center;
  padding: ${spacing(2)} ${spacing(2)};
  ${fontStyle.IMPACT};
  color: ${colors.grey.c};

  ${media.large} {
    background-color: ${colors.grey.a};
    border-top-right-radius: ${spacing(4)};
    border-top-left-radius: ${spacing(4)};
  }

  ${media.medium} {
    background-color: ${colors.white};
  }
`;

export const TextBoxContent = styled.div`
  padding: ${spacing(1)} ${spacing(2)};
  font-size: ${fontSize("sm")};

  ${media.medium} {
    padding: ${spacing(1)} ${spacing(4)};
  }
`;
