import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import {Box } from "@mui/material";



export default function Titr() {
const titr=[
    {title:"دفترچه خریداران",subTitle: ["ثبت سفارش","روشهای پرداخت","شرایط ارسال","پیگیری سفارش","ضمانت و بازگشت کالا"]},
    {title:"دفترچه فروشندگان",subTitle: ["راهنمای فروشندگان","میخواهم فروشنده شوم","قوانین و مقررات فروش در تیمچه"]},
    {title:"دانستنی ها",subTitle: ["حریم شخصی شما","قوانین و مقررات ما","فرصت های شغلی"]},
    {title: "تیمچه", subTitle: ["درباره تیمچه", "ارتباط با تیمچه", "مزیت های تیمچه", "داستان تیمچه","شاه نشین"]},
    ]
    return (
        <>
            <List
                sx={{
                    maxWidth: 900,
                    maxHeight: 300,
                    textAlign: 'right',
                    display:'flex',
                    justifyContent:'right',
                    direction:"rtl",
                    lineHeight:0.2,
                }}>
                {titr.map((sectionId) => (

                    <li key={`section-${sectionId.title}`}>
                        <ul>
                            <ListSubheader ><Typography variant="h6" sx={{fontWeight:"bold",color:" #141414",fontSize:'1rem'}}>{`${sectionId.title}`}</Typography></ListSubheader>
                            {sectionId.subTitle.map((item) => (
                                <ListItem  key={`${sectionId}-${item}`}>
                                   <a href={"#"}> <Box sx={{height:10 ,fontSize:'0.8125'}}><Typography sx={{color: "#8c8c8c"}}><ListItemText sx={{textAlign: 'right' }} primary={`${item}`} /></Typography></Box></a>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>

        </>
    )
}