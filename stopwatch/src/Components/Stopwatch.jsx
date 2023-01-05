import React from "react";
import { Button } from "@chakra-ui/react";
import "../App.css";
const Stopwatch = () => {
  const [running, setRunning] = React.useState(false);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [milisec, setMilisec] = React.useState(0);

  React.useEffect(() => {
    let id;
    if (running) {
      id = setInterval(() => {
        setSecond(second + 1);

        if (second < 59) {
          setMinute((prev) => prev + 1);
          setSecond(0);
        } else if (minute < 59) {
          setHour((prev) => prev + 1);
          setMinute(0);
        }
      }, 1000);
    }
    return () => clearInterval(id);
  }, [minute, second, milisec, hour, running]);

  const startwatch = () => {
    setRunning(true);
  };

  const pausewatch = () => {
    setRunning(false);
  };
  return (
    <div>
      <div className="watch">
        <span>{hour >= 10 ? hour : "0" + hour}</span>
        <span>:</span>
        <span>{minute >= 10 ? minute : "0" + minute}</span>
        <span>:</span>
        <span>{second >= 10 ? second : "0" + second}</span>
        {/* <span>:</span> */}
        {/* <span>{milisec >= 10 ? milisec : "0" + milisec}</span> */}
      </div>

      <div className="btn">
        {!running && (
          <Button colorScheme="teal" variant="outline" onClick={startwatch}>
            Start
          </Button>
        )}
        {running && (
          <Button colorScheme="teal" variant="outline" onClick={pausewatch}>
            Pause
          </Button>
        )}
        {running && (
          <Button colorScheme="teal" variant="outline">
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
