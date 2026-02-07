import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.png";
import brand0 from "../../assets/trust/brand0.png";
import brand1 from "../../assets/trust/brand1.png";
import brand2 from "../../assets/trust/brand2.png";
import brand3 from "../../assets/trust/brand3.png";
import brand4 from "../../assets/trust/brand4.png";
import brand5 from "../../assets/trust/brand5.jpg";
const GuaranteeElement3 = ({ src }) => {
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
      <GuaranteeElement3Wrapper bgImg={bgImg}>
        <div className="div-block-3">
          <div
            style={{ paddingTop: "56.17021276595745%" }}
            className="video w-video w-embed"
          >
            <iframe
              width="560"
              height="315"
              src={src ? src : "https://www.youtube.com/embed/om0RyH2ZXr8"}
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; encrypted-media;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="titles-div top">
            <h1 className="heading-2">
              Watch Green Filter Outperform the Competition
            </h1>
            <p class="large-paragraph w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
              Watch President
            </p>
            <div className="gradient"></div>
          </div>
        </div>
        <div className="trusted w-container">
          <div className="titles-div">
            <h1 className="proud-suppliers-to">
              THE CHOSEN AIR FILTER BY THE WORLD'S BEST
            </h1>
          </div>
          <div className="w-row">
            {brands.map((brand) => (
              <div className="w-col w-col-2">
                <div className="column-div _0">
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
      </GuaranteeElement3Wrapper>
    </>
  );
};

export default GuaranteeElement3;

const GuaranteeElement3Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 15%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .w-col {
    float: left;
  }

  @media screen and (max-width: 767px) {
    .w-col-2 {
      width: 100% !important;
      left: auto;
      right: auto;
      margin-bottom: 20px;
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
    .top {
      width: 100% !important;
    }
  }
  @media (max-width: 1300px) {
    .titles-div {
      margin-top: 50px;
    }
    .top {
      margin-top: 0px !important;
    }
  }

  @media (max-width: 600px) {
    .titles-div.top {
      display: none;
    }
  }
`;
