import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

const KalaPreviewTitle = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <ArrowBackIcon />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            marginLeft: "5px",
          }}
        >
          مشاهده بیشتر
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
        {props.previewTitle}
      </Typography>
    </Box>
  );
};

export default KalaPreviewTitle