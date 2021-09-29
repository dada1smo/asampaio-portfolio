import AboutStyles from "../styles/about.module.scss";
import Image from "next/image";
import Typography from "./typography";
import profile from "../public/Perfil-Adalberto-Sampaio.png";
import figma from "../public/Icone-Figma.svg";
import adobecc from "../public/Icone-Adobe-Creative-Cloud.svg";
import html5 from "../public/Icone-HTML5.svg";
import css3 from "../public/Icone-CSS3.svg";
import javascript from "../public/Icone-Javascript.svg";
import git from "../public/Icone-Git.svg";
import react from "../public/Icone-React.svg";
import angular from "../public/Icone-Angular.svg";
import flutter from "../public/Icone-Flutter.svg";

export default function About() {
  return (
    <section className={AboutStyles.about}>
      <div className={AboutStyles.profile}>
        <Image
          src={profile}
          alt="Foto de perfil de Adalberto Sampaio"
          layout="fill"
          objectFit="contain"
          objectPosition="top left"
          placeholder="blur"
        />
      </div>
      <Typography tag="h3">
        Designer e desenvolvedor brasileiro atualmente residindo em Brasília.
        Colecionador de Lego e degustador de amendoim japonês.
      </Typography>
      <Typography tag="h4">
        <strong>Busco</strong> contribuir com projetos e produtos digitais na
        construção de interfaces funcionais, acessíveis e com apelo visual.
        Busco trabalhar na tangente entre design e desenvolvimento para garantir
        uma integração ágil e eficiente entre UX e tecnologia.
      </Typography>
      <div className={AboutStyles.badges}>
        <Image
          src={figma}
          alt="Figma"
          width="36"
          height="48"
          title="Figma"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={adobecc}
          alt="Adobe Creative Cloud"
          width="44"
          height="48"
          title="Adobe Creative Cloud"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={html5}
          alt="HTML 5"
          width="36"
          height="48"
          title="HTML 5"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={css3}
          alt="CSS 3"
          width="36"
          height="48"
          title="CSS 3"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={javascript}
          alt="JavaScript"
          width="44"
          height="48"
          title="JavaScript"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={git}
          alt="Git"
          width="48"
          height="48"
          title="Git"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={react}
          alt="React"
          width="48"
          height="48"
          title="React"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={angular}
          alt="Angular"
          width="40"
          height="48"
          title="Angular"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
        <Image
          src={flutter}
          alt="Flutter"
          width="48"
          height="48"
          title="Flutter"
          placeholder="blur"
          blurDataURL="/SVG-placeholder.png"
        />
      </div>
    </section>
  );
}
