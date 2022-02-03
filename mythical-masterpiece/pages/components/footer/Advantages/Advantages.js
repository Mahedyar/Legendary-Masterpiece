import {Grid, Box,Container} from "@mui/material";
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
            description: "واقعی!",
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
            title: "10 روز ضمانت بازگشت",
            description: "حتی سلیقه ای!",
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
            <Container  maxWidth={'lg'}>
                <Box sx={{width: '100%', margin: 'auto'}}>
                    <Grid container  >
                        {advantages.map((item) => <AdvantagesItems
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}/>)
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    )
}