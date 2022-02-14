import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveGreenFiveStar from "./ResponsiveGreenFiveStar";
const SingleComment = (props) => {
  const matches = useMediaQuery("(min-width:769px)");
  return (
    <>
      <Box
        sx={{
          marginTop: `${matches ? "32px" : "15px"}`,
          borderBottom: "1px solid #d9d9d9",
          paddingBottom: "24px",
        }}
      >
        <Box>
          {matches ? (
            <Rating value={5} size="small" />
          ) : (
            <ResponsiveGreenFiveStar />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={
              matches
                ? { fontSize: "18px", fontWeight: "bold" }
                : { fontSize: "13px", fontWeight: "bold" }
            }
          >
            {props.title}
          </Typography>
          {matches && (
            <Typography
              sx={{
                bgcolor: "#e9f7ef",
                textAlign: "center",
                color: "#27ae60",
                padding: "0 20px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              خرید این محصول را توصیه میکنم
            </Typography>
          )}
        </Box>
        <Typography
          sx={
            matches
              ? { color: "#8c8c8c", fontSize: "14px", margin: "5px 0 20px 0" }
              : { color: "#8c8c8c", fontSize: "12px", margin: "5px 0 20px 0" }
          }
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
