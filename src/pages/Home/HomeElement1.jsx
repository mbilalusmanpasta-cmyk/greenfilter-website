import React, { useEffect } from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue.webp";
import { Link } from "react-router-dom";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";

import CircleLoader from "react-spinners/CircleLoader";

const BRAND_GREEN = "#00ad23";

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

const HomeElement1 = (props) => {
  const [topPerformingBrands, setTopPerformingBrands] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchTopPerformingBrands = async () => {
      if (isMounted) {
        setLoading(true);
      }
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
      if (isMounted) {
        setTopPerformingBrands(topPerformingBrandsT);
        setLoading(false);
      }
    };

    fetchTopPerformingBrands();

    return () => {
      isMounted = false;
    };
  }, []);

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
          <h1 className="heading-11">
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
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
              ></iframe>
            </div>
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
`;
