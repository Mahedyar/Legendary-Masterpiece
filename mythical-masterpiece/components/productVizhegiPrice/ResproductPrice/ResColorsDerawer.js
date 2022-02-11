import Box from '@mui/material/Box';
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";

const colors=[{id:1,color:'black',name:'مشکی'},{id:2,color:'pink',name:'صورتی'}]

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '0px solid',
                borderRadius: 2,
                ...sx,
            }}
            {...other}
        />
    );
}

export default function ResColorsDerawer(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        direction:'rtl'
                    }}
                >
                    {
                        colors.map((item)=> <Item>
                            <Typography variant="subtitle1" sx={{color:'#434343'}}>
                                <CheckIcon sx={{color:item.color,background: item.color,borderRadius:1,fontSize:16}}/> {item.name}
                            </Typography>
                        </Item>)
                    }

                    {/*<Item>Item 2</Item>*/}

                </Box>
            </div>
        </>
    )
}