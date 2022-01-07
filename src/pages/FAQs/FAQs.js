import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQElement1 from "./FAQElement1";
const FAQs = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <FAQElement1 />
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
