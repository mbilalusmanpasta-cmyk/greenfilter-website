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
import { FaStar } from "react-icons/fa";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";

const HeadingAccent = styled.div`
  width: 56px;
  height: 3px;
  background: ${BRAND_GREEN};
  border-radius: 2px;
  margin: 0 auto 40px;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`;

const TickerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 8px 0;
`;

const TickerTrack = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  animation: marqueeScroll 22s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

const TickerItem = styled.span`
  font-family: Lato, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1a1a1a;
  white-space: nowrap;
  padding: 0 4px;
  text-decoration: none;
  transition: color 0.15s ease;
`;

const TickerLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  &:hover ${TickerItem} {
    color: ${BRAND_GREEN};
  }
`;

const TickerSep = styled.span`
  color: ${BRAND_GREEN};
  font-size: 14px;
  padding: 0 16px;
  user-select: none;
  flex-shrink: 0;
`;

const BrandsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  .brand-col {
    flex: 0 0 auto;
    width: calc(16.666% - 20px);
    min-width: 80px;
    max-width: 120px;
  }
  .brand-col img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media (max-width: 767px) {
    gap: 16px;
    margin-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    .brand-col {
      width: calc(33.333% - 12px);
      min-width: 70px;
    }
  }
`;

const ReviewsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${TEXT_DARK};
  flex-shrink: 0;
  .stars {
    display: flex;
    gap: 2px;
    color: ${BRAND_GREEN};
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    margin-top: 8px;
    width: 100%;
    justify-content: center;
  }
`;

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
          <HeadingAccent />
          {topPerformingBrands?.makes?.length > 0 && (
            <TickerWrapper>
              <TickerTrack>
                {[...topPerformingBrands.makes, ...topPerformingBrands.makes].map((make, i) => (
                  <TickerLink key={i} to={`/brand/${make.slug}`}>
                    <TickerItem>{make.name}</TickerItem>
                    <TickerSep>·</TickerSep>
                  </TickerLink>
                ))}
              </TickerTrack>
            </TickerWrapper>
          )}
        </div>
        <div className="video-section">
          <div className="video-heading-block">
            <h2 className="video-heading">
              Watch Green Filter Outperform the Competition
            </h2>
            <HeadingAccent />
          </div>
          <div className="div-block-3">
            <div
              style={{ paddingTop: "56.17021276595745%" }}
              className="video w-video w-embed"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WRaQW6ytxYw"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="trusted w-container">
          <div className="titles-div">
            <h1 class="proud-suppliers-to">
              THE CHOSEN AIR FILTER BY THE WORLD'S BEST
            </h1>
          </div>
          <BrandsRow>
            {brands.map((brand) => (
              <div key={brand.id} className="brand-col">
                <img
                  src={brand.imgSrc}
                  alt="brand"
                  sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, 13vw"
                />
              </div>
            ))}
            <ReviewsBadge>
              <span className="stars" aria-label="5 star reviews">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              <span>5-Star Reviews</span>
            </ReviewsBadge>
          </BrandsRow>
        </div> */}
      </HomeElement1Wrapper>
    </>
  );
};

export default HomeElement1;

const HomeElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 0 24px 180px;
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

  @media screen and (max-width: 767px) {
    .container-4 {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  .heading-11 {
    margin-bottom: 16px;
    font-family: Lato, sans-serif;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 0.3px;
    color: #1a1a1a;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .heading-11 {
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 1.3;
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .heading-11 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .video-section {
    max-width: 940px;
    margin: 0 auto;
    padding-top: 20px;
  }

  .video-heading-block {
    text-align: center;
    margin-bottom: 40px;
  }

  .video-heading {
    font-family: Lato, sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0 0 14px;
    line-height: 1.2;
  }

  @media (max-width: 767px) {
    .video-heading {
      font-size: 24px;
      padding: 0 16px;
    }

    .video-heading-block {
      margin-bottom: 28px;
    }
  }

  .div-block-3 {
    position: relative;
    height: auto;
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
    .titles-div {
      width: 90%;
    }
    .column-div._0 {
      height: auto;
    }
  }
`;
