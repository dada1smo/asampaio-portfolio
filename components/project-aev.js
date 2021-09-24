import ProjectStyles from "../styles/project.module.scss";
import Typography from "./typography";

export default function ProjectAev() {
  return (
    <div className={ProjectStyles.textIntro}>
      <Typography tag="h2">
        e-notariado: Autorização Eletrônica de Viagem
      </Typography>
    </div>
  );
}
