import { Box, Grid } from "@mui/material";
import React from "react";
import ProyectCard from "./ProyectCard";

const MyProyects = () => {
  const proyects = [
    {
      title: "POKEDEX",
      description:
        "Enciclopedia virtual la cual te provee de información hacerca de cada pokemon que selecciones o búsques.",
      img: "https://i.ebayimg.com/images/g/mHYAAOSwOL9hDWSl/s-l1600.jpg",
    },
  ];
  return (
    <div className="center full night-sky">
      <Grid container spacing={3} padding={2} justifyContent="center" mt={1}>
        {proyects.map((element) => (
          <Grid key={element.title} item xs={10} sm={5} md={4} lg={3} xl={2}>
            <ProyectCard
              image={element.img}
              title={element.title}
              description={element.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyProyects;
