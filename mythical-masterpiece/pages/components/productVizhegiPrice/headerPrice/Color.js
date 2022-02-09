
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
    const [select,setSelect]=useState({show:false,id:null})
    const selector=(key)=>{
        setSelect({
            show: true,
            id:key
        })
    }

    const color = [{id: 1, color: '#feed00',name:'زرد'},{id:2,color: '#0000ff',name:'آبی'}, {id:3,color: '#000000',name:'مشکی'},{id:4,color: 'pink',name:'صورتی'}]
    let outLinedIcon=<CheckOutlinedIcon/>
    return (
        <>
            <div >

                <p>رنگ:{}</p>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',

                    }}>

                    {color.map((item)=> <Item className={`${select.show && select.id===item.id?'border':''}`} onClick={()=>selector(item.id)} key={item.id}>

                        {select.show && select.id===item.id?

                        <CheckOutlinedIcon sx={{color: '#fff', borderRadius: 1, background: item.color,fontSize:20}}/>:
                            <CheckOutlinedIcon sx={{color: item.color, borderRadius: 1, background: item.color,fontSize:20}}/>}
                    </Item>)}
                </Box>
            </div>

        </>
    )
}