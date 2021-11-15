import React from "react";
import styled from "styled-components";
import icon0 from "../../assets/icons8-car-top-view-100_1icons8-car-top-view-100.png";
import icon1 from "../../assets/icons8-gas-pump-100_1icons8-gas-pump-100.png";
import icon2 from "../../assets/icons8-receive-cash-100_1icons8-receive-cash-100.png";
const VehicleElement2 = ({ vehicle }) => {
  return (
    <>
      <VehicleElement2Wrapper>
        <div className="sub-text">
          Precisely engineered for BMW M Series performance
          <br />
          <span className="bold">
            It’s a breakthrough in air filter technology.
          </span>
        </div>
        <div className="w-container">
          <div className="titles-div"></div>
          <div className="main-vehicle-row w-row">
            <div className="column-4 w-col w-col-7">
              <iframe
                width="530"
                height="298"
                src="https://www.youtube.com/embed/LOgLMW-Bdh4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="column-5 w-col w-col-5">
              <a href="#" className="link-block w-inline-block">
                <div className="column-div">
                  <img className="icon-2 light" src={icon0} alt="icon" />
                  <h4 className="blue simple smaller">
                    Increase your {vehicle.modelName}'s horsepower
                  </h4>
                </div>
                <div className="column-div">
                  <img className="icon-2 light" src={icon1} alt="icon" />
                  <h4 className="blue simple smaller">
                    Gain better fuel mileage
                  </h4>
                </div>
                <div className="column-div">
                  <img className="icon-2 light" src={icon2} alt="icon" />
                  <h4 className="blue simple smaller">
                    Green Filters last a lifetime & save you money
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </VehicleElement2Wrapper>
    </>
  );
};

export default VehicleElement2;

const VehicleElement2Wrapper = styled.div`
  position: relative;
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #fff;

  .sub-text {
    font-family: Lato, sans-serif;
    color: #757575;
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
    text-align: center;
  }

  .bold {
    font-weight: 400;
  }

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
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

  .main-vehicle-row {
    margin-top: 25px;
    margin-bottom: 0px;
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .column-4 {
    padding-right: 2%;
  }

  .column-5 {
    padding-left: 5% !important;
  }

  .w-col-7 {
    width: 58.33333333%;
  }
  .w-col-5 {
    width: 41.66666667%;
  }
  .w-col {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .link-block {
    width: auto;
    margin-bottom: 0px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
  }
  .w-inline-block {
    width: 100%;
    display: inline-block;
  }

  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
    margin-bottom: 25px;
    opacity: 1;
    transform: translateX(0px) translateY(0 px) translateZ(0 px) scaleX(1)
      scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
      skewY(0deg);
  }

  .icon-2.light {
    width: 60px;
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.11);
    border-radius: 500px;
    opacity: 0.35;
  }

  .blue.simple.smaller {
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    line-height: 22px;
  }

  .icon-2 {
    display: block;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    border: 0px none #fff;
  }
`;
