import Box from '@mui/material/Box';
import instagrem from '../../../../assest/Images/Footer/ResTopFooter/instagram-mobile.svg';
import  twitter from '../../../../assest/Images/Footer/ResTopFooter/twitter.svg';
import telegram from '../../../../assest/Images/Footer/ResTopFooter/telegram.svg';
import linkedin from '../../../../assest/Images/Footer/ResTopFooter/linkedin.svg';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                m:0.5,
                ...sx,
            }}
            {...other}
        />
    );
}
export default function ResIcon(){
    return(
        <>
            <div style={{ width: '100%' }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#f5f5f5',
                        direction:'rtl',
                        margin:0,
                        padding:0,
                    }}
                >
                    <Item><img src={instagrem.src}/></Item>
                    <Item><img  src={twitter.src}/></Item>
                    <Item><img src={telegram.src}/></Item>
                    <Item><img src={linkedin.src}/></Item>
                </Box>

            </div>
        </>
    )
}