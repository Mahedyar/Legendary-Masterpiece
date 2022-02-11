import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderGif from "../../assets/Images/Header/timche-header-add.gif";
import TitlePart from "./TitlePart";
import Menu from "./Menu"
import { Container } from "@mui/material";

const Header = () => {
  return (
    <>
      <img className={classes.gifImage} src={HeaderGif.src} alt="someThing" />
      <Container sx={{marginTop : "15px"}}>
        <TitlePart />
        <Menu/>
      </Container>
    </>
  );
};

export default Header;
