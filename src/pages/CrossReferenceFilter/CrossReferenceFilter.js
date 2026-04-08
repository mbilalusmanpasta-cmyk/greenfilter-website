import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CRFElement1 from "./CRFElement1";
import { Helmet } from "react-helmet-async";
import img0 from "../../assets/gallery/img0.webp";

const CrossReferenceFilter = (props) => {
  return (
    <>
      <Helmet>
        <title>Cross-Reference Green Filter | Green Filter</title>
        <meta name="description" content="Cross-Reference for Green Filter to Another Brand" />
        <meta property="og:title" content="Cross-Reference Green Filter | Green Filter" />
        <meta property="og:description" content="Cross-Reference for Green Filter to Another Brand" />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/cross-reference-filters" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CRFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceFilter;
