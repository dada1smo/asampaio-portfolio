import PortfolioStyles from "../styles/portfolio.module.scss";
import Typography from "./typography";
import ProjectCard from "./project-card";
import aev from "../public/aev-feature.png";

export default function Portfolio() {
  return (
    <section className={PortfolioStyles.portfolio}>
      <div className={PortfolioStyles.title}>
        <div className={PortfolioStyles.sticky}>
          <Typography tag="h2">Portfólio</Typography>
        </div>
      </div>
      <div className={PortfolioStyles.cards}>
        <ProjectCard
          projectLink="/portfolio/aev"
          imgSrc={aev}
          title="Autorização Eletrônica de Viagem"
          tags="#UI #APLICATIVO"
        ></ProjectCard>
        {/* <ProjectCard
          projectLink="/"
          imgSrc={aev}
          title="#UI #APLICATIVO"
        ></ProjectCard> */}
      </div>
    </section>
  );
}
