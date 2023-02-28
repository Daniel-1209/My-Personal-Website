import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { FaFolder, FaStarHalfAlt, FaMedal } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdComputer } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="center full">
      <Box className="box">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box
              style={{
                // background: "blue",
                padding: 90,
                boxSizing: "border-box",
              }}
            >
              <FaFolder fontSize={40} />
              <Typography variant="h2" mt={5}>
                Sobre Mí
              </Typography>
              <Typography variant="h6" mt={1}>
                My name is Daniel Garcia Mendoza, I'm a front-end developer
                based in Lima, Peru. My interest in web development started in
                2015 when I decided to create a custom simulator for my
                professional license test with C#. I believe that developing
                solutions applying best practices is one of the main pillars to
                obtain the best results. Here are a few technologies I've been
                working with recently: JavaScript TypeScript PHP Angular React
                Laravel
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography
                variant="h3"
                mb={5}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                Logros
                <FaStarHalfAlt />
              </Typography>

              <Typography variant="h5" mb={5}>
                <IoMdSchool /> Colegion De Bachilleres Terminado
              </Typography>
              <Typography variant="h5" mb={5}>
                <MdComputer /> Curso Programación Web Full Stack Por Digital
                House
              </Typography>
              <Typography variant="h5" mb={5}>
                <FaMedal /> Medalla de Bronce Nivel Nacional En La OMI 2019
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutMe;
