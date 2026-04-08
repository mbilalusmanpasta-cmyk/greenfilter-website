import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button1 from "../../components/Button1";
import { Helmet } from "react-helmet-async";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";
import fallbackImage from "../../assets/products/2007-228x228.webp";
import { trackPageView } from "../../utils/analytics";

const Clearance = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    props.handleClickIndex(14);
    fetchClearanceProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchClearanceProducts = async () => {
    try {
      setLoading(true);
      const response = await GetData(
        statics.BaseUrl + `/collection-products?slug=clearance`,
        200,
        null
      );

      if (response.ResponseCode === "Success" && response.data) {
        setCollectionData(response.data);
        setProducts(response.data.products || []);
      }
    } catch (error) {
      console.error("Error fetching clearance products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get product image URL
  const getProductImage = (product) => {
    if (product.main_image) {
      // If it's a full URL, use it directly
      if (product.main_image.startsWith('http')) {
        return product.main_image;
      }
      // Otherwise construct the URL (adjust base URL as needed)
      return `${statics.BaseUrl}/images/products/${product.main_image}`;
    }
    // Fallback to a default image if needed
    return fallbackImage;
  };

  // Helper function to format price from cents to dollars
  const formatPrice = (priceInCents) => {
    return (priceInCents / 100).toFixed(2);
  };

  return (
    <>
      <Helmet>
        <title>Clearance Sale - Up to 60% Off | Green Filter USA</title>
        <meta
          name="description"
          content={collectionData?.description || "Huge savings on high-performance air filters! Shop our clearance sale and save up to 60% on premium Green Filter products. Limited stock available."}
        />
        <meta property="og:title" content="Clearance Sale - Up to 60% Off | Green Filter USA" />
        <meta
          property="og:description"
          content={collectionData?.description || "Huge savings on high-performance air filters! Shop our clearance sale and save up to 60% on premium Green Filter products."}
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      {loading && (
        <React.Fragment>
          <div
            style={{
              top: "0px",
              left: "0px",
              position: "fixed",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgb(64 57 57 / 20%)",
              backdropFilter: "blur(3px)",
              zIndex: 9999,
            }}
          >
            {" "}
          </div>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              zIndex: "9999",
              position: "absolute",
              top: "calc(50vh - 75px)",
              left: "calc(50% - 75px)",
            }}
          >
            <CircleLoader
              color={"#00ad23"}
              loading={true}
              size={150}
              id="custom-loader-el"
            />
          </div>
        </React.Fragment>
      )}

      <PageWrapper>
        {/* Hero Banner */}
        <HeroBanner>
          <BannerContent>
            <BannerText>
              <strong>Limited Stock Alert:</strong> Clearance items won't be restocked – Shop Now!
            </BannerText>
          </BannerContent>
        </HeroBanner>

        {/* Main Content */}
        <ContentSection>
          <Container>
            <HeadingBlock>
              <Headline>{collectionData?.title || "Clearance Sale"} – Up to 60% Off</Headline>
              <Accent />
              <Subheading>
                {collectionData?.description || "High-performance air filters at unbeatable prices. Once they're gone, they're gone!"}
              </Subheading>
            </HeadingBlock>

            {products.length === 0 && !loading && (
              <NoProductsMessage>
                <p>No clearance items available at this time. Check back soon for great deals!</p>
              </NoProductsMessage>
            )}

            <ProductsGrid>
              {products.map((product) => {
                const clearance = product.clearance || {};
                const discount = clearance.discountPercent || 0;
                const originalPrice = formatPrice(product.compare_at_price || product.price);
                const salePrice = formatPrice(product.price);
                const savings = formatPrice((product.compare_at_price || product.price) - product.price);
                const stock = product.quantity || 0;

                return (
                  <ProductCard key={product.id}>
                    {discount > 0 && (
                      <DiscountBadge>-{discount}%</DiscountBadge>
                    )}
                    {(clearance.limitedStock || stock <= 10) && stock > 0 && (
                      <StockBadge>Only {stock} left!</StockBadge>
                    )}
                    {clearance.finalSale && (
                      <FinalSaleBadge>Final Sale</FinalSaleBadge>
                    )}

                    <ProductImageContainer>
                      <ProductImage
                        src={getProductImage(product)}
                        alt={product.title || product.name}
                        onError={(e) => {
                          e.target.src = fallbackImage;
                        }}
                      />
                    </ProductImageContainer>

                    <ProductTitle>{product.title || product.name}</ProductTitle>

                    {product.description && (
                      <ProductDescription>{product.description}</ProductDescription>
                    )}

                    <PriceContainer>
                      <PriceRow>
                        {product.compare_at_price && product.compare_at_price > product.price && (
                          <OldPrice>${originalPrice}</OldPrice>
                        )}
                        <NewPrice>${salePrice}</NewPrice>
                      </PriceRow>
                      {product.compare_at_price && product.compare_at_price > product.price && (
                        <SaveText>Save ${savings}</SaveText>
                      )}
                      {clearance.daysRemaining && (
                        <DaysRemaining>
                          {clearance.daysRemaining} days left
                        </DaysRemaining>
                      )}
                    </PriceContainer>

                    <ProductCTA>Add to Cart →</ProductCTA>
                  </ProductCard>
                );
              })}
            </ProductsGrid>

            {/* Trust Section */}
            <TrustSection>
              <TrustGrid>
                <TrustItem>
                  <TrustIcon>✓</TrustIcon>
                  <TrustTitle>Premium Quality</TrustTitle>
                  <TrustText>Outperform the competition</TrustText>
                </TrustItem>
                <TrustItem>
                  <TrustIcon>✓</TrustIcon>
                  <TrustTitle>Eco-Friendly</TrustTitle>
                  <TrustText>Reusable & sustainable</TrustText>
                </TrustItem>
                <TrustItem>
                  <TrustIcon>✓</TrustIcon>
                  <TrustTitle>Unbeatable Prices</TrustTitle>
                  <TrustText>Up to 50% off retail</TrustText>
                </TrustItem>
                <TrustItem>
                  <TrustIcon>✓</TrustIcon>
                  <TrustTitle>Fast Shipping</TrustTitle>
                  <TrustText>Free on orders $100+</TrustText>
                </TrustItem>
              </TrustGrid>
            </TrustSection>

            <ButtonWrapper>
              <Button1
                isLink={true}
                to="/shop-by-vehicle"
                text="Browse All Products"
              />
            </ButtonWrapper>
          </Container>
        </ContentSection>
      </PageWrapper>

      <Footer />
    </>
  );
};

