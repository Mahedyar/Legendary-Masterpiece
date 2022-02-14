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
                ...sx,
            }}
            {...other}
        />
    );
}

export default function HeaderPrice() {
    return (
        <>
            <div style={{width: '100%'}}>
                <Box variant={'outline'} sx={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}}>
                    <Item><h3>گوشی موبایل شیائومی مدل Poco X3 Pro دو سیم کارت، ظرفیت 256 گیگابایت با رم 8 گیگابایت</h3>
                    </Item>
                    <Item>
                        <SubTop/>
                        <SubBottom/>
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