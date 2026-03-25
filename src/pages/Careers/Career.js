import React from "react";
import Header from "../../components/Header";
import CareerElement1 from "./CareerElement1";
import Hero from "./Hero";
import Gallery from "../Home/Gallery";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const gallery = galleryImages;
const Career = (props) => {
  return (
    <>
      <Helmet>
        <title>Careers | Green Filter</title>
        <meta name="description" content="Learn about Green Filter's mission, vision, and dedication to eco-friendly solutions. See our gallery and team." />
        <meta property="og:title" content="Careers | Green Filter" />
        <meta property="og:description" content="Discover who we are and how we're revolutionizing filtration with eco-conscious innovation." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/careers" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <Hero />
        <CareerElement1 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default Career;
