import { PortableText } from "@portabletext/react";
import { client } from "network/getContent";
import { useNextSanityImage } from "next-sanity-image";
import { type Banner } from "./query";
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
      <ImageContainer>
        {banner.backgroundType === "image" ? (
          <StyledImage {...imageProps} alt={banner.image.alt} priority />
        ) : (
          <div>{/* TODO: Implement Video*/}</div>
        )}
      </ImageContainer>
      <TextBoxContainer>
        <TextBox>
          <Title
            fontSize={{ cursive: "xl", regular: "xl" }}
            responsive={false}
            lineBreak={true}
            wrap={true}
            underline={false}
            title={banner.title}
          />
          <TextBoxContent>
            <PortableText value={banner.body}></PortableText>
          </TextBoxContent>
        </TextBox>
      </TextBoxContainer>
    </BannerContainer>
  );
};

export default Banner;
