import Box from '@mui/material/Box';
import SubBottom from "./SubBottom";
import SubTop from "./SubTop";
import Color from "./Color";


function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{

                fontSize: '0.875rem',
                fontWeight: '700',
                direction: 'rtl',
                boxShadow: 'none',
                marginTop:'10px',
                ...sx,
            }}
            {...other}
        />
    );
}

export default function HeaderPrice(props) {
    return (
        <>
            <div style={{width: '100%'}}>
                <Box variant={'outline'} sx={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}}>
                    <Item><h3>{props.product.title}</h3>
                    </Item>
                    <Item>
                        <SubTop product={props.product}/>
                        <SubBottom product={props.product}/>
                        <hr/>
                    </Item>
                    <Item>
                        <Color/>
                    </Item>
                </Box>
            </div>
        </>
    )
}