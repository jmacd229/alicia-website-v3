import Icon from "components/Icon";
import Image from "next/image";
import styled from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

export const ContactContainer = styled.div`
  display: grid;
  position: relative;
  min-height: 70rem;
  overflow: hidden;
  grid-template-areas:
    "title"
    "methods"
    "form";
  border-top: ${spacing(10)} solid ${colors.blue.b};
  ${media.medium} {
    grid-template-areas: "form methods title";
    grid-template-columns: 1fr 1fr 15rem;
  }
`;
export const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  justify-content: center;
  position: relative;
  pointer-events: none;
  padding: ${spacing(5)} 0;
  background-color: ${colors.grey.a};
  ${media.medium} {
    min-height: 100%;
    position: absolute;
    right: 0;
    width: 15rem;
    transform: rotate(90deg);
    padding: 0;
    background-color: transparent;
    > * {
      flex-wrap: nowrap;
    }

    &::after {
      content: "";
      z-index: -1;
      transform: rotate(90deg);
      display: block;
      position: absolute;
      width: 150%;
      height: 100%;
      background-color: ${colors.grey.a};
    }
  }
`;
export const MethodsContainer = styled.div`
  padding-top: ${spacing(4)};
  padding-bottom: ${spacing(4)};
  padding-left: ${spacing(5)};
  grid-area: methods;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.medium} {
    padding-left: ${spacing(10)};
  }
`;
export const Method = styled.a.attrs({ target: "__blank" })`
  display: grid;
  grid-template-areas:
    "icon title"
    "icon label";
  column-gap: ${spacing(2)};
  padding: ${spacing(4)} ${spacing(2)};
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    svg {
      background-color: ${colors.blue.a};
    }
  }
`;

export const StyledIcon = styled(Icon).attrs({ size: 48 })`
  grid-area: icon;
  padding: ${spacing(0.5)};
  background-color: ${colors.blue.b};
  fill: ${colors.white};
  border-radius: 50%;
  transition: background-color 250ms ease-in-out;
`;

export const MethodTitle = styled.h4`
  grid-area: title;
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  ${fontStyle.IMPACT_THIN}
  font-size: ${fontSize("lg")};
`;
