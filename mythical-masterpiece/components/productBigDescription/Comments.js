import { Box, Container, Typography } from "@mui/material";
import BlueButton from "./BlueButton";
import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <BlueButton padding="10px 60px">افزودن نظر جدید</BlueButton>
          </Box>
          <Box sx={{ width: "50%", paddingRight: "10%" }}>4.6</Box>
        </Box>
        <Box sx={{ marginTop: "200px" }}>
          <Box sx={{borderBottom : "1px solid #f0f0f0" , paddingBottom : "10px"}}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold"  }}>
              نظر کاربران
            </Typography>
          </Box>
          <SingleComment/>
        </Box>
      </Container>
    </>
  );
};

export default Comments;
