import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


export default function ListBoxModal(props) {
    // const titr=[
    //     {title:"دفترچه خریداران",subTitle: ["ثبت سفارش","روشهای پرداخت","شرایط ارسال","پیگیری سفارش","ضمانت و بازگشت کالا"]},
    //     {title:"دفترچه فروشندگان",subTitle: ["راهنمای فروشندگان","میخواهم فروشنده شوم","قوانین و مقررات فروش "]},
    //     {title:"دانستنی ها",subTitle: ["حریم شخصی شما","قوانین و مقررات ما","فرصت های شغلی"]},
    //     {title: "تیمچه", subTitle: ["درباره تیمچه", "ارتباط با تیمچه", "مزیت های تیمچه", "داستان تیمچه","شاه نشین"]},
    // ]

    return (
        <List
            sx={{
                width: '100%',
                height:'65%',
                maxWidth: 202.63,

                maxHeight: '60%',
                '& ul': {padding: 0},
                direction: "rtl",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                paddingRight:4
            }}
            subheader={<li/>}
        >
            {props.DataSubtitle.map((sectionId) => (

                <li key={`section-${sectionId.props.title}`}>
                    <ul>
                        <ListSubheader sx={{background:'transparent'}}>{sectionId.props.title}<ArrowBackIosNewIcon sx={{fontSize:10}}/></ListSubheader>
                        {sectionId.props.subTitle.map((item) => (
                            <ListItem  key={`${sectionId}-${item}`}>
                                <a href={"#"}> <Box sx={{height:10}}><ListItemText  sx={{textAlign: 'right'}} primary={`${item}`} /></Box></a>
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}