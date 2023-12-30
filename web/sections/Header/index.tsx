import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import Logo from "images/alicia_naturopathic_doctor_logo.svg";
import { AnimationItem } from "lottie-web";
import chevron from "animations/chevron.json";
import brain from "animations/brain.json";
import {
  NavContainer,
  NavList,
  NavItem,
  BackToTopButton,
  ChevronAnimationContainer,
  Title,
  Socials,
  HeaderContainer,
  WorkButton,
  Anchor,
} from "./style";
import { ContactMethods } from "./query";
import { SCROLL_HEIGHT_FOR_BACK_TO_TOP } from "./constants";
import Icon from "components/Icon";
import { ICONS, IconString } from "components/Icon/constants";
import Lottie from "lottie-web";
import { Sections } from "network/getContent/constants";

function scrollToTop() {
  animateScroll.scrollToTop();
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

type HeaderProps = {
  sections: Sections;
  contactMethods: ContactMethods[];
};

const Header = ({ sections, contactMethods }: HeaderProps) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [animation, setAnimation] = useState<AnimationItem>();
  const animationContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    if (animationContainer.current) {
      setAnimation(
        Lottie.loadAnimation({
          name: "chevron",
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: chevron,
        })
      );
    }
    return () => Lottie.destroy("chevron");
  }, [animationContainer.current]);

  const workSection = sections.find((section) => section.type === "work");

  useEffect(() => {
    const onScroll = (e) =>
      setIsNavCollapsed(
        e.target.documentElement.scrollTop > SCROLL_HEIGHT_FOR_BACK_TO_TOP
      );
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function playAnimation() {
    if (animation?.isPaused) {
      animation?.play();
      animation?.resetSegments(true);
    }
  }

  return (
    <>
      <HeaderContainer>
        <NavContainer collapsed={isNavCollapsed}>
          <Title collapsed={isNavCollapsed}>
            <Logo height="110px" title="Dr. Alicia - Naturopathic Doctor" />
          </Title>
          <NavList>
            {sections
              ?.filter((section) => section.link && section.type !== "work")
              .map((section, index) => (
                <NavItem
                  key={index}
                  onClick={() => scrollToSection(section.type)}
                  collapsed={isNavCollapsed}
                >
                  {section.link}
                </NavItem>
              ))}
            {workSection && (
              <WorkButton
                onClick={() => scrollToSection(workSection.type)}
                animationConfig={{
                  name: "brain",
                  data: brain,
                }}
              >
                {workSection.link}
              </WorkButton>
            )}
            <BackToTopButton
              collapsed={isNavCollapsed}
              onMouseEnter={playAnimation}
              onFocus={playAnimation}
              onClick={scrollToTop}
            >
              <ChevronAnimationContainer ref={animationContainer} />
              <span>Back to top</span>
            </BackToTopButton>
          </NavList>
          <Socials collapsed={isNavCollapsed}>
            {contactMethods
              .filter((method) => Object.keys(ICONS).includes(method.sanityId))
              .map((method) => (
                <a
                  key={method.sanityId}
                  href={method.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${method.title} ${method.label}`}
                >
                  <Icon icon={method.sanityId as IconString} alt="" />
                </a>
              ))}
          </Socials>
        </NavContainer>
      </HeaderContainer>
      <Anchor />
    </>
  );
};

export default Header;
