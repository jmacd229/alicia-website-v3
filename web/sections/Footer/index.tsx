import { Author, FooterContainer } from "./style";
import Logo from "images/alicia_naturopathic_doctor_logo_light.svg";
import packageJson from '../../package.json';

const Footer = () => {
  const date = packageJson.releaseDate.split("-");
  return (
    <FooterContainer>
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
      <div>
        Last Updated:{" "}
        {new Date(
          parseInt(date[0]),
          parseInt(date[1]) - 1,
          parseInt(date[2])
        ).toDateString()}
      </div>
      <div>{packageJson.version}</div>
      <Logo height="80px" title="Dr. Alicia - Naturopathic Doctor" />
    </FooterContainer>
  );
};

export default Footer;
