import { createClient } from "@sanity/client";
import { mapValues, pick } from "lodash";

import {
  BASE_QUERY,
  SANITY_CLIENT_CONFIG,
  SectionQueries,
  SECTION_QUERIES,
  Sections,
  POP_UP_QUERY,
} from "./constants";
import { PopUp } from "components/Pop-Up/types";

export const client = createClient(SANITY_CLIENT_CONFIG);

const getVisibleSections = async (): Promise<Sections> =>
  await client.fetch(BASE_QUERY);

const getContent = async () => {
  const visibleSections = await getVisibleSections();
  const visibleSectionQueries = pick(SECTION_QUERIES, [
    "header",
    ...visibleSections.map(({ type }) => type),
  ]);
  let mergedQuery = JSON.stringify(
    mapValues(visibleSectionQueries, (_, key) => key.toUpperCase()),
  );
  for (const key in visibleSectionQueries) {
    mergedQuery = mergedQuery.replace(
      `"${key.toUpperCase()}"`,
      visibleSectionQueries[key],
    );
  }
  const [sectionResponse, popUpResponse] = await Promise.allSettled<
    [Promise<SectionQueries>, Promise<PopUp>]
  >([client.fetch(mergedQuery), client.fetch(POP_UP_QUERY)]);
  if (sectionResponse.status !== "fulfilled") {
    throw new Error("oops");
  }
  return {
    sections: visibleSections,
    ...sectionResponse.value,
    popUp:
      popUpResponse.status === "fulfilled" ? popUpResponse.value : undefined,
  };
};

export default getContent;
