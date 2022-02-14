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
          justifyContent: "space-between",
          direction: "rtl",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon sx={{ color: "gray" }} />
          <Typography>ارسال رایگان به سراسر کشور</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon />
          <Typography>ارساfsdfsf سراسر کشور</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon />
          <Typography>ارسال رایگان به سراسر کشور</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon />
          <Typography>ارسال رایگان به سراسر کشور</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <LocalShippingIcon />
          <Typography>ارسال رایگان به سراسر کشور</Typography>
        </Box>
      </Box>
    </>
  );
};

export default DescriptionTopBar;
