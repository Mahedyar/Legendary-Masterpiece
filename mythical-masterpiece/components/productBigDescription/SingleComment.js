import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const SingleComment = () => {
  return (
    <>
      <Box sx={{ marginTop: "32px" , borderBottom : "1px solid #d9d9d9" ,paddingBottom : "24px"}}>
        <Rating value={5} size="small" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            یکی از بهترین مدل های سامسونگ
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
          کاربر تیمچه
        </Typography>
        <Typography sx={{ color: "#595959", fontSize: "14px" }}>
          من یکی از طرفدارای برند سامسونگم و به نظرم این برند بهترین گوشی های
          دنیا رو داره. گوشی Galaxy A32 یه گوشی فوق العاده زیبا با طراحی جدیده
          که قابلیت های زیادی داره. چند هفته ایه که رنگ سفیدش و خریدم باید بگم
          از عکسش هم خیلی خوشگل تره. وزن خیلی سبکی داره و به نظرم برای خانوم ها
          خیلی گزینه خوبیه. دوربین این گوشی در نور زیاد خیلی باکیفیته و وقتی توی
          نور کم باهاش عکس یا فیلم میگیرم احساس میکنم کمی بی کیفیت میشه. حافظه
          داخلی خیلی خوبی داره و از کارت اس دی هم پشتیبانی میکنه و این یعنی با
          این گوشی هیچ وقت دچار کمبود حافظه نمیشید
        </Typography>
      </Box>
    </>
  );
};

export default SingleComment;
