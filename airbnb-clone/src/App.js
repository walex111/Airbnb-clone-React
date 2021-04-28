import React from "react";
import "./App Styles/App.css";

import Home from "./Home";
import Header from "./Header";

// BEM
const app = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default app;
