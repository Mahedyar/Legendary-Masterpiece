import "../styles/fontsCss/fontiran.css"

import '../styles/globals.css';

import "../styles/fontsCss/fontsStyle.css"

// swiper slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/kalaPreview/KalaPreview.css"
import "../components/slider/styles.css";
import "../components/chubeHaraj/SwipperStyles.css";
import "../components/AdsCard/adsCardStyle.css";
import "../components/LittleBox/little.box1.style.css";
import "../components/ProductSellerTable/productSellerStyle.css";
import "../components/ProductBuyLendo/productLendoStyle.css";
import "../components/productBigDescription/CommentsPart/ProgressBar.css"
import HeadFooter from "../Layouts/HeadFooter";
// import "../components/ProductSellerTable/productSellerStyle.css";
// import "../components/ProductBuyLendo/productLendoStyle.css";
// import "../components/chubeHaraj/SwipperStyles.module.css";


function MyApp({ Component, pageProps }) {
  
  return <HeadFooter><Component {...pageProps} /></HeadFooter>
}

export default MyApp
