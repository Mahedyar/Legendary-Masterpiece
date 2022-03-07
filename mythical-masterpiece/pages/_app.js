import "../styles/fontsCss/fontiran.css"

import '../styles/globals.css';

import "../styles/fontsCss/fontsStyle.css"

// swiper slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/KalaPreview.css"
import "../styles/styles.css";
import "../styles/SwipperStyles.css";
import "../styles/adsCardStyle.css";
import "../styles/little.box1.style.css";
import "../styles/productSellerStyle.css";
import "../styles/productLendoStyle.css";
import "../styles/ProgressBar.css"
import HeadFooter from "../Layouts/HeadFooter";
// import "../components/ProductSellerTable/productSellerStyle.css";
// import "../components/ProductBuyLendo/productLendoStyle.css";
// import "../components/chubeHaraj/SwipperStyles.module.css";


function MyApp({ Component, pageProps }) {
  
  return <HeadFooter><Component {...pageProps} /></HeadFooter>
}

export default MyApp
