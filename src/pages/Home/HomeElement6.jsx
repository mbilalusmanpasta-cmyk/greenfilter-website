import React from "react";
import styled from "styled-components";
import icon0 from "../../assets/icons8-wheel-100_1icons8-wheel-100.png";
import icon1 from "../../assets/icons8-free-shipping-100_1icons8-free-shipping-100.png";
import icon2 from "../../assets/icons8-communication-100_1icons8-communication-100.png";

const HomeElement6 = () => {
  return (
    <HomeElement6Wrapper>
      <Container>
        <HeadingBlock>
          <Headline>The Green Filter Guarantee</Headline>
          <Accent />
          <Subtitle>
            As the leading American Made Manufacturer of Green Filters, we pride
            ourselves on our work ethic & customer service.
          </Subtitle>
        </HeadingBlock>

        <CardsGrid>
          <GuaranteeCard>
            <IconContainer>
              <Icon src={icon0} alt="100% Guaranteed" />
            </IconContainer>
            <CardTitle>100% Guaranteed</CardTitle>
            <CardText>
              All Green High Filters are designed to last for the lifetime of
              your vehicle and are covered by our Limited Lifetime Warranty.
            </CardText>
          </GuaranteeCard>

          <GuaranteeCard>
            <IconContainer>
              <Icon src={icon1} alt="Shipping & Returns" />
            </IconContainer>
            <CardTitle>Shipping & Returns</CardTitle>
            <CardText>
              We stand by our product and offer fast shipping along with returns
              or exchanges, no questions asked.
            </CardText>
          </GuaranteeCard>

          <GuaranteeCard>
            <IconContainer>
              <Icon src={icon2} alt="Instant customer service" />
            </IconContainer>
            <CardTitle>Instant Customer Service</CardTitle>
            <CardText>
              We're available through email and you can call us during our
              normal business hours found on our contact page.
            </CardText>
          </GuaranteeCard>
        </CardsGrid>

        <DisclaimerBox>
          <DisclaimerHeader>IMPORTANT</DisclaimerHeader>
          <DisclaimerText>
            Please inspect all merchandise for damage or missing parts and make
            sure all parts invoiced are received before you sign for the
            merchandise. Green Filter reserves the right to deny credit on all
            shortages that are called in after delivery has been made and you have
            signed for the product without notation of a shortage. Items damaged
            due to improper installation or customer mishandling will not be
            credited upon return.
          </DisclaimerText>
        </DisclaimerBox>
      </Container>
    </HomeElement6Wrapper>
  );
};

export default HomeElement6;

// Styled Components
const HomeElement6Wrapper = styled.section`
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
  max-width: 1040px;
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
  margin: 0;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const GuaranteeCard = styled.div`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 36px 24px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #00ad23;
  }

  @media (max-width: 767px) {
    padding: 28px 20px;
  }
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 50%;
  transition: all 0.3s ease;

  ${GuaranteeCard}:hover & {
    background: #e8f5e9;
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  display: block;
`;

const CardTitle = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px;
  line-height: 1.3;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const CardText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #555;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const DisclaimerBox = styled.div`
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f4 50%, #ffffff 100%),
    radial-gradient(circle at 20px 20px, rgba(0, 173, 35, 0.06) 1px, transparent 1px);
  background-size: 100%, 40px 40px;
  border-radius: 12px;
  padding: 24px 28px;
  text-align: left;
  box-shadow: 0 4px 16px rgba(0, 173, 35, 0.15);
  position: relative;

  @media (max-width: 767px) {
    padding: 20px 24px;
  }
`;

const DisclaimerHeader = styled.div`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #00ad23;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const DisclaimerText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: #1a1a1a;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
