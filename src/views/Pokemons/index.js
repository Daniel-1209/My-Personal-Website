import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const myStyles = makeStyles(() => ({
  bodyBox: {
    background: "#aea3ff",
    backgroundSize: " 320px",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  gameboyBody: {
    width: "32em",
    height: "55.1em",
    position: "relative",
    background: "#e9e9e7",
    borderRadius: "10px 10px 60px 10px",
    boxShadow: "5px 5px rgba(0, 0, 0, 0.1)",
  },
  screen: {
    zIndex: 3,
    width: "28.3em",
    height: "25.6em",
    position: "absolute",
    top: "2em",
    left: "50%",
    borderRadius: "15px 15px 15% 15%",
    transform: "translate(-50%,0)",
    background: "#181818",
  },
  display: {
    width: "70%",
    height: "80%",
    marginTop: 20,
    // boxShadow: "inset 2px 5px 3px 3px #000",
    margin: "auto",
    // background: "#deffe4",
    backgroundImage: `url(${"https://img.freepik.com/vector-premium/paisaje-dibujos-animados-vista-campos-verdes-verano-colina-cesped-primavera-cielo-azul_313905-688.jpg?w=2000"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "180%",
  },
  buttonA: {
    width: "4.3em",
    height: "4.3em",
    top: 0,
    left: 80,
    position: "absolute",
    border: "2px solid #000",
    borderRadius: "50%",
    color: "#fff",
    fontWeight: 800,
    background:
      "radial-gradient(100% 100% at 50% 90%, rgba(0, 0, 0, 0) 46%, rgba(233, 233, 231, 0.4) 50%) 50% -1.4em/110% 4em, linear-gradient(#3A3839, #191718)",
    backgroundRepeat: "no-repeat",
    zIndex: 10,
  },
  buttonB: {
    width: "4.3em",
    height: "4.3em",
    top: 30,
    fontWeight: 800,
    position: "absolute",
    border: "2px solid #000",
    borderRadius: "50%",
    color: "#fff",
    background:
      "radial-gradient(100% 100% at 50% 90%, rgba(0, 0, 0, 0) 46%, rgba(233, 233, 231, 0.4) 50%) 50% -1.4em/110% 4em, linear-gradient(#3A3839, #191718)",
    backgroundRepeat: "no-repeat",
    zIndex: 5,
  },
  titleTex: {
    zIndex: 6,
    border: " 2px solid rgba(185, 185, 184, 0.7)",
    textShadow: "1px 1px rgb(185 185 184 / 70%)",
    fontWeight: "bold",
    fontFamily: "verdana",
    color: "#E8E8E6",
    position: "absolute",
    fontSize: "1.4em",
    top: "53.5%",
    left: "50%",
    transform: "translate(-50%, 0)",
    position: "absolute",
    textAlign: "center",
    padding: "3px",
    borderRadius: "35%",
  },
  buttonVerticalTop: {
    position: "absolute",
    left: "70px",
    top: -10,
    fontSize: 30,
    fontWeight: 600,
    width: "40px",
    height: "40px",
    background: "#444",
    borderRadius: "5px",
    transform: "rotate(270deg)",
  },
  buttonVerticalBottom: {
    position: "absolute",
    left: "70px",
    top: 70,
    width: "40px",
    height: "40px",
    background: "#444",
    borderRadius: "5px",
    fontSize: 30,
    fontWeight: 600,
    transform: "rotate(270deg)",
  },
  buttonCenter: {
    position: "absolute",
    left: "70px",
    width: "40px",
    top: 30,
    fontSize: 30,
    fontWeight: 600,
    height: "40px",
    background: "#444",
  },
  buttonHorizontalLeft: {
    position: "absolute",
    left: "30px",
    top: 30,
    fontSize: 30,
    fontWeight: 600,
    width: "40px",
    height: "40px",
    background: "#444",
    borderRadius: "5px",
  },
  buttonHorizontalRigth: {
    position: "absolute",
    left: "110px",
    top: 30,
    fontSize: 30,
    fontWeight: 600,
    width: "40px",
    height: "40px",
    background: "#444",
    borderRadius: "5px",
  },
  //   buttonSelect: {
  //     position: "absolute",
  //     height: "20px",
  //     width: "70px",
  //     background: "#999",
  //     borderRadius: "10px",
  //     transform: "rotate(-25deg)",
  //     boxShadow: " 0 0 0 5px #dfdfdf",
  //   },
  buttonSelect: {
    borderRadius: "10px",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.2) 14%, rgba(255, 255, 255, 0.5) 15%, rgba(0, 0, 0, 0.2) 50%), #302F33",
    border: "1.5px solid #000",
    width: 80,
    transform: "rotate(-25deg)",
    backgroundRepeat: "no-repeat",
    textShadow: "1px 1px rgb(185 185 184 / 70%)",
    fontWeight: "bold",
    fontFamily: "verdana",
    color: "#E8E8E6",
  },
  buttonStart: {
    borderRadius: "10px",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.2) 14%, rgba(255, 255, 255, 0.5) 15%, rgba(0, 0, 0, 0.2) 50%), #302F33",
    border: "1.5px solid #000",
    width: 80,
    transform: "rotate(-25deg)",
    backgroundRepeat: "no-repeat",
    textShadow: "1px 1px rgb(185 185 184 / 70%)",
    fontWeight: "bold",
    fontFamily: "verdana",
    color: "#E8E8E6",
  },
}));

const Pokemons = () => {
  const [pokemonNow, setPokemonNow] = useState(null);
  const [idPokemon, setIdPokemon] = useState(1);
  const [selectIndex, setSelectIndex] = useState(0);
  const [pokemons, setPokemons] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [loadingImage, setLoadingImage] = useState(false);

  const styles = myStyles();

  const handelPokemon = async (link) => {
    setIdPokemon(idPokemon + 1);
    console.log("cargando");
    try {
      const config = {
        method: "get",
        url: `${link}`,
        headers: {},
      };
      const response = await axios(config);
      console.log(response.data);
      setPokemonNow(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handdlePokemons = async (simbol) => {
    if (simbol === "+") {
      setPagination(pagination + 10);
      try {
        const config = {
          method: "get",
          url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pagination}`,
          headers: {},
        };
        const response = await axios(config);
        setPokemons(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (pagination !== 0) {
        setPagination(pagination - 10);
      }
      try {
        const config = {
          method: "get",
          url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pagination}`,
          headers: {},
        };
        const response = await axios(config);
        setPokemons(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const hola = async () => {
      try {
        const config = {
          method: "get",
          url: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=1",
          headers: {},
        };
        const response = await axios(config);
        setPokemons(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    hola();
  }, []);

  return (
    <Box className={styles.bodyBox}>
      {/* Gameboy */}
      <Box className={styles.gameboyBody}>
        {/* Display */}
        <Box className={styles.screen}>
          <Box className={styles.display}>
            {pokemons !== null ? (
              <>
                {pokemonNow !== null ? (
                  <Box
                    style={{
                      backgroundImage:
                        "url(https://img.freepik.com/vector-premium/paisaje-nocturno-campo-luna-llena_16058-26.jpg)",
                      height: "100%",
                      backgroundSize: "100%",
                      display:'flex',
                      flexDirection:'column',
                      alignContent:'center'
                    }}
                  >
                    <img
                      width={200}
                      style={{ display: "none" }}
                      onLoad={() => setLoadingImage(false)}
                      src={
                        pokemonNow?.sprites?.other?.dream_world?.front_default
                      }
                      alt="Pokemonpng"
                    />
                    {loadingImage ? (
                      <p style={{ color: "white" }}>Cargado Imagen....</p>
                    ) : (
                      <img
                        height={200}
                        onLoad={() => setLoadingImage(false)}
                        src={
                          pokemonNow?.sprites?.other?.dream_world?.front_default
                        }
                        alt="Pokemonpng"
                      />
                    )}
                    <Typography align="center" fontWeight={600} color='white'>Name: {pokemonNow.forms[0].name}</Typography>
                    <Typography align="center" color='white'>Abilities: {pokemonNow.abilities.map((e,i)=>(`${e.ability.name},`))}</Typography>
                    <Typography align="center" color='white'>Estatus: {pokemonNow.stats.map((e,i)=>(`${e.stat.name} => ${e.base_stat} \n`))}</Typography>
                  </Box>
                ) : (
                  <Box
                    style={{
                      pointerEvents: "auto",
                      alignItems: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                  >
                    {selectIndex === 0 ? (
                      <TextField
                        label="Primeros"
                        name="in"
                        variant="outlined"
                        autoFocus
                      />
                    ) : (
                      <Box
                        style={{
                          width: "80%",
                          height: 50,
                          borderRadius: 10,
                          border: "1px solid #aac4af",
                        }}
                      >
                        Segundos
                      </Box>
                    )}

                    {pokemons.map((poke, i) => (
                      <Box
                        style={
                          selectIndex === i + 1
                            ? { background: "red" }
                            : { background: "none" }
                        }
                        key={i}
                      >
                        {poke.name}
                      </Box>
                    ))}
                  </Box>
                )}
              </>
            ) : (
              <>Iniciando....</>
            )}
          </Box>
        </Box>
        <Box className={styles.titleTex}>Nintendo</Box>
        {/* Buttons left rigth top bottom */}
        <Box
          style={{
            background: "red",
            top: "60%",
            left: "10%",
            position: "absolute",
          }}
        >
          <button
            onClick={() =>
              selectIndex === 0
                ? setSelectIndex(10)
                : setSelectIndex(selectIndex - 1)
            }
            className={styles.buttonVerticalTop}
          >
            {">"}
          </button>
          <button
            onClick={() => setSelectIndex((selectIndex + 1) % 11)}
            className={styles.buttonVerticalBottom}
          >
            {"<"}
          </button>
          <button
            onClick={() => console.log("joaa")}
            className={styles.buttonCenter}
          >
            O
          </button>
          <button className={styles.buttonHorizontalLeft}>{"<"}</button>
          <button
            onClick={() => handdlePokemons("+")}
            className={styles.buttonHorizontalRigth}
          >
            {">"}
          </button>
        </Box>
        {/* Buttons A B */}
        <Box
          style={{
            background: "red",
            top: "60%",
            left: "55%",
            position: "absolute",
          }}
        >
          <button
            onClick={() => {
              setLoadingImage(true);
              handelPokemon(pokemons[selectIndex - 1]?.url);
            }}
            className={styles.buttonA}
          >
            A
          </button>
          <button
            onClick={() => setPokemonNow(null)}
            className={styles.buttonB}
          >
            B
          </button>
        </Box>
        {/* Buttons Stard selecd */}
        <Box
          style={{
            top: "80%",
            left: "35%",
            position: "absolute",
          }}
        >
          <button
            onClick={() => console.log("joaa")}
            className={styles.buttonSelect}
          >
            Select
          </button>
          <button
            onClick={() => console.log("joaa")}
            className={styles.buttonStart}
          >
            Stard
          </button>
        </Box>
        <Box
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 400,
            height: 350,
            background: "white",
          }}
        ></Box>
        <Box
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 50,
            borderRadius: "0px 0px  100% 100%",
            background: "white",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Pokemons;
