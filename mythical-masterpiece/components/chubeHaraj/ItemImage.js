import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { width } from "@mui/system";
import classes from "./ItemImage.module.css";
import useWindowSize from "../../utils/useWindowSize";


export default function ItemImage(props) {
    const windowSize = useWindowSize()
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f5f5f5",
        
        margin: "0 16px",
        height: 270,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={props.image} className={classes.image} />
    </Paper>
  );
}
