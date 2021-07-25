import AboutStyles from "../styles/about.module.scss";
import Image from "next/image";
import Typography from "./typography";

export default function About() {
  return (
    <section className={AboutStyles.about}>
      <div className={AboutStyles.profile}>
        <Image
          src="/Perfil-Adalberto-Sampaio.png"
          alt="Foto de perfil de Adalberto Sampaio"
          layout="fill"
          objectFit="contain"
          objectPosition="top left"
        />
      </div>
      <Typography tag="h3">
        Designer e desenvolvedor brasileiro atualmente residindo em Brasília.
        Colecionador de Lego e degustador de amendoim japonês.
      </Typography>
      <Typography tag="h4">
        <strong>Interessado em</strong> contribuir com projetos e produtos
        digitais na construção de interfaces funcionais, acessíveis e com apelo
        visual. Busco trabalhar na tangente entre design e desenvolvimento para
        garantir uma integração ágil e eficiente entre UX e tecnologia.
      </Typography>
      <div className={AboutStyles.badges}>
        <Image
          src="/Icone-Figma.svg"
          alt="Figma"
          width="36"
          height="48"
          title="Figma"
        />
        <Image
          src="/Icone-Adobe-Creative-Cloud.svg"
          alt="Adobe Creative Cloud"
          width="44"
          height="48"
          title="Adobe Creative Cloud"
        />
        <Image
          src="/Icone-HTML5.svg"
          alt="HTML 5"
          width="36"
          height="48"
          title="HTML 5"
        />
        <Image
          src="/Icone-CSS3.svg"
          alt="CSS 3"
          width="36"
          height="48"
          title="CSS 3"
        />
        <Image
          src="/Icone-Javascript.svg"
          alt="JavaScript"
          width="44"
          height="48"
          title="JavaScript"
        />
        <Image
          src="/Icone-Git.svg"
          alt="Git"
          width="48"
          height="48"
          title="Git"
        />
        <Image
          src="/Icone-React.svg"
          alt="React"
          width="48"
          height="48"
          title="React"
        />
        <Image
          src="/Icone-Angular.svg"
          alt="Angular"
          width="40"
          height="48"
          title="Angular"
        />
        <Image
          src="/Icone-Flutter.svg"
          alt="Flutter"
          width="48"
          height="48"
          title="Flutter"
        />
      </div>
    </section>
  );
}
