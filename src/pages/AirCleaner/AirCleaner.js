import React from "react";
import Header from "../../components/Header";
import ACElement1 from "./ACElement1";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import img0 from "../../assets/gallery/img0.jpeg";

const AirCleaner = (props) => {
  return (
    <>
      <Helmet>
        <title>Air Cleaner Assembly | Green Filter</title>
        <meta name="description" content="Learn about Green Filter's mission, vision, and dedication to eco-friendly solutions. See our gallery and team." />
        <meta property="og:title" content="Air Cleaner Assembly | Green Filter" />
        <meta property="og:description" content="Discover who we are and how we're revolutionizing filtration with eco-conscious innovation." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/air-cleaner" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <ACElement1 />
      </div>
      <Footer />
    </>
  );
};

export default AirCleaner;
