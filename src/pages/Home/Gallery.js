import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Gallery = ({ gallery, width }) => {
  return (
    <>
      <GalleryWrapper width={width}>
        {gallery?.map((image) => (
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
    width: ${(props) => (props.width ? props.width : "14.28%")};
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

  @media (max-width: 479px) {
    .lightbox {
      width: 50%;
    }
  }
`;
