import PortfolioStyles from "../styles/portfolio.module.scss";
import Typography from "./typography";
import ProjectCard from "./project-card";
import aev from "../public/aev-feature.png";
import lacunaSPA from "../public/shot-spa.png";
import apostil from "../public/shot-apostil.png";
import signer from "../public/shot-signer.png";
import jovem from "../public/jovem-feature.png";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() =>
//   import("simple-react-lightbox").then((mod) => mod.SRLWrapper)
// );

const options = {
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
    thumbnailsOpacity: 0,
  },
};

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
          tags="#UI #FRONT-END #APLICATIVO"
        ></ProjectCard>
        <ProjectCard
          projectLink="/portfolio/jovem-aprendiz-senai"
          imgSrc={jovem}
          title="Jovem Aprendiz SENAI"
          tags="#UI #FRONT #LANDING"
        ></ProjectCard>
      </div>
      <Typography tag="h3">Confira mais alguns trabalhos</Typography>
      <div className={PortfolioStyles.shot}>
        <SRLWrapper options={options}>
          <Image
            src={lacunaSPA}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
          />
        </SRLWrapper>
        <Typography tag="h4">
          Dashboard <strong>Lacuna SPA</strong>
        </Typography>
      </div>
      <div className={PortfolioStyles.shot}>
        <SRLWrapper options={options}>
          <Image
            src={apostil}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
          />
        </SRLWrapper>
        <Typography tag="h4">
          Login <strong>Apostil</strong>
        </Typography>
      </div>
      <div className={PortfolioStyles.shot}>
        <SRLWrapper options={options}>
          <Image
            src={signer}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
          />
        </SRLWrapper>
        <Typography tag="h4">
          Home <strong>DropSigner</strong>
        </Typography>
      </div>
    </section>
  );
}
