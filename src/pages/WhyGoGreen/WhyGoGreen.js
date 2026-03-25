import React from "react";
import Header from "../../components/Header";
import GuaranteeElement3 from "../Guarantee/GuaranteeElement3";
import HomeElement2 from "../Home/HomeElement2.jsx";
import HomeElement3 from "../Home/HomeElement3.jsx";
import Hero from "./Hero";
import Gallery from "../Home/Gallery";
import Footer from "../../components/Footer";
import HomeElement4 from "../Home/HomeElement4.jsx";
import WGGElement1 from "./WGGElement1";
import { galleryImages } from "../../data/galleryImages";

const WhyGoGreen = (props) => {
  const gallery = galleryImages;
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <Hero />
        <HomeElement2 />
        <HomeElement3 />
        <Gallery gallery={gallery} />
        <HomeElement4 text="The benefits of Green Filter are not just about experiencing immediate gains, but there are long term ones as well." />
        <WGGElement1 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default WhyGoGreen;
