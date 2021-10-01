import HeroStyles from "../styles/hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import Typography from "./typography";
import { AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section className={HeroStyles.hero}>
      <div className={HeroStyles.wrapper}>
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={opacityVariants}
            transition={{ ease: "easeIn", duration: 2, delay: 0.3 }}
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
            <Typography tag="h1">
              Olá! Meu nome é <strong>Adalberto Sampaio</strong>, sou{" "}
              <span>UI Designer</span> e <span>Desenvolvedor Front-End</span>.
              Meu foco é dar vida a interfaces, do desenho até a implementação.
              Já trabalhei com produtos digitais, desenvolvimento de software,
              agências e estúdios de design.
            </Typography>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
