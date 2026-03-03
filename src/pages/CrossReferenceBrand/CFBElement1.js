import { useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import img0 from "../../assets/filters.jpg";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import { useHistory } from "react-router-dom";
import AddToCart from "../../components/AddToCart";

const BRAND_GREEN = "#00ad23";
const TEXT_DARK = "#333";
const BUTTON_HEIGHT_DESKTOP = 40;

// Shopify configuration for price fetching
const SHOPIFY_STOREFRONT = {
  domain: "store.greenfilter.com",
  apiKey: "b0f6e285934ab0374588e085bda31072",
  apiVersion: "2024-01",
};

const CFBElement1 = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedGreenFilters, setselectedGreenFilters] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shopifyPrice, setShopifyPrice] = useState(null);

  const history = useHistory();

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if (selectedFilter) {
      getProductById();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedGreenFilters) {
      setShowModel(!showModel);
    }
    if (selectedCompany) {
      getFilterCodes();
    }
  }, [selectedCompany]);

  // Fetch Shopify price for the product
  useEffect(() => {
    if (!selectedGreenFilters?.buy_url) {
      setShopifyPrice(null);
      return;
    }
    const gid = (id) =>
      typeof id === "string" && id.startsWith("gid://") ? id : `gid://shopify/Product/${id}`;
    const url = `https://${SHOPIFY_STOREFRONT.domain}/api/${SHOPIFY_STOREFRONT.apiVersion}/graphql.json`;
    const token = SHOPIFY_STOREFRONT.apiKey;

    const fetchPrice = async () => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": token,
          },
          body: JSON.stringify({
            query: `query getProductPrice($id: ID!) { product(id: $id) { variants(first: 1) { nodes { price { amount } compareAtPrice { amount } } } } }`,
            variables: { id: gid(selectedGreenFilters.buy_url) },
          }),
        });
        const json = await res.json();
        const nodes = json?.data?.product?.variants?.nodes;
        if (nodes?.length) {
          const price = nodes[0].price?.amount;
          const compareAtPrice = nodes[0].compareAtPrice?.amount;
          if (price != null) {
            setShopifyPrice({ price, compareAtPrice: compareAtPrice || null });
          }
        }
      } catch (e) {
        console.warn("Shopify price fetch failed", e);
      }
    };
    fetchPrice();
  }, [selectedGreenFilters]);

  const getCompanies = async () => {
    setLoading(true);
    let tableDataT = [];
    let response = await GetData(
      statics.BaseUrl + `/competitor?pageSize=200`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      tableDataT = response?.data?.rows;
    }
    setCompanies(tableDataT);
    setLoading(false);
  };

  const getFilterCodes = async (id) => {
    let tableDataT = [];
    let response = await GetData(
      statics.BaseUrl + `/competitor?id=${selectedCompany?.id}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      tableDataT = response?.data?.com_products;
    }
    setSelectedFilters(tableDataT);
  };

  const getProductById = async (filter) => {
    let tableDataT = {};

    console.log(selectedFilter);

    let response = await GetData(
      statics.BaseUrl + `/product?id=${selectedFilter?.product_id}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      tableDataT = response?.data?.rows;
    }
    setselectedGreenFilters(tableDataT[0]);
    setShowModel(true);
  };

  const onChangeCompanyHandler = (id) => {
    setShowModel(false);
    setSelectedCompany(undefined);
    setSelectedFilter(undefined);
    setShopifyPrice(null);
    let selectedCompany = companies.filter((item) => item.id === parseInt(id));

    console.log(selectedCompany);
    if (selectedCompany.length) {
      setSelectedCompany(selectedCompany[0]);
    }
  };

  const onChangeFilterHandler = (id) => {
    setShowModel(false);
    setShopifyPrice(null);
    let selectedFilter = selectedCompany.compatitor_products.filter(
      (item) => item.id === parseInt(id)
    );
    if (selectedFilter.length) {
      setSelectedFilter(selectedFilter[0]);
    }
  };

  const selectSx = {
    fontFamily: "Lato, sans-serif",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d0d0d0",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#999",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: BRAND_GREEN,
      borderWidth: 2,
    },
    "& .MuiSelect-select": {
      padding: "10px 14px",
    },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        maxHeight: 280,
        mt: 1,
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        borderRadius: 1,
        "& .MuiMenuItem-root": {
          fontFamily: "Lato, sans-serif",
          fontSize: "14px",
        },
        "& .MuiMenuItem-root.Mui-selected": {
          backgroundColor: "rgba(0, 173, 35, 0.12)",
        },
        "& .MuiMenuItem-root.Mui-selected:hover": {
          backgroundColor: "rgba(0, 173, 35, 0.2)",
        },
      },
    },
  };

  return (
    <>
      {loading && (
        <LoadingOverlay>
          <CircularProgress size={60} sx={{ color: BRAND_GREEN }} />
        </LoadingOverlay>
      )}

      <Section>
        <Container>
          <HeadingBlock>
            <Headline>Cross-Reference for Another Brand to Green Filter</Headline>
            <Accent />
          </HeadingBlock>

          <ContentGrid>
            <ImageContainer>
              <img src={img0} alt="Green Filter Products" />
            </ImageContainer>

            <FormCard>
              <FormInnerCard>
                <FormRow>
                  <FormControl size="small" fullWidth variant="outlined">
                    <InputLabel id="company-label">Company</InputLabel>
                    <Select
                      labelId="company-label"
                      label="Company"
                      value={selectedCompany?.id || ""}
                      onChange={(e) => onChangeCompanyHandler(e.target.value)}
                      sx={selectSx}
                      MenuProps={menuProps}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {companies &&
                        companies.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </FormRow>

                <FormRow>
                  <FormControl
                    size="small"
                    fullWidth
                    variant="outlined"
                    disabled={!selectedCompany}
                  >
                    <InputLabel id="filter-label">Filter Code</InputLabel>
                    <Select
                      labelId="filter-label"
                      label="Filter Code"
                      value={selectedFilter?.id || ""}
                      onChange={(e) => onChangeFilterHandler(e.target.value)}
                      sx={selectSx}
                      MenuProps={menuProps}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {selectedFilters &&
                        selectedFilters.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.competitor_part_number}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </FormRow>
              </FormInnerCard>
            </FormCard>
          </ContentGrid>

          {showModel && selectedGreenFilters && (() => {
            const partTitle = selectedGreenFilters.title || `Green Filter Part #${selectedGreenFilters.gfu_part_num || ""}`;
            const imageSrc = selectedGreenFilters.images && selectedGreenFilters.images.length
              ? selectedGreenFilters.images[0].link
              : "https://via.placeholder.com/150";

            return (
            <ResultSection>
              <ProductCard>
                <ProductCardImage>
                  <img src={imageSrc} alt={partTitle} />
                </ProductCardImage>

                <ProductCardBody>
                  <ProductCardTitle>{partTitle}</ProductCardTitle>

                  <FitmentNote>
                    Replaces: {selectedCompany?.title} {selectedFilter?.competitor_part_number}
                  </FitmentNote>

                  {shopifyPrice && (
                    <PriceRow>
                      <span className="price-current">
                        ${Number(shopifyPrice.price).toFixed(2)}
                      </span>
                      {shopifyPrice.compareAtPrice && (
                        <span className="price-compare">
                          ${Number(shopifyPrice.compareAtPrice).toFixed(2)}
                        </span>
                      )}
                    </PriceRow>
                  )}

                  <ButtonGroup>
                    <ViewDetailsButton
                      to={`/store/filter/${selectedGreenFilters.gfu_part_num}`}
                    >
                      View Product Details
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: 4 }}>
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </ViewDetailsButton>
                    <PrimaryButtonWrap>
                      <AddToCart
                        text="Add to Cart"
                        buyButtonId={selectedGreenFilters?.buy_url}
                        id={selectedGreenFilters?.id?.toString()}
                        background={BRAND_GREEN}
                        color="#fff"
                        hidePrice
                      />
                    </PrimaryButtonWrap>
                  </ButtonGroup>
                </ProductCardBody>
              </ProductCard>
            </ResultSection>
            );
          })()}
        </Container>
      </Section>
    </>
  );
};

