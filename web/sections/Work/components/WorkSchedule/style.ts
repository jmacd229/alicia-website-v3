import styled from "styled-components";
import { fontSize } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

export const ScheduleContainer = styled.div`
  max-width: 17rem;
  display: flex;
  overflow: visible;
  margin-top: -${spacing(2)};
  margin-left: ${spacing(1)};
  padding: ${spacing(1)};
  padding-top: ${spacing(2.5)};
  font-size: ${fontSize("xs")};
  color: ${colors.jade.a};
  background-color: ${colors.white};
  border-bottom-left-radius: ${spacing(2)};
  border-bottom-right-radius: ${spacing(2)};
  ${shadow(1)}
  ${media.medium} {
    margin: ${spacing(1)};
    padding: 0;
    max-width: 1px;
    white-space: nowrap;
    background-color: transparent;
    box-shadow: none;
  }
`;
