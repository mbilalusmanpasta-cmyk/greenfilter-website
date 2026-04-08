import React from "react";
import "../../styles/Hero.css";
import { Carousel } from "antd";
import bg0 from "../../assets/cr_img0.webp";
import bg1 from "../../assets/cr_img1.webp";
import bg2 from "../../assets/cr_img2.webp";
import styled from "styled-components";
import Button1 from "../../components/Button1";
import { Link } from "react-router-dom";
import filter0 from "../../assets/cleaner-p-800.webp";

const Hero = () => {
  return (
    <>
      <HeroWrapper bg0={bg0} bg1={bg1} bg2={bg2}>
        <Carousel dots={false}>
          <div className="img-container wrapper0">
            <div className="container-3">
              <h1 class="hero-heading-1">Air Filter Cleaner and Cleaner Oil</h1>
              <h2 class="hero-heading-2">
                Keep your air filter in perfect condition for lifetime usage
              </h2>
              <div onClick={() => window.scrollTo(0, 650)}>
                <Button1 text="BUY NOW" />
              </div>
            </div>
            <img src={filter0} alt="filter0" className="filter _600" />
          </div>
        </Carousel>
      </HeroWrapper>
    </>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  .img-container {
    position: relative;
    min-height: 700px;
    background-repeat: no-repeat;
  }
  .wrapper0 {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.21),
        rgba(0, 0, 0, 0.21)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.98), transparent 53%),
      url(${(props) => props.bg0});
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
    padding: 0 10px;
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
    width: 500px;
  }
  @media screen and (max-width: 767px) {
    .img-container {
      height: 100vh;
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
