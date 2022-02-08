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
export default function subTop(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Item><Typography>برند:  <a>شیائومی</a>  </Typography></Item>
                    <Item><Typography>دسته بندی:  <a>گوشی موبایل</a>  </Typography></Item>
                </Box>
            </div>
        </>
    )
}