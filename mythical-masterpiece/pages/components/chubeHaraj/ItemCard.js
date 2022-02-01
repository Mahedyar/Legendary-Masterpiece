import Paper from "@mui/material/Paper";
import ItemImage from "./ItemImage";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function ItemCard() {
  return (
           <Box
      sx={{
        // minWidth: 275 ,
        // m: 2,
        marginLeft : 2 , paddingTop : 3 , marginBottom : 3 , 
        boxSizing: "border-box",
        width: 250,
      }}
    >
      <ItemImage />
      <Typography
        sx={{
          textAlign: "right",
          marginBottom : 2 ,
          marginTop : 1
        }}
      >
        سنتور 4 مهر ویژه مدل فرد
      </Typography>
      <Typography sx={{ display: "flex" }}>
        <Typography
          sx={{
            backgroundColor: "yellow",
            fontWeight: "bold",
            marginRight: 1,
          }}
        >
          %۴۲
        </Typography>
        <Typography
          sx={{
            textDecoration: "line-through",
            color: "gray",
          }}
        >
          ۴۰۰۰۰۰۰
        </Typography>
      </Typography>
      <Typography sx={{ display: "flex" , alignItems : "center" }}>
        <Typography
          sx={{
            marginRight: 1,
            color : "gray"
          }}
        >
          تومان
        </Typography>
        <Typography sx = {{fontWeight : "bold" , fontSize : 20}}>۲۳۰۰۰۰۰</Typography>
      </Typography>
    </Box>

      
   
  );
}
