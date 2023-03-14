import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IconArrowBadgeLeft } from "@tabler/icons";

const Calculator = () => {
  const stylesProp = {
    buttonOpera: {
      background: "white",
      color: "black",
      fontSize: 15,
      fontWeight: 600,
      boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
    },
    buttonNum: {
      background: "#2bc7f7",
      color: "white",
      // fontSize: 15,
      fontWeight: 600,
      boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
    },
  };

  const [textDisplay, setTextDisplay] = useState("  0");
  const [numTwo, setNumTwo] = useState(null);
  const [simbol, setSimbol] = useState("");
  const [num, setNum] = useState(null);
  const [ac, setAc] = useState(0);

  const handdleDisplay = (num) => {
    // console.log("Mira numero ", num);
    if (textDisplay === "  0") {
      const a = "  " + num;
      setTextDisplay(a);
      const b = parseFloat(a.substring(2, a.length));
      setNum(b);
      console.log("Entrada ", b);
    } else {
      const a = textDisplay + num;
      setTextDisplay(a);
      const b = parseFloat(a.substring(2, a.length));
      setNum(b);
      console.log("Entrada ", b);
    }
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
      setTextDisplay("  0");
      setAc(0);
    } else {
      setTextDisplay("  " + a);
      setAc(a);
    }

    console.log("Tu igual  ", a);
  };

  const handdleDeleteAll = () => {
    console.log("hola");
    setNumTwo(null);
    setTextDisplay("  0");
    setNum(null);
  };

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        // background: "#ffffff",
        background: "#e4edeb",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <IconArrowBadgeLeft
          size={60}
          color="#2bc7f7"
          style={{
            background: "white",
            borderRadius: "100%",
            zIndex: 10,
            display: "inline-block",
            position: "absolute",
            top: 10,
            left: 10,
          }}
        />
      </Link>
      <Box
        style={{
          width: "100%",
          maxWidth: 800,
          height: 600,
          paddingTop: 20,
          borderRadius: 20,
          boxShadow:
            "17px 17px 31px -1px rgba(0,0,0,0.26), -10px -10px 31px 1px rgba(255,255,255,1)",
          background: "#e4edeb",
          // background: "#ffffff",
        }}
      >
        {/* Display */}
        <Box
          style={{
            boxShadow:
              "inset 10px 10px 12px -1px rgba(0,0,0,0.23),inset -10px -10px 12px 1px rgba(255,255,255,1)",
            // background: "#ffffff",
            background: "#e4edeb",
            marginLeft: "auto",
            marginRight: "auto",
            width: " 90%",
            borderRadius: 10,
            padding: 10,
            boxSizing: "border-box",
            marginBottom: 20,
          }}
        >
          <Box
            style={{
              width: " 100%",
              height: 50,
              // border: "1px solid black",
              // background: "green",
              display: "flex",
              padding: 10,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "right",
              fontSize: 30,
              fontFamily: "monospace",
            }}
          >
            {textDisplay}
          </Box>
          <Box
            style={{
              width: " 100%",
              height: 50,
              // border: "1px solid black",
              // background: "green",
              display: "flex",
              padding: 10,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "right",
              fontSize: 30,
              fontFamily: "monospace",
            }}
          >
            {numTwo}
          </Box>
        </Box>
        {/* Buttons panel */}
        <Box
          style={{
            // background: "pink",
            display: "flex",
            width: "90%",
            height: 300,
            marginLeft: "auto",
            marginRight: "auto",
            flexWrap: "wrap",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          {/* Numbers */}
          <Box
            style={{
              // background: "purple",
              width: "60%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Box
              style={{
                // background: "yellow",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(1)}
              >
                1
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(2)}
              >
                2
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(3)}
              >
                3
              </Button>
            </Box>
            <Box
              style={{
                // background: "yellow",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(4)}
              >
                4
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(5)}
              >
                5
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(6)}
              >
                6
              </Button>
            </Box>
            <Box
              style={{
                // background: "yellow",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(7)}
              >
                7
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(8)}
              >
                8
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(9)}
              >
                9
              </Button>
            </Box>
            <Box
              style={{
                // background: "yellow",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(0)}
              >
                0
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(".")}
              >
                .
              </Button>
              <Button
                style={stylesProp.buttonOpera}
                variant="contained"
                onClick={() => handdleDisplay(3.1416)}
              >
                π
              </Button>
            </Box>
          </Box>
          {/* Operators */}
          <Box
            style={{
              // background: "green",
              // width: "20%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Button
              style={stylesProp.buttonNum}
              variant="contained"
              onClick={() => handdleOperation("+")}
            >
              +
            </Button>
            <Button
              style={stylesProp.buttonNum}
              variant="contained"
              onClick={() => handdleOperation("-")}
            >
              -
            </Button>
            <Button
              style={stylesProp.buttonNum}
              variant="contained"
              onClick={() => handdleOperation("/")}
            >
              /
            </Button>
            <Button
              style={stylesProp.buttonNum}
              variant="contained"
              onClick={() => handdleOperation("x")}
            >
              *
            </Button>
          </Box>
          {/* Buttons extra */}
          <Box
            style={{
              // background: "purple",
              // width: "20%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{
                background: "#f82f93",
                color: "white",
                // fontSize: 15,
                fontWeight: 600,
                boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
              }}
              variant="contained"
              onClick={handdleDelete}
            >
              {"<"}
            </Button>
            <Button
              variant="contained"
              style={{
                background: "red",
                color: "white",
                // fontSize: 15,
                fontWeight: 600,
                boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
              }}
              onClick={handdleDeleteAll}
            >
              CE
            </Button>
            <Button
              style={{
                color: "white",
                // fontSize: 15,
                fontWeight: 600,
                boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
              }}
              variant="contained"
              onClick={() => {
                console.log("Actual ", ac);
                handdleDisplay(ac);
              }}
            >
              AC
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#2ec72e",
                color: "white",
                // fontSize: 15,
                fontWeight: 600,
                boxShadow: "5px 5px 12px -1px rgba(0,0,0,0.23)",
              }}
              onClick={handdleIgual}
            >
              =
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
