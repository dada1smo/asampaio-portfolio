export const opacityVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0, transition: { delay: 0.4, when: "afterChildren" } },
};
