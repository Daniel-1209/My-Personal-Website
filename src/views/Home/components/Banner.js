import { Box, Button, Grid, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import { RiWhatsappFill, RiHome8Fill, RiFacebookBoxFill, RiFacebookCircleFill } from "react-icons/ri";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandSnapchat,
} from "@tabler/icons";

export const AdvancedBannerTop = () => {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset-one center-one">
        {/* NavBar */}
        <Box  style={{ width:'100%'}}>
          <ul className="social-icons">
            <li>
              <a href="#">
                <RiHome8Fill  /> <span> Inicio </span>
              </a>
            </li>
            <li>
              <a href="#">
                <RiHome8Fill /> Hola
              </a>
            </li>

            <li>
              <a href="#">
                <RiWhatsappFill />Txt
              </a>
            </li>
            <li>
              <a href="#">
                <RiFacebookCircleFill />Facebook
              </a>
            </li>
          </ul>
        </Box>
        <h1 className="headline white">Hello World!</h1>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <Box style={{ background: "red", height: 100, width: "100%" }}>
              <Typography>Holaa a todos,</Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    ),
  };

  const foreground = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, gradientOverlay, headline]}
      className="full"
    />
  );
};
