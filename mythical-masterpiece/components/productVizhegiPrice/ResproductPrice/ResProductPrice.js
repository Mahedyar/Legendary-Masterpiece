import Box from '@mui/material/Box';
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function ResProductPrice(props) {
    const matches = useMediaQuery("(max-width:376px)");
    const price = (+props.product.price - (+props.product.price * +props.product.offPercent));
    return (
        <>
            <div style={{width: '100%'}}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        direction: 'rtl',


                    }}
                >
                    <Item >{matches?<h3 style={{marginTop:"15px"}}>{price}تومان </h3>:
                        <h1>{price}<span style={{fontSize:14,color:"#8c8c8c",}}>تومان</span></h1>}
                    </Item>
                    <Item sx={{pt:2.5}}>
                        <h3 style={{pl:2}}><span className={'ResTakhfif'} style={{fontSize:14,color:"#8c8c8c"}}>%1</span>{props.product.price}</h3>
                    </Item>

                </Box>
            </div>
        </>
    )
}