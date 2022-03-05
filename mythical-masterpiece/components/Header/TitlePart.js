import Link from 'next/link'
import Box from "@mui/material/Box";
import Image from "next/image";
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
            <Link href={'/'}><Image src={timcheLogo} /></Link>
          <SearchBox />
        </Box>
        <TitlePartIcons />
      </Box>
    </>
  );
};

export default TitlePart;
