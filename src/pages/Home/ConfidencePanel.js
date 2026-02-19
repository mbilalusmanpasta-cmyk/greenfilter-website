import React from "react";
import styled from "styled-components";
import { MdCheckCircle } from "react-icons/md";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";

const Section = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 24px;
  text-align: center;
  @media (max-width: 767px) {
    padding: 40px 16px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 40px;
  text-align: left;
  justify-items: start;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
`;

const DesktopLayout = styled(Grid)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileLayout = styled(Grid)`
  display: none;
  grid-template-columns: 1fr;
  @media (max-width: 767px) {
    display: grid;
    justify-items: left;
  }
`;

const Column = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileColumn = styled(Column)`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 40px;
  }
`;

const ICON_COLUMN_WIDTH = 28;
const GAP = 10;
const TEXT_START = ICON_COLUMN_WIDTH + GAP;

const IconWrap = styled.span`
  float: left;
  width: ${ICON_COLUMN_WIDTH}px;
  margin-right: ${GAP}px;
  margin-top: 2px;
  .icon {
    color: ${BRAND_GREEN};
    font-size: 20px;
    display: block;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  overflow: hidden;
  font-family: Lato, sans-serif;
  font-size: 15px;
  color: ${TEXT_DARK};
  line-height: 1.4;
  .list-item-text {
    display: block;
    margin-left: ${TEXT_START}px;
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

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function ConfidencePanel({ leftItems = defaultLeftItems, rightItems = defaultRightItems }) {
  const allItems = [...leftItems, ...rightItems];
  const desktopChunks = chunk(allItems, 2).slice(0, 3);
  const displayedItems = desktopChunks.flat();

  return (
    <Section>
      <Heading>CONFIDENCE PANEL</Heading>
      <DesktopLayout>
        {desktopChunks.map((items, colIndex) => (
          <Column key={colIndex}>
            {items.map((text, i) => (
              <ListItem key={`${colIndex}-${i}`}>
                <IconWrap>
                  <MdCheckCircle className="icon" aria-hidden />
                </IconWrap>
                <span className="list-item-text">{text}</span>
              </ListItem>
            ))}
          </Column>
        ))}
      </DesktopLayout>
      <MobileLayout>
        <MobileColumn>
          {displayedItems.map((text, i) => (
            <ListItem key={i}>
              <IconWrap>
                <MdCheckCircle className="icon" aria-hidden />
              </IconWrap>
              <span className="list-item-text">{text}</span>
            </ListItem>
          ))}
        </MobileColumn>
      </MobileLayout>
    </Section>
  );
}
