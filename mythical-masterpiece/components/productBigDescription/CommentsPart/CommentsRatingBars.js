import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import ProgressBar from "./ProgressBar";
import Rating from "@mui/material/Rating";
import NumberToPersian from "../../chubeHaraj/NumberToPersian";

const CommentsRatingBars = (props) => {
    const totalComments =
        +props.fiveStar +
        +props.fourStar +
        +props.threeStar +
        +props.twoStar +
        +props.oneStar;

    const voteValue =
        +props.fiveStar * 5 +
        +props.fourStar * 4 +
        +props.threeStar * 3 +
        +props.twoStar * 2 +
        +props.oneStar;

    const finalValue =
        Math.round((voteValue / (totalComments * 5)) * 5 * 10) / 10;

    return (
        <>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <NumberToPersian fontSize="24px" fontWeight="bold" number={finalValue}/>

                <Rating value={finalValue} size="small" sx={{margin: "0 8px"}}/>
                <Typography sx={{color: "#8c8c8c", display: "flex"}}>
                    از
                    <Box sx={{margin: "0 3px"}}>
                        <NumberToPersian number={totalComments}/>
                    </Box>
                    نفر
                </Typography>
            </Box>
            <ProgressBar
                rateType={"۵ ستاره"}
                backgroundColor={"#27ae60"}
                percent={Math.floor((props.fiveStar / totalComments) * 100)}
            />
            <ProgressBar
                rateType={"۴ ستاره"}
                backgroundColor={"#57ce7e"}
                percent={Math.floor((props.fourStar / totalComments) * 100)}
            />
            <ProgressBar
                rateType={"۳ ستاره"}
                backgroundColor={"#ffc070"}
                percent={Math.floor((props.threeStar / totalComments) * 100)}
            />
            <ProgressBar
                rateType={"۲ ستاره"}
                backgroundColor={"#ff7f11"}
                percent={Math.floor((props.twoStar / totalComments) * 100)}
            />
            <ProgressBar
                rateType={"۱ ستاره"}
                backgroundColor={"#db3948"}
                percent={Math.floor((props.oneStar / totalComments) * 100)}
            />
        </>
    );
};

export default CommentsRatingBars;
