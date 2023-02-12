import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "network/getContent";
import { useNextSanityImage } from "next-sanity-image";
import { Banner } from "./query";
import {
  BannerContainer,
  ImageContainer,
  StyledImage,
  TextBox,
  TextBoxContainer,
  TextBoxContent,
  Title,
} from "./style";

type BannerProps = {
  banner: Banner;
};

const Banner = ({ banner }: BannerProps) => {
  const imageProps = useNextSanityImage(client, banner.image.asset);
  return (
    <BannerContainer>
      <ImageContainer data-sal="fade" data-sal-duration="1000">
        {banner.backgroundType === "image" ? (
          <StyledImage
            {...imageProps}
            alt={banner.image.alt}
            priority
          />
        ) : (
          <div>{/* TODO: Implement Video*/}</div>
        )}
      </ImageContainer>
      <TextBoxContainer
        data-sal="fade"
        data-sal-delay="500"
        data-sal-duration="1000"
      >
        <TextBox>
          <Title>{banner.title}</Title>
          <TextBoxContent>
            <PortableText value={banner.body}></PortableText>
          </TextBoxContent>
        </TextBox>
      </TextBoxContainer>
    </BannerContainer>
  );
};

export default Banner;
