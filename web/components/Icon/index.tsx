import Image from "next/image";
import { FC, ReactElement } from "react";
import { ICONS, IconString } from "./constants";

const Icon: FC<{
  icon: IconString;
  alt: string;
  size?: number;
}> = ({ icon, alt, size = 16 }): ReactElement => {
  const Element = ICONS[icon];
  return <Element alt={alt} width={size} height={size} />;
};

export default Icon;
