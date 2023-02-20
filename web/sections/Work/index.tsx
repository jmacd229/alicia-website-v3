import React from "react";
import { PortableText } from "@portabletext/react";
import BaseButton from "components/Button";
import { client } from "network/getContent";
import { Location, Work } from "./query";
import { useNextSanityImage } from "next-sanity-image";
import WEEKDAYS from "../../constants/weekdays";
import {
  BookButtonContainer,
  ButtonAndImageWrapper,
  ButtonContainer,
  StyledImage,
  WorkContainer,
  WorkContent,
  WorkTitle,
} from "./style";
import WorkSchedule from "./components/WorkSchedule";

type WorkProps = {
  work: Work;
};

const getDays = (location: Location) =>
  location.days.map((day, i) => (
    <div key={i}>
      {i !== 0 && i === location.days.length - 1 ? <div>&</div> : null}
      <div>{WEEKDAYS[day].full}s</div>
    </div>
  ));

const Work = ({ work }: WorkProps) => {
  const imageProps = useNextSanityImage(client, work.image.asset);
  return (
    <WorkContainer>
      <WorkTitle>{work.title}</WorkTitle>
      <WorkContent>
        <PortableText value={work.body}></PortableText>
      </WorkContent>
      <ButtonAndImageWrapper>
        <StyledImage {...imageProps} alt={work.image.alt} />
        <ButtonContainer>
          {work.virtualVisible ? (
            <BaseButton href={work.virtualLink.url}>
              {work.virtualLink.text}
            </BaseButton>
          ) : null}
          {work.bookLink.map((booking) => (
            <BookButtonContainer>
              <BaseButton href={booking.url} key={booking.location.id}>
                {booking.location.title}
              </BaseButton>
              {(booking.location.days.length ||
                booking.location.daysVirtual.length) && <WorkSchedule location={booking.location}/>}
            </BookButtonContainer>
          ))}
        </ButtonContainer>
      </ButtonAndImageWrapper>
    </WorkContainer>
  );
};

export default Work;
