import Slider from "../slider/Slider";
import LittleBox1 from "../LittleBox/LittleBox1";
import ChubeHaraj from "../chubeHaraj/ChubeHaraj";
import AdsCard1 from "../AdsCard/AdsCard1";
import KalaPreview from "../kalaPreview/KalaPreview";
import AdsCard2 from "../AdsCard/AdsCard2";
import AdsCard3 from "../AdsCard/AdsCard3";
import firstImagedPreview from "../../public/Images/KalaPreview/ladies_new.png";
import AdsCard4 from "../AdsCard/AdsCard4";
import AdsCard5 from "../AdsCard/AdsCard5";
import AdsCard6 from "../AdsCard/AdsCard6";
import AdsCard7 from "../AdsCard/AdsCard7";
import AdsCard8 from "../AdsCard/AdsCard8";


const HomePageComponent = (props) => {
    return (
        <>
            <Slider />
            <LittleBox1/>
            <ChubeHaraj products={props.products} cardsPaddingTop={3} />
            <AdsCard1 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />

            <AdsCard2 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard3 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                imagedKalaPreview={1}
                previewTitle={"لوازم آرایشی"}
                previewImage={firstImagedPreview.src}
                // ImageTitle={"لوازم آرایشی"}
            />
            <AdsCard4 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard5 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard6 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard7 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard8 />
            <KalaPreview
                products={props.products}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
        </>
    );
}

export default HomePageComponent;