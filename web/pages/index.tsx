import getContent from "network/getContent";
import { Sections, SectionQueries } from "network/getContent/constants";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import About from "sections/About";
import Banner from "sections/Banner";
import Contact from "sections/Contact";
import Header from "sections/Header";
import Work from "sections/Work";
import GlobalStyle from "styles/GlobalStyle";
import mailgo from "mailgo";
import Footer from "sections/Footer";

const App = ({
  sections,
  header,
  banner,
  aboutMe,
  work,
  contact,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  mailgo();
  return (
    <>
      <GlobalStyle />
      <Header sections={sections} contactMethods={header} />
      <Banner banner={banner} />
      <About about={aboutMe} />
      <Work work={work} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
};

export default App;

export const getStaticProps: GetStaticProps<
  {
    sections: Sections;
  } & SectionQueries
> = async () => ({
  props: await getContent(),
});
