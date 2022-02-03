import Advantages from "./Advantages/Advantages";
import TopFooterHolder from "./TopFooterHolder/TopFooterHolder";
import ContainerFooter from "./ContainerFooter/Container";
import AboutFooterHolder from "./AboutFooterHolder";
import CopyRightHolder from "./CopyRightHolder";
import {Grid,Box,Container} from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function footer() {
    const matches = useMediaQuery('(min-width:769px)');
    return (
        <>

            {matches && <Advantages/>}
            <TopFooterHolder/>
            <ContainerFooter/>
            <AboutFooterHolder/>
            <CopyRightHolder/>

        </>
    )
}