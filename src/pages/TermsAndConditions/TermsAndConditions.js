import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TACElement1 from "./TACElement1";
const TermsAndConditions = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <TACElement1 />
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
