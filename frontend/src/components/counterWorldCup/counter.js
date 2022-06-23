import React, { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./countDownTimerUtils";
import "../../styles/stylesNavBar2.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Counter = ({ countDownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countDownTimestampMs]);

  function updateRemainingTime(countDown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countDown));
  }
  return (
    <div className="counterMargin">
      <span>
        <img
          className="logoCup"
          src={process.env.PUBLIC_URL + `../img/copa.png`}
        />
      </span>
      <span className="tittleCounter">FIFA WORLD CUP:</span>
      <span>{remainingTime.days}</span>
      <span>:</span>
      <span>{remainingTime.hours}</span>
      <span>:</span>
      <span>{remainingTime.minutes}</span>
      <span>:</span>
      <span>{remainingTime.seconds}</span>
    </div>
  );
};

export default Counter;
