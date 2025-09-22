import React from "react";
import Header from "../../components/Header";
import ShopElement1 from "./ShopElement1";
import Footer from "../../components/Footer";
import img0 from "../../assets/gallery/ShopByVehicle/img0.jpg";
import img1 from "../../assets/gallery/ShopByVehicle/img1.jpg";
import img2 from "../../assets/gallery/ShopByVehicle/img2.jpg";
import img3 from "../../assets/gallery/ShopByVehicle/img3.jpg";
import img4 from "../../assets/gallery/ShopByVehicle/img4.jpg";
import img5 from "../../assets/gallery/ShopByVehicle/img5.jpeg";
import img6 from "../../assets/gallery/ShopByVehicle/img6.jpg";
import img7 from "../../assets/gallery/ShopByVehicle/img7.jpg";
import Gallery from "../Home/Gallery";
import { Helmet } from "react-helmet";
const ShopByVehicle = (props) => {
  const gallery = [
    { id: 0, image: img0 },
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
  ];
  return (
    <>
      <Helmet>
        <title>Engine Air Filters - Shop Popular Brands</title>
        <meta name="description" content="Upgrade your engine's performance with Green Filter! Browse our selection of engine air filters for popular trucks, sports cars, and luxury vehicles." />
        <meta property="og:title" content="Engine Air Filters - Shop Popular Brands" />
        <meta property="og:description" content="Upgrade your engine's performance with Green Filter! Browse our selection of engine air filters for popular trucks, sports cars, and luxury vehicles." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://greenfilter.com/shop-by-vehicle`} />

      </Helmet>

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <ShopElement1 handleVehicleRoute={props.handleVehicleRoute} />
        <Gallery gallery={gallery} width="12.5%" />
      </div>
      <Footer />
    </>
  );
};

export default ShopByVehicle;
