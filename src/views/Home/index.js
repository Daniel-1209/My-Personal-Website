import React from "react";
import { Box } from "@mui/system";

// Proyects
import YoGiHo from "./components/YoGiHo";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          Mi Pagina Personal
        </Grid>

        <Grid item xs={12}>
          <YoGiHo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
