import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import timcheLogo from "../../assets/Images/Header/Timche.svg";
import SearchBox from "./SearchBox";
import TitlePartIcons from "./TitlePartIcons";

const TitlePart = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          direction: "rtl",
          alignItems: "center",
          justifyContent: "space-between",

        }}
      >
        <Box sx={{display : "flex" , width : "60%"}}>
          <img src={timcheLogo.src}></img>
          <SearchBox />
        </Box>
        <TitlePartIcons />
      </Box>
    </>
  );
};

export default TitlePart;
