import React from "react";
import styled from "styled-components";
import feature0 from "../../assets/features/img0.webp";
import feature1 from "../../assets/features/img1.webp";
import feature2 from "../../assets/features/img2.webp";
import feature3 from "../../assets/features/img3.webp";
import feature4 from "../../assets/features/img4.webp";
import feature5 from "../../assets/features/img5.webp";

const HomeElement3 = () => {
  const features = [
    {
      id: 0,
      title: "Woven Cotton",
      description:
        "Deep pleats in the double-layered cotton create a 10-15% increase in filtration surface. This increase allows a greater volume of air to move more freely into your engine cylinders while maintaining superior filtration. Our specially designed cotton filter traps particles as small as 5 microns.",
      imgSrc: feature0,
    },
    {
      id: 1,
      title: "Steel Mesh",
      description:
        "Steel wire mesh encases the cotton filter, providing strength and dent resistance so you can be sure your Green High Performance Air Filter will work under the toughest conditions.",
      imgSrc: feature1,
    },
    {
      id: 2,
      title: "Proprietary Lubricant",
      description:
        "This oil creates a positive (+) magnetic charge, or ionic bond, with the filter's stainless steel mesh. The positive charge attracts the negatively (-) charged dust particles entering the filter, causing them to cling to the steel mesh and allowing the cotton to remain clear for maximum air flow.",
      imgSrc: feature2,
    },
    {
      id: 3,
      title: "Low Pressure Molding",
      description:
        "Other filters use a simple pressure-molded injection process to bond the perimeter rubber to the interior components. That method saves manufacturing time, but in the process, a considerable amount of rubber can seep onto the filtering surface. While it may not look like much, that spill-over rubber can restrict as much as 25% of the intended air flow. We use a four-step production process which virtually eliminates rubber seepage and maintains maximum air flow through the filter.",
      imgSrc: feature3,
    },
    {
      id: 4,
      title: "Custom Molds",
      description:
        "Our hand-molded, flexible rubber base offers an airtight seal and absorbs vibration. Our filter molds are created from an extensive on-site library of factory air boxes, with each part custom made on CNC machines. We don't reuse elements between filters or make universal molds, which means that when you buy a Green High Performance Air Filter you can be sure it will fit just like the one from the factory, with no modifications necessary.",
      imgSrc: feature4,
    },
    {
      id: 5,
      title: "In House Technology",
      description:
        "Long before we were manufacturing a single air filter for your street-legal machine, we produced hundreds for the international motorsports industry. Our production technology is always improving with the most cutting edge processes and equipment. Also being committed to serving you, our product line is ever expanding to cover all of your needs. We stand by our guarantee of providing customers with what we think is the best filtering technology available.",
      imgSrc: feature5,
    },
  ];

  return (
    <HomeElement3Wrapper>
      <Container>
        <HeadingBlock>
          <Headline>Green Filter's Technology Makes All The Difference</Headline>
          <Accent />
        </HeadingBlock>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconContainer>
                <Icon src={feature.imgSrc} alt={feature.title} />
              </IconContainer>
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.description}</CardText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </HomeElement3Wrapper>
  );
};

export default HomeElement3;

// Styled Components
const HomeElement3Wrapper = styled.section`
  background: #fff;
  padding: 80px 24px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }

  @media (max-width: 767px) {
    padding: 48px 16px;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const HeadingBlock = styled.div`
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const Headline = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 14px;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: #00ad23;
  border-radius: 2px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #00ad23;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  padding: 24px;
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    background: #e8f5e9;
  }

  @media (max-width: 767px) {
    height: 160px;
    padding: 20px;
  }
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px;
  line-height: 1.3;
  padding: 24px 24px 0;

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 20px 20px 0;
  }
`;

const CardText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #555;
  margin: 0;
  line-height: 1.6;
  padding: 0 24px 24px;

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 0 20px 20px;
  }
`;
