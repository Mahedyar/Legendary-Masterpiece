import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{

                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#595959' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '0px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius:' 50%',
                textAlign:'center',
                width:35,
                height:35,
                paddingTop:0.75,

                ...sx,
            }}
            {...other}
        />
    );
}

export default function ResLikeIcon(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        flexDirection: 'column',
                        justifyContent:'center',
                        direction:'rtl',
                        p: 1,


                    }}
                >
                    <Item><FavoriteBorderIcon  /></Item>
                </Box>
            </div>
        </>
    )
}