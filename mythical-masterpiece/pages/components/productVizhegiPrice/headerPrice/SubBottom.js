
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';



function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                paddingLeft:5,

                fontSize: '0.875rem',
                fontWeight: '700',
                direction:'rtl',
                ...sx,
            }}
            {...other}
        />
    );
}
export default function subBottom(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingTop:2
                    }}
                >
                    <Item>
                        <Stack direction="row" spacing={1}>
                            <Button sx={{direction:"ltr"}} variant="contained" endIcon={<StarIcon sx={{fontSize:12}}/>}>4.9</Button>
                            <span/>
                            <span style={{color: '#8c8c8c',fontSize:'12px'}}> از 57 رای</span>
                        </Stack>
                    </Item>
                    <Item>
                        <Stack direction="row" spacing={1}>
                        <Button className={'btn--SubBottom'} sx={{direction:"ltr"}} variant="contained" endIcon={<TextsmsOutlinedIcon sx={{fontSize:10}}/>}></Button>
                            <span/>
                            <span style={{color: '#8c8c8c',fontSize:'12px'}}> (57 نظر)</span>
                    </Stack>
                    </Item>
                </Box>
            </div>
            </>
    )
}