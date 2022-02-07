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
  backgroundColor: "#fafafa",
  boxShadow: "none",
  fontWeight : "bold"
}));

const BlankItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "15px",
  textAlign: "right",
  color: theme.palette.text.secondary,
  backgroundColor: "#ffffff",
  boxShadow: "none",
  
}));

const properties = [
  {
    id: 1,
    title: "قابلیت ها",
    description: [
      "تمیز کنندگی , سفید کنندگی , براق کنندگی , لکه زدایی , جلوگیری از رسوبات آهکی در ماشین ظرفشویی",
      "تست ",
      "سلام دنیا",
    ],
  },
  {
    id: 2,
    title: "رایحه",
    description: ["سلام", "چه خبر ؟"],
  },
];
export default function Moshakhasat() {
  const blankMaker = (description) => {
    if (description.length > 1) {
      let remainingDescriptions = description.slice(1, description.length);
      console.log(remainingDescriptions);

      return remainingDescriptions.map((content) => (
        <>
          <Grid item xs={3}>
            <BlankItem></BlankItem>
          </Grid>

          <Grid item xs={9}>
            <Item>{content}</Item>
          </Grid>
        </>
      ));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {properties.map((property) => (
          <>
            <Grid item xs={3}>
              <Item>{property.title}</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{property.description[0]}</Item>
            </Grid>
            {blankMaker(property.description)}
          </>
        ))}
      </Grid>
    </Box>
  );
}
