import Box from '@mui/material/Box';
import NumberToPersian from "../../chubeHaraj/NumberToPersian";
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

export default function ProductPrice() {
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
                        <h1>۷,۶۸۰,۰۰۰<span style={{fontSize:15,color:"#8c8c8c"}}>تومان</span></h1>
                    </Item>
                    <Item sx={{fontSize:10,textDecoration: 'line-through',color: '#8c8c8c',paddingTop:3,paddingLeft:1}}>
                        <h1 >۷,۶۸۰,۰۰۰</h1>
                    </Item>
                    <span className={'takhfif'}>%1</span>
                </Box>
            </div>
        </>
    )
}