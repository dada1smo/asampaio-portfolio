import LayoutStyles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.layout}>
      <div className={LayoutStyles.noise}></div>
      <div className={LayoutStyles.yellowGradient}></div>
      <div className={LayoutStyles.navyGradient}></div>
      <div className={LayoutStyles.scrollable}>{children}</div>
    </div>
  );
}
