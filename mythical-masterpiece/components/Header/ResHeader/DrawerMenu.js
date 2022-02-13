import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from "@mui/material/Drawer";
import {styled, useTheme} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import HeadMenu from "./HeadMenu";
import BtnLinks from "./BtnLinks";
const drawerWidth = '100%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({}),);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({ }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    position:'relative',
}));
export default function DrawerMenu(props){
    const theme = useTheme();

    return(
        <>
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
                open={props.onOpen}
            >

                <Container fixed>
                    <Box  >
                        <HeadMenu onClose={props.handleDrawerClose}/>
                        <BtnLinks/>
                    </Box>
                </Container>
                <Box sx={{ borderBottom:"15px solid #f5f5f5",width: '100%',marginTop:'6px' }} />
                <Container fixed>
                    <Box>
                        hello
                    </Box>
                </Container>

            </Drawer>
        </>
    )
}