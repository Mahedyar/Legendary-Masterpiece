import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

function numberToPersian(number) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  number = number.toString().split("");
  let persianNumber = "";
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
}
const Timer = (props) => {
  const initialTime = {
    hours: 23,
    minutes: 59,
    seconds: 59,
  };

  const [hours, setHours] = useState(initialTime.hours);
  const [minutes, setMinutes] = useState(initialTime.minutes);
  const [seconds, setSeconds] = useState(initialTime.seconds);

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [seconds]);

  const updateTime = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else {
        if (hours > 0) {
          setHours(hours - 1);
        } else {
          setHours(23);
        }

        setMinutes(59);
      }
      setSeconds(59);
    }
  };

  return (
    <div>
      <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
        <HourglassBottomIcon />
        {numberToPersian(hours)}:{numberToPersian(minutes)}:
        {numberToPersian(seconds)}
      </Typography>
    </div>
  );
};

export default Timer;
