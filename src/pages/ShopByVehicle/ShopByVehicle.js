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
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <ShopElement1 handleVehicleRoute={props.handleVehicleRoute} />
      <Gallery gallery={gallery} width="12.5%" />

      <Footer />
    </>
  );
};

export default ShopByVehicle;
