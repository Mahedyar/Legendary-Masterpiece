import { Box, Container, Typography } from "@mui/material";
import BlueButton from "./BlueButton";
import SingleComment from "./SingleComment";
import CommentsRatingBars from "./CommentsRatingBars";
import useMediaQuery from "@mui/material/useMediaQuery";

const Comments = (props) => {
  const matches = useMediaQuery("(min-width:769px)");
  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {matches && (
            <Box sx={{ width: "50%", paddingLeft: "10%" }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                چطور میتوانم درباره این کالا نظر دهم
              </Typography>
              <Typography component="p" sx={{ fontSize: "14px" }}>
                اگر این محصول را از تیمچه خریداری کرده‌اید و یا تجربه استفاده از
                آن را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.
              </Typography>

              <BlueButton width = {"50%"}>افزودن نظر جدید</BlueButton>
            </Box>
          )}

          <Box sx={matches ? {width : "50%" , paddingRight: "10%" }:{ width: "100%" }}>
            <CommentsRatingBars
              fiveStar={props.product.rating.fiveStar}
              fourStar={props.product.rating.fourStar}
              threeStar={props.product.rating.threeStar}
              twoStar={props.product.rating.twoStar}
              oneStar={props.product.rating.oneStar}
            />
            {!matches && <BlueButton width = {"100%"} >افزودن نظر جدید</BlueButton>}
          </Box>
          
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={matches ?{ borderBottom: "1px solid #f0f0f0", paddingBottom: "10px" }:{ borderBottom: "1px solid #d9d9d9", paddingBottom: "5px"}}
          >
            {matches ? <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              نظر کاربران
            </Typography> : <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              جدید ترین نظرات
            </Typography> }
            
          </Box>
          {props.product.comments.map((singleComment) => (
            <SingleComment
              key={singleComment.content}
              title={singleComment.title}
              userName={singleComment.userName}
              content={singleComment.content}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Comments;
