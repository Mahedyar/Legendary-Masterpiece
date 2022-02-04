import {Grid} from "@mui/material";
import AdvantagesItems from "./AdvantagesItems";

export default function Advantages() {
    const advantages = [
        {
            id: 5,
            title: "پشتیبانی تا 12 شب ",
            description: "حتی جمعه ها",
            image: "https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/advantage_5_new.svg"
        },
        {
            id: 4,
            title: "تضمین اصالت کالا",
            description: "!واقعی",
            image: "https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/advantage_4_new.svg"
        },
        {
            id: 3,
            title: "امکان خرید اقساطی",
            description: "بدون چک و ضامن",
            image: "https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/advantage_3_new.svg"
        },
        {
            id: 2,
            title: "روز ضمانت بازگشتی 10",
            description: "!حتی سلیقه ای",
            image: "https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/advantage_2_new.svg"
        },
        {
            id: 1,
            title: "ارسال رایگان",
            description: "بدون محدودیت قیمت",
            image: "https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/advantage_1_new.svg"
        },

    ]

    return (
        <>

            <hr/>
            <Grid sx={{paddingRight:10}}  container rowSpacing={1} columnSpacing={{xs: 0, sm: 0, md: 0}}>
                {advantages.map((item) => <AdvantagesItems
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}/>)
                }
            </Grid>

        </>
    )
}