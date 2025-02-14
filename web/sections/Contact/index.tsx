import { IconString } from "components/Icon/constants";
import MixedFontTitle from "components/MixedFontTitle";
import ContactForm from "./components/ContactForm";
import { type Contact } from "./query";
import {
  ContactContainer,
  Method,
  MethodsContainer,
  MethodTitle,
  StyledIcon,
  TitleContainer,
} from "./style";

type ContactProps = {
  contact: Contact;
};

const Contact = ({ contact }: ContactProps) => (
  <ContactContainer id="contact">
    <TitleContainer>
      <MixedFontTitle title={contact.title} wrap={false} />
    </TitleContainer>
    <ContactForm form={contact} />
    <MethodsContainer>
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
      {contact.locations.map((location) => (
        <Method key={location.id} href={location.url}>
          <StyledIcon icon="location" alt="" />
          <MethodTitle>{location.title}</MethodTitle>
          <div>
            {location.label.map((label) => (
              <div key={label}>{label}</div>
            ))}
          </div>
        </Method>
      ))}
    </MethodsContainer>
  </ContactContainer>
);

export default Contact;
