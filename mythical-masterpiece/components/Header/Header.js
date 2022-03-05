import { Fragment } from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import HeaderGif from "../../assets/Images/Header/timche-header-add.gif";
import TitlePart from "./TitlePart";
import Menu from "./Menu"
import { Container ,Box} from "@mui/material";


const Header = () => {
  return (
    <>
      <Image className={classes.gifImage} src={HeaderGif} alt="someThing" />
      <Container sx={{marginTop : "15px",zIndex:10}}>
        <TitlePart />
        <Menu/>
      </Container>
        <Box sx={{ borderBottom:"1px solid #d9d9d9",width: '100%' }} />

    </>
  );
};

export default Header;
