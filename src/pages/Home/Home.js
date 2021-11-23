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

const Home = (props) => {
  const gallery = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];
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
      <Gallery gallery={gallery} width="20%" />
      <Footer />
    </>
  );
};

export default Home;
