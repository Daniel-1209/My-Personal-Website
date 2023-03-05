import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/AdvancedBannerTop";
import AboutMe from "./components/AboutMe";
import "./root.css";
import MyProyects from "./components/MyProyects";

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <AboutMe />
      <MyProyects />
    </ParallaxProvider>
  );
}