export default CFBElement1;

// Styled Components

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Section = styled.section`
  background: #fafafa;
  padding: 80px 24px;
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

const Headline = styled.h1`
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: ${TEXT_DARK};
  margin: 0;
  line-height: 1.2;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: ${BRAND_GREEN};
  border-radius: 2px;
  margin: 14px auto 16px;
`;

const Subtitle = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  margin: 0;
  line-height: 1.6;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const ContentGrid = styled.div`
  max-width: 960px;
  margin: 0 auto 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 32px;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 28px;
  }

  @media (max-width: 767px) {
    padding: 24px 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f8f8f8;
  border-radius: 8px;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    padding: 28px;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const FormCard = styled.div`
  /* Container for the form */
`;

const FormInnerCard = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  padding: 24px;
  border: 1px solid #ebebeb;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const FormRow = styled.div`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputLabel-root {
    font-family: Lato, sans-serif;
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${BRAND_GREEN};
  }
`;

const HelpText = styled.p`
  margin: 16px 0 0;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #888;
  text-align: center;
  font-style: italic;
`;

const ResultSection = styled.div`
  margin-top: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: stretch;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ProductCardImage = styled.div`
  flex-shrink: 0;
  width: 240px;
  min-height: 240px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: contain;
  }
  @media (max-width: 767px) {
    width: 100%;
    min-height: 200px;
    padding: 24px;
    img {
      max-height: 150px;
    }
  }
`;

