import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';

const SearchBox = () => {
  return (
    <>
      <Box
        sx={{
          marginRight: "50px",
          bgcolor: "#f5f5f5",
          width: "70%",
          height: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
          borderRadius : "5px"
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="جستجو در تیمچه..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <SearchIcon sx={{color : "gray"}} />
      </Box>
    </>
  );
};

export default SearchBox;
