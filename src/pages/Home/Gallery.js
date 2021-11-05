import React from "react";
import styled from "styled-components";
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
import { Link } from "react-router-dom";
const Gallery = () => {
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
  return (
    <>
      <GalleryWrapper>
        {gallery.map((image) => (
          <Link
            key={gallery.indexOf(image)}
            to="#"
            className="lightbox w-inline-block w-lightbox"
          >
            <img
              src={image}
              alt="gallery"
              sizes="(max-width: 479px) 50vw, 14vw"
              className="lb-image"
            />
          </Link>
        ))}
      </GalleryWrapper>
    </>
  );
};

export default Gallery;

const GalleryWrapper = styled.div`
  position: relative;

  .lightbox {
    position: static;
    display: inline-block;
    overflow: visible;
    width: 14.28%;
    height: auto;
    margin-bottom: 0px;
    float: none;
    clear: none;
    border: 1px solid #fff;
    max-width: 100%;
  }
  .lb-image {
    width: 100%;
    height: auto;
  }
`;
