import React from "react";
import Header from "../../components/Header";
import UPElement1 from "./UPElement1";
import Footer from "../../components/Footer";
const UniversalPanel = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <UPElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalPanel;
