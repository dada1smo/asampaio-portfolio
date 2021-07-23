import Head from "next/head";
import Image from "next/image";
import HomeStyles from "../styles/home.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Adalberto Sampaio</title>
        <meta name="description" content="Portfólio de design e front-end" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={HomeStyles.main}>
        <Hero />
        <About />
      </main>
    </Layout>
  );
}
