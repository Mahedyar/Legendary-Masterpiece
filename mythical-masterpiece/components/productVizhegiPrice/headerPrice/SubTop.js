import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
export default function subTop(props){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Item><Typography sx={{color:'#8c8c8c',fontSize:14}}>برند:  <a href={'#'} style={{color:'rgb(0, 130, 253)'}}>{props.product.brand}</a>  </Typography></Item>
                    <Item><Typography sx={{color:'#8c8c8c',fontSize:14}}>دسته بندی:  <a href={'#'} style={{color:'rgb(0, 130, 253)'}}>{props.product.tags[2]}</a>  </Typography></Item>
                </Box>
            </div>
        </>
    )
}