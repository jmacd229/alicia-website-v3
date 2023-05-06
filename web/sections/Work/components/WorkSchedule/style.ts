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
  color: ${colors.grey.c};
  border-bottom-left-radius: ${spacing(2)};
  border-bottom-right-radius: ${spacing(2)};
  background-color: ${colors.white};
  ${shadow(1)}
  ${media.medium} {
    color: ${colors.white};
    margin: ${spacing(2)};
    padding-top: 0;
    max-width: 1px;
    white-space: nowrap;
    background-color: transparent;
    box-shadow: none;
  }
`;
