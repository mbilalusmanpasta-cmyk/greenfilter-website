import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SingleProduct from "./singleProduct";
import GreenSearch from "../../components/GreenSearch";


const Product = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <div className={"header-gap-creator"}> </div> {/*Header Height */}
      <div className={"search-gap-creator"}> </div> {/*Header Height */}

      <GreenSearch Sticky />
      <div className="container-0">        
        <SingleProduct />
      </div>
      <Footer />
    </>
  );
};

export default Product;
