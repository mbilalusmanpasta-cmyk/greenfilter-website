import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import brand0 from "../../assets/trust/brand0.png";
import brand1 from "../../assets/trust/brand1.png";
import brand2 from "../../assets/trust/brand2.png";
import brand4 from "../../assets/trust/brand4.png";
import brand5 from "../../assets/trust/brand5.jpg";

const BRAND_GREEN = "#00ad23";

const BRANDS = [
  { id: 0, src: brand0 },
  { id: 1, src: brand1 },
  { id: 2, src: brand2 },
  { id: 4, src: brand4 },
  { id: 5, src: brand5 },
];

const Section = styled.section`
  background: #111;
  padding: 80px 24px;
  @media (max-width: 767px) {
    padding: 48px 16px;
  }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

const Eyebrow = styled.span`
  font-family: Lato, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${BRAND_GREEN};
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: ${BRAND_GREEN};
  border-radius: 2px;
  margin: 16px 0 20px;
  @media (max-width: 767px) {
    margin: 14px auto 18px;
  }
`;

const Tagline = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
  line-height: 1.6;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const StarBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  .stars {
    display: flex;
    gap: 3px;
    color: ${BRAND_GREEN};
    font-size: 16px;
  }
  span.label {
    font-family: Lato, sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 420px;
    margin: 0 auto;
    width: 100%;
  }
`;

const LogoCard = styled.div`
  background: rgba(255, 255, 255, 0.94);
  border-radius: 10px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  @media (max-width: 767px) {
    padding: 16px 12px;
    min-height: 64px;
  }
`;

const BrandLogo = styled.img`
  max-height: 34px;
  width: 100%;
  object-fit: contain;
  @media (max-width: 767px) {
    max-height: 30px;
  }
`;

export default function ChosenByBest() {
  return (
    <Section>
      <Inner>
        <LeftCol>
          <Eyebrow>Trusted By</Eyebrow>
          <Headline>The Chosen Air Filter by the World's Best</Headline>
          <Accent />
          <Tagline>Trusted by professionals on and off the track</Tagline>
          <StarBadge>
            <span className="stars" aria-label="5 star reviews">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <span className="label">5-Star Reviews</span>
          </StarBadge>
        </LeftCol>

        <LogoGrid>
          {BRANDS.map((b) => (
            <LogoCard key={b.id}>
              <BrandLogo src={b.src} alt="brand" />
            </LogoCard>
          ))}
        </LogoGrid>
      </Inner>
    </Section>
  );
}
