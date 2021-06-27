import HeroStyles from "../styles/hero.module.scss";

export default function Hero() {
  return (
    <div className={HeroStyles.hero}>
      <img
        className={HeroStyles.BGVector}
        src="/UI_FRONT_END.svg"
        alt="Texto de fundo escrito UI+FRONT-END"
      />
      <h3>
        Olá! Meu nome é <strong>Adalberto Sampaio</strong>, sou UI Designer e
        Desenvolvedor Front-End. Meu foco é dar vida à interfaces, do desenho
        até a implementação. Já trabalhei com produtos digitais, desenvolvimento
        de software, agências e estúdios de design.
      </h3>
    </div>
  );
}
