import LayoutStyles from "../styles/layout.module.scss";
import Header from "./header";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.layout}>
      <Header />
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
      <div className={LayoutStyles.scrollable}>{children}</div>
    </div>
  );
}
