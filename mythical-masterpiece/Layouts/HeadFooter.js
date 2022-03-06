import MediaFooter from "../components/footer/MediaFooter"
import MainHeader from "../components/Header/MainHeader"


const HeadFooter = (props) => {
    return (
        <>
            <MainHeader/>
            {props.children}
            <MediaFooter/>
        </>
    )
}

export default HeadFooter