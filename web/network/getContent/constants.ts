import HEADER_QUERY, { ContactMethods } from "sections/Header/query";

export const SANITY_CLIENT_CONFIG = {
  projectId: "qfrilqbt",
  dataset: "production",
  apiVersion: "2022-01-06",
  useCdn: true,
};

export const BASE_QUERY =
  '*[_type in ["banner","aboutMe","work","resources","contact"] && visible == true]._type';

export type BaseQuery = string[];

export const SECTION_QUERIES = {
  header: HEADER_QUERY,
  // banner: 'banner query goes here',
  // aboutMe: 'aboutMe query goes here',
};

export type SectionQueries = {
  header: ContactMethods[]
}
