import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CFBElement1 from "./CFBElement1";

const CrossReferenceBrand = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CFBElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceBrand;
