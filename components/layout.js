import LayoutStyles from "../styles/layout.module.scss";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.layout}>
      <Header />
      <div className={LayoutStyles.noise}></div>
      <div className={LayoutStyles.yellowGradient}></div>
      <div className={LayoutStyles.navyGradient}></div>
      <div className={LayoutStyles.scrollable}>{children}</div>
    </div>
  );
}
