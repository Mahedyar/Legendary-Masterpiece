
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Box from "@mui/material/Box";
import {useState} from "react";



function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                paddingLeft:2,

                fontSize: '0.875rem',
                fontWeight: '700',
                direction:'rtl',
                ...sx,
            }}
            {...other}
        />
    );
}

export default function Color() {
    const [select,setSelect]=useState(false)
    const color = [{id: 1, color: '#feed00'},{id:2,color: '#0000ff'}, {id:3,color: '#000000'},]
    return (
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    {color.map((item)=> <Item key={item.id}><CheckOutlinedIcon className={'border'} sx={{color:item.color,borderRadius:1,background:item.color}}/></Item>)}
                </Box>
            </div>

        </>
    )
}