import { Typography } from "@mui/material";

function numberToPersian(number) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
    "." : "."
  };
  number = number.toString().split("");
  let persianNumber = "";
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
}

const NumberToPersian = (props) => {
    const inputNumber = props.number
    
  return <Typography sx={{fontWeight : props.fontWeight , fontSize : props.fontSize}}>{numberToPersian(inputNumber)}</Typography>;
};

export default NumberToPersian;
