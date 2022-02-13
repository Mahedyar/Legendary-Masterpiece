import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import useMediaQuery from '@mui/material/useMediaQuery';


const SearchBox = () => {
    const matches = useMediaQuery('(min-width:1025px)');
  return (
    <>
      <Box
        sx={{
          marginRight:matches? "50px":'0',
          bgcolor: "#f5f5f5",
          width: matches?"70%":"100%",
          height: "48px",
          display: "flex",
          justifyContent:matches? "space-between":"center",
          alignItems: "center",
          padding: "0 10px",
          borderRadius : "5px",
          marginTop:matches?"":"5px",
          marginBottom:matches?"":"5px",

        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          placeholder="جستجو در تیمچه..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <SearchIcon sx={{color : "gray"}} />
      </Box>
    </>
  );
};

export default SearchBox;
