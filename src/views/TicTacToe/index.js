import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IconArrowBadgeLeft } from "@tabler/icons";

const TicTacToe = () => {
  const [mainTable, setMainTable] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [numberForStripe, setNumberForStripe] = useState(3);
  const [num, setNum] = useState(1);
  const [win, setWin] = useState(false);
  const [playerO, setPlayerO] = useState(0);
  const [playerX, setPlayerX] = useState(0);
  const [turn, setTurn] = useState(0);
  const columns = 3;
  const rows = 3;
  const table = [];

  const checkTable = (simbol) => {
    let arrayOfCells = [];
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < columns; j += 1) {
        let count = 0;
        arrayOfCells = [];
        // To right
        for (let k = j; k < j + numberForStripe; k += 1) {
          if (k >= columns) {
            break;
          }
          if (mainTable[i][k] === simbol) {
            count += 1;
            arrayOfCells.push(`${i},${k}`);
            if (count === numberForStripe) {
              console.log("Heechoo");
              setSelectedCells(arrayOfCells);
              return true;
            }
          } else {
            break;
          }
        }
        count = 0;
        arrayOfCells = [];
        // To bottom
        for (let k = i; k < i + numberForStripe; k += 1) {
          if (k >= rows) {
            break;
          }
          if (mainTable[k][j] === simbol) {
            count += 1;
            arrayOfCells.push(`${k},${j}`);
            if (count === numberForStripe) {
              console.log("Heechoo");
              setSelectedCells(arrayOfCells);
              return true;
            }
          } else {
            break;
          }
        }
        count = 0;
        arrayOfCells = [];
        // To Botton Rigth
        for (let k = 0; k < numberForStripe; k += 1) {
          if (k + i >= rows || k + j >= columns) {
            break;
          }
          if (mainTable[k + i][k + j] === simbol) {
            count += 1;
            arrayOfCells.push(`${k + i},${k + j}`);
            if (count === numberForStripe) {
              console.log("Heechoo");
              setSelectedCells(arrayOfCells);
              return true;
            }
          } else {
            break;
          }
        }
        count = 0;
        arrayOfCells = [];
        // To Top Rigth
        for (let k = 0; k < numberForStripe; k += 1) {
          if (i - k < 0 || k + j >= columns) {
            break;
          }
          if (mainTable[i - k][k + j] === simbol) {
            count += 1;
            arrayOfCells.push(`${i - k},${k + j}`);
            if (count === numberForStripe) {
              console.log("Heechoo");
              setSelectedCells(arrayOfCells);
              return true;
            }
          } else {
            break;
          }
        }
      }
    }
    return false;
  };

  const handdleIcon = (One, Two) => {
    if (mainTable[One][Two] !== "") {
      return;
    }
    const tableNow = mainTable;
    if (num % 2 === 0) {
      tableNow[One][Two] = "O";
      const resul = checkTable("O");
      if (resul) {
        setWin(true);
        setPlayerO(playerO + 1);
      }
    } else {
      tableNow[One][Two] = "X";
      const resul = checkTable("X");
      if (resul) {
        setWin(true);
        setPlayerX(playerX + 1);
      }
    }
    setMainTable(tableNow);
    setNum(num + 1);
  };

  const selectStyles = (cell, simbol) => {
    for (let i = 0; i < selectedCells.length; i += 1) {
      if (cell === selectedCells[i]) {
        return {
          height: 100,
          width: 100,
          background: "white",
          border: "2px solid white",
          boxShadow: " inset 0 0 10px blue, 0 0 30px blue ",
          fontSize: 40,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow:
            "0 0 20px blue, 0 0 40px blue, 0 0 40px blue,  0 0 40px blue",
        };
      }
    }
    if (simbol === "X") {
      return {
        height: 100,
        width: 100,
        fontSize: 40,
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 0 20px red, 0 0 40px red, 0 0 40px red,  0 0 40px red",
        border: "2px solid white",
        boxShadow: " inset 0 0 10px blue, 0 0 30px blue ",
      };
    }
    return {
      height: 100,
      width: 100,
      fontSize: 40,
      fontWeight: 600,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textShadow:
        "0 0 20px white, 0 0 40px white, 0 0 40px white,  0 0 40px white",
      border: "2px solid white",
      boxShadow: " inset 0 0 10px blue, 0 0 30px blue ",
    };
  };

  const createTable = () => {
    for (let i = 0; i < rows; i += 1) {
      table.push([]);
      for (let j = 0; j < columns; j += 1) {
        table[i].push(``);
      }
    }
    console.log(table);
    setSelectedCells([]);
    setMainTable(table);
    setTurn(turn + 1);
    setWin(false);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "black",
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column",
        alignContent: "center",
        color: "white",
        // justifyContent: "flex-start",
      }}
    >
      <Link to="/">
        <IconArrowBadgeLeft
          size={60}
          color="white"
          style={{
            // background: "#aea3ff",
            // borderRadius: "100%",
            zIndex: 10,
            display: "inline-block",
            position: "absolute",
            top: 27,
            left: 10,
          }}
        />
      </Link>
      <Box
        style={{
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontFamily: "monospace",
            marginBottom: 50,
            textShadow:
              "0 0 20px blue, 0 0 30px blue, 0 0 30px blue,  0 0 30px blue",
          }}
          variant="h2"
          align="center"
        >
          TIC TAC TOE
        </Typography>
      </Box>
      <Box style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" align="center" mb={3}>
                Bienvenido Presione Para Iniciar
              </Typography>
              <Button
                variant="contained"
                style={{
                  height: 50,
                  marginBottom: 30,
                  background: "black",
                  border: "2px solid white",
                  boxShadow: " inset 0 0 10px blue, 0 0 30px blue ",
                }}
                onClick={createTable}
              >
                Iniciar Juego
              </Button>
              <Typography variant="h5" mb={3}>
                Turno Del Jugador
              </Typography>

              {num % 2 === 0 ? (
                <Typography
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    textShadow:
                      "0 0 20px white, 0 0 30px white,  0 0 30px white",
                  }}
                >
                  O
                </Typography>
              ) : (
                <Typography
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    textShadow:
                      "0 0 20px red, 0 0 30px red, 0 0 30px red,  0 0 30px red",
                  }}
                >
                  X
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              style={{
                pointerEvents: win === true ? "none" : "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  // background: "green",
                  border: "2px solid white",
                  boxShadow: " inset 0 0 20px white",
                  height: 400,
                  width: 400,
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {mainTable.map((e, i) =>
                  e.map((o, j) => (
                    <Box
                      key={`${i}, ${j}`}
                      style={selectStyles(`${i},${j}`, mainTable[i][j])}
                      onClick={() => handdleIcon(i, j)}
                    >
                      {o}
                    </Box>
                  ))
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              style={{
                // background: "green",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography
                style={{ width: "100%", marginBottom: 30 }}
                align="center"
                variant="h4"
              >
                {`Número De Partida => ${turn}`}
              </Typography>
              <Box>
                <Typography variant="h5">Puntos De X</Typography>
                <Typography
                  align="center"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    textShadow:
                      "0 0 20px red, 0 0 40px red, 0 0 40px red,  0 0 40px red",
                  }}
                >
                  {playerX}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">Puntos De O</Typography>
                <Typography
                  align="center"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    textShadow:
                      "0 0 20px white, 0 0 40px white,  0 0 40px white",
                  }}
                >
                  {playerO}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TicTacToe;
