import styled from "styled-components";
import Image from "next/image";

import { fontStyle } from "styles/font";
import colors from "styles/palette";
import spacing from "styles/spacing";
import { shadow } from "styles/shadows";

export const WorkContainer = styled.div.attrs({ id: "work" })`
  display: flex;
  flex-direction: column;
  margin: ${spacing(5)} 0;
`;

export const WorkTitle = styled.h3`
  text-align: center;
  ${fontStyle.IMPACT_THIN};
`;

export const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: ${spacing(1)} ${spacing(4)};
  background-color: ${colors.blue.a};
  border-top-right-radius: ${spacing(10)};
  border-bottom-right-radius: ${spacing(10)};
  ${shadow(2)};
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: -${spacing(6)};
  opacity: 0.6;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${spacing(3)};
  left: ${spacing(3)};
  gap: ${spacing(2)};
`;

export const ButtonAndImageWrapper = styled.div`
  position: relative;
`;

export const BookButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
