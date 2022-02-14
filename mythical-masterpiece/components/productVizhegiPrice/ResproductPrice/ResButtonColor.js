import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ResOnButton from "./ResOnButton";
import ResDrawerColor from "./ResDrawerColor";
import {useState} from "react";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                paddingTop:1.5,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',

                ...sx,
            }}
            {...other}
        />
    );
}


export default function ResButtonColor(){
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return(
        <>
            {open && <ResDrawerColor open={open} onCunfirm={toggleDrawer(false)}/>}

                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
                    <Item>
                        <Stack direction="row" >
                        <Button onClick={toggleDrawer(true)}  sx={{borderRadius:2,width:'100%',height:45}} variant="outlined" >
                            <ResOnButton/>
                        </Button>
                        </Stack>
                    </Item>

                </Box>

        </>
    )
}