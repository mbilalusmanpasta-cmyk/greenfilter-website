import React from "react";
import styled from "styled-components";
import img from "../../assets/careers-hero.jpg";
const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <img className="careers" src={img} alt="careers" />
      </HeroWrapper>
    </>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  .careers {
    margin-top: 100px;
    width: 100%;
    height: auto;
  }
`;
