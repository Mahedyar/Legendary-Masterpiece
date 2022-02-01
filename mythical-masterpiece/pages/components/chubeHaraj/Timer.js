import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Timer = (props) => {
  
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

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
          if(hours > 0){
            setHours(hours - 1);
          }else{
              setHours(23)
          }
        
        setMinutes(59);
      }
      setSeconds(59);
    }
  };

  return (
    <div>
      <Typography sx={{color : "white" , fontSize : "25px"}}>
        {HourglassBottomIcon}{hours}:{minutes}:{seconds}
      </Typography>
    </div>
  );
};

export default Timer;
