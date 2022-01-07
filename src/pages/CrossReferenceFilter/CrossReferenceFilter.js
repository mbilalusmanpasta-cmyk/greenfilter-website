import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CRFElement1 from "./CRFElement1";
const CrossReferenceFilter = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CRFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceFilter;
