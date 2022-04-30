import React from "react";
import styled from "styled-components";
import Button1 from "../../components/Button1";
const CCElement2 = () => {
  return (
    <>
      <CCElement1Wrapper>
        <div className="titles-div less-padding">
          <h1 className="main-header">About Green Filter Oil</h1>
          <p className="large-paragraph gray reviews">
            Green High Performance Air Filters come pretreated with a specially
            formulated dirt-trapping oil. Our proprietary lightweight, synthetic
            Green Filter oil is designed to not damage any vehicle sensors.
          </p>
        </div>
        <div className="titles-div less-padding">
          <p className="large-paragraph gray reviews">
            This oil creates a positive (+) magnetic charge, or ionic bond, with
            the filter's stainless steel mesh. The positive charge attracts the
            negatively (-) charged dust particles entering the filter, causing
            them to cling to the steel mesh and allowing the cotton to remain
            clear for maximum air flow.
          </p>
        </div>
        <div className="titles-div">
          <p className="large-paragraph gray reviews">
            Green Filter oil also contains a swelling additive for the cotton
            filtration media. This causes the cotton fibers to swell, which
            allows the filtration media to collect the very small dirt particles
            (down to 5 microns) that could otherwise harm your engine.
          </p>
          <div className="div-block-3">
            <div
              style={{ paddingTop: "56.17021276595745%" }}
              className="video w-video w-embed"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/d7rETWxgZ8U"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media;"
                allowfullscreen
              ></iframe>
            </div>
            <div className="titles-div top">
              <h1 class="heading-2">Oiled vs Unoiled</h1>
              <p class="large-paragraph w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
                Watch President
              </p>
              <div class="gradient"></div>
            </div>
          </div>
        </div>
        <div className="titles-div less-padding">
          <h1 className="main-header">Material Safety Data Sheets</h1>
          <div
            className="w-row"
            style={{ display: "flex", marginTop: 30, flexWrap: "wrap" }}
          >
            <div className="w-col w-col-6 cc_btn">
              <Button1 text="Green Filter USA - Air Filter Oil MSDS" />
            </div>
            <div className="w-col w-col-6 cc_btn">
              <Button1 text="Green Filter USA - Air Filter Cleaner MSDS" />
            </div>
          </div>
        </div>
      </CCElement1Wrapper>
    </>
  );
};

export default CCElement2;

const CCElement1Wrapper = styled.div`
  padding-bottom: 125px;
  padding-top: 75px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

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

  .heading-2 {
    position: relative;
    z-index: 9;
    color: #fff;
    font-weight: 300;
  }
  .w-hidden-main {
    display: none !important;
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
  @media screen and (max-width: 767px) {
    .cc_btn button {
      margin-top: 20px;
    }
  }
`;
