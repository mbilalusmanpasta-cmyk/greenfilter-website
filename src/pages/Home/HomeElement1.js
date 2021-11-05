import React from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue.png";
import { Link } from "react-router-dom";
import car0 from "../../assets/cars/car0.png";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";
import car4 from "../../assets/cars/car4.png";
import car5 from "../../assets/cars/car5.png";

import brand0 from "../../assets/trust/brand0.png";
import brand1 from "../../assets/trust/brand1.png";
import brand2 from "../../assets/trust/brand2.png";
import brand3 from "../../assets/trust/brand3.png";
import brand4 from "../../assets/trust/brand4.png";
import brand5 from "../../assets/trust/brand5.jpg";
import Button1 from "../../components/Button1";
const HomeElement1 = () => {
  const cars = [
    {
      id: 0,
      imgSrc: car0,
      name: "camaro",
    },
    {
      id: 1,
      imgSrc: car1,
      name: "corvette",
    },
    {
      id: 2,
      imgSrc: car2,
      name: "mustang",
    },
    {
      id: 3,
      imgSrc: car3,
      name: "viper",
    },
    {
      id: 4,
      imgSrc: car4,
      name: "focus",
    },
    {
      id: 5,
      imgSrc: car5,
      name: "porsche",
    },
  ];
  const brands = [
    {
      id: 0,
      imgSrc: brand0,
    },
    {
      id: 1,
      imgSrc: brand1,
    },
    {
      id: 2,
      imgSrc: brand2,
    },
    {
      id: 3,
      imgSrc: brand3,
    },
    {
      id: 4,
      imgSrc: brand4,
    },
    {
      id: 5,
      imgSrc: brand5,
    },
  ];
  return (
    <>
      <HomeElement1Wrapper gradient={gradient}>
        <div className="container-4">
          <h1 class="heading-11">
            The Chosen Filter for Top Performing Brands
          </h1>
          <div className="main-vehicle-row">
            {cars.map((car) => (
              <div key={car.id} className="w-col w-col-2">
                <Link to="/" class="link-block w-inline-block">
                  <div class="column-div">
                    <img
                      src={car.imgSrc}
                      sizes="(max-width: 479px) 82vw, (max-width: 767px) 200px, 13vw"
                      class="product-image"
                      alt="car"
                    />
                    <div class="text-block car-carousel">{car.name}</div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="div-block-5">
              <Button1 text="See All Brands" />
            </div>
          </div>
        </div>
        <div className="div-block-3">
          <div
            style={{ paddingTop: "56.17021276595745%" }}
            className="video w-video w-embed"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LOgLMW-Bdh4"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; encrypted-media;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="titles-div top">
            <h1 class="heading-2">
              Watch Green Filter Outperform the Competition
            </h1>
            <p class="large-paragraph w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
              Watch President
            </p>
            <div class="gradient"></div>
          </div>
        </div>
        <div className="trusted w-container">
          <div className="titles-div">
            <h1 class="proud-suppliers-to">
              THE CHOSEN AIR FILTER BY THE WORLD'S BEST
            </h1>
          </div>
          <div className="w-row">
            {brands.map((brand) => (
              <div class="w-col w-col-2">
                <div class="column-div _0">
                  <img
                    src={brand.imgSrc}
                    alt="brand"
                    sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, 13vw"
                    className={brands.indexOf(brand) === 3 ? "image-3" : null}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </HomeElement1Wrapper>
    </>
  );
};

export default HomeElement1;

const HomeElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 15%;
  background-color: #fff;
  background-image: url(${(props) => props.gradient});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .container-4 {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }
  .heading-11 {
    margin-bottom: 50px;
    font-weight: 400;
    text-align: center;
  }

  .main-vehicle-row {
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 25px;
    margin-bottom: 0px;
  }
  .w-col {
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .w-col-2 {
    width: 16.66666667%;
  }
  .link-block {
    width: auto;
    margin-bottom: 0px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
  }
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .product-image {
    width: 200px;
  }
  .text-block.car-carousel {
    margin-top: 10px;
    color: #757575;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }
  .text-block {
    font-family: Lato, sans-serif;
    color: #525252;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .div-block-5 {
    text-align: center;
  }
  .div-block-5 button {
    margin-top: 20px;
  }
  .div-block-3 {
    position: relative;
    height: auto;
    margin-top: 50px;
  }
  .video {
    height: 250px;
  }
  .w-video {
    width: 100%;
    position: relative;
    padding: 0;
  }

  .w-video iframe,
  .w-video object,
  .w-video embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .titles-div.top {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    width: auto;
    margin-top: 0%;
    margin-right: 0%;
    margin-left: 0%;
    padding-top: 25px;
    padding-bottom: 25px;
    background-image: none;
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
  .heading-2 {
    position: relative;
    z-index: 999;
    color: #fff;
    font-weight: 300;
  }
  .w-hidden-main {
    display: none !important;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
    color: #fff;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }
  .gradient {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    width: auto;
    height: 135%;
    background-image: -webkit-linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.89) 32%,
      transparent
    );
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.89) 32%,
      transparent
    );
  }
  .trusted {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
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
  .proud-suppliers-to {
    margin-top: 50px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
  }
  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }
  .w-row {
    margin-left: -10px;
    margin-right: -10px;
  }
  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .column-div._0 {
    display: flex;
    height: 100px;
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  ._0 {
    margin-top: 0px;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .image-3 {
    width: 75px;
  }
`;
