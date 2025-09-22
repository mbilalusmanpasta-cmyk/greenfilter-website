import React from "react";
import Header from "../../components/Header";
import UCElement1 from "./UCElement1";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const UniversalCylinder = (props) => {
  return (
    <>
      <Helmet>
        <title>Universal Cylinder Air Filters - Green Filter USA</title>
        <meta name="description" content="Upgrade your ride with Green Filter! Explore our range of high-performance cone & cylinder air filters. Click to watch our measuring guide video and Shop Now!" />
        <meta property="og:title" content="Universal Cylinder Air Filters - Green Filter USA" />
        <meta property="og:description" content="Upgrade your ride with Green Filter! Explore our range of high-performance cone & cylinder air filters. Click to watch our measuring guide video and Shop Now!" />
        {/* <meta property="og:image" content={img0} /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
