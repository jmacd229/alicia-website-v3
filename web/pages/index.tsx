import getContent from "network/getContent";
import { BaseQuery, SectionQueries } from "network/getContent/constants";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import About from "sections/About";
import Banner from "sections/Banner";
import Header from "sections/Header";
import Work from "sections/Work";
import GlobalStyle from "styles/GlobalStyle";
import { SECTION_DEFINITIONS } from "../sections/constants";

const App = ({
  sections,
  header,
  banner,
  aboutMe,
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <GlobalStyle />
    <Header
      sections={SECTION_DEFINITIONS.filter((section) =>
        sections.includes(section.id)
      )}
      contactMethods={header}
    />
    <Banner banner={banner} />
    <About about={aboutMe} />
    <Work work={work} />
  </>
);

export default App;

export const getStaticProps: GetStaticProps<
  {
    sections: BaseQuery;
  } & SectionQueries
> = async () => ({
  props: await getContent(),
});
