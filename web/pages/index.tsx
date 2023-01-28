import getContent from "network/getContent";
import { BaseQuery, SectionQueries } from "network/getContent/constants";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Header from "sections/Header";
import GlobalStyle from "styles/GlobalStyle";
import { SECTION_DEFINITIONS } from "./constants";

const App = ({sections, header}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <GlobalStyle />
    <Header
      sections={SECTION_DEFINITIONS.filter((section) =>
        sections.includes(section.id)
      )}
      contactMethods={header}
    />
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
