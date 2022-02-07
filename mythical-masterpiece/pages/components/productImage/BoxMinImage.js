import Box from '@mui/material/Box';
import DataCard from '../productImage/DataCard'
import lamp from '../../../assets/Images/ProductImage/lamp.jpg'


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                m:0.7,
                textAlign:'center',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#f5f5f5' : '#f5f5f5'),
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                width:76,
                height:76,
                pt:2.5,
                ...sx,
            }}
            {...other}
        />
    );
}
export default function BoxMinImage(){
    return(
        <>
            <div style={{ width: '100%' }}>

                {DataCard.map((item,index)=><Box key={item.product}
                    sx={{
                        display: 'flex',
                        justifyContent:'center',
                        flexDirection: 'row-reverse',
                        pt:1.5,
                        alignItems:'center',
                    }}>

                        {item.images.map((img,index)=><Item key={item.product}> <Box key={`${item}-${img}`}>
                            <img className={'Img-product'} width={40}height={40} src={img}/></Box></Item>)}
                    <Item sx={{paddingTop:3.5,cursor:'pointer',color:'#595959'}}><Box>+{item.images.length+item.moreImage.length}</Box></Item>
                    </Box>)}






            </div>
        </>
    )
}