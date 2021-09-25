import Head from "next/head";
import LayoutStyles from "../styles/layout.module.scss";
import HomeStyles from "../styles/home.module.scss";
import Header from "./header";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function LayoutProject({ children }) {
  return (
    <div className={LayoutStyles.layout}>
      <Head>
        <title>Adalberto Sampaio</title>
        <meta
          property="og:title"
          content="
          Portfólio de UI design e front-end "
        />
        <meta
          name="description"
          content="Olá! Meu nome é Adalberto Sampaio, sou UI Designer e Desenvolvedor Front-End"
        />
        <meta
          property="og:image"
          content="https://www.adalbertosampaio.com/og-image.png"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={LayoutStyles.noise}></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ ease: "easeIn", duration: 2 }}
        className={LayoutStyles.yellowGradient}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ ease: "easeIn", duration: 2 }}
        className={LayoutStyles.navyGradient}
      ></motion.div>
      <div className={LayoutStyles.scrollable}>
        <motion.main
          className={HomeStyles.main}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear", delay: 0.3 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
