import PortfolioStyles from "../styles/portfolio.module.scss";
import Typography from "./typography";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <Link href={props.projectLink} passHref scroll={false}>
      <a>
        <div className={PortfolioStyles.card}>
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            quality="100"
            layout="responsive"
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
          />
          <div className={PortfolioStyles.footer}>
            <div className={PortfolioStyles.text}>
              <Typography tag="h3">
                <strong>{props.title}</strong>
              </Typography>
              <Typography tag="h6">{props.tags}</Typography>
            </div>

            <div className={PortfolioStyles.more}>Ver projeto</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
