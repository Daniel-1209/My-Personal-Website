import { Box, Grid } from "@mui/material";
import React from "react";
import ProyectCard from "./ProyectCard";

const MyProyects = () => {
  return (
    <div className="center full night-sky">
      <Grid container spacing={3} padding={2} justifyContent='center'>
        <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid>
        <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid> <Grid item xs={12} sm={2}>
          <ProyectCard/>
        </Grid>
       
      </Grid>
    </div>
  );
};

export default MyProyects;
