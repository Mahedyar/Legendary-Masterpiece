import Box from '@mui/material/Box';
import ResLikeIcon from "./ResLikeIcon";
import SubTop from "../headerPrice/SubTop";
import ResButtonColor from "./ResButtonColor";


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

export default function ResHeaderPrice() {
    return (
        <>
            <div style={{width: '100%'}}>
                    <Item><h3>گوشی موبایل شیائومی مدل Poco X3 Pro دو سیم کارت، ظرفیت 256 گیگابایت با رم 8 گیگابایت</h3>
                    </Item>
                    <Item>
                        <ResLikeIcon/>
                        <SubTop/>
                        <hr/>
                    </Item>
                    <Item>
                        <ResButtonColor/>
                    </Item>
            </div>
        </>
    )
}