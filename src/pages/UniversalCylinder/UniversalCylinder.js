import React from "react";
import Header from "../../components/Header";
import UCElement1 from "./UCElement1";
const UniversalCylinder = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <UCElement1 />
    </>
  );
};

export default UniversalCylinder;
