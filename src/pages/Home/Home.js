import React from "react";
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
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeElement1 />
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
