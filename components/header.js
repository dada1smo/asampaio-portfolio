import Monogram from "./monogram";
import HeaderStyles from "../styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <Link href="/">
        <a className={HeaderStyles.logo}>
          <Monogram />
        </a>
      </Link>
    </header>
  );
}
