import Advantages from "./Advantages/Advantages";
import TopFooterHolder from "./TopFooterHolder/TopFooterHolder";
import ContainerFooter from "./ContainerFooter/Container";
import AboutFooterHolder from "./AboutFooterHolder";
import CopyRightHolder from "./CopyRightHolder";



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