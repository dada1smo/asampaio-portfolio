import ContactStyles from "../styles/contact.module.scss";
import Typography from "./typography";

export default function Contact() {
  return (
    <section className={ContactStyles.contact} id={"contact"}>
      <Typography tag="h2">Contate-me</Typography>
    </section>
  );
}
