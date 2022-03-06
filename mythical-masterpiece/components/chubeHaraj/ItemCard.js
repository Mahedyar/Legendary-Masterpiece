import ItemImage from "./ItemImage";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Link from 'next/link'

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
        ",": ",",

    };
    number = `${number}`.split("");
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
    const numberDotmaker = (number) => {
        let parts = `${number}`.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(",");
    }
    const finalPrice = () => {
        return numberToPersian(numberDotmaker((props.product.price * (100 - props.product.offPercent)) / 100))
    };

    return (
        <Link href={`/${props.product.id}`}>
            <Box
                key={props.product.id}
                sx={{
                    height: props.fullSize ? 388 : 403,
                    width: props.fullSize ? 215 : 240,
                    boxSizing: "border-box",
                }}
            >
                <ItemImage image={props.product.image}/>

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
                <Typography component="div" sx={{display: "flex", direction: "ltr"}}>
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
                        {numberToPersian(numberDotmaker(props.product.price))}
                    </Typography>
                </Typography>
                <Typography
                    component="div"
                    sx={{display: "flex", alignItems: "center", direction: "ltr"}}
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
        </Link>
    );
}
