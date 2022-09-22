import React from "react";
import { Grid, Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Mi Pagina Personal
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
