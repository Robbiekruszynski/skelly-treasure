import React from "react";
import logo from "./ethereumLogo.png";
import { addresses, abis } from "@project/contracts";
import { gql } from "apollo-boost";
import { ethers } from "ethers";
import { useQuery } from "@apollo/react-hooks";
import GameScreen from "./components/GameScreen";
// import { BrowserRouter, Router, Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IntroScreen } from "./components/IntroScreen";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <IntroScreen />
          </li>
        </ul>
        <GameScreen />
      </div>
    </Router>
  );
}

export default App;
