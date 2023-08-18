import { FC, ReactElement } from "react";
import { CloseButton, PopUpContainer, PopUpLayout } from "./style";
import Icon from "components/Icon";
import { PopUp as PopUpType } from "./types";
import { PortableText } from "@portabletext/react";

function setCookie(name: string, value: string) {
  document.cookie = name + "=" + value + ";";
}

function getCookie(name: string): string {
  const cookieName = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return "";
}

const PopUp: FC = ({ popUp }: { popUp: PopUpType }): ReactElement => {
  if (typeof document !== "undefined") {
    setCookie(`pop-up-${popUp.id}`, "true");
    console.log("COOKIE", getCookie(`pop-up-${popUp.id}`));
  }
  return (
    <PopUpLayout>
      <PopUpContainer>
        <PortableText value={popUp.content}></PortableText>
        <CloseButton>
          <Icon icon="close" alt="dismiss" />
        </CloseButton>
      </PopUpContainer>
    </PopUpLayout>
  );
};

export default PopUp;
