import { Grid, Box, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      //   className="night-sky"
      style={{
        background: "black",
        margin: "auto",
        maxWidth: 1700,
        minHeight: 350,
        color: "white",
        padding: 25,
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        spacing={3}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        {/* Me */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              boxSizing: "border-box",
              marginBottom: 5
            }}
          >
            <Box sx={{ width: "40%" }}>
              <Typography
                fontWeight={600}
                sx={{
                  fontSize: { xs: 50, xl: 70 },
                  width: { xs: 130, xl: 180 },
                  height: { xs: 130, xl: 180 },
                  margin: "auto",
                  color: "white",
                  border: "10px solid white",
                  borderRadius: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                DGM
              </Typography>
            </Box>
            <Box
              sx={{
                // background: "green",
                width: "60%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="h4" fontWeight={600} textAlign="center">
                Daniel Garcia Mendoza
              </Typography>
              <Typography variant="h6" textAlign="center">
                Desarrollador Full-Stack
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              // background: "#191a4e",
              borderLeft: "1px solid white",
              height: 300,
              display: "flex",
              backgroundAttachment: "initial",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Contacto:
            </Typography>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                margin: 10,
                // background:'blue',
                width: "80%",
              }}
            >
              <li className="social-icons2">
                <a
                  href="https://www.linkedin.com/in/daniel12gm/"
                  target="_blank"
                >
                  <RiLinkedinBoxFill /> <span> LinkedIn </span>
                </a>
              </li>

              <li className="social-icons2">
                <a href="https://github.com/Daniel-1209" target="_blank">
                  <RiGithubFill /> GitHub
                </a>
              </li>

              <li className="social-icons2">
                <a href="mailto: danielgarciamendoza.204@gmail.com">
                  <RiMailFill />
                  <span> Gmail </span>
                </a>
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Send Email */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: 300,
              //   background: "red",
              borderLeft: "1px solid white",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "space-around",
            }}
            component="form"
            action="mailto:danielgarciamendoza.204@gmail.com"
            method="post"
            encType="text/plain"
          >
            <Typography variant="h6" fontWeight={600}>
              Enviar Email:
            </Typography>
            <TextField
              style={{
                border: "1px solid white",
                borderRadius: 10,
              }}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label="Email"
              name="Email"
              value={value}
              onChange={handleChange}
              variant="filled"
              type="email"
              required
            />
            <TextField
              id="filled-multiline-static"
              label="Mensaje"
              multiline
              name="Mensaje"
              rows={4}
              variant="filled"
              style={{
                border: "1px solid white",
                borderRadius: 10,
              }}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              required
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{ width: "80%" }}
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
