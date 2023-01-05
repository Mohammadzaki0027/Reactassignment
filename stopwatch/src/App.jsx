import React, { useState } from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <div className="App">
      <h1>Stopwatch</h1>

      <div className="container">
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
