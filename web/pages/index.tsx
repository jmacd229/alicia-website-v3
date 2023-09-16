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
import Script from "next/script";
import PopUp from "components/Pop-Up";
import { PopUp as PopUpType } from "components/Pop-Up/types";

const App = ({
  sections,
  header,
  banner,
  aboutMe,
  work,
  contact,
  popUp,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (typeof window !== "undefined") {
    mailgo();
  }
  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N84THGP');`}</Script>
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
      {popUp ? <PopUp popUp={popUp}/> : undefined}
    </>
  );
};

export default App;

export const getStaticProps: GetStaticProps<
  {
    sections: Sections;
    popUp: PopUpType;
  } & SectionQueries
> = async () => ({
  props: await getContent(),
});
