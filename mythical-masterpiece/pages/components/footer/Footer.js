import Advantages from "./Advantages/Advantages";
import TopFooterHolder from "./TopFooterHolder/TopFooterHolder";
import ContainerFooter from "./ContainerFooter/Container";
import AboutFooterHolder from "./AboutFooterHolder";
import CopyRightHolder from "./CopyRightHolder";
import {Grid,Box,Container} from "@mui/material";
import React, { useState } from "react";
import ResFooter from '../footer/ResFooter/ResFooter';

export default function footer() {

    return (
        <>
            <Advantages/>
            <TopFooterHolder/>
            <ContainerFooter/>
            <AboutFooterHolder/>
            <CopyRightHolder/>
        </>
    )
}