const ProductCardBody = styled.div`
  flex: 1;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Lato, sans-serif;
  @media (max-width: 767px) {
    padding: 20px;
    gap: 16px;
  }
`;

const ProductCardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const FitmentNote = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.5;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 0;
  .price-current {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
  .price-compare {
    font-size: 16px;
    font-weight: 400;
    color: #888;
    text-decoration: line-through;
  }
  @media (max-width: 767px) {
    .price-current {
      font-size: 20px;
    }
    .price-compare {
      font-size: 14px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 12px;
  width: 100%;
  & > * {
    flex: 1;
    min-width: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    & > * {
      flex: none;
      width: 100%;
    }
  }
`;

const ViewDetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 16px;
  height: ${BUTTON_HEIGHT_DESKTOP}px;
  min-height: ${BUTTON_HEIGHT_DESKTOP}px;
  box-sizing: border-box;
  background-color: transparent;
  color: ${BRAND_GREEN} !important;
  font-family: Lato, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  border: 2px solid ${BRAND_GREEN};
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: rgba(0, 173, 35, 0.08);
    color: ${BRAND_GREEN} !important;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

const PrimaryButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${BUTTON_HEIGHT_DESKTOP}px;
  min-height: ${BUTTON_HEIGHT_DESKTOP}px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  & > div {
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: ${BUTTON_HEIGHT_DESKTOP}px !important;
    min-height: ${BUTTON_HEIGHT_DESKTOP}px !important;
  }
  .shopify-buy__btn-wrapper,
  [data-element="product.buttonWrapper"] {
    margin-top: 0 !important;
  }
  .shopify-payment-button__button,
  .shopify-buy__btn {
    font-family: Lato, sans-serif !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    padding: 0 16px !important;
    border-radius: 4px !important;
    height: ${BUTTON_HEIGHT_DESKTOP}px !important;
    min-height: ${BUTTON_HEIGHT_DESKTOP}px !important;
    margin: 0 auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    text-align: center !important;
  }
`;
