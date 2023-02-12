import { useEffect, useRef, useState } from "react";
import { animateScroll } from 'react-scroll';
import Logo from "images/alicia_naturopathic_doctor_logo.svg";
import lottie, { AnimationItem } from "lottie-web";
import chevron from "animations/chevron.json";
import brain from "animations/brain.json";
import {
  NavContainer,
  NavList,
  NavItem,
  BackToTopButton,
  BrainAnimationContainer,
  ChevronAnimationContainer,
  Title,
  Socials,
  HeaderContainer,
  WorkButton,
  Anchor,
} from "./style";
import { AnimationConfig } from "types/animation";
import { Section } from "pages/types";
import { ContactMethods } from "./query";
import { SCROLL_HEIGHT_FOR_BACK_TO_TOP } from "./constants";
import Icon from "components/Icon";
import { ICONS, IconString } from "components/Icon/constants";

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
  sections: Section[];
  contactMethods: ContactMethods[];
};

const Header = ({ sections, contactMethods }: HeaderProps) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [animations, setAnimations] = useState<{
    [name: string]: AnimationItem;
  }>();

  const animationConfigs: { [name: string]: AnimationConfig } = {
    chevron: {
      name: "chevron",
      container: useRef<HTMLDivElement>(),
      data: chevron,
    },
    brain: {
      name: "brain",
      container: useRef<HTMLDivElement>(),
      data: brain,
    },
  };

  const workSection = sections.find((section) => section.id === "work");

  useEffect(() => {
    Object.entries(animationConfigs).forEach(([key, animationConfig]) => {
      if (animationConfig.container.current && !animations?.[key]) {
        setAnimations((animations) => ({
          ...animations,
          [key]: lottie.loadAnimation({
            name: animationConfig.name,
            container: animationConfig.container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animationConfig.data,
          }),
        }));
      }
    });
    return () =>
      Object.keys(animationConfigs).forEach((animationName) =>
        lottie.destroy(animationName)
      );
  }, []);

  useEffect(() => {
    const onScroll = (e) =>
      setIsNavCollapsed(
        e.target.documentElement.scrollTop > SCROLL_HEIGHT_FOR_BACK_TO_TOP
      );
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function playAnimation(name: string) {
    if (animations[name]?.isPaused) {
      animations[name].play();
      animations[name].resetSegments(true);
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
              ?.filter((section) => section.id !== "work")
              .map((section, index) => (
                <NavItem
                  key={index}
                  onClick={() => scrollToSection(section.id)}
                  collapsed={isNavCollapsed}
                >
                  {section.link}
                </NavItem>
              ))}
            {workSection && (
              <WorkButton
                onMouseEnter={() => playAnimation("brain")}
                onFocus={() => playAnimation("brain")}
                onClick={() => scrollToSection(workSection.id)}
              >
                <span>{workSection.link}</span>
                <BrainAnimationContainer>
                  <div ref={animationConfigs.brain.container} />
                </BrainAnimationContainer>
              </WorkButton>
            )}
            <BackToTopButton
              collapsed={isNavCollapsed}
              onMouseEnter={() => playAnimation("chevron")}
              onFocus={() => playAnimation("chevron")}
              onClick={scrollToTop}
            >
              <ChevronAnimationContainer
                ref={animationConfigs.chevron.container}
              />
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
                >
                  <Icon
                    icon={method.sanityId as IconString}
                    alt={`${method.title} ${method.label}`}
                  />
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
