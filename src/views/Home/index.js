import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./components/AdvancedBannerTop";
import "./root.css";

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="center full">
        <h1 className="headline gray" id="good">Goodnight.</h1>
      </div>
    </ParallaxProvider>
  );
}
