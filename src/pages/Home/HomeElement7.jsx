import React from "react";
import styled from "styled-components";
import icon0 from "../../assets/products/2007-228x228.png";
import icon1 from "../../assets/products/2012-228x228.png";
import icon2 from "../../assets/products/cleaner_box-500x500.jpg";
import { Link } from "react-router-dom";
import Button1 from "../../components/Button1";

const HomeElement7 = () => {
  return (
    <HomeElement7Wrapper>
      <Container>
        <HeadingBlock>
          <Headline>Green Filter Products Outperform The Competition</Headline>
          <Accent />
        </HeadingBlock>

        <ProductsGrid>
          <ProductCard to="/universal-cylinder">
            <ProductImageContainer>
              <ProductImage src={icon0} alt="Cone Filters" />
            </ProductImageContainer>
            <ProductTitle>Cone Filters</ProductTitle>
            <ProductCTA>Shop Now →</ProductCTA>
          </ProductCard>

          <ProductCard to="/universal-round">
            <ProductImageContainer>
              <ProductImage src={icon1} alt="Round Filters" />
            </ProductImageContainer>
            <ProductTitle>Round Filters</ProductTitle>
            <ProductCTA>Shop Now →</ProductCTA>
          </ProductCard>

          <ProductCard to="/cleaner-care">
            <ProductImageContainer>
              <ProductImage src={icon2} alt="Filter Cleaning & Care" />
            </ProductImageContainer>
            <ProductTitle>Filter Cleaning & Care</ProductTitle>
            <ProductCTA>Shop Now →</ProductCTA>
          </ProductCard>
        </ProductsGrid>

        <ButtonWrapper>
          <Button1
            isLink={true}
            to="/shop-by-vehicle"
            text="Search for Your Perfect Green Filter"
          />
        </ButtonWrapper>
      </Container>
    </HomeElement7Wrapper>
  );
};

export default HomeElement7;

// Styled Components
const HomeElement7Wrapper = styled.section`
  background: #fff;
  padding: 72px 24px;

  @media (max-width: 1024px) {
    padding: 56px 24px;
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
  max-width: 720px;
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
    font-size: 26px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: #00ad23;
  border-radius: 2px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 991px) {
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProductCard = styled(Link)`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #00ad23;
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  padding: 32px;

  ${ProductCard}:hover & {
    background: #fff;
  }

  @media (max-width: 767px) {
    height: 200px;
    padding: 24px;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
`;

const ProductTitle = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  padding: 24px 20px 12px;
  line-height: 1.3;

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 20px 16px 10px;
  }
`;

const ProductCTA = styled.div`
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #00ad23;
  padding: 0 20px 24px;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #008a1c;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 0 16px 20px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 48px;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 36px;
  }
`;
