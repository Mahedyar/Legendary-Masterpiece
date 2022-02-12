import { Box, Typography } from "@mui/material";
import NumberToPersian from "../../chubeHaraj/NumberToPersian";



const ProgressBar = (props) => {
  return (
    <>
      <Box className="rateContainer">
        <Typography sx={{ color: "#8c8c8c" }}>{props.rateType}</Typography>
        <Box className="bar containerBar">
          <Box
            className="bar "
            style={{ backgroundColor: props.backgroundColor, width: `${props.percent}%` }}
          ></Box>
        </Box>
        <Typography sx={{ color: "#8c8c8c", display: "flex" }}>
          %<NumberToPersian number={props.percent} />
        </Typography>
      </Box>
    </>
  );
};

export default ProgressBar;
