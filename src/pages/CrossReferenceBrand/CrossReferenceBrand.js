import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CFBElement1 from "./CFBElement1";
import { Helmet } from "react-helmet";
import img0 from "../../assets/gallery/img0.jpeg";


const CrossReferenceBrand = (props) => {
  return (
    <>
      <Helmet>
        <title>Cross-Reference Brand | Green Filter</title>
        <meta name="description" content="Cross-Reference for Another Brand to Green Filter" />
        <meta property="og:title" content="Cross-Reference Brand | Green Filter" />
        <meta property="og:description" content="Cross-Reference for Another Brand to Green Filter" />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/cross-reference-brand" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CFBElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceBrand;
