import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "15px",
  textAlign: "right",
  color: theme.palette.text.secondary,
  backgroundColor : "#fafafa" ,
  boxShadow : "none"
}));

const properties = [
    {
        id: 1,
        قطر: "۱۰.۷ میلی متر",
      },
      {
        id: 2,
        image: drill.src,
        
      }
]
export default function Moshakhasat() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>قطر قاب</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>10.7 میلی متر</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
