import Box from '@mui/material/Box';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {useState} from "react";

export default function Icon(){
    const [like,dislike]=useState(true)
    const Like=()=>{
        if(!like){
            dislike(true)
        }else {
            dislike(false)
        }
    }

    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    p: 1,
                    m: 1,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                    borderRadius:' 50%',
                    width:40,
                    height:40,

                    ...sx,
                }}
                {...other}
            />
        );
    }
    return(
        <>
            <div style={{ width: '100%' }}>
                    <Item sx={{cursor:'pointer',zIndex:100}} onClick={Like}>{like?<FavoriteBorderIcon/>:<FavoriteIcon sx={{color:"#feed00",}}/>}</Item>
                    <Item sx={{cursor:'pointer',zIndex:100}}><ShowChartIcon/></Item>
            </div>
        </>
    )
}