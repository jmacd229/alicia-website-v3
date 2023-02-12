import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "network/getContent";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { About } from "./query";
import { AboutMeContainer, AboutMeContent, StyledImage, TextContainer } from "./style";
import MixedFontTitle from "components/MixedFontTitle";

type AboutProps = {
  about: About;
};

const About = ({ about }: AboutProps) => {
  const imageProps = useNextSanityImage(client, about.image.asset);
  return (
    <AboutMeContainer>
      <AboutMeContent>
        <MixedFontTitle title={about.title}></MixedFontTitle>
        <TextContainer>
          <div>
            <PortableText value={about.body}></PortableText>
          </div>
          <StyledImage {...imageProps} alt={about.image.alt} className="profile" />
        </TextContainer>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default About;
