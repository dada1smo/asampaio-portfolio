import ContactStyles from "../styles/contact.module.scss";
import { LinkButton } from "./button";
import Typography from "./typography";

export default function Contact() {
  return (
    <section className={ContactStyles.contact} id={"contact"}>
      <Typography tag="h2">Contate-me</Typography>
      <div className={ContactStyles.links}>
        <LinkButton
          label="sampaio.afn@gmail.com"
          link="mailto:sampaio.afn@gmail.com"
          shape="slimMD"
          color="transparentPrimary"
        />
        <LinkButton
          label="linkedin.com/in/sampaio-afn/"
          link="mailto:sampaio.afn@gmail.com"
          shape="slimMD"
          color="transparentPrimary"
        />
      </div>
    </section>
  );
}
