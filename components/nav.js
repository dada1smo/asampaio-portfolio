import HeaderStyles from "../styles/header.module.scss";
import { motion } from "framer-motion";
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
          <LinkButton
            color="light-accent"
            link="#contato"
            label="Contato"
            shape="regular-md"
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
          <a
            href="https://dribbble.com/dada1smo"
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
          </a>
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
          <a
            href="https://github.com/dada1smo"
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
          </a>
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
          <a
            href="https://www.linkedin.com/in/sampaio-afn/"
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
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
