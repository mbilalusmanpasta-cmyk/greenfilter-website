import React, { useState, useEffect } from "react";
import "../../styles/Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg0 from "../../assets/cr_img0.jpg";
import bg1 from "../../assets/cr_img1.jpg";
import bg2 from "../../assets/cr_img2.jpg";
import styled, { keyframes } from "styled-components";

const MOBILE_BREAKPOINT = 767;

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

const DEFAULT_BANNER = "/images/banner.svg";

const Hero = ({ sliders }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sliderList = sliders && sliders.length > 0
    ? sliders
    : [{ title: "", description: "", hero: [{ link: DEFAULT_BANNER }] }];
  const firstSlide = sliderList[0];
  const firstSlideImage = firstSlide?.hero?.[0]?.link || DEFAULT_BANNER;

  return (
    <>
      <HeroWrapper bg0={bg0} bg1={bg1} bg2={bg2} sliders={sliders}>
        <HeroSliderStyled>
          {isMobile ? (
            <HeroSliderWrapper bg={firstSlideImage}>
              <div className="img-container wrapper0 hero-mobile-image-only" />
            </HeroSliderWrapper>
          ) : (
            <Slider {...slickSettings}>
              {sliderList.map((slider, index) => (
                <div key={index}>
                  <HeroSliderWrapper bg={slider.hero?.[0]?.link || DEFAULT_BANNER}>
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
    min-height: 150px;
  }
  .slick-slider {
    width: 100%;
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-slider {
      min-height: 150px;
    }
  }
  .slick-list {
    min-height: 500px;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    .slick-list {
      min-height: 150px;
    }
  }
  .slick-track {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-track {
      min-height: 150px;
    }
  }
  .slick-slide > div {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    .slick-slide > div {
      min-height: 150px;
      background-color: #0d0d0d;
    }
    .slick-slide {
      min-height: 150px;
      background-color: #0d0d0d;
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
      width: 36px;
      height: 36px;
      opacity: 0.6;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 28px;
      color: ${ACCENT_COLOR};
      opacity: 0.9;
    }
    .slick-prev:hover:before,
    .slick-next:hover:before {
      opacity: 1;
    }
    .slick-prev {
      left: 8px;
    }
    .slick-next {
      right: 8px;
    }
    .slick-dots {
      bottom: 12px;
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
    background-color: #0d0d0d;
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
    margin-top: 50px;

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
      min-height: 150px;
    }
    .container-3 {
      padding: 32px 16px 24px;
      max-width: 100%;
    }
    .hero-heading-1 {
      font-size: 18px;
      line-height: 1.2;
    }
    .hero-heading-1-accent {
      width: 36px;
      height: 2px;
      margin: 6px auto 8px;
    }
    .hero-heading-2 {
      font-size: 12px;
      line-height: 1.4;
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
      margin-left: 10%;
      margin-right: 10%;
    }
  }
`;


/* Slow left-to-right pan on small mobile so full image content is visible without resizing */
const heroMobilePan = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0% center;
  }
  100% {
    background-position: 0px 0px, 0px 0px, 100% center;
  }
`;

const HeroSliderWrapper = styled.div`
  .img-container {
    position: relative;
    min-height: 500px;
    background-repeat: no-repeat;
    background-color: #1a1a1a;
    margin-left: 0;
    margin-right: 0;
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
    background-size: auto, auto, contain;
      margin-left: 0%;
      margin-right: 0%;
   
  }
  @media screen and (max-width: 991px) {
    .wrapper0 {
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  @media screen and (max-width: 767px) {
    .img-container {
      min-height: 150px;
    }
    .wrapper0 {
      background-size: auto, auto, cover;
      background-position: 0px 0px, 0px 0px, center center;
      margin-left: 0;
      margin-right: 0;
    }
  }
  /* Small mobile: show full image via contain + left-to-right pan, no size change */
  @media screen and (max-width: 420px) {
    .img-container.wrapper0 {
      background-size: auto, auto, contain;
      background-position: 0px 0px, 0px 0px, 0% center;
      animation: ${heroMobilePan} 18s ease-in-out infinite alternate;
    }
  }
`;
