import AboutStyles from "../styles/about.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/opacity";
import Typography from "./typography";

export default function About() {
  return <section className={AboutStyles.about}></section>;
}
