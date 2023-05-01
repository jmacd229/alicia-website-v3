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
import ContactForm from "./components/ContactForm";

type ContactProps = {
  contact: Contact;
};

const Contact = ({ contact }: ContactProps) => (
  <ContactContainer id="contact">
    <TitleContainer>
      <MixedFontTitle title={contact.title} />
    </TitleContainer>
    <ContactForm />
    <MethodsContainer>
      {contact.locations.map((location) => (
        <Method key={location.id} href={location.url}>
          <StyledIcon icon="location" alt="" />
          <MethodTitle>{location.title}</MethodTitle>
          <div>{location.label.map((label) => <div>{label}</div>)}</div>
        </Method>
      ))}
      {contact.methods
        .filter((method) => method.visible)
        .map((method) => (
          <Method key={method.sanityId} href={method.url}>
            <StyledIcon
              icon={
                method.sanityId === "email"
                  ? "email_circle"
                  : (method.sanityId as IconString)
              }
              alt=""
            />
            <MethodTitle>{method.title}</MethodTitle>
            {method.label}
          </Method>
        ))}
    </MethodsContainer>
  </ContactContainer>
);

export default Contact;
