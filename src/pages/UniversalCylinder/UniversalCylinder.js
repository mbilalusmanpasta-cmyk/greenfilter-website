import React from "react";
import Header from "../../components/Header";
import UCElement1 from "./UCElement1";
import Footer from "../../components/Footer";
const UniversalCylinder = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <UCElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalCylinder;
