import email from "images/icons/email.svg";
import email_circle from "images/icons/email_circle.svg";
import instagram from "images/icons/instagram.svg";
import facebook from "images/icons/facebook.svg";
import location from "images/icons/location.svg";
import message from "images/icons/message.svg";
import sent from "images/icons/sent.svg";
import close from "images/icons/close.svg";

export const ICONS = {
  email,
  email_circle,
  instagram,
  facebook,
  location,
  message,
  sent,
  close,
} as const;

export type IconString = keyof typeof ICONS;
