import brain from "animations/brain.json";
import chevron from "animations/chevron.json";
import Icon from "components/Icon";
import { ICONS, IconString } from "components/Icon/constants";
import Logo from "images/alicia_naturopathic_doctor_logo.svg";
import { AnimationItem } from "lottie-web";
import { Sections } from "network/getContent/constants";
import Tooltip from "rc-tooltip";
import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import { SCROLL_HEIGHT_FOR_BACK_TO_TOP } from "./constants";
import { ContactResponse } from "./query";
import {
  Anchor,
  BackToTopButton,
  ChevronAnimationContainer,
  HeaderContainer,
  NavButton,
  NavContainer,
  NavLink,
  NavList,
  Socials,
  Title,
  WorkButton,
} from "./style";

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
} & ContactResponse;

const Header = ({
  sections,
  contactMethods,
  loginLink,
  mobileWorkButtonText,
}: HeaderProps) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [animation, setAnimation] = useState<AnimationItem | undefined>();
  const animationContainer = useRef<HTMLDivElement>(undefined);

  useEffect(() => {
    if (animationContainer.current) {
      import("lottie-web").then((Lottie) => {
        setAnimation(
          Lottie.default.loadAnimation({
            name: "chevron",
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: chevron,
          }),
        );
      });
    }
    return () => animation?.destroy();
  }, [animationContainer.current]);

  const workSection = sections.find((section) => section.type === "work");

  useEffect(() => {
    const onScroll = (e) =>
      setIsNavCollapsed(
        e.target.documentElement.scrollTop > SCROLL_HEIGHT_FOR_BACK_TO_TOP,
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

  const LoginNavItem = (
    <NavLink role="link" $collapsed={isNavCollapsed} href={loginLink.link}>
      {loginLink.title}
    </NavLink>
  );

  return (
    <>
      <HeaderContainer>
        <NavContainer $collapsed={isNavCollapsed}>
          <Title $collapsed={isNavCollapsed}>
            <Logo height="110px" title="Dr. Alicia - Naturopathic Doctor" />
          </Title>
          <NavList>
            {sections
              ?.filter((section) => section.link && section.type !== "work")
              .map((section, index) => (
                <NavButton
                  key={index}
                  onClick={() => scrollToSection(section.type)}
                  $collapsed={isNavCollapsed}
                >
                  {section.link}
                </NavButton>
              ))}
            {loginLink.visible &&
              (loginLink.tooltip ? (
                <Tooltip placement="top" overlay={loginLink.tooltip}>
                  {LoginNavItem}
                </Tooltip>
              ) : (
                LoginNavItem
              ))}
            {workSection && (
              <WorkButton
                onClick={() => scrollToSection(workSection.type)}
                animationConfig={{
                  name: "brain",
                  data: brain,
                }}
              >
                <span className="only-small">{mobileWorkButtonText}</span>
                <span className="hide-small">{workSection.link}</span>
              </WorkButton>
            )}
          </NavList>
          <Socials $collapsed={isNavCollapsed}>
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
        <BackToTopButton
          $collapsed={isNavCollapsed}
          onMouseEnter={playAnimation}
          onFocus={playAnimation}
          onClick={scrollToTop}
        >
          <ChevronAnimationContainer ref={animationContainer} />
          <span>Back to top</span>
        </BackToTopButton>
      </HeaderContainer>
      <Anchor />
    </>
  );
};

export default Header;
