import React from "react";

// project imports
import Error from "../views/Error";
import Home from "../views/Home";
import Pokemons from "../views/Pokemons";
import Calculator from "../views/Calculate";
import YoGiHo from "../views/YoGiHo";
import TicTacToe from "../views/TicTacToe";

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const MainRutes = {
  children: [
    { path: "*", element: <Error /> },
    { path: "/", element: <Home /> },
    { path: "/pokemons", element: <Pokemons /> },
    { path: "/yo-gi-oh", element: <YoGiHo /> },
    { path: "/calculadora", element: <Calculator /> },
    { path: "/tic-tac-toe", element: <TicTacToe /> },
  ],
};

export default MainRutes;
