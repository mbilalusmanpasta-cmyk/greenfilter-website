import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const Gallery = ({ gallery }) => {
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  // Data already has correct structure with 'image' property

  return (
    <>
      <GalleryWrapper>
        {gallery?.map((image,id) => (

          (id > 1 && id < 16) && (
          <Link
            key={image.id}
            to="#"
            className="lightbox w-inline-block w-lightbox"
          >
            <img
              src={image.image}
              alt="gallery"
              sizes="(max-width: 479px) 50vw, 14vw"
              className="lb-image"
              onClick={() => {
                lightBoxHandler(true, gallery.indexOf(image));
              }}
            />
          </Link>)
        ))}

        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={gallery}
          imageWidth="60vw"
          imageHeight="70vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
        />
      </GalleryWrapper>
    </>
  );
};

export default Gallery;

const GalleryWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;

  .lightbox {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid #fff;
  }
  .lb-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  ._3AWTh {
    z-index: 100000;
  }
  @media (max-width: 479px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
