import { Box, Typography } from "@mui/material";
import React from "react";

const ProyectCard = ({ image, title, description }) => {
  return (
    <Box
      sx={{
        // background: "black",
        borderRadius: 10,
        marginBottom: 3,
        boxSizing: "border-box",
        padding: 3,
        height: 450,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
        justifyContent: "space-evenly",
        boxShadow:
          "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 1rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe",
      }}
    >
      <Box justifyContent="center" display="flex">
        <img
          src={image}
          style={{ width: 150, height: 150, borderRadius: "100%" }}
          alt="Imagen Proyecto"
        />
      </Box>
      <Typography textAlign="center" variant="h4" fontFamily="serif">
        {title}
      </Typography>
      <Typography textAlign="justify" variant="h6">
        {description}
      </Typography>
    </Box>
  );
};

export default ProyectCard;
