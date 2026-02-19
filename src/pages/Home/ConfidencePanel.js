import React from "react";
import styled from "styled-components";
import { MdCheckCircle } from "react-icons/md";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";

const Section = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px 56px;
  text-align: center;
  @media (max-width: 767px) {
    padding: 32px 16px 40px;
  }
`;

const Heading = styled.h2`
  margin: 0 0 32px;
  font-family: Lato, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${TEXT_DARK};
  letter-spacing: 0.5px;
  @media (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 48px;
  text-align: left;
  justify-items: start;
  align-items: start;
  max-width: 700px;
  margin: 0 28px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Column = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  font-family: Lato, sans-serif;
  font-size: 15px;
  color: ${TEXT_DARK};
  line-height: 1.4;
  .icon {
    flex-shrink: 0;
    color: ${BRAND_GREEN};
    font-size: 20px;
    margin-top: 2px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const defaultLeftItems = [
  "Made in the USA",
  "Lifetime performance",
  "Race-proven quality",
  "Better airflow & filtration",
];

const defaultRightItems = [
  "Reusable & washable",
  "Trusted by enthusiasts",
  "Easy to find your fit",
  "Free shipping on orders $200+",
];

export default function ConfidencePanel({ leftItems = defaultLeftItems, rightItems = defaultRightItems }) {
  return (
    <Section>
      <Heading>CONFIDENCE PANEL</Heading>
      <TwoColumns>
        <Column>
          {leftItems.map((text, i) => (
            <ListItem key={i}>
              <MdCheckCircle className="icon" aria-hidden />
              <span>{text}</span>
            </ListItem>
          ))}
        </Column>
        <Column>
          {rightItems.map((text, i) => (
            <ListItem key={i}>
              <MdCheckCircle className="icon" aria-hidden />
              <span>{text}</span>
            </ListItem>
          ))}
        </Column>
      </TwoColumns>
    </Section>
  );
}
