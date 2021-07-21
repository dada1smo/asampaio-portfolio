import Monogram from "./monogram";
import Nav from "./nav";
import HeaderStyles from "../styles/header.module.scss";
import Link from "next/link";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import { Button } from "./button";
import { useOpenNav } from "../hooks/use-open-nav";
import useWindowSize from "../hooks/use-window-size";

export default function Header() {
  const [isNavOpen, openNav] = useOpenNav(false);
  const size = useWindowSize();
  const mobileDevice = size.width < 577;

  function handleCloseNav() {
    openNav();
  }

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
          <Button
            color="light-accent"
            label="x"
            shape="circle-md"
            onClick={openNav}
          />
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
