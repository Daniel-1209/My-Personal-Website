import { Box, Typography } from "@mui/material";
import React from "react";

const ProyectCard = () => {
  return (
    <Box
      sx={{
        // background: "white",
        borderRadius: 10,
        boxSizing: "border-box",
        padding: 1,
        height: 400,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color:'white',
        justifyContent: "space-evenly",
        boxShadow: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe'
      }}
    >
      <Box justifyContent="center" display="flex">
        <img
          src="https://i.ebayimg.com/images/g/mHYAAOSwOL9hDWSl/s-l1600.jpg"
          style={{ width: 150, height: 150, borderRadius: "100%" }}
          alt="Imagen Proyecto"
        />
      </Box>
      <Typography textAlign="center" variant="h5">
        POKEDEX
      </Typography>
      <Typography textAlign="justify" variant="h6">
        Enciclopedia virtual la cual te provee de información hacerca de cada
        pokemon que selecciones o búsques.
      </Typography>
    </Box>
  );
};

export default ProyectCard;
