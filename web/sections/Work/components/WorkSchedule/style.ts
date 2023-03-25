import styled from "styled-components";
import { Cursive, fontSize, fontStyle } from "styles/font";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const ScheduleContainer = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: left;
  margin: 0;
  padding: ${spacing(3)};
  margin-left: ${spacing(1)};
  margin-top: -${spacing(2)};
  padding-top: ${spacing(3)};
  padding-left: ${spacing(3)};
  background-color: ${colors.white};
  border-radius: ${spacing(1)};
  ${shadow(2)};

  &:before {
    content: "";
    position: absolute;
    bottom: ${spacing(2.5)};
    left: ${spacing(1.5)};
    height: 70%;
    width: 3px;
    background-color: ${colors.blue.b};
    border-radius: 25%;
  }
`;

export const Virtual = styled.span`
  ${fontStyle.IMPACT_THIN};
  padding: ${spacing(0.5)} ${spacing(1)};
  font-size: ${fontSize("sm")};
  background-color: ${colors.blue.a};
  border-radius: ${spacing(2)};
  margin-left: ${spacing(1)};
`;
