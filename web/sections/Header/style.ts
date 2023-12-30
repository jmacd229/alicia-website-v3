import styled, { css } from "styled-components";
import colors from "styles/palette";
import { fontSize, fontStyle } from "styles/font";
import spacing from "styles/spacing";
import media from "styles/media";
import { shadow } from "styles/shadows";
import zIndex from "styles/zIndex";
import { underline } from "styles/animations/underline";
import Button from "components/Button";

const NAV_HEIGHT = { EXPANDED: `125px`, COLLAPSED: "75px" };
const MOBILE_NAV_HEIGHT = { EXPANDED: `75px`, COLLAPSED: "34px" };

const COLLAPSE_ANIMATION = "ease-in-out 150ms";
const FLIP_ANIMATION = "ease-in-out 250ms";

const calculateBackToTopPosition = (isMobile?: boolean) =>
  `calc(calc(-${
    isMobile ? MOBILE_NAV_HEIGHT.COLLAPSED : NAV_HEIGHT.COLLAPSED
  } / 2) - ${spacing(isMobile ? 2.5 : 3)})`;

const titleHeight = css<{ $collapsed: boolean }>`
  height: ${({ $collapsed: collapsed }) =>
    collapsed ? MOBILE_NAV_HEIGHT.COLLAPSED : MOBILE_NAV_HEIGHT.EXPANDED};

  ${media.medium} {
    height: ${({ $collapsed: collapsed }) =>
      collapsed ? NAV_HEIGHT.COLLAPSED : NAV_HEIGHT.EXPANDED};
  }
`;

const navPadding = css<{ $collapsed: boolean }>`
  padding: ${spacing(0.5)};

  ${media.medium} {
    padding: ${({ $collapsed: collapsed }) => spacing(collapsed ? 1 : 2)} ${spacing(4)};
  }
`;

export const Anchor = styled.div<{ $collapsed?: boolean }>`
  background-color: ${colors.grey.a};
  ${titleHeight}
  ${navPadding}

  ${media.large} {
    background-color: ${colors.grey.c};
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: ${zIndex.NAVIGATION};
`;

export const NavContainer = styled.div<{ $collapsed: boolean }>`
  display: grid;
  grid-template-areas: "logo links";
  grid-template-columns: ${({ $collapsed: collapsed }) => (collapsed ? "15%" : "35%")} auto;
  grid-template-rows: auto;
  align-items: center;
  top: 0;
  ${navPadding}
  background-color: ${colors.grey.a};
  border-bottom: 2px solid ${colors.blue.b};
  height: ${({ $collapsed: collapsed }) => (collapsed ? "110%" : "100%")};
  ${shadow(1)}
  transition: height ${COLLAPSE_ANIMATION}, padding ${COLLAPSE_ANIMATION};

  ${media.medium} {
    grid-template-areas: "logo links socials";
    grid-template-columns: ${({ $collapsed: collapsed }) => (collapsed ? "20%" : "35%")} auto 10%;
  }
`;

export const NavList = styled.div.attrs({ role: "navigation" })`
  grid-area: links;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;
  padding: ${spacing(0.5)} 0;

  ${media.medium} {
    flex-wrap: nowrap;
    padding: 0;
    gap: 5%;
  }
`;

export const NavItem = styled.button<{ $collapsed: boolean }>`
  color: ${colors.black};
  font-size: ${({ $collapsed: collapsed }) => fontSize(collapsed ? "xs" : "sm")};
  ${fontStyle.IMPACT_THIN};
  padding: 0 ${spacing(0.5)};
  ${underline("jade-a", `font-size ${COLLAPSE_ANIMATION}`)}
  margin: 0;

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    padding: ${spacing(0.5)} ${spacing(1)};
    font-size: ${({ $collapsed: collapsed }) => fontSize(collapsed ? "regular" : "lg")};
  }
`;

export const BackToTopButton = styled.button.attrs<{ $collapsed: boolean }>(
  ({ $collapsed: collapsed }) => ({
    disabled: !collapsed,
    "aria-hidden": !collapsed,
  })
)<{ $collapsed: boolean }>`
  position: absolute;
  bottom: ${calculateBackToTopPosition(true)};
  border-bottom-left-radius: ${spacing(2)};
  border-bottom-right-radius: ${spacing(2)};
  ${shadow(1)}
  color: ${colors.white};
  background-color: ${colors.jade.b};
  padding: 0 ${spacing(0.5)};
  z-index: -1;
  span {
    display: none;
  }
  display: flex;
  align-items: center;
  gap: ${spacing()};

  &:hover {
    background-color: ${colors.jade.c};
  }

  ${({ $collapsed: collapsed }) =>
    collapsed
      ? css`
          opacity: 1;
          cursor: pointer;
          transform: perspective(600px) rotateX(0deg);
        `
      : css`
          opacity: 0;
          cursor: auto;
          transform: perspective(600px) rotateX(180deg);
        `}

  ${media.medium} {
    bottom: ${calculateBackToTopPosition()};
    padding: ${spacing(0.5)} ${spacing(3)};
    span {
      display: block;
    }
  }

  transition: transform ${FLIP_ANIMATION}, opacity ${FLIP_ANIMATION},
    top ${COLLAPSE_ANIMATION}, background-color linear 150ms;
`;

export const ChevronAnimationContainer = styled.div`
  height: 32px;
  width: 32px;
  transform: rotate(180deg);
`;

export const Title = styled.h1<{ $collapsed: boolean }>`
  grid-area: logo;
  overflow: hidden;
  width: 100vw;
  ${titleHeight}
  > svg {
    height: ${({ $collapsed: collapsed }) => (collapsed ? "110%" : "100%")};
    width: auto;
    transition: height ${COLLAPSE_ANIMATION};
  }
`;

export const Socials = styled.div<{ $collapsed: boolean }>`
  grid-area: socials;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ $collapsed: collapsed }) => spacing(collapsed ? 0 : 0.5)};
  transition: gap ${COLLAPSE_ANIMATION};
  svg {
    fill: ${colors.blue.b};
    transition: fill 500ms;
    &:hover {
      fill: ${colors.jade.b};
    }
  }

  ${media.medium} {
    display: flex;
  }
`;

export const WorkButton = styled(Button).attrs({ variant: "secondary" })`
  height: 32px;
  margin-left: ${spacing(1)};
  font-size: ${fontSize("sm")};
  line-height: ${fontSize("sm")};
  padding: 0 ${spacing(1)};
  border-width: 2px;

  ${media.medium} {
    height: 48px;
    margin-left: 0;
    font-size: ${fontSize("regular")};
    padding: ${spacing(1)} ${spacing(2)};
    border-width: 3px;
  }
`;
