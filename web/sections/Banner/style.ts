import MixedFontTitle from "components/MixedFontTitle";
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
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-bottom: 6px solid ${colors.blue.b};
  overflow: hidden;

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
  height: auto;
  width: 100%;
  border-radius: 0;
  opacity: 0.8;

  ${media.medium} {
    border-radius: ${spacing(3)};
  }

  ${media.large} {
    position: absolute;
    border-radius: 0;
    width: 120%;
    top: -20%;
  }
`;

export const TextBoxContainer = styled.div`
  flex: 50%;
  top: 6vw;
  left: ${spacing(4)};
  display: flex;
  max-width: 700px;
  z-index: 1;
  justify-content: center;

  ${media.large} {
    position: absolute;
    width: 45%;
    min-width: 520px;
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

export const Title = styled(MixedFontTitle)`
  padding: ${spacing(3)} ${spacing(2)} 0;
  border-top-left-radius: ${getTextBorderRadius()};
  border-top-right-radius: ${getTextBorderRadius()};

  > :first-child {
    padding: 0;
    padding-bottom: ${spacing(1)};
    line-height: ${fontSize('xl')};
  }

  ${media.large} {
    padding: ${spacing(3)};
    background-color: ${colors.white};
  }
`;

export const TextBoxContent = styled.div`
  padding: ${spacing(1)} ${spacing(2)};
  font-size: ${fontSize("sm")};

  ${media.medium} {
    padding: ${spacing(1)} ${spacing(4)};
    padding-top: 0;
  }
`;
