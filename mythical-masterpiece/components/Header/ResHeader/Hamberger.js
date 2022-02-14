import MenuIcon from '@mui/icons-material/Menu';
import timchLogo from '../../../assets/Images/Header/Timche.svg'
import TwoIcon from "./TwoIcon";
import Box from '@mui/material/Box';
import {useState} from "react";
import DrawerMenu from "./DrawerMenu";



function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                fontSize: '0.875rem',
                fontWeight: '700',

                ...sx,
            }}
            {...other}
        />
    );
}


export default function Hamberger(){
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        console.log(true)
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return(
        <>
            {open && <DrawerMenu handleDrawerClose={handleDrawerClose} onOpen={open}/>}
            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'flex', }}>
                    <Item sx={{ flexGrow: 1 }}>
                      <TwoIcon/>
                    </Item>
                    <Item>
                        <img className={'logo-team'} src={timchLogo.src}/>
                    </Item>
                    <Item>
                        <MenuIcon onClick={handleDrawerOpen}/>
                    </Item>
                </Box>
            </div>
        </>
    )
}