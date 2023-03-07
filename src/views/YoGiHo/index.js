import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button, Modal } from "@mui/material";
import dataYoGiHo from "../../data/responseYoGiOh";
import { makeStyles } from "@mui/styles";
import background from "../../assets/backgroundYogiho.jpeg";
import def from "../../assets/defensa.png";
import atk from "../../assets/ataque.png";
import { IconArrowBadgeLeft } from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxCard: {
    padding: 5,
    margin: 15,
    height: 280,
    boxShadow: "1px 2px 9px #ffffff",
    "&:hover": {
      transform: "scale(1.3)",
      boxShadow: "none",
      padding: 5,
      borderRadius: 0,
      border: "5px solid yellow",
    },
  },
  DetailBox: {
    padding: 10,
    height: 750,
    background: "black",
    display: "flex",
    flexWrap: "wrap",
    borderStyle: "outset",
    borderWidth: 10,
    justifyContent: "center",
    boxShadow: "1px 2px 9px #ffffff",
  },
  DetailBoxModal: {
    padding: 10,
    height: 750,
    minWidth: 335,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    background: "black",
    display: "flex",
    flexWrap: "wrap",
    borderStyle: "outset",
    borderWidth: 10,
    justifyContent: "center",
    boxShadow: "1px 2px 9px #ffffff",
  },
  boxDetailTex: {
    overflow: "auto",
    width: "100%",
    padding: 10,
    background: "#02579c",
    display: "flex",
    justifyContent: "space-around",
  },
  imageStyles: {
    marginBottom: 10,
    animation: "$myEffect 10s infinite",
    "&:hover": {
      animation: "none",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },
}));

const styles = {
  firstBox: {
    minHeight: "100vh",
    backgroundImage: `url(${background})`,
  },
  headerBox: {
    // background: "yellow",
    padding: 10,
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 15,
    boxShadow: "1px 2px 9px #ffffff",
  },
  buttonBox: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
};

const YoGiHo = () => {
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(8);
  const [rotate, setRotate] = useState(0);
  const [cardsNow, setCardsNow] = useState([]);
  const [detailCard, setDetailCard] = useState(dataYoGiHo[9]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const myStyles = useStyles();

  const updateCards = (simbol) => {
    // console.log(init, end);

    if (simbol === "+") {
      setInit(init + 8);
      setEnd(end + 8);
    }
    if (simbol === "-") {
      if (init !== 0) {
        setInit(init - 8);
        setEnd(end - 8);
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
    <Grid
      container
      justifyContent="end"
      spacing={2}
      style={styles.firstBox}
      p={1}
    >
      {/* Header */}
      <Grid item xs={12}>
        <Link to="/">
          <IconArrowBadgeLeft
            size={60}
            color="white"
            style={{
              display: "inline-block",
              position: "absolute",
              top: 10,
              left: 10,
            }}
          />
        </Link>
        <Box style={styles.headerBox}>
          <Typography
            variant="h4"
            align="center"
            fontFamily="cursive"
            color="white"
          >
            CARTAS YO-GI-OH
          </Typography>
        </Box>
      </Grid>
      {/* Detail Card */}
      <Grid item xs={12} md={4} display={{ xs: "none", lg: "block" }}>
        <Box className={myStyles.DetailBox}>
          <img
            className={myStyles.imageStyles}
            src={detailCard.card_images[0].image_url}
            height={400}
            alt={detailCard.name}
          />
          <Box className={myStyles.boxDetailTex}>
            <Box style={{ display: "flex" }}>
              <img src={atk} height={30} alt="atk" />
              <Typography align="center" color="#61d100">
                ATK: {detailCard.atk}
              </Typography>
            </Box>
            <Box style={{ display: "flex" }}>
              <img src={def} height={30} alt="def" />
              <Typography align="center" color="#61d100">
                DEF: {detailCard.def}
              </Typography>
            </Box>
          </Box>
          <Box
            padding={1}
            width="100%"
            bgcolor="#00213a"
            overflow="auto"
            height={280}
          >
            <Typography fontWeight={600} color="yellow" align="center">
              Nombre: {detailCard.name}
            </Typography>
            <Typography align="center" color="#61d100">
              Tipo: {detailCard.type}
            </Typography>
            <Typography align="center" color="white">
              {detailCard.desc}
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* Modal */}
      <Grid item xs={12} display={{ xs: "block", lg: "none" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={myStyles.DetailBoxModal}>
            <img
              className={myStyles.imageStyles}
              src={detailCard.card_images[0].image_url}
              height={400}
              alt={detailCard.name}
            />
            <Box className={myStyles.boxDetailTex}>
              <Box style={{ display: "flex" }}>
                <img src={atk} height={30} alt="atk" />
                <Typography align="center" color="#61d100">
                  ATK: {detailCard.atk}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <img src={def} height={30} alt="def" />
                <Typography align="center" color="#61d100">
                  DEF: {detailCard.def}
                </Typography>
              </Box>
            </Box>
            <Box
              padding={1}
              width="100%"
              bgcolor="#00213a"
              overflow="auto"
              height={280}
            >
              <Typography fontWeight={600} color="yellow" align="center">
                Nombre: {detailCard.name}
              </Typography>
              <Typography align="center" color="#61d100">
                Tipo: {detailCard.type}
              </Typography>
              <Typography align="center" color="white">
                {detailCard.desc}
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Grid>
      {/* Cards */}
      <Grid
        item
        lg={8}
        xs={12}
        className={myStyles.boxCards}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          transform: rotate % 2 !== 0 ? "rotateY(180deg)" : "",
          transition: `transform 1.5s ease`,
        }}
      >
        {cardsNow.map((card, index) => (
          <Box key={`${index}Second`}>
            <Box
              display={{ xs: "none", lg: "block" }}
              className={myStyles.boxCard}
              onClick={() => setDetailCard(card)}
            >
              <img
                src={card.card_images[0].image_url_small}
                height={273}
                alt={card.name}
              />
            </Box>
            <Box
              display={{ xs: "block", lg: "none" }}
              className={myStyles.boxCard}
              onClick={() => {
                setDetailCard(card);
                handleOpen();
              }}
            >
              <img
                src={card.card_images[0].image_url_small}
                height={273}
                alt={card.name}
              />
            </Box>
          </Box>
        ))}
      </Grid>
      {/* Buttons */}
      <Grid item xs={12} lg={8}>
        <Box style={styles.buttonBox}>
          <Button
            variant="contained"
            style={{ background: "white", color: "blue" }}
            onClick={() => updateCards("-")}
          >
            Retroceder
          </Button>
          <Button
            variant="contained"
            style={{ background: "white", color: "blue" }}
            onClick={() => updateCards("+")}
          >
            Adelante
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default YoGiHo;
