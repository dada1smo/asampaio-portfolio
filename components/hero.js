import HeroStyles from "../styles/hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import Typography from "./typography";

export default function Hero() {
  return (
    <div className={HeroStyles.hero}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <Image
          className={HeroStyles.BGVector}
          src="/UI_FRONT_END.svg"
          alt="Texto de fundo escrito UI+FRONT-END"
          layout="fill"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ ease: "easeIn", duration: 1 }}
        className={HeroStyles.intro}
      >
        <Typography tag="h3">
          Olá! Meu nome é <strong>Adalberto Sampaio</strong>, sou{" "}
          <span>UI Designer</span> e <span>Desenvolvedor Front-End</span>. Meu
          foco é dar vida à interfaces, do desenho até a implementação. Já
          trabalhei com produtos digitais, desenvolvimento de software, agências
          e estúdios de design.
        </Typography>
      </motion.div>
    </div>
  );
}
