import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightBox } from "react-lightbox-pack";
import { SRLWrapper } from "simple-react-lightbox";
import "react-lightbox-pack/dist/index.css";

const Gallery = ({ gallery, width }) => {
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  useEffect(()=>{
    if(gallery && gallery.length > 0)
    {
      gallery.forEach(element => {
        element.image = element.link;
      });
    }
  },[gallery])

  return (
    <>
      <GalleryWrapper width={width}>
        {gallery?.map((image,id) => (

          (id > 1 && id < 16) && (
          <Link
            key={image.id}
            to="#"
            className="lightbox w-inline-block w-lightbox"
          >
            <img
              src={image.link || image.image}
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

  // ._3ZUEV {
  //   display: none;
  // }

  ._3AWTh {
    z-index: 100000;
  }
  @media (max-width: 479px) {
    .lightbox {
      width: 50%;
    }
  }
`;
