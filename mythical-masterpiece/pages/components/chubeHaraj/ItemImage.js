import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Santur from "../../assest/Images/ChubeHaraj/img_1.png"
import { width } from '@mui/system';
import classes from "./ItemImage.module.css"

export default function ItemImage() {
    
  return (
   
      <Paper elevation={0} sx={{
          backgroundColor : "#f5f5f5" ,
          
          height : 270  , 
          display : "flex" ,
          justifyContent : "center",
          alignItems : "center"
      }}  >
          <img 
          src={Santur.src}
          className={classes.image}
          />
      </Paper>
     
    
  );
}