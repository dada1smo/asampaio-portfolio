import Layout from "../components/layout";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import ScrollFadeIn from "../components/scroll-fade-in";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ScrollFadeIn duration={0.4}>
        <Portfolio />
      </ScrollFadeIn>
      <ScrollFadeIn duration={0.4}>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn duration={0.4}>
        <Contact />
        <Footer />
      </ScrollFadeIn>
    </Layout>
  );
}
