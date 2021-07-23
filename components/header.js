import Monogram from "./monogram";
import Nav from "./nav";
import HeaderStyles from "../styles/header.module.scss";
import Link from "next/link";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import { Button } from "./button";
import { useOpenNav } from "../hooks/use-open-nav";
import useWindowSize from "../hooks/use-window-size";
import MenuButton from "./menu-button";
import { useEffect, useState } from "react";

export default function Header() {
  const [isNavOpen, openNav] = useOpenNav(false);
  const size = useWindowSize();
  const mobileDevice = size.width < 577;

  function handleCloseNav() {
    openNav();
  }

  const { scrollY } = useViewportScroll();
  const [scrollAnimation, scrollShow] = useState(false);

  function updateScroll() {
    if (scrollY?.current == 0) {
      scrollShow(false);
      console.log("not shown");
    } else if (scrollY?.current > 100) {
      scrollShow(true);
      console.log("shown");
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => updateScroll());
  });

  // const paddingY = useTransform(scrollY, [0, 600], ["2.75em", "1em"]);
  // const scrollOpacity = useTransform(scrollY, [0, 600], ["0", "1"]);

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
    <motion.header
      layout
      className={HeaderStyles.header}
      transition={{
        duration: 0.2,
        type: "spring",
        bounce: 0,
      }}
      data-scrollshow={scrollAnimation}
      // style={{ paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <Link href="/">
        <motion.a
          transition={{
            duration: 0.3,
            type: "spring",
            bounce: 0,
          }}
          className={HeaderStyles.logo}
        >
          <Monogram />
        </motion.a>
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
          data-scrollshow={scrollAnimation}
          className={HeaderStyles.mobileMenu}
        >
          <MenuButton handleCloseNav={handleCloseNav}>
            <motion.svg
              layout
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0,
              }}
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
      <motion.div
        className={HeaderStyles.scrollBackdrop}
        data-scrollshow={scrollAnimation}
      ></motion.div>
    </motion.header>
  );
}
