import React from "react";
import "../../styles/Hero.css";
import { Carousel } from "antd";
import bg0 from "../../assets/cr_img0.jpg";
import bg1 from "../../assets/cr_img1.jpg";
import bg2 from "../../assets/cr_img2.jpg";
import styled from "styled-components";
import Button1 from "../../components/Button1";
import { Link } from "react-router-dom";
import filter0 from "../../assets/filter0.png";
import filter1 from "../../assets/filter1.png";
import filter2 from "../../assets/filter2.png";

const Hero = () => {
  return (
    <>
      <HeroWrapper bg0={bg0} bg1={bg1} bg2={bg2}>
        <Carousel autoplay dots={false}>
          <div className="img-container wrapper0">
            <div className="container-3">
              <h1 class="hero-heading-1">
                Green Filter Wins at the 2018 Rolex
              </h1>
              <h1 class="hero-heading-2">
                "Proud to include Green Filter in our winning Ford GTs" - CHIP
                GANASSI
              </h1>
              <Link to="/">
                <Button1 text="Why Go Green?" />
              </Link>
            </div>
            <img src={filter0} alt="filter0" className="filter _600" />
          </div>
          <div className="img-container wrapper1">
            <div className="container-3">
              <h1 class="hero-heading-1">
                Feel The Immediate Difference In Your Truck
              </h1>
              <h1 class="hero-heading-2">
                Increase your horsepower & fuel efficiency.
              </h1>
              <Link to="/">
                <Button1 text="Prove It!" />
              </Link>
            </div>
            <img src={filter1} alt="filter1" className="filter right" />
          </div>
          <div className="img-container wrapper2">
            <div className="container-3">
              <h1 class="hero-heading-1">Save Money & Protect Your Family</h1>
              <h1 class="hero-heading-2">
                From gas mileage to lifetime durability ... Green Filters
                outperform the competition.
              </h1>
              <Link to="/">
                <Button1 text="Prove It!" />
              </Link>
            </div>
            <img src={filter2} alt="filter2" className="filter" />
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
  img {
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
`;
