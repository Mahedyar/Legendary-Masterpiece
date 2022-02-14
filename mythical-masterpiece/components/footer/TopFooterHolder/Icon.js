import linkedin from '../../../assets/Images/Footer/TopFooter/icons8-linkedin-50.png'
import telegram from '../../../assets/Images/Footer/TopFooter/icons8-telegram-app-50.png'
import twitter from '../../../assets/Images/Footer/TopFooter/icons8-twitter-50 .png'
import instagram from '../../../assets/Images/Footer/TopFooter/instagram-gradient.svg'
import {Grid, Box, Container} from "@mui/material";
import PropTypes from 'prop-types';


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box sx={{m:1, background:"#fafafa",}}{...other}/>);
}


export default function Icon() {
    return (
        <div>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',

                    background:"#fafafa",
                    borderRadius: 1,
                    width:20,
                    height:45
                }}
            >
                <Item><img src={instagram.src}/></Item>
                <Item><img width={23}  src={twitter.src}/></Item>
                <Item><img width={23}  src={telegram.src}/></Item>
                <Item><img width={23}  src={linkedin.src}/></Item>
            </Box>
        </div>
    )
}