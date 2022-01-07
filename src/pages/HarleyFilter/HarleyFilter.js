import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HFElement1 from "./HFElement1";
const HarleyFilter = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <HFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default HarleyFilter;
