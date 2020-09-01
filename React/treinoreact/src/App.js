import React from "react";
import Main from "./pages/main";
import Routes from "./routes";

import "./styles.css";

import Header from "./components/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
