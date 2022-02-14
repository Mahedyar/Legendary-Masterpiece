import { Box, Container, Typography } from "@mui/material";
import BlueButton from "./BlueButton";
import SingleComment from "./SingleComment";
import ProgressBar from "./ProgressBar";
import CommentsRatingBars from "./CommentsRatingBars";
import useMediaQuery from "@mui/material/useMediaQuery";

const comments = [
  {
    id: 1,
    title: "بافت خوب و غلیظ",
    userName: "کاربر تیمچه",
    content:
      "بافت خوب و غلیظی داره و یه مقدارش برای کلی سالاد کافیه. همیشه تو سبد خریم هست",
  },
  {
    id: 2,
    title: "محصول خوب کاله",
    userName: "کاربر تیمچه",
    content:
      "اولین بار بود کاله میخرم و فک کنم از این به بعد مشتریش بشم. خیلی خوب بود",
  },
  {
    id: 3,
    title: "دلچسب و خوشمزه",
    userName: "کاربر تیمچه",
    content: "همه محصولای کاله خوش طعم و دلچسبن. این سسش هم طعم خیلی خوبی داره",
  },
  {
    id: 4,
    title: "تازه و طعم خوب",
    userName: "کاربر تیمچه",
    content:
      "طعم خوبی داره و کاملا تازه بود. پای ثابت خونه ماست و همیشه از همین برند سس میخریم",
  },
];

const Comments = () => {
  const matches = useMediaQuery("(min-width:769px)");
  // console.log(matches);
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
              fiveStar={15}
              fourStar={4}
              threeStar={3}
              twoStar={2}
              oneStar={1}
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
          {comments.map((singleComment) => (
            <SingleComment
              key={singleComment.id}
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
