import sanityClient from "@sanity/client";
import { values, mapValues, pick } from "lodash-es";

import { BASE_QUERY, SANITY_CLIENT_CONFIG, SectionQueries, SECTION_QUERIES } from "./constants";

const client = sanityClient(SANITY_CLIENT_CONFIG);

const getVisibleSections = async (): Promise<string[]> => [
  "header",
  ...(await client.fetch(BASE_QUERY)),
];

const getContent = async () => {
  const sections = await getVisibleSections();
  const visibleSectionQueries = pick(SECTION_QUERIES, sections);
  let mergedQuery = JSON.stringify(
    mapValues(visibleSectionQueries, (_, key) => key.toUpperCase())
  );
  for (const key in visibleSectionQueries) {
    mergedQuery = mergedQuery.replace(
      `"${key.toUpperCase()}"`,
      visibleSectionQueries[key]
    );
  }

  const response = await client.fetch(mergedQuery) as SectionQueries;
  return { sections, ...response };
};

export default getContent;
