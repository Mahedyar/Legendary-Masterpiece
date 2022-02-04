// import ShowMoreText from "react-show-more-text";
import React, { useState } from "react";
import {Box, Grid} from "@mui/material"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function AboutFooterHolder() {
    const text = "تیمچه، فروشگاهی اینترنتی با مدل بازارگاه یا «MarketPlace» است که با تنوع ده‌ها هزار کالا در دسته‌های متفاوت، خرید آنلاین همه‌چیز را برای همه در سراسر کشور امکان‌پذیر کرده است. لندو، اولین و بزرگ‌ترین استارتاپ ایرانی در حوزه خرید اقساطی، فروشگاه اینترنتی تیمچه را راه‌اندازی کرده است. ارسال رایگان به سراسر کشور، ضمانت اصل بودن کالا، ضمانت ده‌روزه بازگشت کالا، پشتیبانی در هفت روز هفته و امکان خرید اقساطی کالاها، مزایایی است که تیمچه برای خلق یک تجربه متفاوت از خرید آنلاین فراهم کرده است. در تیمچه سبدهایتان را با هرچیزی که در فکرش بودید، پر می‌کنیم. از موبایل و تلویزیون و دوربین گرفته تا ساز و ابزار و پوشیدنی و خوردنی!";
    const moreText="تیمچه از گوشی موبایل، لپ‌تاپ، گجت‌های هوشمند، هارد اکسترنال، اسپیکر، هدفون و پاور بانک تا لوازم خانگی مثل یخچال فریزر و ماشین ظرفشویی و لباسشویی را برای هر سلیقه و بودجه‌ای گرد هم آورده است. در تیمچه می‌توانید تنوعی از برندهای معتبر مثل اپل، سامسونگ، ال‌جی، شیائومی و هواوی را پیدا کنید. برای خرید پوشاک، تیمچه دست شما را در انتخاب از میان برندهای ایرانی و خارجی معتبر باز می‌گذارد و اکسسوری‌های موردعلاقه‌ شما را برای ساختن استایل منحصر به فردتان ارائه می‌دهد؛ تنوعی از ساعت مچی و زیورآلات از جمله گردنبند و دستبند و گوشواره و انگشتر و… را می‌توانید در تیمچه پیدا کنید. اگر به زیبایی و سلامت خود اهمیت می‌دهید، مجموعه‌ای از لوازم آٰرایشی و بهداشتی را از محبوب‌ترین برندهای داخلی و خارجی مثل نیوآ، لورآل، سینره، مای، کامان و... را در تیمچه پیدا می‌کنید.همچنین تجهیز امکانات محل کار شما هم با لوازم اداری موجود در تیمچه از لوازم تحریر و میز و صندلی تا پرینتر و اسکنر و دستگاه فکس امکان‌پذیر شده است. و بالاخره اینکه حتی خواروبار و تنقلات میان‌وعده خود را می‌توانید از تیمچه تهیه کنید. برنج و ادویه و چیپس و تنقلات و نوشیدنی‌های محبوب شما همگی در تیمچه موجودند تا در سریع‌ترین زمان به دست شما برسند."

    const [expand, setExpand] = useState(false);
    const [show,setShow]=useState(text)
    const onClick = () => {
        setExpand(!expand);
    };
    const Item = styled(Paper)(({ theme }) => ({
        boxShadow:'none',
        padding: theme.spacing(1),
        textAlign: 'right',
        color:  "#141414",
        background:"#fafafa",
        direction:"rtl",
    }));
    return (
        <>
            <Box sx={{width: '100%',textAlign:'raight',margin:'auto'}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item sm={12} sx={{background:"#fafafa",padding:5}}>
                        <Item>
                            <h3>تیمچه، خرید آنلاین همه نوع کالا</h3>
                        </Item>
                        <Item sx={{color:"#8c8c8c",marginTop:-5,paddingLeft:5}}>
                            <p>{text}{<br/>}{expand?moreText:""}</p>
                        </Item>
                        <Item sx={{textAlign: 'center'}}>
                            <span onClick={onClick}>{expand?"بستن":"نمایش بیشتر"}{expand?<ExpandLessIcon/>:<ExpandMoreIcon/>}</span>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}