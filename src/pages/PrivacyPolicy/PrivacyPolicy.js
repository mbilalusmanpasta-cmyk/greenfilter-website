import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PPElement1 from "./PPElement1";
const PrivacyPolicy = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <PPElement1 />
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
