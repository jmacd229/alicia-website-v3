import ABOUT_QUERY, { About } from "sections/About/query";
import BANNER_QUERY, { Banner } from "sections/Banner/query";
import HEADER_QUERY, { ContactMethods } from "sections/Header/query";
import WORK_QUERY, { Work } from "sections/Work/query";
import CONTACT_QUERY, { Contact } from "sections/Contact/query";
import FAQ_QUERY, { FAQ } from "sections/FAQ/query";

export const SANITY_CLIENT_CONFIG = {
  projectId: "qfrilqbt",
  dataset: "production",
  apiVersion: "2022-01-06",
  useCdn: true,
};

export const BASE_QUERY =
  '*[_type in ["banner","aboutMe","work","resources","contact","faqs"] && visible == true]{link,"type":_type}';

export const POP_UP_QUERY = '*[_type == "active_pop_up"][0]{pop_up ->{content, "id": _id}}.pop_up'

export type Sections = { type: string; link: string }[];

export const SECTION_QUERIES = {
  header: HEADER_QUERY,
  banner: BANNER_QUERY,
  aboutMe: ABOUT_QUERY,
  work: WORK_QUERY,
  contact: CONTACT_QUERY,
  faqs: FAQ_QUERY,
};

export type SectionQueries = {
  header: ContactMethods[];
  banner: Banner;
  aboutMe: About;
  work: Work;
  contact: Contact;
  faqs: FAQ;
};
