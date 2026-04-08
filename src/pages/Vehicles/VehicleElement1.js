import React from "react";
import styled from "styled-components";
import greenFilter from "../../assets/green-filter.webp";
import usaFlag from "../../assets/flag-icon.webp";
const VehicleElement1 = () => {
  return (
    <>
      <VehicleElement1Wrapper>
        <div className="center-container w-container">
          <div className="small-columns w-row">
            <div className="w-col w-col-6">
              <div className="column-div">
                <img src={greenFilter} alt="greenfilter" className="icon-2" />
                <div className="green-text">
                  GreenFilter outperforms leading filters
                </div>
              </div>
            </div>
            <div className="w-col w-col-6 gap">
              <div className="column-div">
                <img src={usaFlag} alt="flag" className="icon-2 small" />
                <div className="green-text">
                  Proudly made in the USA&nbsp; (Uniontown, PA to be exact)
                </div>
              </div>
            </div>
          </div>
        </div>
      </VehicleElement1Wrapper>
    </>
  );
};

export default VehicleElement1;

const VehicleElement1Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f5;

  .center-container {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .small-columns {
    display: block;
    width: 90%;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .w-col-6 {
    width: 50%;
  }

  .w-col {
    position: relative;
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .column-div {
    display: flex;
    height: 150px;
    justify-content: space-between;
    align-items: center;
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
    opacity: 1;
    transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1)
      scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
      skewY(0deg);
  }
  .icon-2 {
    display: block;
    width: 150px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    border: 0px none #fff;
    border-radius: 0px;
    max-width: 100%;
    vertical-align: middle;
  }

  .small {
    height: 72px;
    object-fit: contain;
  }

  .green-text {
    margin-left: 20px;
    font-family: Lato, sans-serif;
    color: #00ad23;
    text-align: left;
  }
  // .gap {
  //   margin-left: 20px;
  // }

  @media screen and (max-width: 900px) {
    .w-col-6 {
      width: 100% !important;
    }

    .small {
      height: 100px;
    }
    .small-columns {
      width: 60%;
    }
  }

  @media screen and (max-width: 479px) {
    .small-columns {
      width: 90%;
    }

    .icon-2 {
      width: 120px;
    }
  }
`;
