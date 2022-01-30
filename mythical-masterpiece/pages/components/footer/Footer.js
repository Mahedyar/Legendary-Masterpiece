import Advantages from "./Advantages/Advantages";
import TopFooterHolder from "./TopFooterHolder/TopFooterHolder";
import Container from "./Container/Container";
import AboutFooterHolder from "./AboutFooterHolder";
import CopyRightHolder from "./CopyRightHolder";

export default function footer() {
    return (
        <>
            <h1>Footer</h1>
            <Advantages/>
            <TopFooterHolder/>
            <Container/>
            <AboutFooterHolder/>
            <CopyRightHolder/>
        </>
    )
}