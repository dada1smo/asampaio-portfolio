import Hero from "../../components/hero";
import Portfolio from "../../components/portfolio";
import About from "../../components/about";
import ScrollFadeIn from "../../components/scroll-fade-in";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import ProjectIntro from "../../components/project-intro";
import LayoutProject from "../../components/layout-project";

export default function Home() {
  return (
    <LayoutProject>
      <ProjectIntro />
      <ScrollFadeIn duration={0.4}>
        <Contact />
        <Footer />
      </ScrollFadeIn>
    </LayoutProject>
  );
}
