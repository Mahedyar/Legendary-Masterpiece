import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  margin: "25px 0  ",
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    borderRadius: 5,
  },
}));

// Inspired by the former Facebook spinners.

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <Typography>5 star</Typography>
        <BorderLinearProgress variant="determinate" value={65} />
     
    </Box>
  );
}
