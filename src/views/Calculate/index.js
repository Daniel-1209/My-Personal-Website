import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const myStyles = makeStyles(() => ({
  firstBox: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: 800,
    height: 600,
    background: "blue",
  },
  display: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: 50,
    background: "green",
  },
}));

const Calculator = () => {
  const styles = myStyles();
  const [textDisplay, setTextDisplay] = useState("  ");
  const [numTwo, setNumTwo] = useState(null);
  const [simbol, setSimbol] = useState("");
  const [num, setNum] = useState(null);

  const handdleDisplay = (num) => {
    // console.log("Mira numero ", num);
    const a = textDisplay + num;
    setTextDisplay(textDisplay + num);
    const b = parseFloat(a.substring(2, a.length));
    setNum(b);
    console.log("Entrada ", b);
  };

  const handdleOperation = (operator) => {
    console.log("Mira operador ", operator);
    if (num !== null) {
      if (numTwo !== null) {
        // Elejir operacion deacuerdo al otro simbolo
        if (simbol === "+") {
          setNumTwo(num + numTwo);
          setSimbol(operator);
          console.log("iraaa ", numTwo);
        } else if (simbol === "-") {
          setNumTwo(numTwo - num);
          setSimbol(operator);
          console.log("iraaa ", numTwo);
        } else if (simbol === "/") {
          setNumTwo(numTwo / num);
          setSimbol(operator);
          console.log("iraaa ", numTwo);
        } else if (simbol === "x") {
          setNumTwo(numTwo * num);
          setSimbol(operator);
          console.log("iraaa ", numTwo);
        }
        // Mostrar display
        if (operator === "+") {
          setTextDisplay("+ ");
        } else if (operator === "-") {
          setTextDisplay("- ");
        } else if (operator === "/") {
          setTextDisplay("/ ");
        } else if (operator === "x") {
          setTextDisplay("x ");
        }
      } else {
        if (operator === "+") {
          setTextDisplay("+ ");
        } else if (operator === "-") {
          setTextDisplay("- ");
        } else if (operator === "/") {
          setTextDisplay("/ ");
        } else if (operator === "x") {
          setTextDisplay("x ");
        }
        setNumTwo(num);
        setSimbol(operator);
      }
    }
  };

  const handdleDelete = () => {
    console.log("Borrando");
    if (textDisplay.length >= 3) {
      const a = textDisplay.substring(0, textDisplay.length - 1);
      setTextDisplay(a);
      const b = parseFloat(a.substring(2, a.length));
      setNum(b);
      console.log("Entrada ", b);
    }
  };

  const handdleIgual = () => {
    // Elejir operacion deacuerdo al otro simbolo
    let a = 0;
    if (simbol === "+") {
      a = num + numTwo;
    } else if (simbol === "-") {
      a = numTwo - num;
    } else if (simbol === "/") {
      a = numTwo / num;
    } else if (simbol === "x") {
      a = numTwo * num;
    }
    setNum(a);
    setNumTwo(null);
    setSimbol("");
    if (a === 0) {
      setTextDisplay("  ");
    } else {
      setTextDisplay("  " + a);
    }

    console.log("Tu igual  ", a);
  };

  const handdleDeleteAll = () => {
    console.log("hola");
    setNumTwo(null);
    setTextDisplay("  ");
    setNum(null);
  };

  return (
    <Box style={{ minWidth: "100vw", minHeight: "100vh", background: "red" }}>
      <Box className={styles.firstBox}>
        <Box className={styles.display}>{textDisplay}</Box>
        <Box className={styles.display}>{numTwo}</Box>
        <Button variant="contained" onClick={() => handdleDisplay(1)}>
          1
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(2)}>
          2
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(3)}>
          3
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(4)}>
          4
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(5)}>
          5
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(6)}>
          6
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(7)}>
          7
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(8)}>
          8
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(9)}>
          9
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(0)}>
          0
        </Button>
        <Button variant="contained" onClick={() => handdleDisplay(".")}>
          .
        </Button>
        <Button variant="contained" onClick={() => handdleOperation("+")}>
          +
        </Button>
        <Button variant="contained" onClick={() => handdleOperation("-")}>
          -
        </Button>
        <Button variant="contained" onClick={() => handdleOperation("/")}>
          /
        </Button>
        <Button variant="contained" onClick={() => handdleOperation("x")}>
          x
        </Button>
        <Button variant="contained" onClick={handdleDelete}>
          {"<"}
        </Button>
        <Button variant="contained" onClick={handdleDeleteAll}>
          CE
        </Button>
        <Button variant="contained" onClick={handdleIgual}>
          =
        </Button>
      </Box>
    </Box>
  );
};

export default Calculator;
