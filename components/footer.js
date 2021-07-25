import FooterStyles from "../styles/footer.module.scss";
import Image from "next/image";
import Typography from "./typography";

export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <Image
        src="/Monogram-Footer.svg"
        alt="Monograma"
        width="12"
        height="24"
        title="Monograma"
      />
      <Typography tag="p">
        Desenhado no <strong>Figma</strong> e desenvolvido com{" "}
        <strong>NextJS</strong> por <strong>Adalberto Sampaio</strong>
      </Typography>
    </footer>
  );
}
