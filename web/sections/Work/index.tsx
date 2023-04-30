import React from "react";
import { PortableText } from "@portabletext/react";
import BaseButton from "components/Button";
import { client } from "network/getContent";
import { Work } from "./query";
import { useNextSanityImage } from "next-sanity-image";
import brain from "animations/brain.json";
import virtual from "animations/virtual.json";
import {
  BookButtonContainer,
  ButtonContainer,
  DesktopTitle,
  StyledImage,
  WorkContainer,
  WorkContent,
  WorkContentContainer,
  MobileTitle,
  ImageContainer,
} from "./style";
import WorkSchedule from "./components/WorkSchedule";

type WorkProps = {
  work: Work;
};

const Work = ({ work }: WorkProps) => {
  const imageProps = useNextSanityImage(client, work.image.asset);
  return (
    <WorkContainer>
      <MobileTitle>{work.title}</MobileTitle>
      <WorkContentContainer>
        <WorkContent>
          <DesktopTitle>{work.title}</DesktopTitle>
          <PortableText value={work.body}></PortableText>
          <ButtonContainer>
            {work.virtualVisible ? (
              <BaseButton
                href={work.virtualLink.url}
                size="large"
                variant="secondary"
                animationConfig={{
                  name: "virtual",
                  data: virtual,
                }}
              >
                {work.virtualLink.text}
              </BaseButton>
            ) : null}
            {work.bookLink.map((booking) => (
              <BookButtonContainer key={booking.location.id}>
                <BaseButton
                  href={booking.url}
                  size="large"
                  variant="secondary"
                  animationConfig={{
                    name: "brain",
                    data: brain,
                  }}
                >
                  {booking.location.title}*
                </BaseButton>
                {(booking.location.days.length ||
                  booking.location.daysVirtual.length) && (
                  <WorkSchedule location={booking.location} />
                )}
              </BookButtonContainer>
            ))}
          </ButtonContainer>
        </WorkContent>
        <ImageContainer>
          <StyledImage {...imageProps} alt={work.image.alt ?? ""} />
        </ImageContainer>
      </WorkContentContainer>
    </WorkContainer>
  );
};

export default Work;
