import Link from 'next/link'
import Box from "@mui/material/Box";
import timcheLogo from "../../public/Images/Header/Timche.svg";
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
            <Link href={'/'}><img src={timcheLogo.src} /></Link>
          <SearchBox />
        </Box>
        <TitlePartIcons />
      </Box>
    </>
  );
};

export default TitlePart;
