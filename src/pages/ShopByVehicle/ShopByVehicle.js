import React from "react";
import Header from "../../components/Header";
import ShopElement1 from "./ShopElement1";
import Footer from "../../components/Footer";
const ShopByVehicle = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <ShopElement1 />
      <Footer />
    </>
  );
};

export default ShopByVehicle;
