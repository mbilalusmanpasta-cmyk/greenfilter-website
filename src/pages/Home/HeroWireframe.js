import React from "react";
import styled from "styled-components";
// import homePageImage from "../../assets/home-page.jpeg";
import homePageImage from "../../assets/banner/four.png";


const TopSection = styled.div`
  padding-top: 46px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 912px) {
    padding-top: 56px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  background-color: #fafafa;
  text-align: center;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

const HeroImage = styled.div`
  margin: 0;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 520px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    min-height: 350px;
  }
`;

const HeroImageInner = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 50%;
    vertical-align: middle;
  }
`;

const HeroImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
  pointer-events: none;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  box-sizing: border-box;
  pointer-events: none;
  @media (max-width: 767px) {
    padding: 16px 12px;
  }
`;

const HeroHeading = styled.h1`
  margin: 0 0 8px;
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
  max-width: 560px;
  @media (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 6px;
  }
`;

const HeroSubHeading = styled.p`
  margin: 0 0 16px;
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.3px;
  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

const HeroBody = styled.p`
  margin: 0;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 420px;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1.4;
    max-width: 90%;
    padding: 0 8px;
  }
`;

export default function HeroWireframe() {
  return (
    <TopSection>
      <HeroSection>
        <HeroImage>
          <HeroImageInner>
            <img
              src={homePageImage}
              alt="High Performance Reusable Air Filters - Race-Proven. Made In the USA."
            />
          </HeroImageInner>
          <HeroImageOverlay aria-hidden />
          <HeroOverlay>
            <HeroHeading>High Performance Reusable Air Filters</HeroHeading>
            <HeroSubHeading>Race-Proven. Made In the USA.</HeroSubHeading>
            <HeroBody>
              Designed for enthusiasts who demand more airflow, better filtration,
              and lifetime performance.
            </HeroBody>
          </HeroOverlay>
        </HeroImage>
      </HeroSection>
    </TopSection>
  );
}
