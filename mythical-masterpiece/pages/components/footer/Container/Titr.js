import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';



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
                    maxHeight: 250,
                    textAlign: 'right',
                    display:'flex',
                    justifyContent:'right',
                    direction:"rtl",
                    color: "#141414",
                    padding:0,

                }}>
                {titr.map((sectionId) => (

                    <li key={`section-${sectionId.title}`}>
                        <ul>
                            <ListSubheader sx={{fontWeight:"bold" ,}}>{`${sectionId.title}`}</ListSubheader>
                            {sectionId.subTitle.map((item) => (
                                <ListItem key={`${sectionId}-${item}`}>
                                   <a href={"#"}> <ListItemText sx={{textAlign: 'right'}} primary={`${item}`} /></a>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>

        </>
    )
}