import React from "react";
import Header from "../../components/Header";
import URElement1 from "./URElement1";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
const UniversalRound = (props) => {
  return (
    <>
      <Helmet>
        <title>Universal Round Air Filters - Green Filter USA </title>
        <meta name="description" content="Shop Green Filter USA round air filters! Find the perfect fit with our easy measuring guide. Sort by size & upgrade your filtration system today." />
        <meta property="og:title" content="Universal Round Air Filters - Green Filter USA " />
        <meta property="og:description" content="Shop Green Filter USA round air filters! Find the perfect fit with our easy measuring guide. Sort by size & upgrade your filtration system today." />
        {/* <meta property="og:image" content={img0} /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
