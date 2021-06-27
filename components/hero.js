import HeroStyles from "../styles/hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={HeroStyles.hero}>
      <Image
        className={HeroStyles.BGVector}
        src="/UI_FRONT_END.svg"
        alt="Texto de fundo escrito UI+FRONT-END"
        layout="fill"
      />
      <h3>
        Olá! Meu nome é <strong>Adalberto Sampaio</strong>, sou{" "}
        <span>UI Designer</span> e <span>Desenvolvedor Front-End</span>. Meu
        foco é dar vida à interfaces, do desenho até a implementação. Já
        trabalhei com produtos digitais, desenvolvimento de software, agências e
        estúdios de design.
      </h3>
    </div>
  );
}
