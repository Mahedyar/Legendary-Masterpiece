import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ResColorsDerawer from "./ResColorsDerawer";

const drawerBleeding = 56;
const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

export default function ResDrawerColor(props){
    const { window } = props;

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return(
        <>
            <Root>

                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(35% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                            borderTopRightRadius:15,
                            borderTopLeftRadius:15,
                            direction:"rtl"
                        },
                    }}
                />
                {/*<Box sx={{ textAlign: 'center', pt: 1 }}>*/}
                {/*    <Button onClick={toggleDrawer(true)}>Open</Button>*/}
                {/*</Box>*/}
                <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={props.open}
                    onClose={props.onCunfirm}
                    onOpen={props.onClick}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <Container >
                        <Box sx={{ height: '100vh'}}>
                            <h3>انتخاب رنگ</h3>
                            <ResColorsDerawer/>
                        </Box>
                    </Container>

                </SwipeableDrawer>
            </Root>

        </>
    )
}