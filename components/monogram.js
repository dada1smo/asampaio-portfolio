import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

export default function Monogram() {
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

  return (
    <motion.svg
      layout
      initial={{ height: "80px", width: "40px" }}
      data-scrollshow={scrollAnimation}
      transition={{
        duration: 0.3,
        type: "spring",
        bounce: 0,
      }}
      width="40"
      height="80"
      viewBox="0 0 40 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3333 21.3333V34.6667H10.6667V32C10.6667 20.24 20.24 10.6667 32 10.6667V0C14.3467 0 0 14.3467 0 32V58.6667H10.6667V45.3333H29.3333V48C29.3333 59.76 19.76 69.3333 8 69.3333V80C25.6533 80 40 65.6533 40 48V21.3333H29.3333Z"
        fill="#8995AF"
      />
    </motion.svg>
  );
}
