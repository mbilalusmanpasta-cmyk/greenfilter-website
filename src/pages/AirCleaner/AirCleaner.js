import React from "react";
import Header from "../../components/Header";
import ACElement1 from "./ACElement1";
import Footer from "../../components/Footer";
const AirCleaner = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <ACElement1 />
      </div>
      <Footer />
    </>
  );
};

export default AirCleaner;
