import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import CCElement1 from "./CCElement1";
import CCElement2 from "./CCElement2";
import Gallery from "../Home/Gallery";
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const CleanerCare = (props) => {
  const gallery = galleryImages;
  return (
    <>
      <Helmet>
        <title>Engine Air Filter Cleaner - Green Filter USA</title>
        <meta name="description" content="Green Filter Cleaner: Specially formulated to clean & re-oil your Green High Performance Air Filter. Protect your engine & maximize airflow. Shop now!" />
        <meta property="og:title" content="Engine Air Filter Cleaner - Green Filter USA" />
        <meta property="og:description" content="Green Filter Cleaner: Specially formulated to clean & re-oil your Green High Performance Air Filter. Protect your engine & maximize airflow. Shop now!" />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/cleaner-care" />

      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <Hero />
        <CCElement1 />
        <CCElement2 />

        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default CleanerCare;
