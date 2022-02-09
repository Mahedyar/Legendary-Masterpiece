import Box from '@mui/material/Box';
import flag from '../../../../assets/Images/ProductVizhegiPrice/flag.svg';
import Typography from '@mui/material/Typography';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{


                m: 1,

                ...sx,
            }}
            {...other}
        />
    );
}
export default function subButton(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        borderRadius: 1,
                    }}
                >
                    <Item><img src={flag.src}/></Item>
                    <Item><Typography variant="caption">گزارش قیمت بهتر برای این محصول</Typography></Item>

                </Box>


            </div>
        </>
    )
}