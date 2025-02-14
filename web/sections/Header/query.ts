export default `{
  "login": *[_type == "login"][0]{visible,title,tooltip,link},
  "contactMethods": *[_type == "contact"][0]{methods[]{sanityId,label,title,url}}.methods
}`;

export type ContactResponse = {
  login: LoginLink;
  contactMethods: ContactMethod[];
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
