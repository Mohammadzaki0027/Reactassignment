import "./Board.css";

import { useState, useEffect, useRef } from "react";
import Info from "./Info";
const Board = ({ reset, setReset, winner, setWinner }) => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(0);
  const boardRef = useRef(null);
  const draw = (e, no) => {
    if (data[no - 1] === "" && winner === "") {
      const value = turn === 0 ? "X" : "0";

      data[no - 1] = value;
      e.target.innerText = value;
      setTurn(turn === 0 ? "X" : 0);
    }
  };
  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);

    let child = boardRef.current.children;

    for (let i = 0; i < child.length; i++) {
      child[i].innerText = "";
    }
    setTurn(0);
    setWinner("");
    setReset(false);
  }, [reset,setWinner,setReset]);

  useEffect(() => {
    const checkrow = () => {
      let answer = false;
      for (let i = 0; i < data.length; i += 3) {
        if (
          data[i] === data[i + 1] &&
          data[i] === data[i + 2] &&
          data[i] !== ""
        ) {
          answer = true;
        }
      }
      return answer;
    };

    const checkcol = () => {
      let answer = false;
      for (let i = 0; i < 3; i++) {
        if (
          data[i] === data[i + 3] &&
          data[i] === data[i + 6] &&
          data[i] !== ""
        ) {
          answer = true;
        }
      }
      return answer;
    };
    const checkdia = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };
    const checkwin = () => {
      return checkcol() || checkdia() || checkrow();
    };
    const checktie = () => {
      let count = 0;
      data.forEach((e) => {
        if (e !== "") {
          count++;
        }
      });
      return count === 9;
    };
    if (checkwin()) {
      setWinner(turn === 0 ? "Player 2" : "Player 1");
    } else if (checktie()) {
      setWinner("It is tie");
    }
  }, [turn]);
  return (
    <>
      <div ref={boardRef} className="board">
        <div className="input input-1" onClick={(e) => draw(e, 1)}></div>
        <div className="input input-2" onClick={(e) => draw(e, 2)}></div>
        <div className="input input-3" onClick={(e) => draw(e, 3)}></div>
        <div className="input input-4" onClick={(e) => draw(e, 4)}></div>
        <div className="input input-5" onClick={(e) => draw(e, 5)}></div>
        <div className="input input-6" onClick={(e) => draw(e, 6)}></div>
        <div className="input input-7" onClick={(e) => draw(e, 7)}></div>
        <div className="input input-8" onClick={(e) => draw(e, 8)}></div>
        <div className="input input-9" onClick={(e) => draw(e, 9)}></div>
      </div>

      <Info />
    </>
  );
};

export default Board;
