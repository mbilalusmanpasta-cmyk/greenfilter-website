import React from "react";
import styled from "styled-components";
const VehicleElement3 = ({ vehicle }) => {
  return (
    <>
      <VehicleElement3Wrapper bgImg={vehicle.quoteBgImg}>
        <div className="section-photo-text">
          <h1 className="hero-heading-1 quote">{vehicle.quoteText}</h1>
          <div className="quote-source">{vehicle.quoteSource}</div>
        </div>
      </VehicleElement3Wrapper>
    </>
  );
};

export default VehicleElement3;

const VehicleElement3Wrapper = styled.div`
  position: relative;
  display: flex;
  height: calc(500px + 167px);
  padding-right: 10%;
  padding-left: 10%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #000, transparent),
    url(${(props) => props.bgImg});
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  text-align: center;

  .section-photo-text {
    position: relative;
  }

  .hero-heading-1.quote {
    margin-bottom: 25px;
    font-weight: 300;
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

  .quote-source {
    font-family: Lato, sans-serif;
    color: #fff;
    text-align: center;
  }
`;
