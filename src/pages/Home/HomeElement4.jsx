import React from "react";
import styled from "styled-components";
import img0_0 from "../../assets/gear-wheel-3109067.png";
import img1_0 from "../../assets/Asset-1goshadowicon.png";
import img2_0 from "../../assets/usa-1177272.png";
import img3_0 from "../../assets/green-filter-icon.png";
import Button1 from "../../components/Button1";

const HomeElement4 = ({ text }) => {
  return (
    <HomeElement4Wrapper>
      <Container>
        <HeadingBlock>
          <Headline>It's Not Just Better Airflow</Headline>
          <Accent />
          <Subtitle>{text}</Subtitle>
        </HeadingBlock>

        <BenefitsGrid>
          <BenefitCard>
            <IconContainer>
              <Icon src={img0_0} alt="Better Performance" />
            </IconContainer>
            <CardTitle>Better Performance</CardTitle>
            <CardText>
              Dynamometer bench testing on an 1800cc 4-cylinder engine showed
              that a Green High Performance Air Filter provided a 6.7% increase
              in horsepower over the same vehicle with a stock paper air filter.
            </CardText>
          </BenefitCard>

          <BenefitCard>
            <IconContainer>
              <Icon src={img1_0} alt="Fuel Efficiency" />
            </IconContainer>
            <CardTitle>Fuel Efficiency</CardTitle>
            <CardText>
              In an independent test performed on a 2008 Chevy, a 5.6% increase
              in fuel mileage was shown over the same vehicle with a stock paper
              air filter. This is the same test that manufacturers perform to
              estimate fuel economy on new vehicles.
            </CardText>
          </BenefitCard>

          <BenefitCard>
            <IconContainer>
              <Icon src={img2_0} alt="Made In The USA" />
            </IconContainer>
            <CardTitle>Made In The USA</CardTitle>
            <CardText>
              All Green Filters are made by hand in our Uniontown, Pennsylvania
              facility with materials manufactured in the USA.
            </CardText>
          </BenefitCard>

          <BenefitCard>
            <IconContainer>
              <Icon src={img3_0} alt="Lasts a Lifetime" />
            </IconContainer>
            <CardTitle>Lasts a Lifetime</CardTitle>
            <CardText>
              Our filters are designed to be cleaned (with our biodegradable
              cleaner and synthetic oil) and reused. Not only will you notice a
              difference in your wallet, but you'll be helping the environment
              as well.
            </CardText>
          </BenefitCard>
        </BenefitsGrid>

        <ButtonWrapper>
          <Button1
            text="Find Your Green Filter"
            isLink={true}
            to="/shop-by-vehicle"
          />
        </ButtonWrapper>
      </Container>
    </HomeElement4Wrapper>
  );
};

export default HomeElement4;

// Styled Components
const HomeElement4Wrapper = styled.section`
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
  margin: 0 auto 16px;
`;

const Subtitle = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  margin: 0 0 24px;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 48px;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 36px;
  }
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled.div`
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

  ${BenefitCard}:hover & {
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
