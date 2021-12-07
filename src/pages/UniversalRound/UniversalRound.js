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
      <URElement1 />
      <Footer />
    </>
  );
};

export default UniversalRound;
