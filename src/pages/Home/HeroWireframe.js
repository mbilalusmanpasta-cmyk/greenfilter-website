import React from "react";
import styled from "styled-components";
import { FiTruck } from "react-icons/fi";
import homePageImage from "../../assets/home-page.jpeg";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";

const TopSection = styled.div`
  padding-top: 46px; /* clear fixed header */
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  @media (max-width: 912px) {
    padding-top: 56px;
  }
  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const PromoBanner = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 24px;
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: ${TEXT_DARK};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  .promo-icon {
    font-size: 18px;
    color: ${BRAND_GREEN};
  }
  @media (max-width: 767px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  background-color: #fafafa;
  text-align: center;
  @media (max-width: 767px) {
    padding: 0px 0 56px;
  }
`;

const HeroImage = styled.div`
  margin: 0 auto 24px;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin: 0;
    border-radius: 0;
    min-height: 280px;
    border: none;
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
    object-position: center top;
    vertical-align: middle;
    border-radius: inherit;
  }
`;

const HeroImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
  border-radius: inherit;
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
    font-size: 13px;
  }
`;

export function PromoBannerStrip() {
  return (
    <PromoBanner>
      <FiTruck className="promo-icon" aria-hidden />
      <span>Free Shipping on Orders $200+ | Use Code FREESHIPPING2025</span>
    </PromoBanner>
  );
}

export default function HeroWireframe() {
  return (
    <TopSection>
      {/* <PromoBannerStrip />
      
      */}
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



