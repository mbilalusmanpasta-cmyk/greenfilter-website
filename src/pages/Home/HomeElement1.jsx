import React, { useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";

import CircleLoader from "react-spinners/CircleLoader";

const HomeElement1 = (props) => {
  const history = useHistory();
  const [topPerformingBrands, setTopPerformingBrands] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(async () => {
    setLoading(true);
    const topPerformingBrandsCollectionId = 6;
    let topPerformingBrandsT = {};
    let response = await GetData(
      statics.BaseUrl + `/collection?id=${topPerformingBrandsCollectionId}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      topPerformingBrandsT = response?.data?.rows?.[0];
    }
    setTopPerformingBrands(topPerformingBrandsT);
    setLoading(false);
  }, []);

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
      {loading && (
        <React.Fragment>
          <div
            style={{
              top: "0px",
              left: "0px",
              position: "fixed",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgb(64 57 57 / 20%)",
              backdropFilter: "blur(3px)",
              zIndex: 9999,
            }}
          >
            {" "}
          </div>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              zIndex: "9999",
              position: "absolute",
              top: "calc(50vh - 75px)",
              left: "calc(50% - 75px)",
            }}
          >
            <CircleLoader
              color={"white"}
              loading={true}
              size={150}
              id="custom-loader-el"
            />
          </div>
        </React.Fragment>
      )}

      <HomeElement1Wrapper gradient={gradient}>
        <div className="container-4">
          <h1 class="heading-11">
            The Chosen Filter for Top Performing Brands
          </h1>
          <div className="main-vehicle-row">
            {topPerformingBrands?.makes?.map((make) => (
              <div key={make.id} className="w-col w-col-2">
                <Link
                  to={`/brand/${make.slug}`}
                  class="link-block w-inline-block"
                >
                  <div className="column-div custom-button-temp">
                    {/* <img
                        src={make?.images?.[0]?.link}
                      sizes="(max-width: 479px) 82vw, (max-width: 767px) 200px, 13vw"
                      class="product-image"
                      alt="car"
                    /> */}
                    <div class="text-block car-carousel">{make.name}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="div-block-5">
            <Button1
              text="See All Brands"
              handleClick={() => {
                props.handleClickIndex(0);
                history.push("/shop-by-vehicle");
              }}
            />
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
              <div class="w-col w-col-2 single">
                <div class="column-div _0">
                  <img
                    src={brand.imgSrc}
                    alt="brand"
                    sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, 13vw"
                    className={`image-${brands.indexOf(brand)}`}
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
    margin-top: 25px;
    margin-bottom: 0px;
    flex-wrap: wrap;
    justify-content: center !important;
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
    z-index: 9;
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
  // .w-row {
  //   margin-left: -10px;
  //   margin-right: -10px;
  // }
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
  .image-5 {
    width: 125px;
  }
  .disclaimer {
    margin-bottom: 10px;
    font-family: Lato, sans-serif;
    color: #757575;
    font-weight: 300;
  }
  @media screen and (max-width: 767px) {
    .w-col-2 {
      width: 50% !important;
      left: auto;
      right: auto;
      margin-bottom: 20px;
    }
    .single {
      width: 100% !important;
    }
    .w-col {
      float: none;
    }
    .titles-div {
      width: 90%;
    }
    .column-div._0 {
      height: auto;
    }
  }
  @media (max-width: 1300px) {
    .titles-div {
      margin-top: 50px;
    }
  }

  @media (max-width: 600px) {
    .titles-div.top {
      display: none;
    }
  }
`;
