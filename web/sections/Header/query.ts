export default '*[_type == "contact"][0]{methods[]{sanityId,label,title,url}}.methods';

export type ContactMethods = {
  sanityId: string;
  label: string;
  title: string;
  url: string;
};
