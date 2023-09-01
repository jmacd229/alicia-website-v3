import { FC, ReactElement, useEffect, useState } from "react";
import { CloseButton, PopUpContainer, PopUpLayout } from "./style";
import Icon from "components/Icon";
import { PopUp as PopUpType } from "./types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { getCookie, setCookie } from "cookies";
import { useSpringRef, useTransition } from "react-spring";

const ensureExternalLinksOpenInNewTab: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },
  },
};

const PopUp: FC<{ popUp: PopUpType }> = ({ popUp }): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const transRef = useSpringRef();

  const [transitions] = useTransition(isVisible, () => ({
    ref: transRef,
    from: { bottom: -80 },
    enter: { bottom: 0 },
    leave: { bottom: -80 },
    trail: 250,
  }));
  useEffect(() => {
    transRef.start();
  }, [isVisible]);

  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      !Boolean(getCookie(`pop-up-${popUp.id}`))
    ) {
      setIsVisible(true);
    }
  }, []);

  const hidePopUp = () => {
    setIsVisible(false);
    setCookie(`pop-up-${popUp.id}`, "true");
  };

  return transitions((style, item) =>
    item ? (
      <PopUpLayout style={style}>
        <PopUpContainer>
          <PortableText
            value={popUp.content}
            components={ensureExternalLinksOpenInNewTab}
          ></PortableText>
          <CloseButton onClick={hidePopUp}>
            <Icon icon="close" alt="dismiss" />
          </CloseButton>
        </PopUpContainer>
      </PopUpLayout>
    ) : (
      <></>
    )
  );
};

export default PopUp;
