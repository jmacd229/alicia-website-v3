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
import Head from "next/head";
import { PrivacyPolicy } from "sections/PrivacyPolicy";

const App = ({
  sections,
  header,
  banner,
  aboutMe,
  work,
  contact,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (typeof window !== "undefined") {
    mailgo();
  }
  return (
    <>
      <Head>
        <title>Dr. Alicia MacDougall</title>
        <meta
          name="description"
          content="Dealing with ADHD can feel beyond frustrating, like trying to put
          together an Ikea bookshelf with instructions in the wrong language and
          half of the steps missing! What if I told you that it’s possible to
          create an instruction manual aligned with your uniquely awesome brain?"
        />
      </Head>
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
