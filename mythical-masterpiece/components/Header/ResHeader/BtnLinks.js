import Box from '@mui/material/Box';
import DataBtnLink from "./DataBtnLink";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#f5f5f5' : '#f5f5f5'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),

                padding:"8px 2px",
                m: 1,
                borderRadius: 1,

                ...sx,
            }}
            {...other}
        />
    );
}

export default function BtnLinks() {
    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)',direction:'rtl',marginTop:"10px",textAlign:'center' }}>
                {DataBtnLink.map((item)=> <Item key={item.id} sx={{fontSize:'12px'}}><img width={24} src={item.img.src}/> <div>{item.title}</div></Item>)}

                {/*<Item>2</Item>*/}
                {/*<Item>3</Item>*/}
                {/*<Item>1</Item>*/}
                {/*<Item>2</Item>*/}

            </Box>
        </div>
    );
}
