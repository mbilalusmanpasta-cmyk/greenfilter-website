import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import brand0 from "../../assets/trust/brand0.png";
import brand1 from "../../assets/trust/brand1.png";
import brand2 from "../../assets/trust/brand2.png";
import brand3 from "../../assets/trust/brand3.png";
import brand4 from "../../assets/trust/brand4.png";
import brand5 from "../../assets/trust/brand5.jpg";

const BRAND_GREEN = "#00ad23";

const BRANDS = [
  { id: 0, src: brand0 },
  { id: 1, src: brand1 },
  { id: 2, src: brand2 },
  { id: 3, src: brand3 },
  { id: 4, src: brand4 },
  { id: 5, src: brand5 },
];

const Section = styled.section`
  background: transparent;
  border-bottom: 1px solid #ebebeb;
  padding: 48px 24px;
  @media (max-width: 767px) {
    padding: 32px 16px;
  }
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Headline = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #1a1a1a;
  margin: 0 0 12px;
  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: ${BRAND_GREEN};
  border-radius: 2px;
  margin-bottom: 12px;
`;

const Tagline = styled.p`
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #666;
  margin: 0 0 32px;
  @media (max-width: 767px) {
    font-size: 13px;
    margin-bottom: 24px;
  }
`;

const LogosRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const BrandLogo = styled.img`
  height: 36px;
  width: auto;
  object-fit: contain;
  @media (max-width: 767px) {
    height: 26px;
  }
`;

const ReviewBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  .stars {
    display: flex;
    gap: 3px;
    color: ${BRAND_GREEN};
    font-size: 15px;
  }
`;

export default function ChosenByBest() {
  return (
    <Section>
      <Inner>
        <Headline>The Chosen Air Filter by the World's Best</Headline>
        <Accent />
        <Tagline>Trusted by professionals on and off the track</Tagline>
        <LogosRow>
          {BRANDS.map((b) => (
            <BrandLogo key={b.id} src={b.src} alt="brand" />
          ))}
        </LogosRow>
        <ReviewBadge>
          <span className="stars" aria-label="5 star reviews">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span>
          <span>5-Star Reviews</span>
        </ReviewBadge>
      </Inner>
    </Section>
  );
}
