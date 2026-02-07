import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import CCElement1 from "./CCElement1";
import CCElement2 from "./CCElement2";
import Gallery from "../Home/Gallery";

import img0 from "../../assets/gallery/img0.jpeg";
import img1 from "../../assets/gallery/img1.jpeg";
import img2 from "../../assets/gallery/img2.jpeg";
import img3 from "../../assets/gallery/img3.jpeg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpeg";
import img7 from "../../assets/gallery/img7.jpeg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.jpg";
import img10 from "../../assets/gallery/img10.jpg";
import img11 from "../../assets/gallery/img11.jpeg";
import img12 from "../../assets/gallery/img12.jpg";
import img13 from "../../assets/gallery/img13.jpg";
import { Helmet } from "react-helmet";

const CleanerCare = (props) => {
  const gallery = [
    { id: 0, image: img0 },
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
  ];
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
