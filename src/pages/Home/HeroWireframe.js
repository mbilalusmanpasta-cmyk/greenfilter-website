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

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";
const TEXT_MUTED = "#555";

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
  padding: 48px 24px 56px;
  text-align: center;
  @media (max-width: 767px) {
    padding: 32px 16px 40px;
  }
`;

const HeroHeading = styled.h1`
  margin: 0 0 12px;
  font-family: Lato, sans-serif;
  font-size: 38px;
  font-weight: 700;
  color: ${TEXT_DARK};
  line-height: 1.2;
  letter-spacing: 0.5px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const HeroSubHeading = styled.h2`
  margin: 0 0 16px;
  font-family: Lato, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${TEXT_DARK};
  line-height: 1.3;
  letter-spacing: 0.3px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const HeroBody = styled.p`
  margin: 0 auto 32px;
  max-width: 560px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${TEXT_MUTED};
  line-height: 1.6;
  letter-spacing: 0.3px;
  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 24px;
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
        <HeroHeading>High Performance Reusable Air Filters</HeroHeading>
        <HeroSubHeading>Race-Proven. Made In the USA.</HeroSubHeading>
        <HeroBody>
          Designed for enthusiasts who demand more airflow, better filtration,
          and lifetime performance.
        </HeroBody>
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
