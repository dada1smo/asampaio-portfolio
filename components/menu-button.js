import ButtonStyles from "../styles/button.module.scss";

export default function MenuButton(props) {
  function sendFalse() {
    props.handleCloseNav(false);
  }

  return (
    <button
      className={`${ButtonStyles.btn} ${ButtonStyles.lightPrimary} ${ButtonStyles.circleLG}`}
      aria-label="Abrir menu de navegação"
      onClick={() => sendFalse()}
    >
      {props.children}
    </button>
  );
}
