import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/AdvancedBannerTop";
import AboutMe from "./components/AboutMe";
import "./root.css";
import MyProyects from "./components/MyProyects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <AboutMe />
      <MyProyects />
      <Footer />
    </ParallaxProvider>
  );
}
