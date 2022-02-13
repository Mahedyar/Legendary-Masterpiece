import Paper from "@mui/material/Paper";
import ItemImage from "./ItemImage";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

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

export default function ItemCard(props) {
    const finalPrice = () => {
        return numberToPersian(
            (props.product.price * (100 - props.product.offPercent)) / 100
        );
    };

    return (
        <Box
            key={props.product.id}
            sx={{
                height: 388,
                // marginLeft: 2,
                // paddingTop: props.cardsPaddingTop,
                padding: "16px",
                marginBottom: 3,
                boxSizing: "border-box",
                width: 215,
                minWidth: "138px"
            }}
        >
            <ItemImage image={props.product.image[0]}/>

            <Typography
                component="div"
                sx={{
                    textAlign: "right",
                    marginBottom: 2,
                    marginTop: 1,
                }}
            >
                {props.product.name}
            </Typography>
            <Typography component="div" sx={{display: "flex"}}>
                <Typography
                    component="span"
                    sx={{
                        backgroundColor: "yellow",
                        fontWeight: "bold",
                        marginRight: 1,
                    }}
                >
                    {`%${numberToPersian(props.product.offPercent)}`}
                </Typography>
                <Typography
                    component="span"
                    sx={{
                        textDecoration: "line-through",
                        color: "gray",
                    }}
                >
                    {numberToPersian(props.product.price)}
                </Typography>
            </Typography>
            <Typography
                component="div"
                sx={{display: "flex", alignItems: "center"}}
            >
                <Typography
                    component="span"
                    sx={{
                        marginRight: 1,
                        color: "gray",
                    }}
                >
                    تومان
                </Typography>
                <Typography component="span" sx={{fontWeight: "bold", fontSize: 20}}>
                    {finalPrice()}
                </Typography>
            </Typography>
        </Box>
    );
}
