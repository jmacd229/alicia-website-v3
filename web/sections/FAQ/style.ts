import styled, { css } from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const FAQContainer = styled.div.attrs({ id: "faqs" })`
  display: flex;
  justify-content: center;
  max-height: 550px;
  padding: ${spacing(8)} ${spacing(2)};

  ${media.large} {
    padding: ${spacing(6)};
    max-height: 350px;
    border-right: 150px solid ${colors.grey.a};
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};

  ${media.large} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const QuestionsContainer = styled.div.attrs({
  role: "list",
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  border-radius: ${spacing(2)};
  background-color: ${colors.grey.a};
  overflow-y: auto;
  border: 1px solid ${colors.grey.b};
  ${shadow(1, true)}
  padding: ${spacing(4)};

  ${media.large} {
    flex: 2;
    margin: 0 ${spacing(4)};
  }
`;

export const FAQTitle = styled.h2`
  ${fontStyle.IMPACT};
  color: ${colors.grey.c};
  text-align: center;

  ${media.large} {
    flex: 1;
    text-align: left;
  }

  ${media.large} {
    text-align: right;
  }
`;

const SpeechBubble = styled.div`
  position: relative;
  padding: ${spacing(1.5)};
  border-radius: ${spacing(1)};
  ${shadow(1)}
`;

const createMessageIndicator = (
  position: "left" | "right",
  color: string
) => css`
  &::after {
    content: "";
    position: absolute;
    bottom: ${position === "left" ? "-10px" : "-3px"};
    left: ${position === "left" ? "-5px" : ""};
    right: ${position === "right" ? "-11px" : ""};
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-top: 15px solid ${color};
    transform: ${position === "left" ? "rotate(-60deg)" : "rotate(200deg)"};
  }
  &::before {
    content: "";
    opacity: 0.5;
    position: absolute;
    bottom: ${position === "left" ? "-11px" : "-4px"};
    left: ${position === "left" ? "-5px" : ""};
    right: ${position === "right" ? "-11px" : ""};
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-top: 15px solid ${colors.grey.b};
    transform: ${position === "left" ? "rotate(-60deg)" : "rotate(200deg)"};
  }
`;

export const Question = styled(SpeechBubble)`
  ${fontStyle.IMPACT};
  background-color: ${colors.blue.a};
  ${createMessageIndicator("right", colors.blue.a)}
`;

export const Answer = styled(SpeechBubble)`
  background-color: ${colors.white};
  font-size: ${fontSize("sm")};
  line-height: ${fontSize("regular")};
  ${createMessageIndicator("left", colors.white)}
`;

export const QandA = styled.div.attrs({ role: "listitem" })`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  padding-bottom: ${spacing(3)};
  &:not(:first-of-type) {
    border-top: 1px solid ${colors.grey.b};
    padding-top: ${spacing(3)};
  }
`;
