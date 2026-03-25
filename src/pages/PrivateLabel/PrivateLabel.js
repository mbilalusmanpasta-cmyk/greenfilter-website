import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../Home/Gallery";
import PLElement1 from "./PLElement1";
import { galleryImages } from "../../data/galleryImages";

const gallery = galleryImages;
const PrivateLabel = (props) => {
  return (
    <>
      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <PLElement1 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default PrivateLabel;
