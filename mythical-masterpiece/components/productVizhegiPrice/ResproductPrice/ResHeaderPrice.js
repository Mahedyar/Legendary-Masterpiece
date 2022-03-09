import Box from '@mui/material/Box';
import ResLikeIcon from "./ResLikeIcon";
import SubTop from "../headerPrice/SubTop";
import ResButtonColor from "./ResButtonColor";
import useMediaQuery from "@mui/material/useMediaQuery";

function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{

                fontSize: '0.875rem',
                fontWeight: '700',
                direction: 'rtl',
                boxShadow: 'none',
                ...sx,
            }}
            {...other}
        />
    );
}

export default function ResHeaderPrice(props) {

    return (
        <>
            <div style={{width: '100%'}}>
                    <Item><h3>{props.product.title}</h3></Item>
                    <Item>
                        <ResLikeIcon/>
                        <SubTop product={props.product}/>
                        <hr/>
                    </Item>
                    <Item>
                        <ResButtonColor/>
                    </Item>
            </div>
        </>
    )
}