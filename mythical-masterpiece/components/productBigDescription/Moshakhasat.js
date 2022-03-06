import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "15px",
  textAlign: "right",
  color: theme.palette.text.secondary,
  backgroundColor: "#fafafa",
  boxShadow: "none",
  fontWeight: "bold",
}));

const BlankItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "15px",
  textAlign: "right",
  color: theme.palette.text.secondary,
  backgroundColor: "#ffffff",
  boxShadow: "none",
}));

export default function Moshakhasat(props) {
  const matches = useMediaQuery("(min-width:769px)");
  const blankMaker = (description) => {
    if (description.length > 1) {
      let remainingDescriptions = description.slice(1, description.length);

      return remainingDescriptions.map((content) => (
        <>
          {matches && (
            <Grid item xs={3}>
              <BlankItem></BlankItem>
            </Grid>
          )}

          <Grid item xs={matches ? 9 : 12}>
            <Item sx ={matches ? {} : {fontSize : "13px"}}>{content}</Item>
          </Grid>
        </>
      ));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Typography sx={{fontSize : `${matches ? "18px" : "16x" }` , fontWeight : "bold" , margin : "0 12px 10px 0"}}>مشخصات</Typography>
      <Grid container spacing={2}>
        
        {props.properties.map((property) => (
          <>
            <Grid item xs={matches ? 3 : 12}>
              <Item sx={matches ? {} : {backgroundColor : "#f0f0f0" , fontSize : "13px"}}>{property.title}</Item>
            </Grid>
            <Grid item xs={matches ? 9 : 12}>
              <Item sx ={matches ? {} : {fontSize : "13px"}}>{property.description[0]}</Item>
            </Grid>
            {blankMaker(property.description)}
          </>
        ))}
      </Grid>
    </Box>
  );
}
