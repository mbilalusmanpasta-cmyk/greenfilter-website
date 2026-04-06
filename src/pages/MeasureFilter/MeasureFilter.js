import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import MeasureFilterElement1 from "./MeasureFilterElement1";
import Gallery from "../Home/Gallery";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const MeasureFilter = (props) => {
  const gallery = galleryImages;
  return (
    <>
      <Helmet>
        <title>{"MEASURE A FILTER | Green Filter "} </title>
        <meta name="description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:title" content={"MEASURE A FILTER | Green Filter"} />
        <meta property="og:description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/measure-filter" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <Hero />
        <MeasureFilterElement1 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default MeasureFilter;
