import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from "react";
import topImagePhone from '../../../public/Images/Header/timche-mobile.gif'

const drawerWidth = '100%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({}),);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({ }));
// style hambergeri
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    position:'relative',
}));

export default function ResHeader(){
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <>


            <Box sx={{ display: 'flex' }}>

                <AppBar  open={open}>
                    <Toolbar>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                            اینو میتونی حذف کنی
                        </Typography>
                        {/* hamberger */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            // sx={{ ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>


                <Main open={open}>
                    <DrawerHeader />
                    <img src={topImagePhone.src}/>

                </Main>


                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 10,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {/* topList */}
                    </List>
                    <Divider />
                    <List>
                        {/* bottomList */}
                    </List>
                </Drawer>
            </Box>

        </>
    )
}