import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Typography } from "@mui/material";

const DescriptionTopBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          direction: "rtl",
          height : "86px" ,
          width : "100%" ,
          backgroundColor : "#fafafa",
          borderRadius : "10px" ,
          borderColor : "#d9d9d9",
          border:'2px solid #d9d9d9',
          paddingTop:"3.4vh",
          marginTop:'20px'


        }}
      >
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon sx={{ color: "#8c8c8c" , marginLeft : "5px" }} />
          <Typography>ارسال رایگان به سراسر کشور</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CalendarTodayIcon sx={{ color: "#8c8c8c" , marginLeft : "5px" }}/>
          <Typography>۱۰ روز ضمانت بازگشت</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <SupportAgentIcon sx={{ color: "#8c8c8c" , marginLeft : "5px" }}/>
          <Typography>پشتیبانی تا ۱۲ شب، حتی جمعه ها</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CheckCircleOutlineIcon sx={{ color: "#8c8c8c" , marginLeft : "5px" }}/>
          <Typography>تضمین اصالت کالا</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CreditCardIcon sx={{ color: "#8c8c8c" , marginLeft : "5px" }} />
          <Typography>امکان خرید اقساطی</Typography>
        </Box>
      </Box>
    </>
  );
};

export default DescriptionTopBar;
