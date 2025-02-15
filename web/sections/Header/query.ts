export default `{
  "loginLink": *[_type == "login"][0]{visible,title,tooltip,link},
  "contactMethods": *[_type == "contact"][0]{methods[]{sanityId,label,title,url}}.methods,
  "mobileWorkButtonText" : *[_type == "work"][0]{mobile_link}.mobile_link,
}`;

export type ContactResponse = {
  loginLink: LoginLink;
  contactMethods: ContactMethod[];
  mobileWorkButtonText?: string;
};

export type LoginLink = {
  visible: boolean;
  title: string;
  tooltip?: string;
  link: string;
};

export type ContactMethod = {
  sanityId: string;
  label: string;
  title: string;
  url: string;
};
