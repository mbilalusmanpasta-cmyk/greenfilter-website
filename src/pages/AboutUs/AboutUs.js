import React from "react";
import Header from "../../components/Header";
import Hero from "../MeasureFilter/Hero";
import Gallery from "../Home/Gallery";
import Footer from "../../components/Footer";
import AboutElement1 from "./AboutElement1";
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const gallery = galleryImages;
const AboutUs = (props) => {
  return (
    <>
      <Helmet>
        <title>About Us | Green Filter</title>
        <meta name="description" content="Learn about Green Filter's mission, vision, and dedication to eco-friendly solutions. See our gallery and team." />
        <meta property="og:title" content="About Us | Green Filter" />
        <meta property="og:description" content="Discover who we are and how we're revolutionizing filtration with eco-conscious innovation." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/about-us" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <Hero />
      <AboutElement1 />
      <Gallery gallery={gallery} />
      <Footer />
    </>
  );
};

export default AboutUs;
