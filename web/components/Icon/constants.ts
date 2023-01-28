import { ReactElement } from "react";

import email from "images/icons/email.svg";
import instagram from "images/icons/instagram.svg";
import facebook from "images/icons/facebook.svg";

export const ICONS = {
  email,
  instagram,
  facebook,
} as const;

export type IconString = keyof typeof ICONS;
