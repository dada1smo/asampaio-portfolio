import "../styles/global.scss";
import "../styles/typography.scss";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SimpleReactLightbox>
        <Header />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          // onExitComplete={window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </SimpleReactLightbox>
    </>
  );
}

export default MyApp;
