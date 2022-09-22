import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import dataYoGiHo from "../../../../data/responseYoGiOh";

const YoGiHo = () => {
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(10);
  const [rotate, setRotate] = useState(0);
  const [cardsNow, setCardsNow] = useState([]);

  const updateCards = (simbol) => {
    // console.log(init, end);

    if (simbol === "+") {
      setInit(init + 10);
      setEnd(end + 10);
    }
    if (simbol === "-") {
      if (init !== 0) {
        setInit(init - 10);
        setEnd(end - 10);
      }
    }
  };

  useEffect(() => {
    // console.log(init, end);
    setRotate(rotate + 1);
    console.log(rotate);
    const dataArray = [];
    for (let i = init; i < end; i += 1) {
      dataArray.push(dataYoGiHo[i]);
    }
    setCardsNow(dataArray);
  }, [init]);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container justifyContent="center" spacing={2} p={1}>
        {cardsNow.map((card, index) => (
          <Grid
            item
            key={index}
            sx={{
              transform: rotate % 2 !== 0 ? "rotateY(180deg)" : "",
              transition: `transform 0.5s ease`,
            }}
            xs={12}
            sm={6}
            md={3}
            lg={2}
          >
            <Box
              style={{
                // background: "yellow",
                padding: 10,
                height: 400,
                alignItems: "center",
                flexDirection: "column",
                display: "flex",
                flexWrap: "wrap",
                borderRadius: 15,
                boxShadow: "1px 2px 9px #ff4b4b",
              }}
            >
              <img
                src={card.card_images[0].image_url_small}
                height={273}
                alt={card.name}
              />
              <Box padding={1}>
                <Typography fontWeight={600} align="center">
                  Nombre: {card.name}
                </Typography>
                <Typography align="center"> Tipo: {card.type}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button variant="contained" onClick={() => updateCards("-")}>
              Retroceder
            </Button>
            <Button variant="contained" onClick={() => updateCards("+")}>
              Adelante
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YoGiHo;
