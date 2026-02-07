import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HFElement1 from "./HFElement1";
import img0 from "../../assets/gallery/img0.jpeg";
import { Helmet } from "react-helmet";

const HarleyFilter = (props) => {
  return (
    <>
      <Helmet>
        <title>Harley Filter | Green Filter</title>
        <meta name="description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />

        <meta property="og:title" content="Harley Filter | Green Filter" />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/harley-filter" />
      </Helmet>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <HFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default HarleyFilter;
