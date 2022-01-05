import React from "react";
import Header from "../../components/Header";
import URElement1 from "./URElement1";
import Footer from "../../components/Footer";
const UniversalRound = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <URElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalRound;
