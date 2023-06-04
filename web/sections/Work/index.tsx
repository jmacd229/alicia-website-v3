import React, { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "network/getContent";
import { Work } from "./query";
import { useNextSanityImage } from "next-sanity-image";
import brain from "animations/brain.json";
import virtual from "animations/virtual.json";
import {
  BookButtonContainer,
  ButtonContainer,
  StyledImage,
  WorkContainer,
  WorkContentContainer,
  ImageContainer,
  TextContent,
  MobileTitle,
  DesktopTitle,
  StyledWorkButton,
} from "./style";

type WorkProps = {
  work: Work;
};

const animations = {
  brain,
  virtual,
};

const WorkButton = ({
  url,
  children,
  isMobile,
  animation,
}: {
  url: string;
  children: ReactNode;
  isMobile: boolean;
  animation: keyof typeof animations;
}) => (
  <StyledWorkButton
    $isMobile={isMobile}
    href={url}
    size="large"
    variant={isMobile ? "tertiary" : "primary"}
    animationConfig={{
      name: animation,
      data: animations[animation],
    }}
  >
    {children}
  </StyledWorkButton>
);

const Work = ({ work }: WorkProps) => {
  const imageProps = useNextSanityImage(client, work.image.asset);
  return (
    <WorkContainer>
      <MobileTitle>{work.title}</MobileTitle>
      <WorkContentContainer>
        <DesktopTitle>{work.title}</DesktopTitle>
        <TextContent>
          <PortableText value={work.body}></PortableText>
        </TextContent>
        <ButtonContainer>
          {work.virtualVisible ? (
            <>
              <WorkButton
                url={work.virtualLink.url}
                isMobile={false}
                animation="virtual"
              >
                {work.virtualLink.text}
              </WorkButton>
              <WorkButton
                url={work.virtualLink.url}
                isMobile={true}
                animation="virtual"
              >
                {work.virtualLink.text}
              </WorkButton>
            </>
          ) : null}
          {work.bookLink.map((booking) => (
            <BookButtonContainer key={booking.location.id}>
              <WorkButton url={booking.url} isMobile={false} animation="brain">
                {booking.location.title}
              </WorkButton>
              <WorkButton url={booking.url} isMobile={true} animation="brain">
                {booking.location.title}
              </WorkButton>
            </BookButtonContainer>
          ))}
        </ButtonContainer>
      </WorkContentContainer>
      <ImageContainer>
        <StyledImage {...imageProps} alt={work.image.alt ?? ""} />
      </ImageContainer>
    </WorkContainer>
  );
};

export default Work;
