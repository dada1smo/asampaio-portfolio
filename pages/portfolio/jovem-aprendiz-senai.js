import ScrollFadeIn from "../../components/scroll-fade-in";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import ProjectJovem from "../../components/project-jovem";
import LayoutProject from "../../components/layout-project";

export default function Home() {
  return (
    <LayoutProject>
      <ProjectJovem />
      <ScrollFadeIn duration={0.4}>
        <Contact />
      </ScrollFadeIn>
      <Footer />
    </LayoutProject>
  );
}
