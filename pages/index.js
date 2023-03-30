import Head from "next/head";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flikoston | Web development and design agency</title>
      </Head>
      <Hero />

      <ContentBlockOne />
      <FeaturesOne />

      <ContentBlockTwo />
      <FeaturesOne />
      <FaqWithVideoModal />

      <CallToAction />
    </>
  );
}
