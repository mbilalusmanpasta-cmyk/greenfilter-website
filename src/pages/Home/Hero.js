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
                        <hr className="hero-heading-1-accent" aria-hidden="true" />
                        <h2 className="hero-heading-2">
                          {slider.description}
                        </h2>
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

const ACCENT_COLOR = "#00ad23";

const HeroSliderStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 767px) {
    min-height: 380px;
  }
  .slick-slider {
    width: 100%;
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-slider {
      min-height: 380px;
    }
  }
  .slick-list {
    min-height: 500px;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    .slick-list {
      min-height: 380px;
    }
  }
  .slick-track {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-track {
      min-height: 380px;
    }
  }
  .slick-slide > div {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-slide > div {
      min-height: 380px;
      background-color: #1a1a1a;
    }
    .slick-slide {
      background-color: #1a1a1a;
    }
  }
  /* Dots: outline style for inactive, filled accent for active (reference style) */
  .slick-dots {
    bottom: 28px;
    z-index: 10;
  }
  .slick-dots li {
    margin: 0 6px;
  }
  .slick-dots li button:before {
    font-size: 0;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    background: transparent;
    opacity: 1;
  }
  .slick-dots li.slick-active button:before {
    background: ${ACCENT_COLOR};
    border-color: ${ACCENT_COLOR};
  }
  /* Arrows: vertically centered, accent on hover (reference style) */
  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 48px;
    height: 48px;
    top: 50%;
    transform: translateY(-50%);
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    opacity: 0.9;
    color: #fff;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
    color: ${ACCENT_COLOR};
  }
  .slick-prev {
    left: 24px;
  }
  .slick-next {
    right: 24px;
  }
  @media screen and (max-width: 767px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 32px;
    }
    .slick-prev {
      left: 12px;
    }
    .slick-next {
      right: 12px;
    }
    .slick-dots {
      bottom: 20px;
    }
  }
`;

const HeroWrapper = styled.div`
  max-height: 500px;
  /* Full-bleed background only on tablet when container-0 has margin; skip on mobile */
  @media screen and (max-width: 991px) and (min-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    position: relative;
    box-sizing: border-box;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    overflow: hidden;
    background-color: #1a1a1a;
  }
  .img-container {
    position: relative;
    min-height: 500px;
    background-repeat: no-repeat;
    background-color: #1a1a1a;
  }
  .wrapper0 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.21),
        rgba(0, 0, 0, 0.21)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.98), transparent 53%),
      url(${(props) => props.slider});
    background-position: 0px 0px, 0px 0px, center center;
    background-size: auto, auto, contain;
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
  /* Centered content column with clear side margins (reference: content not full width) */
  .container-3 {
    position: relative;
    z-index: 9999;
    padding: 150px 48px 80px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
  }
  .container-3:before,
  .container-3:after {
    content: " ";
    display: table;
  }

  .hero-heading-1 {
    margin-bottom: 12px;
    font-family: Lato, sans-serif;
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.5px;
    padding: 0 8px;
    line-height: 1.2;
  }
  /* Accent line under main heading (reference: orange line under "TRUSTED FOR OVER 50 YEARS") */
  .hero-heading-1-accent {
    display: block;
    width: 60px;
    height: 4px;
    background: ${ACCENT_COLOR};
    margin: 12px auto 20px;
    border: none;
  }
  .hero-heading-2 {
    margin-top: 0;
    font-family: Lato, sans-serif;
    color: rgba(255, 255, 255, 0.95);
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.3px;
    padding: 0 8px;
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
      min-height: 380px;
    }
    .container-3 {
      padding: 72px 24px 60px;
      max-width: 100%;
    }
    .hero-heading-1 {
      font-size: 24px;
    }
    .hero-heading-1-accent {
      width: 48px;
      height: 3px;
      margin: 10px auto 16px;
    }
    .hero-heading-2 {
      font-size: 15px;
      line-height: 1.5;
    }
    .filter {
      display: none !important;
    }
  }
  @media screen and (max-width: 991px) {
    .container-3 {
      max-width: 600px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;


const HeroSliderWrapper = styled.div`
  .img-container {
    position: relative;
    min-height: 500px;
    background-repeat: no-repeat;
    background-color: #1a1a1a;
  }
  .wrapper0 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.21),
        rgba(0, 0, 0, 0.21)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.98), transparent 53%),
      url(${(props) => props.bg});
    background-position: 0px 0px, 0px 0px, center center;
    /* Show full image in given width (no crop) */
    background-size: auto, auto, contain;
  }
  @media screen and (max-width: 767px) {
    .img-container {
      min-height: 380px;
    }
    .wrapper0 {
      background-size: auto, auto, contain;
    }
  }
`;
