import ButtonStyles from "../styles/button.module.scss";
import Link from "next/link";

export function Button(props) {
  return (
    <button
      className={`${ButtonStyles.btn} ${ButtonStyles[props.color]} ${
        ButtonStyles[props.shape]
      }`}
      onClick={props.onClick}
    >
      {props.label && <span>{props.label}</span>}
    </button>
  );
}

export function LinkButton(props) {
  return (
    <Link href={props.link}>
      {props.label && (
        <a
          className={`${ButtonStyles.btn} ${ButtonStyles[props.color]} ${
            ButtonStyles[props.shape]
          }`}
          onClick={props.onClick}
        >
          {props.label}
        </a>
      )}
    </Link>
  );
}
