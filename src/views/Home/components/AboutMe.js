import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { FaFolder, FaStarHalfAlt, FaMedal } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import Htmlicon from "../../../assets/HtmlIcon.png";
import Cssicon from "../../../assets/CssIcon.png";
import JSicon from "../../../assets/JsIcon.png";
import postmanIcon from "../../../assets/newPostman.png";
import GoogleCloudIcon from "../../../assets/GoogleCloudicon.png";
import { useParallax } from "react-scroll-parallax";

const AboutMe = () => {
  const parallax = useParallax({
    translateX: [-100, 3, "easeOutQuint"],
  });
  const parallaxTwo = useParallax({
    translateX: [300, -3, "easeOutQuint"]

  });
  return (
    <div className="center full night-sky">
      <Box
        style={{
          display: "block",
          minHeight: 800,
          margin: 15,
          color: "white",
          // background: "red",
        }}
      >
        <Grid container spacing={2}>
          {/* Experience */}
          <Grid item xs={12} md={8} ref={parallax.ref}>
            <Box
              style={
                {
                  // background: "blue",
                  // padding: 90,
                  // boxSizing: "border-box",
                }
              }
            >
              <Typography variant="h3" mt={5}>
                <FaFolder fontSize={40} /> Experiencia Laboral
              </Typography>
              <Typography variant="h5" mt={5}>
                DESARROLLADOR DE SOFTWARE JÚNIOR | WOBZ
              </Typography>
              <Typography variant="h6" fontFamily="fantasy">
                Diciembre 2021 - Febrero 2023 / www.wobz.com.mx
              </Typography>
              <Typography variant="h6" mt={1}>
                Fui uno de los primeros desarrolladores en esta empresa en la
                cual participe para el despliegue de 5 proyectos en el termino
                de un año junto con mis compañeros, lleve a cargo el desarrollo
                del frontend y backend de cada aplicación basándome en ReactJS
                junto con tecnologías como Git, Git Hub, NodeJs, Strapi, Google
                Cloud y JavaScript.
                <ul>
                  <li>
                    Desarrolle y mantuve sitios web con la ayuda de la librería
                    ReactJS.
                  </li>
                  <li>
                    Estuve asignado al desarrollo de aplicaciones para
                    dispositivos android y IOS con React Native.
                  </li>
                  <li>
                    Cree y mantuve API'S para la comunicacion de información
                    entre componentes.
                  </li>
                  <li>
                    Diseñe modelos de base de datos usando MySQL y Strapi para
                    el almacenamiento de información.
                  </li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          {/* Skills */}
          <Grid item xs={12} md={4} ref={parallaxTwo.ref}>
            <Box
              sx={
                {
                  // background: "red",
                  // padding: 90,
                  // boxSizing: "border-box",
                  // boxSizing: "border-box",
                }
              }
            >
              <Typography variant="h3" mt={5}>
                <FaStarHalfAlt /> Habilidades
              </Typography>

              <Typography variant="h5" mb={5}>
                <ul>
                  <li>React Js </li>
                  <li> React Native </li>
                  <li> Node Js </li>
                  <li>Express Js </li>
                  <li>Java Script </li>
                  <li>HTML/CSS </li>
                  <li>MySQL </li>
                  <li> Google Cloud</li>
                </ul>
              </Typography>
              <div className="slider">
                <div className="slide-track">
                  <div className="slide">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://www.mementotech.in/assets/images/icons/express.png"
                      style={{ background: "white", borderRadius: "100%" }}
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img src={Htmlicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src={Cssicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src={JSicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img
                      src="https://www.databaseanalyser.com/wp-content/uploads/2022/01/MySQL-logo.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src={GoogleCloudIcon}
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img src={postmanIcon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://www.mementotech.in/assets/images/icons/express.png"
                      height="100"
                      style={{ background: "white", borderRadius: "100%" }}
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img src={Htmlicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src={Cssicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src={JSicon} height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img
                      src="https://www.databaseanalyser.com/wp-content/uploads/2022/01/MySQL-logo.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src={GoogleCloudIcon}
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img src={postmanIcon} height="100" width="250" alt="" />
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutMe;
