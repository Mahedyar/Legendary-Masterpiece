import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderGif from "../../assets/Images/Header/timche-header-add.gif";
import TitlePart from "./TitlePart";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <>
      <img className={classes.gifImage} src={HeaderGif.src} alt="some shit" />
      <Container sx={{marginTop : "15px"}}>
        <TitlePart />
      </Container>
    </>
  );
};

export default Header;
