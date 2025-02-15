import Image from "next/image";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

export const AboutMeContainer = styled.div.attrs({ id: "aboutMe" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing(6)} ${spacing(3)};

  ${media.mediumUP} {
    padding: ${spacing(15)};
  }
`;

export const AboutMeContent = styled.div`
  width: 100%;
  ${media.mediumUP} {
    max-width: 900px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing(1)} 0;
  border-bottom: 3px solid ${colors.blue.c};

  ${media.largeUP} {
    flex-direction: row;
    padding: ${spacing(3)} 0;
  }
`;

export const StyledImage = styled(Image)`
  max-width: 300px;
  height: auto;

  ${media.largeUP} {
    margin-left: ${spacing(5)};
  }
`;
