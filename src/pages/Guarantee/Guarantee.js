import React from "react";
import Header from "../../components/Header";
import GuaranteeElement1 from "./GuaranteeElement1";
import Footer from "../../components/Footer";
import GuaranteeElement2 from "./GuaranteeElement2";
import GuaranteeElement3 from "./GuaranteeElement3";
import Gallery from "../Home/Gallery";
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const gallery = galleryImages;
const Guarantee = (props) => {
  return (
    <>
      <Helmet>
        <title>Our Guarantee | Green Filter</title>
        <meta name="description" content="We Stand By Our Filters Straight From Our Plant in the USA" />
        <meta property="og:title" content="Our Guarantee | Green Filter" />
        <meta property="og:description" content="We Stand By Our Filters Straight From Our Plant in the USA" />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/our-guarantee" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <GuaranteeElement1 />
        <GuaranteeElement2 />
        <GuaranteeElement3 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default Guarantee;
