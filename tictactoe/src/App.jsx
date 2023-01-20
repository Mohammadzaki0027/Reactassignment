import React, { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      <h4>Tic Tac Toe</h4>
      <div className={`winner ${winner !== "" ? "" : "flip_flop"}`}>
        <div className="winner-text">{winner}</div>

        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>

      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
}

export default App;
