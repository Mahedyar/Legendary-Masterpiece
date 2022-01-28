import Advantages from "./Advantages/Advantages";
import TopFooterHolder from "./TopFooterHolder/TopFooterHolder";
import Container from "./Container/Container";
import AboutFooterHolder from "./AboutFooterHolder";
import CopyRightHolder from "./CopyRightHolder";

export default function footer() {
    return (
        <>
            <Advantages/>
            <TopFooterHolder/>
            <Container/>
            <AboutFooterHolder/>
            <CopyRightHolder/>
        </>
    )
}