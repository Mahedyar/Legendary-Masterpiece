import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResButtonBlue from "./ResButtonBlue";


function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{
                paddingLeft: 5,
                ...sx,
            }}
            {...other}
        />
    );
}

const features = [
    {id: 1, feature: 'شبکه های ارتباطی : 4G , 3G , 2G'},
    {id: 2, feature: "حافظه داخلی : 256 گیگابایت"},
    {id: 3, feature: 'مقدار رم : 8 گیگابایت'},
    {id: 4, feature: 'پردازنده : Qualcomm Snapdragon 860 (7 nm)'},
    {id: 5, feature: 'دوربین : بله'},
    {id: 6, feature: 'تعداد سیم کارت : هایبرید دو سیم کارته (نانو سیم کارت, استندبای دوگانه)'}
]
export default function ResProductFeatures() {
    return (
        <>
            <div style={{width: '100%'}}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        direction: 'rtl'
                    }}
                >
                    <Item>
                        <Typography variant="body2" sx={{fontWeight: 'bold', paddingBottom: 1}}>ویژگی محصولات: </Typography>
                        {features.map((item) => <Typography sx={{paddingBottom: 1,fontSize:12}} key={item.id} variant="body2">
                            {item.feature}</Typography>)}
                    </Item>

                </Box>
            </div>
            <ResButtonBlue/>
        </>
    )
}