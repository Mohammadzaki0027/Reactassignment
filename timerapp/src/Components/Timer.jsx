import React, { useEffect } from "react";
import Ctimer from "./Ctimer";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
const Timer = () => {
  const [hours, setHours] = React.useState(0);

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [milisecondes, setMilisecondes] = React.useState(0);
  const [runnings, setRunnings] = React.useState(null);
  const houchange = (e) => {
    setHours(e.target.value);
  };
  const minchange = (e) => {
    setMinutes(e.target.value);
  };

  const secchange = (e) => {
    setSeconds(e.target.value);
  };
  const mecsecchange = (e) => {
    setMilisecondes(e.target.value);
  };
  const startwatch = () => {
    if (hours !== 0 || seconds !== 0 || minutes !== 0 || milisecondes !== 0) {
      setRunnings(true);
    } else {
      alert("Set Some Value");
    }
  };
  const pausetimer = () => {
    setRunnings(false);
  };

  const stopwatch = () => {
    resettimer();
  };

  const resettimer = () => {
    setRunnings(false);
    setHours(0);
    setMinutes(0);
    setMilisecondes(0);
    setSeconds(0);
  };
  useEffect(() => {
    let interval;
    if (runnings) {
      interval = setInterval(() => {
        if (milisecondes > 0) {
          setMilisecondes((milisecondes) => milisecondes - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilisecondes(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilisecondes(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setSeconds(59);
          setMinutes(59);
          setMilisecondes(99);
        }
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [milisecondes, seconds, runnings, minutes, hours]);

  return (
    <>
      <h1>CountDown Timer </h1>

      <Ctimer
        milisecondes={milisecondes}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        houchange={houchange}
        minchange={minchange}
        secchange={secchange}
        mecsecchange={mecsecchange}
      />
      <br />

      {!runnings && (
        <button
          className="btn btn-accept btn-lg"
          style={{ backgroundColor: "blue", margin: "1rem" }}
          onClick={startwatch}
        >
          <BsFillPlayFill></BsFillPlayFill>
        </button>
      )}
      {runnings && (
        <button className="btn btn-waring btn-lg" onClick={pausetimer}>
          <BsPauseFill></BsPauseFill>
        </button>
      )}
      <button
        className="btn btn-danger btn-lg"
        style={{ backgroundColor: "red" }}
        onClick={stopwatch}
      >
        <BsStopFill></BsStopFill>
      </button>
    </>
  );
};

export default Timer;
