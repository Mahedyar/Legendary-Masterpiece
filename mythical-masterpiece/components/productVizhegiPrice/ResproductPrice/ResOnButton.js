import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                ...sx,
            }}
            {...other}
        />
    );
}

export default function ResOnButton(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        borderRadius: 1,
                        direction:'rtl',
                    }}
                >
                    <Item>
                        <Typography variant="subtitle1" sx={{color:'#434343'}}>
                            رنگ: <CheckIcon sx={{color:'black',background:'black',borderRadius:1,fontSize:16}}/> مشکی

                        </Typography>
                    </Item>
                    <Item><Typography variant="subtitle1" sx={{color:'#434343'}}>(2 رنگ) <ExpandMoreIcon sx={{fontSize:13}}/></Typography></Item>
                </Box>
            </div>
        </>
    )
}