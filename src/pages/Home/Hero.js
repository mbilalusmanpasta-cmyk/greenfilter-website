import React from "react";
import "../../styles/Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg0 from "../../assets/cr_img0.jpg";
import bg1 from "../../assets/cr_img1.jpg";
import bg2 from "../../assets/cr_img2.jpg";
import styled from "styled-components";

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  pauseOnHover: true,
  arrows: true,
  adaptiveHeight: false,
};

const Hero = ({ sliders }) => {
  const sliderList = sliders || [];
  return (
    <>
      <HeroWrapper bg0={bg0} bg1={bg1} bg2={bg2} sliders={sliders}>
        <HeroSliderStyled>
          {sliderList.length > 0 && (
            <Slider {...slickSettings}>
              {sliderList.map((slider, index) => (
                <div key={index}>
                  <HeroSliderWrapper bg={slider.hero?.[0]?.link}>
                    <div className="img-container wrapper0">
                      <div className="container-3">
                        <h1 className="hero-heading-1">
                          {slider.title}
                        </h1>
                        <h1 className="hero-heading-2">
                          {slider.description}
                        </h1>
                      </div>
                    </div>
                  </HeroSliderWrapper>
                </div>
              ))}
            </Slider>
          )}
        </HeroSliderStyled>
      </HeroWrapper>
    </>
  );
};

export default Hero;

const HeroSliderStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  .slick-slider {
    width: 100%;
    min-height: 500px;
  }
  .slick-list {
    min-height: 500px;
    height: auto;
  }
  .slick-track {
    min-height: 500px;
  }
  .slick-slide > div {
    min-height: 500px;
  }
  .slick-dots {
    bottom: 24px;
    z-index: 10;
  }
  .slick-dots li button:before {
    font-size: 10px;
    opacity: 0.5;
    color: #fff;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
  }
  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 44px;
    height: 44px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 44px;
    opacity: 0.75;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
  }
  .slick-prev {
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }
`;

const HeroWrapper = styled.div`
  max-height: 500px;
  .img-container {
    position: relative;
    min-height: 500px;
    background-repeat: no-repeat;
  }
  .wrapper0 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.21),
        rgba(0, 0, 0, 0.21)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.98), transparent 53%),
      url(${(props) => props.slider});
    background-position: 0px 0px, 0px 0px, 50% 50%;
    background-size: auto, auto, cover;
  }
  .wrapper1 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.98),
        transparent 53%
      ),
      url(${(props) => props.bg1});
    background-position: 0px 0px, 0% 93%;
    background-size: auto, cover;
  }
  .wrapper2 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.98),
        transparent 53%
      ),
      url(${(props) => props.bg2});
    background-position: 0px 0px, 0% 67%;
    background-size: auto, cover;
  }
  .container-3 {
    position: relative;
    z-index: 9999;
    padding-top: 150px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }
  .container-3:before,
  .container-3:after {
    content: " ";
    display: table;
  }

  .hero-heading-1 {
    margin-bottom: 0px;
    font-family: Lato, sans-serif;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.75px;
    padding: 0 10px;
  }
  .hero-heading-2 {
    margin-top: 0px;
    font-family: Lato, sans-serif;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.75px;
  }

  .filter._600 {
    left: -5%;
    right: auto;
    bottom: -20%;
    width: 600px;
  }
  .filter.right {
    right: 0%;
    bottom: -10%;
    width: 500px;
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  .filter {
    position: absolute;
    right: 0%;
    bottom: -3%;
    width: auto;
    max-height: 100%;
  }
  @media screen and (max-width: 767px) {
    .img-container {
      // height: 100vh;
    }
    .filter {
      display: none !important;
    }
  }
  @media screen and (max-width: 991px) {
    .container-3 {
      max-width: 728px;
    }
  }
`;


const HeroSliderWrapper = styled.div`

  .img-container {
    position: relative;
    min-height: 500px;
    background-repeat: no-repeat;
  }
  .wrapper0 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.21),
        rgba(0, 0, 0, 0.21)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.98), transparent 53%),
      url(${(props) => props.bg});
    background-position: 0px 0px, 0px 0px, 50% 50%;
    background-size: auto, auto, cover;
  }

  
`;
