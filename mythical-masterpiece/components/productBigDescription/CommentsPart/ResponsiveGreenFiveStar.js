import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ResponsiveGreenFiveStar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding : "2px 8px" ,
          width: "45px",
          height: "20px",
          backgroundColor: "#27ae60",
          alignItems : "center" ,
          justifyContent : "space-between" ,
          borderRadius : "5px" ,
          marginBottom : "10px"
        }}
      >
       
        <StarIcon sx={{ color: "white" , width : "16px" , height : "16px"}} />
        <Typography sx = {{color : "white"}}>۵</Typography>
      </Box>
    </>
  );
};

export default ResponsiveGreenFiveStar;
