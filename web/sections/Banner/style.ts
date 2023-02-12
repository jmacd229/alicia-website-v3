import Image from "next/image";
import styled, { css } from "styled-components";
import { fontSize } from "styles/font";
import media from "styles/media";
import colors, { rgbColors } from "styles/palette";
import { DEFAULT_SHADOW } from "styles/shadows";
import spacing from "styles/spacing";

const BANNER_HEIGHT = "750px";
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
  border-bottom: ${spacing(8)} solid ${colors.blue.a};

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
  top: 8vw;
  right: ${spacing(4)};
  display: flex;
  max-width: 700px;
  z-index: 1;
  justify-content: center;

  ${media.large} {
    position: absolute;
    width: 45%;
    ${DEFAULT_SHADOW}
    border-radius: ${spacing(8)};
    ${BORDER_STYLE(`rgba(${rgbColors.blue.c},0.6)`)}
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: ${colors.grey.a};
  padding: ${spacing(4)} 0;

  ${media.medium} {
    border: none;
    padding: 0;
  }

  ${media.large} {
    ${BORDER_STYLE(colors.blue.b)};
    border-radius: ${getTextBorderRadius()};
    width: 100%;
  }
`;

export const Title = styled.h2`
  background-color: ${colors.white};
  text-align: center;
  padding: ${spacing(2)} ${spacing(2)};
  border-radius: ${getTextBorderRadius(1)};
  margin: ${spacing(3)};
  margin-bottom: 0;
  ${media.large} {
    margin: 0;
    border-bottom: 1px solid ${colors.blue.b};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const TextBoxContent = styled.div`
  padding: ${spacing(1)} ${spacing(2)};
  font-size: ${fontSize("sm")};

  ${media.medium} {
    padding: ${spacing(1)} ${spacing(4)};
  }
`;
