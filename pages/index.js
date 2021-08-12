import Head from "next/head";
import Image from "next/image";
import HomeStyles from "../styles/home.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import ScrollFadeIn from "../components/scroll-fade-in";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ogImage from "../public/og-image.png";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Adalberto Sampaio</title>
        <meta name="description" content="Portfólio de design e front-end" />
        <meta property="og:title" content="Portfólio de design e front-end" />
        <meta property="og:image" content={ogImage} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={HomeStyles.main}>
        <Hero />
        <ScrollFadeIn duration={0.4}>
          <About />
        </ScrollFadeIn>
        <ScrollFadeIn duration={0.4}>
          <Contact />
          <Footer />
        </ScrollFadeIn>
      </main>
    </Layout>
  );
}
