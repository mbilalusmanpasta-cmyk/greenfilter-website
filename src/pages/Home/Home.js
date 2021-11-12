import React, { useEffect } from "react";
import Header from "../../components/Header";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeElement1 from "./HomeElement1";
import HomeElement2 from "./HomeElement2";
import HomeElement3 from "./HomeElement3";
import HomeElement4 from "./HomeElement4";
import HomeElement5 from "./HomeElement5";
import HomeElement6 from "./HomeElement6";
import HomeElement7 from "./HomeElement7";
import Footer from "../../components/Footer";

const Home = (props) => {
  useEffect(() => {
    props.handleClickIndex(-1);
  }, [props]);
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <Hero />
      <HomeElement1 handleClickIndex={props.handleClickIndex} />
      <HomeElement2 />
      <HomeElement3 />
      <HomeElement4 />
      <HomeElement5 />
      <HomeElement6 />
      <HomeElement7 />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
