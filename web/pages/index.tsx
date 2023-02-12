import getContent from "network/getContent";
import { BaseQuery, SectionQueries } from "network/getContent/constants";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import About from "sections/About";
import Banner from "sections/Banner";
import Header from "sections/Header";
import GlobalStyle from "styles/GlobalStyle";
import { SECTION_DEFINITIONS } from "../sections/constants";

const App = ({
  sections,
  header,
  banner,
  aboutMe,
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
    {aboutMe && <About about={aboutMe} />}
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
