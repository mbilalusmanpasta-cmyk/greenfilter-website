import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/about-us-banner.jfif";
const Hero = (props) => {
  return (
    <>
      <HeroWrapper bgImg={bgImg}></HeroWrapper>
    </>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 800px;
  margin-top: 0px;
  padding-top: 0px;
  background-image: linear-gradient(180deg, #000, transparent 64%),
    url(${(props) => props.bgImg});
  background-size: auto, cover;
  background-position: 0px 0px, 50% 50%;
`;
