import ScrollFadeIn from "../../components/scroll-fade-in";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import ProjectAev from "../../components/project-aev";
import LayoutProject from "../../components/layout-project";

export default function Home() {
  return (
    <LayoutProject>
      <ProjectAev />
      <ScrollFadeIn duration={0.4}>
        <Contact />
      </ScrollFadeIn>
      <Footer />
    </LayoutProject>
  );
}
