import React from "react";
import Header from "../../components/Header";
import Hero from "../WhyGoGreen/Hero";
import Gallery from "../Home/Gallery";
import Footer from "../../components/Footer";
import ContactElement1 from "./ContactElement1";
import ContactElement2 from "./ContactElement2";
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.webp";

const gallery = galleryImages;
const Contact = (props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Green Filter</title>
        <meta name="description" content="Learn about Green Filter's mission, vision, and dedication to eco-friendly solutions. See our gallery and team." />
        <meta property="og:title" content="Contact Us | Green Filter" />
        <meta property="og:description" content="Discover who we are and how we're revolutionizing filtration with eco-conscious innovation." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/contact-us" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <Hero />
        <ContactElement1 />
        <ContactElement2 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
