import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProyectCard from "./ProyectCard";

const MyProyects = () => {
  const proyects = [
    {
      title: "POKEDEX",
      ulr: "/pokemons",
      description:
        "Enciclopedia virtual la cual te provee de información hacerca de cada pokemon que selecciones o búsques.",
      img: "https://i.ebayimg.com/images/g/mHYAAOSwOL9hDWSl/s-l1600.jpg",
    },
    {
      title: "YU-GI-OH!",
      ulr: "/yo-gi-oh",
      description:
        "Aqui se encuentra una gran colección de las cartas del anime Yo-Gi-Oh.",
      img: "https://play-lh.googleusercontent.com/zm170sLoUWJ6W8fApHFtNT0jlIcC1nBmZOaHeCwxRw2JRN15qyVPLTjf0aiAndbZ5g=w526-h296-rw",
    },
    {
      title: "TI-TAC-TOE",
      ulr: "/tic-tac-toe",
      description:
        "Para que no te aburras puedes intentar jugar este juego en el cual puedes jugar con un amigo.",
      img: "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU",
    },
    {
      title: "CALCULADORA",
      ulr: "/calculadora",
      description:
        "Diseño de una calcuadora con multiple funcionalidad para diferente tipo de operaciones",
      img: "https://previews.123rf.com/images/netkoff/netkoff1505/netkoff150500195/40379493-matem%C3%A1ticas-dibujo-a-mano-con-una-calculadora-una-excelente-ilustraci%C3%B3n-vectorial.jpg",
    },
  ];
  return (
    <div className="center full night-sky">
      <Box sx={{ width: "90%" }}>
        <Divider
          sx={{
            height: 5,
            color: "white",
            background: "white",
            width: "100%",
            mb: 2,
            boxShadow:
              "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 1rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "center",
            width: "100%",
            fontFamily: "serif",
            fontWeight: 600,
            textShadow:
              "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 1rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe",
          }}
        >
          PROYECTOS PERSONALES
        </Typography>
        <Divider
          sx={{
            height: 5,
            color: "white",
            background: "white",
            width: "100%",
            mt: 2,
            boxShadow:
              "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 1rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe",
          }}
        />
      </Box>
      <Grid container spacing={5} padding={2} justifyContent="center" mt={5}>
        {proyects.map((element) => (
          <Grid key={element.title} item xs={10} sm={5} md={4} lg={3} xl={2}>
            <Link style={{textDecoration:'none'}} to={element.ulr}>
              <ProyectCard
                image={element.img}
                title={element.title}
                description={element.description}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyProyects;
