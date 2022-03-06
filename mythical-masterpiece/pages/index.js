import Slider from "../components/slider/Slider";
import ChubeHaraj from "../components/chubeHaraj/ChubeHaraj";
import livan from "../public/Images/ChubeHaraj/img_1.png";
import drill from "../public/Images/ChubeHaraj/img_2.png";
import kafsh from "../public/Images/ChubeHaraj/img_3.png";
import sandis from "../public/Images/ChubeHaraj/img_4.png";
import headphone from "../public/Images/ChubeHaraj/img_5.png";
import cream from "../public/Images/ChubeHaraj/img.png";
import KalaPreview from "../components/kalaPreview/KalaPreview";
import firstImagedPreview from "../public/Images/KalaPreview/ladies_new.png";
import secondImagedPreview from "../public/Images/KalaPreview/men_new.png";
import LittleBox1 from "../components/LittleBox/LittleBox1";
import AdsCard1 from "../components/AdsCard/AdsCard1"
import AdsCard2 from "../components/AdsCard/AdsCard2"
import AdsCard3 from "../components/AdsCard/AdsCard3"
import AdsCard4 from "../components/AdsCard/AdsCard4"
import AdsCard5 from "../components/AdsCard/AdsCard5"
import AdsCard6 from "../components/AdsCard/AdsCard6"
import AdsCard7 from "../components/AdsCard/AdsCard7"
import AdsCard8 from "../components/AdsCard/AdsCard8"
import {products} from "../data/products";

export default function Home() {
  return (
    <>
      <Slider />
      <LittleBox1/>
      <ChubeHaraj products={products} cardsPaddingTop={3} />
      <AdsCard1 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />

      <AdsCard2 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <AdsCard3 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          imagedKalaPreview={1}
          previewTitle={"لوازم آرایشی"}
          previewImage={firstImagedPreview.src}
          // ImageTitle={"لوازم آرایشی"}
      />
      <AdsCard4 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <AdsCard5 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <AdsCard6 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <AdsCard7 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
      <AdsCard8 />
      <KalaPreview
          products={products}
          cardsPaddingTop={1}
          previewTitle={"گوشی موبایل"}
      />
    </>
  );
}
