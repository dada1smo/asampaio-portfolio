import HeroStyles from "../styles/hero.module.scss";
import ProjectStyles from "../styles/project-aev.module.scss";
import Typography from "./typography";
import aevIntro from "../public/aev-intro.png";
import aevFlow from "../public/aev-flow.svg";
import aevPrototype from "../public/aev-prototype.gif";
import aevColors from "../public/aev-colors.png";
import aevTypography from "../public/aev-typography.png";
import aevIcon from "../public/aev-icon.png";
import aevBtns from "../public/aev-btns.png";
import aevCards from "../public/aev-cards.png";
import aevIlus from "../public/aev-ilus.png";
import aevScreen1 from "../public/aev-home.png";
import aevScreen2 from "../public/aev-code.png";
import aevScreen3 from "../public/aev-code-1.png";
import aevScreen4 from "../public/aev-code-2.png";
import gifPlaceholder from "../public/GIF-placeholder.png";
import Image from "next/image";

export default function ProjectAev() {
  return (
    <section className={HeroStyles.hero}>
      <div className={ProjectStyles.page}>
        <div className={ProjectStyles.imgIntro}>
          <Image
            src={aevIntro}
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
            <span className="category">Aplicativo</span>
          </Typography>
          <Typography tag="h2">
            e-notariado: Autorização Eletrônica de Viagem
          </Typography>
          <Typography tag="p">
            O aplicativo de Autorização Eletrônica de Viagem foi desenvolvido
            para auxiliar familares, responsáveis e colaboradores de companhias
            aéreas a validar autorizações de viagem de menores. Neste projeto
            desempenhei as funções de UI Designer e também contribui com o
            front-end em Flutter.
          </Typography>
          <Typography tag="h3">Fluxo do aplicativo</Typography>
          <Image
            src={aevFlow}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
          />
        </div>
        <div className={ProjectStyles.screens}>
          <Typography tag="h3">Telas</Typography>
          <div className={ProjectStyles.row}>
            <Image
              src={aevScreen1}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
              placeholder="blur"
            />
            <Image
              src={aevScreen2}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
              placeholder="blur"
            />
            <Image
              src={aevScreen3}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
              placeholder="blur"
            />
            <Image
              src={aevScreen4}
              alt=""
              quality="100"
              layout="responsive"
              objectFit="cover"
              objectPosition="top left"
              placeholder="blur"
            />
          </div>
        </div>
        <div className={ProjectStyles.prototype}>
          <Typography tag="h3">Protótipo em alta</Typography>
          <Image
            src={aevPrototype}
            alt=""
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
            blurDataURL={gifPlaceholder}
          />
        </div>
        <div className={ProjectStyles.tokens}>
          <Typography tag="h3">Tokens e componentes de interface</Typography>
          <div className={ProjectStyles.cols}>
            <div className={ProjectStyles.colors}>
              <Typography tag="h4">Cores</Typography>
              <Image
                src={aevColors}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
                placeholder="blur"
              />
            </div>

            <div className={ProjectStyles.type}>
              <Typography tag="h4">Tipografia</Typography>
              <Image
                src={aevTypography}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
                placeholder="blur"
              />
              <div className={ProjectStyles.divider}></div>
              <Typography tag="h4">Ícone do app</Typography>
              <Image
                src={aevIcon}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
                placeholder="blur"
              />
            </div>

            <div className={ProjectStyles.components}>
              <div className={ProjectStyles.double}>
                <div>
                  <Typography tag="h4">Botões</Typography>
                  <Image
                    src={aevBtns}
                    alt=""
                    quality="100"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top left"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <Typography tag="h4">Cards/Input</Typography>
                  <Image
                    src={aevCards}
                    alt=""
                    quality="100"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top left"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className={ProjectStyles.divider}></div>
              <Typography tag="h4">Ilustrações</Typography>
              <Image
                src={aevIlus}
                alt=""
                quality="100"
                layout="responsive"
                objectFit="cover"
                objectPosition="top left"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
