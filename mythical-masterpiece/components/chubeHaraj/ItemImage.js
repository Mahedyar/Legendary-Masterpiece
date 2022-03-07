import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { width } from "@mui/system";
import classes from "../../styles/ItemImage.module.css";



export default function ItemImage(props) {
   
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f5f5f5",
        // width : 215 , 
        // margin: "0 16px",
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
