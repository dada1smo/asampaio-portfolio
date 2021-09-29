import HeroStyles from "../styles/hero.module.scss";
import ProjectStyles from "../styles/project-jovem.module.scss";
import Typography from "./typography";
import jovemIntro from "../public/jovem-intro.png";
import jovemPrototype from "../public/jovem-prototype-2.gif";
import jovemColors from "../public/jovem-colors.png";
import jovemTypography from "../public/jovem-type.png";
import jovemTetris from "../public/jovem-tetris.png";
import aevBtns from "../public/aev-btns.png";
import jovemCards from "../public/jovem-cards.png";
import aevIlus from "../public/aev-ilus.png";
import jovemScreen1 from "../public/jovem-home.png";
import jovemScreen2 from "../public/jovem-4-0.png";
import jovemScreen3 from "../public/jovem-aprendizagem.png";
import jovemScreen4 from "../public/jovem-empresas.png";
import Image from "next/image";

export default function ProjectJovem() {
  return (
    <section className={HeroStyles.hero}>
      <div className={ProjectStyles.page}>
        <div className={ProjectStyles.imgIntro}>
          <Image
            src={jovemIntro}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
          />
        </div>
        <div className={ProjectStyles.textIntro}>
          <Typography tag="p">
            <span className="category">Landing page</span>
          </Typography>
          <Typography tag="h2">Jovem Aprendiz SENAI</Typography>
          <Typography tag="p">
            Nova página do programa de Aprendizagem Industrial (Jovem Aprendiz)
            do SENAI. O fluxo de navegação e a arquitetura de conteúdo foram
            executados pela equipe de UX e minhas responsabilidades foram
            prototipar a UI e implementar as páginas no Portal da Indústria.
          </Typography>
        </div>
        <div className={ProjectStyles.screens}>
          <Typography tag="h3">Telas</Typography>
          <div className={ProjectStyles.row}>
            <Image
              src={jovemScreen1}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
            />
            <Image
              src={jovemScreen2}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
            />
            <Image
              src={jovemScreen3}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
            />
            <Image
              src={jovemScreen4}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
            />
          </div>
        </div>
        <div className={ProjectStyles.prototype}>
          <Typography tag="h3">Protótipo em alta</Typography>
          <Image
            src={jovemPrototype}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
          />
        </div>
        <div className={ProjectStyles.tokens}>
          <Typography tag="h3">Tokens e componentes de interface</Typography>
          <div className={ProjectStyles.cols}>
            <div className={ProjectStyles.colors}>
              <Typography tag="h4">Cores</Typography>
              <Image
                src={jovemColors}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
              />
              <div className={ProjectStyles.divider}></div>
              <Typography tag="h4">Cards</Typography>
              <Image
                src={jovemCards}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>

            <div className={ProjectStyles.type}>
              <Typography tag="h4">Tipografia</Typography>
              <Image
                src={jovemTypography}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
              />
              <div className={ProjectStyles.divider}></div>
              <Typography tag="h4">Tetris</Typography>
              <Image
                src={jovemTetris}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
