import React from "react";
import MixedFontTitle from "components/MixedFontTitle";
import {
  ContactContainer,
  TitleContainer,
  MethodsContainer,
  Method,
  Map,
  StyledIcon,
  MethodTitle,
} from "./style";
import { Contact } from "./query";
import { client } from "network/getContent";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { IconString } from "components/Icon/constants";

type ContactProps = {
  contact: Contact;
};

const Contact = ({ contact }: ContactProps) => {
  const imageProps = useNextSanityImage(client, contact.map.asset);
  return (
    <ContactContainer id="contact">
      <TitleContainer>
        <MixedFontTitle title={contact.title} />
      </TitleContainer>
      <Map>
        <Image {...imageProps} alt={contact.map.alt} />
      </Map>
      <MethodsContainer>
        {contact.locations.map((location) => (
          <Method key={location.id} href={location.url}>
            <MethodTitle>
              <StyledIcon icon="location" alt="" />
              {location.title}
            </MethodTitle>
            {location.label.map((label) => (
              <div key={label}>
                {label}
              </div>
            ))}
          </Method>
        ))}
        {contact.methods
          .filter((method) => method.visible)
          .map((method) => (
            <Method key={method.sanityId} href={method.url}>
              <MethodTitle>
                <StyledIcon
                  icon={
                    method.sanityId === "email"
                      ? "email_circle"
                      : (method.sanityId as IconString)
                  }
                  alt=""
                />
                {method.title}
              </MethodTitle>
              {method.label}
            </Method>
          ))}
      </MethodsContainer>
    </ContactContainer>
  );
};

export default Contact;
