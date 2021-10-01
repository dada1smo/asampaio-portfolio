import Layout from "../components/layout";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import ScrollFadeIn from "../components/scroll-fade-in";
import Contact from "../components/contact";
import Footer from "../components/footer";
import LayoutProject from "../components/layout-project";

export default function Home() {
  return (
    <LayoutProject>
      <Hero />
      <ScrollFadeIn duration={0.4}>
        <Portfolio />
      </ScrollFadeIn>
      <ScrollFadeIn duration={0.4}>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn duration={0.4}>
        <Contact />
      </ScrollFadeIn>
      <Footer />
    </LayoutProject>
  );
}
