import {
  Author,
  CloseButtonContainer,
  FooterContainer,
  modalStyle,
} from "./style";
import Logo from "images/alicia_naturopathic_doctor_logo_light.svg";
import packageJson from "../../package.json";
import privacyPolicy from "./privacyPolicy";
import cookiePolicy from "./cookiePolicy";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import BaseButton from "components/Button";

Modal.setAppElement("#__next");

const Footer = () => {
  const date = packageJson.releaseDate.split("-");
  const [openModal, setOpenModal] = useState<"privacy" | "cookie" | undefined>(
    undefined,
  );

  useEffect(() => {
    const onHashChanged = (event) => {
      if (event.newURL?.split("#")[1] === "cookie") {
        setOpenModal("cookie");
        history.pushState(null, null, "#");
      }
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, [setOpenModal]);

  return (
    <FooterContainer>
      <Modal isOpen={openModal === "privacy"} style={modalStyle}>
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
        <CloseButtonContainer>
          <BaseButton
            variant="secondary"
            size="large"
            onClick={() => setOpenModal(undefined)}
          >
            Close Privacy Policy
          </BaseButton>
        </CloseButtonContainer>
      </Modal>
      <Modal isOpen={openModal === "cookie"} style={modalStyle}>
        <div dangerouslySetInnerHTML={{ __html: cookiePolicy }} />
        <CloseButtonContainer>
          <BaseButton
            variant="secondary"
            size="large"
            onClick={() => setOpenModal("privacy")}
          >
            Back to Privacy Policy
          </BaseButton>
          <BaseButton
            variant="secondary"
            size="large"
            onClick={() => setOpenModal(undefined)}
          >
            Close Cookie Policy
          </BaseButton>
        </CloseButtonContainer>
      </Modal>
      <Author>
        A website built by{" "}
        <a
          href="https://www.jessemacdougall.ca"
          target="_blank"
          rel="noreferrer"
        >
          Jesse MacDougall
        </a>
      </Author>
      <button onClick={() => setOpenModal("privacy")}>Privacy Policy</button>
      <div>
        Last Updated:{" "}
        {new Date(
          parseInt(date[0]),
          parseInt(date[1]) - 1,
          parseInt(date[2]),
        ).toDateString()}
      </div>
      <div>{packageJson.version}</div>
      <Logo height="80px" title="Dr. Alicia - Naturopathic Doctor" />
    </FooterContainer>
  );
};

export default Footer;