export default Clearance;

// Styled Components - Matching Home Page Style

const PageWrapper = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const HeroBanner = styled.div`
  background: linear-gradient(90deg, #ff4444 0%, #ee3355 100%);
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(238, 51, 85, 0.3);
  margin-top: 140px;
  position: relative;

  @media (max-width: 767px) {
    margin-top: 120px;
    padding: 14px 16px;
  }
`;

const BannerContent = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerText = styled.p`
  margin: 0;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.4px;
  text-align: center;

  strong {
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: 0.3px;
  }
`;

const ContentSection = styled.section`
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
  max-width: 720px;
  margin: 0 auto 56px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const Headline = styled.h1`
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

const Subheading = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 64px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: block;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #00ad23;
  }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 8px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`;

const StockBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 152, 0, 0.95);
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 8px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
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

const ProductImage = styled.img.attrs({ loading: 'lazy' })`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
`;

const ProductTitle = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  padding: 20px 20px 12px;
  line-height: 1.3;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 16px 16px 10px;
    min-height: 52px;
  }
`;

const PriceContainer = styled.div`
  padding: 0 20px 16px;

  @media (max-width: 767px) {
    padding: 0 16px 14px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 6px;
`;

const OldPrice = styled.span`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  font-family: Lato, sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #00ad23;
`;

const SaveText = styled.div`
  font-family: Lato, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #ff6b6b;
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

const TrustSection = styled.div`
  margin-bottom: 48px;
  padding: 40px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;

  @media (max-width: 767px) {
    padding: 32px 0;
    margin-bottom: 36px;
  }
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const TrustItem = styled.div`
  text-align: center;
`;

const TrustIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #00ad23;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
`;

const TrustTitle = styled.h4`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 6px;
`;

const TrustText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

const ButtonWrapper = styled.div`
  margin-top: 48px;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 36px;
  }
`;

const NoProductsMessage = styled.div`
  text-align: center;
  padding: 60px 24px;

  p {
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #666;
    margin: 0;
  }

  @media (max-width: 767px) {
    padding: 40px 16px;

    p {
      font-size: 16px;
    }
  }
`;

const ProductDescription = styled.p`
  font-family: Lato, sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #666;
  margin: 0;
  padding: 0 20px 12px;
  line-height: 1.4;
  min-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 0 16px 10px;
    min-height: 32px;
  }
`;

const DaysRemaining = styled.div`
  font-family: Lato, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ff9800;
  margin-top: 4px;
`;

const FinalSaleBadge = styled.div`
  position: absolute;
  top: 48px;
  left: 12px;
  background: #1a1a1a;
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
