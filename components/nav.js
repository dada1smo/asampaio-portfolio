import HeaderStyles from "../styles/header.module.scss";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import { LinkButton } from "./button";
import Link from "next/link";
import useWindowSize from "../hooks/use-window-size";

export default function Nav(props) {
  function sendFalse() {
    props.handleCloseNav(false);
  }
  const size = useWindowSize();
  const mobileDevice = size.width < 577;

  return (
    <nav className={HeaderStyles.nav}>
      <motion.ul initial="hidden" animate="visible" variants={opacityVariants}>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.3,
          }}
        >
          Portfólio
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          <Link href="/">
            <a onClick={() => sendFalse()}>Sobre mim</a>
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.5,
          }}
        >
          <LinkButton
            color="light-accent"
            link="#contato"
            label="Contato"
            shape="regular-md"
            {...(mobileDevice && { onClick: () => sendFalse() })}
          />
        </motion.li>
      </motion.ul>
    </nav>
  );
}
