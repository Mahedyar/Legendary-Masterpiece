import Paper from "@mui/material/Paper";
import ItemImage from "./ItemImage";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function ItemCard() {
  return (
    <Box
      sx={{
        height: 388,
        marginLeft: 2,
        paddingTop: 3,
        marginBottom: 3,
        boxSizing: "border-box",
        width: 215,
      }}
    >
      <ItemImage />
      <Typography
        component="div"
        sx={{
          textAlign: "right",
          marginBottom: 2,
          marginTop: 1,
        }}
      >
        سنتور 4 مهر ویژه مدل فرد
      </Typography>
      <Typography component="div" sx={{ display: "flex" }}>
        <Typography
          component="span"
          sx={{
            backgroundColor: "yellow",
            fontWeight: "bold",
            marginRight: 1,
          }}
        >
          %۴۲
        </Typography>
        <Typography
          component="span"
          sx={{
            textDecoration: "line-through",
            color: "gray",
          }}
        >
          ۴۰۰۰۰۰۰
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography
          component="span"
          sx={{
            marginRight: 1,
            color: "gray",
          }}
        >
          تومان
        </Typography>
        <Typography component="span" sx={{ fontWeight: "bold", fontSize: 20 }}>
          ۲۳۰۰۰۰۰
        </Typography>
      </Typography>
    </Box>
  );
}
