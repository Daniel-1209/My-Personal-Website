import { Box, Button, Grid, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import perfilImage from "../../../assets/FB_IMG_1673920208879.jpeg";
import { RiLinkedinBoxFill, RiGithubFill, RiMailFill } from "react-icons/ri";

export const AdvancedBannerTop = () => {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  // Center content
  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset-one center-one">
        {/* NavBar */}
        <Box style={{ width: "100%", height: 100 }} />
        {/* <h3
          style={{ marginTop: 0, marginBottom: 5 }}
          className="headline white"
        >
          Hello World!
        </h3> */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
        >
          {/* My perfil */}
          <Grid
            item
            xs={11}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <Box
              style={{
                // background:
                //   "linear-gradient(0deg,rgba(0,0,0,1)  0%,  rgba(255,255,255,0) 100%)",
                // borderRadius: 50,
                width: "100%",
                maxWidth: 600,
                minWidth: 340,
                padding: 50,
                boxSizing: "border-box",
              }}
            >
              <img
                src={perfilImage}
                alt="perfil"
                style={{
                  height: 200,
                  width: 200,
                  display: "block",
                  borderRadius: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Typography
                variant="h4"
                color="white"
                textAlign="center"
                fontWeight={600}
                mt={4}
              >
                Daniel García Mendoza
              </Typography>
              <Typography
                variant="h5"
                color="white"
                textAlign="center"
                fontWeight={600}
                mt={3}
              >
                Programador Full Stack
              </Typography>
            </Box>
          </Grid>
          {/* My description */}
          <Grid
            item
            xs={11}
            sm={6}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <Box
              style={{
                // background:
                //   "linear-gradient(0deg,rgba(0,0,0,1)  0%,  rgba(255,255,255,0) 100%)",
                // borderRadius: 50,
                width: "100%",
                padding: 50,
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h6"
                mt={1}
                color="white"
                fontWeight={600}
                textTransform="capitalize"
                textAlign="justify"
              >
                Soy un desarrollador full-stack que le fascina la tecnología y
                los retos de programación, en un lapso de un año he trabajado
                con tecnologías para el desarrollo y mantenimiento de
                aplicaciones Web, Android y IOS, así mismo durante mis estudios
                de bachillerato participe en la Olimpiada Mexicana De
                Informática (OMI) en la cual obtuve medalla de bronce lo cual me
                ayudo a fortalecer mi lógica de programación.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    ),
  };

  // Nav bar
  const headlineTwo = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset-one center-one">
        {/* NavBar */}
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/daniel12gm/" target="_blank">
                <RiLinkedinBoxFill /> <span> LinkedIn </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Daniel-1209" target="_blank">
                <RiGithubFill /> GitHub
              </a>
            </li>

            <li>
              <a href="mailto: danielgarciamendoza.204@gmail.com">
                <RiMailFill />
                <span> Gmail </span>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <RiFacebookCircleFill />
                Facebook
              </a>
            </li> */}
          </ul>
        </Box>
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
      layers={[background, foreground, headline, gradientOverlay, headlineTwo]}
      className="full"
    />
  );
};
