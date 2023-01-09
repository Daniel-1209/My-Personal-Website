import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/Banner";
import "./root.css";

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div>
    </ParallaxProvider>
  );
}
