import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const SingleComment = (props) => {
  return (
    <>
      <Box  sx={{ marginTop: "32px" , borderBottom : "1px solid #d9d9d9" ,paddingBottom : "24px"}}>
          
        <Rating value={5} size="small" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e9f7ef",
              textAlign: "center",
              color: "#27ae60",
              padding: "0 20px",
              borderRadius: "5px",
              fontSize: "14px"
            }}
          >
            خرید این محصول را توصیه میکنم
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#8c8c8c", fontSize: "14px", margin: "5px 0 20px 0" }}
        >
          {props.userName}
        </Typography>
        <Typography sx={{ color: "#595959", fontSize: "14px" }}>
          {props.content}
        </Typography>
      </Box>
    </>
  );
};

export default SingleComment;
