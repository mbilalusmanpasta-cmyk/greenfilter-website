import React from "react";
import styled from "styled-components";
import { FiTruck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import brand0 from "../../assets/trust/brand0.png";
import brand1 from "../../assets/trust/brand1.png";
import brand2 from "../../assets/trust/brand2.png";
import brand3 from "../../assets/trust/brand3.png";
import brand4 from "../../assets/trust/brand4.png";
import brand5 from "../../assets/trust/brand5.jpg";
import homePageImage from "../../assets/home-page.png";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";

const HERO_BRANDS = [
  { id: 0, imgSrc: brand0 },
  { id: 1, imgSrc: brand1 },
  { id: 2, imgSrc: brand2 },
  { id: 3, imgSrc: brand3 },
  { id: 4, imgSrc: brand4 },
  { id: 5, imgSrc: brand5 },
];

const TopSection = styled.div`
  padding-top: 60px; /* clear fixed header */
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  @media (max-width: 912px) {
    padding-top: 56px;
  }
  @media (max-width: 767px) {
    padding-left: 16px;
    padding-right: 16px;
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
    padding: 32px 16px 40px;
  }
`;

const HeroImage = styled.div`
  margin: 0 auto 24px;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 320px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-bottom: 16px;
    border-radius: 6px;
    min-height: 240px;
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
      <PromoBannerStrip />
      <HeroSection>
        <HeroImage>
          <HeroImageInner>
            <img
              src={homePageImage}
              alt="High Performance Reusable Air Filters - Race-Proven. Made In the USA."
            />
          </HeroImageInner>
        </HeroImage>
        <BrandsRow>
          {HERO_BRANDS.map((brand) => (
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
      </HeroSection>
    </TopSection>
  );
}



