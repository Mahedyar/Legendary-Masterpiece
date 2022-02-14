import Slider from "../components/slider/Slider";
import ChubeHaraj from "../components/chubeHaraj/ChubeHaraj";
import livan from "../assets/Images/ChubeHaraj/img_1.png";
import drill from "../assets/Images/ChubeHaraj/img_2.png";
import kafsh from "../assets/Images/ChubeHaraj/img_3.png";
import sandis from "../assets/Images/ChubeHaraj/img_4.png";
import headphone from "../assets/Images/ChubeHaraj/img_5.png";
import cream from "../assets/Images/ChubeHaraj/img.png";
import KalaPreview from "../components/kalaPreview/KalaPreview";
import firstImagedPreview from "../assets/Images/KalaPreview/ladies_new.png";
import secondImagedPreview from "../assets/Images/KalaPreview/men_new.png";
// import MainHeader from "../components/Header/MainHeader"
import LittleBox1 from "../components/LittleBox/LittleBox1";
import AdsCard1 from "../components/AdsCard/AdsCard1"
import AdsCard2 from "../components/AdsCard/AdsCard2"
import AdsCard3 from "../components/AdsCard/AdsCard3"
import AdsCard4 from "../components/AdsCard/AdsCard4"
import AdsCard5 from "../components/AdsCard/AdsCard5"
import AdsCard6 from "../components/AdsCard/AdsCard6"
import AdsCard7 from "../components/AdsCard/AdsCard7"
import AdsCard8 from "../components/AdsCard/AdsCard8"
// import MediaFooter from "../components/footer/MediaFooter"






export default function Home() {
  // const kalaPreviewTitleHide = 1 ,
  const products = [
    {
      id: 1,
      image: livan.src,
      name: "لیوان پلاستیکی",
      offPercent: 14,
      price: 15000,
    },
    {
      id: 2,
      image: drill.src,
      name: "دریل",
      offPercent: 22,
      price: 800000,
    },
    {
      id: 3,
      image: kafsh.src,
      name: "کفش ورزشی",
      offPercent: 31,
      price: 320000,
    },
    {
      id: 4,
      image: sandis.src,
      name: "ساندیس",
      offPercent: 8,
      price: 8000,
    },
    {
      id: 5,
      image: headphone.src,
      name: "هدفون مدل یونیوو",
      offPercent: 48,
      price: 450000,
    },
    {
      id: 6,
      image: cream.src,
      name: "کرم مخصوص صورت",
      offPercent: 17,
      price: 85000,
    },
  ];


  
  return (
    <>

      {/* <MainHeader/> */}
      <Slider />
      <LittleBox1/>
      <ChubeHaraj products={products} cardsPaddingTop={3} />
      <AdsCard1 />
      <KalaPreview
        products={products}
        cardsPaddingTop={1}
        previewTitle={"گوشی موبایل"}
      />





      {/* <Slider />
      <ChubeHaraj products={products} slidesPerView={4} cardsPaddingTop={3} />
      <KalaPreview
        products={products}
        slidesPerView={5}
        cardsPaddingTop={1}
        previewTitle={"گوشی موبایل"}
      />
      <KalaPreview
        products={products}
        slidesPerView={4}
        cardsPaddingTop={1}
        imagedKalaPreview={1}
        previewImage={firstImagedPreview.src}
        ImageTitle={"لوازم آرایشی"}
      />

      {/* <MediaFooter /> */}
      
    </>
  );
}
