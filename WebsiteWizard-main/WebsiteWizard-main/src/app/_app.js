import Navbar from "./components/navbar";
import "./style/globals.css";

import Footer from "./components/footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
