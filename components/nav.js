import HeaderStyles from "../styles/header.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import { LinkButton } from "./button";
import Link from "next/link";
import useWindowSize from "../hooks/use-window-size";
import Image from "next/image";

export default function Nav(props) {
  function sendFalse() {
    props.handleCloseNav(false);
  }
  const size = useWindowSize();
  const mobileDevice = size.width < 577;

  return (
    <nav className={HeaderStyles.nav}>
      <motion.ul
        layout
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
      >
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
          <LinkButton
            color="lightAccent"
            link="#contact"
            label="Contato"
            shape="regularMD"
            {...(mobileDevice && { onClick: () => sendFalse() })}
          />
        </motion.li>
      </motion.ul>
      <div className={HeaderStyles.socialIcons}>
        <motion.div
          className={HeaderStyles.icon}
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          <motion.a
            layout
            initial={{ width: 40, display: "flex" }}
            whileHover={{ width: "auto", display: "flex" }}
            transition={{
              when: "afterChildren",
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className={HeaderStyles.socialLink}
            href="https://dribbble.com/dada1smo"
            aria-label="Navegar para perfil do Dribbble"
            target="_blank"
            rel="noreferrer"
            {...(mobileDevice && { onClick: () => sendFalse() })}
          >
            <Image
              src="/Dribbble-Icon.svg"
              width={40}
              height={40}
              alt={"Ícone do Dribbble"}
            />
            <motion.span layout>Dribbble</motion.span>
          </motion.a>
        </motion.div>
        <motion.div
          className={HeaderStyles.icon}
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          <motion.a
            layout
            initial={{ width: 40, display: "flex" }}
            whileHover={{ width: "auto", display: "flex" }}
            transition={{
              when: "afterChildren",
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className={HeaderStyles.socialLink}
            href="https://github.com/dada1smo"
            aria-label="Navegar para perfil do Github"
            target="_blank"
            rel="noreferrer"
            {...(mobileDevice && { onClick: () => sendFalse() })}
          >
            <Image
              src="/Github-Icon.svg"
              width={40}
              height={40}
              alt={"Ícone do Github"}
            />
            <motion.span layout>Github</motion.span>
          </motion.a>
        </motion.div>
        <motion.div
          className={HeaderStyles.icon}
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          <motion.a
            layout
            initial={{ width: 40, display: "flex" }}
            whileHover={{ width: "auto", display: "flex" }}
            transition={{
              when: "afterChildren",
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className={HeaderStyles.socialLink}
            href="https://www.linkedin.com/in/sampaio-afn/"
            aria-label="Navegar para perfil do LinkedIn"
            target="_blank"
            rel="noreferrer"
            {...(mobileDevice && { onClick: () => sendFalse() })}
          >
            <Image
              src="/LinkedIn-Icon.svg"
              width={40}
              height={40}
              alt={"Ícone do LinkedIn"}
            />
            <motion.span layout>LinkedIn</motion.span>
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
}
