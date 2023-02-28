import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/AdvancedBannerTop";
import AboutMe from "./components/AboutMe";
import "./root.css";

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <AboutMe />
    </ParallaxProvider>
  );
}
