import Image from "next/image";
import styled, { css } from "styled-components";
import { fontSize } from "styles/font";
import media from "styles/media";
import colors, { rgbColors } from "styles/palette";
import { DEFAULT_SHADOW } from "styles/shadows";
import spacing from "styles/spacing";

const BANNER_HEIGHT = "750px";
const TEXT_BOX_BORDER_RADIUS = spacing(4);

const BORDER_STYLE = (color: string) => css`
  border-top: 12px solid ${color};
  border-bottom: 8px solid ${color};
`;

export const BannerContainer = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${colors.tan.a};
  ${media.medium} {
    ${BORDER_STYLE(colors.tan.b)};
    flex-direction: row;
  }
  ${media.large} {
    height: ${BANNER_HEIGHT};
    flex-direction: row;
    border: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  background-color: ${colors.jade.c};

  ${media.medium} {
    flex: 50%;
    margin-left: ${spacing(3)};
    border-radius: ${spacing(4)};
    border: 8px solid ${colors.tan.b};
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
    width: 40%;
    ${DEFAULT_SHADOW}
    border-radius: ${spacing(8)};
    ${BORDER_STYLE(`rgba(${rgbColors.tan.c},0.6)`)}
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: ${colors.tan.a};
  ${BORDER_STYLE(colors.tan.b)}

  ${media.medium} {
    border: none;
  }

  ${media.large} {
    ${BORDER_STYLE(colors.tan.b)};
    border-radius: ${TEXT_BOX_BORDER_RADIUS};
    width: 100%;
  }
`;

export const Title = styled.h2`
  background-color: ${colors.white};
  text-align: center;
  padding: ${spacing(2)} ${spacing(2)};
  border-radius: ${TEXT_BOX_BORDER_RADIUS};
  margin: ${spacing(3)};
  margin-bottom: 0;
  ${media.large} {
    margin: 0;
    border-top: 8px solid ${colors.tan.a};
    border-bottom: 8px solid ${colors.tan.b};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const TextBoxContent = styled.div`
  padding: ${spacing(1)} ${spacing(4)};
  font-size: ${fontSize("sm")};
`;
