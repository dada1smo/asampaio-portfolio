import Monogram from "./monogram";
import Nav from "./nav";
import HeaderStyles from "../styles/header.module.scss";
import Link from "next/link";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import { Button } from "./button";
import { useOpenNav } from "../hooks/use-open-nav";
import useWindowSize from "../hooks/use-window-size";
import MenuButton from "./menu-button";

export default function Header() {
  const [isNavOpen, openNav] = useOpenNav(false);
  const size = useWindowSize();
  const mobileDevice = size.width < 577;

  function handleCloseNav() {
    openNav();
  }

  const variant = isNavOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 40,
      translateY: 8,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -40,
      translateY: -8,
    },
  };
  const lineProps = {
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };

  return (
    <header className={HeaderStyles.header}>
      <Link href="/">
        <a className={HeaderStyles.logo}>
          <Monogram />
        </a>
      </Link>
      {!mobileDevice && <Nav />}
      {mobileDevice && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={opacityVariants}
          transition={{
            type: "keyframes",
            ease: "easeIn",
            delay: 0.3,
          }}
          className={HeaderStyles.mobileMenu}
        >
          <MenuButton handleCloseNav={handleCloseNav}>
            <motion.svg
              viewBox={`0 0 32 32`}
              overflow="visible"
              preserveAspectRatio="none"
              width={24}
              height={32}
            >
              <motion.line
                x1="0"
                x2="32"
                y1="8"
                y2="8"
                strokeWidth="3"
                variants={top}
                {...lineProps}
              />
              <motion.line
                x1="0"
                x2="32"
                y1="16"
                y2="16"
                strokeWidth="3"
                variants={center}
                {...lineProps}
              />
              <motion.line
                x1="0"
                x2="32"
                y1="24"
                y2="24"
                strokeWidth="3"
                variants={bottom}
                {...lineProps}
              />
            </motion.svg>
          </MenuButton>
        </motion.div>
      )}

      {mobileDevice && (
        <div>
          <motion.div
            layout
            data-opennav={isNavOpen}
            transition={{
              type: "spring",
              ease: "easeIn",
              duration: 0.8,
            }}
            className={HeaderStyles.navDrawer}
          >
            <AnimatePresence>
              {isNavOpen && (
                <motion.div
                  className={HeaderStyles.mobileNav}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={opacityVariants}
                >
                  <Nav handleCloseNav={handleCloseNav} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            data-opennav={isNavOpen}
            className={HeaderStyles.backdrop}
            onClick={openNav}
          ></motion.div>
        </div>
      )}
    </header>
  );
}
