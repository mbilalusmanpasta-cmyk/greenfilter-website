import React from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue2.png";
import youtube from "../../assets/yt.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeElement5 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <HomeElement5Wrapper gradient={gradient}>
        <div className="w-container">
          <div class="titles-div">
            <div class="titles-div flex w-clearfix">
              <h1>Watch The World Show Us Off on</h1>
              <img src={youtube} alt="youtube" class="image-6" />
            </div>
          </div>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
          >
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/GT9H2omp1WE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/om0RyH2ZXr8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/k5NcFQDlZ4g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/d7rETWxgZ8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/GT9H2omp1WE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/om0RyH2ZXr8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/k5NcFQDlZ4g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/d7rETWxgZ8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel>
          ;
        </div>
      </HomeElement5Wrapper>
    </>
  );
};

export default HomeElement5;

const HomeElement5Wrapper = styled.div`
  padding-top: 250px;
  padding-bottom: 200px;
  background-image: url(${(props) => props.gradient});
  background-position: 0px 0px;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .titles-div {
    position: relative;
    left: 0%;
    display: block;
    width: 60%;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    text-align: center;
    text-transform: none;
  }
  .titles-div.flex {
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .image-6 {
    display: inline-block;
    width: 200px;
    margin-left: 10px;
    float: right;
  }

  .carousel-item {
    width: 480px;
    height: 363px;
    padding: 10px;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }
  .react-multiple-carousel__arrow {
    display: none;
  }
  .react-multi-carousel-dot--active button {
    background: #545353 !important;
  }
  .react-multi-carousel-dot button {
    width: 5px;
    height: 5px;
    margin-right: 20px;
    background: #ccc;
  }
`;
