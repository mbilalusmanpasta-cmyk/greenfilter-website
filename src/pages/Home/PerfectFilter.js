import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddToCart from "../../components/AddToCart";
import {
  Select,
  MenuItem,
  Tabs,
  Tab,
  Button,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import { statics } from "../../data/store";

const BRAND_GREEN = "#00ad23";
// Same as AddToCart – used to fetch price from Shopify so card shows same price as buy button
const SHOPIFY_STOREFRONT = {
  domain: "store.greenfilter.com",
  apiKey: "b0f6e285934ab0374588e085bda31072",
  apiVersion: "2024-01",
};
const filterKeys = ["make", "name", "engine"];
const keys = [
  { name: "year" },
  { name: "make_id", listName: "make" },
  { name: "model_name", listName: "name" },
  { name: "engine", listName: "engine" },
];

function compare(a, b, key) {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
}

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  @media (max-width: 767px) {
    padding: 20px 16px;
    margin: 0 5%;
    width: 90%;
    max-width: none;
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`;

const Title = styled.h3`
  margin: 0 0 20px;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  @media (max-width: 767px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

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
    textTransform: "capitalize",
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
        textTransform: "capitalize",
      },
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "rgba(0, 173, 35, 0.12)",
      },
      "& .MuiMenuItem-root.Mui-selected:hover": {
        backgroundColor: "rgba(0, 173, 35, 0.2)",
      },
    },
  },
  anchorOrigin: { vertical: "bottom", horizontal: "left" },
  transformOrigin: { vertical: "top", horizontal: "left" },
};

const FormRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .MuiFormControl-root {
    min-width: 140px;
    flex: 1;
  }
  .MuiInputLabel-root {
    font-family: Lato, sans-serif;
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${BRAND_GREEN};
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    .MuiFormControl-root {
      min-width: 100%;
    }
  }
`;

const MobileSelectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  min-height: 48px;
  position: relative;
  .mobile-row-label {
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #333;
    flex: 1;
    pointer-events: none;
  }
  .mobile-row-chevron {
    pointer-events: none;
    color: #999;
    font-size: 18px;
    margin-left: 8px;
  }
  .mobile-select-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .MuiOutlinedInput-root {
      height: 100% !important;
      opacity: 0;
    }
    .MuiSelect-select {
      height: 100% !important;
      padding: 0 40px 0 12px;
    }
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 11px;
  flex-wrap: wrap;
  gap: 12px;
`;

const PartNumberRow = styled.div`
  margin-bottom: 20px;
  .MuiFormControl-root {
    width: 100%;
    max-width: 320px;
  }
  .MuiOutlinedInput-root {
    font-family: Lato, sans-serif;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${BRAND_GREEN};
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${BRAND_GREEN};
  }
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 20px;
  .MuiTab-root {
    font-family: Lato, sans-serif;
    text-transform: none;
    font-weight: 600;
  }
  .Mui-selected {
    color: ${BRAND_GREEN} !important;
  }
  .MuiTabs-indicator {
    background-color: ${BRAND_GREEN};
  }
  @media (max-width: 767px) {
    .MuiTab-root {
      flex: 1;
      min-width: 0;
      color: #888;
    }
    .MuiTab-root.Mui-selected {
      background-color: transparent;
      color: #333 !important;
    }
    .MuiTabs-indicator {
      display: block;
      background-color: ${BRAND_GREEN};
    }
  }
`;

const ResultsSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #eee;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: stretch;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

const ProductCardImage = styled.div`
  flex-shrink: 0;
  width: 160px;
  min-height: 140px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  img {
    width: 100%;
    height: auto;
    max-height: 140px;
    object-fit: contain;
  }
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    img {
      max-height: 100px;
    }
  }
`;

const ProductCardBody = styled.div`
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Lato, sans-serif;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;

const ProductCardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 8px;
    line-height: 1.25;
  }
`;

const SpecList = styled.div`
  margin: 0 0 16px;
  font-size: 13px;
  color: #333;
  line-height: 1.45;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px 12px;
  align-items: start;
  p {
    margin: 0;
    min-width: 0;
  }
  strong {
    font-weight: 600;
    margin-right: 4px;
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 1.4;
    grid-template-columns: 1fr 1fr;
    gap: 2px 10px;
    &.spec-single-col {
      grid-template-columns: 1fr;
    }
  }
`;

const PriceBlock = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  .price-current {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  .price-compare {
    font-size: 13px;
    font-weight: 400;
    color: #888;
    text-decoration: line-through;
  }
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    .price-current {
      font-size: 16px;
    }
    .price-compare {
      font-size: 12px;
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
    gap: 8px;
    & > * {
      flex: none;
      width: 100%;
    }
  }
`;

const BUTTON_HEIGHT_DESKTOP = 40; /* match both buttons for vertical alignment */

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
  @media (max-width: 600px) {
    height: ${BUTTON_HEIGHT_DESKTOP}px;
    min-height: ${BUTTON_HEIGHT_DESKTOP}px;
    padding: 0 16px;
    font-size: 13px;
    font-weight: 600;
    box-sizing: border-box;
    svg {
      width: 16px;
      height: 16px;
    }
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
  /* Shopify embed container: same row height/width as Product Details */
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
    margin-top: 11px !important;
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
  @media (max-width: 600px) {
    display: flex;
    height: ${BUTTON_HEIGHT_DESKTOP}px;
    min-height: ${BUTTON_HEIGHT_DESKTOP}px;
    align-items: center;
    & > div {
      height: ${BUTTON_HEIGHT_DESKTOP}px !important;
      min-height: ${BUTTON_HEIGHT_DESKTOP}px !important;
    }
    .shopify-payment-button__button,
    .shopify-buy__btn {
      width: 100% !important;
      padding: 0 16px !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      height: ${BUTTON_HEIGHT_DESKTOP}px !important;
      min-height: ${BUTTON_HEIGHT_DESKTOP}px !important;
    }
  }
`;

const MOBILE_BREAKPOINT = 600;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const check = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [check]);
  return isMobile;
}

export default function PerfectFilter() {
  const isMobile = useIsMobile();
  const [tabValue, setTabValue] = useState(0);
  const [apiStr, setApiStr] = useState({
    year: "",
    make_id: "",
    model_name: "",
    engine: "",
  });
  const [apiData, setApiData] = useState({});
  const [searchPartNo, setSearchPartNo] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [shopifyPrices, setShopifyPrices] = useState({}); // { buy_url: { price, compareAtPrice } }

  const handleChange = (key, value) => {
    const tempArr = ["year", "make_id", "model_name", "engine"];
    const index = tempArr.indexOf(key);
    tempArr.splice(0, index + 1);
    let tempData = { ...apiData };
    let tempStr = { ...apiStr };
    tempArr.forEach((k) => {
      const keyDef = keys.find((keyItem) => keyItem.name === k);
      if (keyDef && keyDef.listName) delete tempData[keyDef.listName];
      tempStr[k] = "";
    });
    keys.forEach((k, i) => {
      if (k.name === key && i + 1 < keys.length) {
        for (let j = i + 1; j < keys.length; j++) {
          delete tempData[keys[j].listName];
        }
      }
    });
    setProductDetails(null);
    setShopifyPrices({});
    setApiData(tempData);
    setApiStr({ ...tempStr, [key]: value });
  };

  // Fetch Shopify price for each product so card shows same price as AddToCart
  useEffect(() => {
    if (!productDetails?.length) {
      setShopifyPrices({});
      return;
    }
    const gid = (id) =>
      typeof id === "string" && id.startsWith("gid://") ? id : `gid://shopify/Product/${id}`;
    const url = `https://${SHOPIFY_STOREFRONT.domain}/api/${SHOPIFY_STOREFRONT.apiVersion}/graphql.json`;
    const token = SHOPIFY_STOREFRONT.apiKey;
    const fetchPrice = async (buyUrl) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": token,
          },
          body: JSON.stringify({
            query: `query getProductPrice($id: ID!) { product(id: $id) { variants(first: 1) { nodes { price { amount } compareAtPrice { amount } } } } }`,
            variables: { id: gid(buyUrl) },
          }),
        });
        const json = await res.json();
        const nodes = json?.data?.product?.variants?.nodes;
        if (nodes?.length) {
          const price = nodes[0].price?.amount;
          const compareAtPrice = nodes[0].compareAtPrice?.amount;
          if (price != null) {
            setShopifyPrices((prev) => ({
              ...prev,
              [buyUrl]: { price, compareAtPrice: compareAtPrice || null },
            }));
          }
        }
      } catch (e) {
        console.warn("Shopify price fetch failed for", buyUrl, e);
      }
    };
    productDetails.forEach((p) => {
      if (p?.buy_url) fetchPrice(p.buy_url);
    });
  }, [productDetails]);

  useEffect(() => {
    const runFetch = async () => {
      const url = statics.BaseUrl + "/product-search";
      await axios
        .get(url, { params: apiStr })
        .then((data) => {
          const response = data.data;
          if (response?.data?.length > 0) {
            const filterKeysArr = ["make", "name", "engine"];
            let index = -1;
            Object.keys(apiStr).forEach((key) => {
              if (apiStr[key] !== "" && apiStr[key] !== "-1") index++;
            });
            const getKey = filterKeysArr[index];
            const objectKey = getKey;
            let filteredData = response.data;
            const allSelected =
              apiStr.year && apiStr.make_id && apiStr.model_name && apiStr.engine;
            if (!allSelected && objectKey) {
              if (getKey === "engine") {
                filteredData.sort((a, b) => compare(a, b, "displacement"));
              } else if (getKey === "make" || getKey === "name") {
                filteredData.sort((a, b) => compare(a, b, "name"));
              }
              setApiData((prev) => ({ ...prev, [objectKey]: filteredData }));
            }
          }
        })
        .catch((err) => console.error(err));
    };
    runFetch();
  }, [apiStr.year, apiStr.make_id, apiStr.model_name, apiStr.engine]);

  const handleFindMatching = async () => {
    setProductDetails(null);
    setShopifyPrices({});
    if (tabValue === 1 && searchPartNo.trim()) {
      await axios
        .get(statics.BaseUrl + "/product-search", {
          params: { gfu_part_num: searchPartNo.trim(), is_active: 1 },
        })
        .then((data) => {
          setProductDetails(data?.data?.data || []);
        })
        .catch((err) => console.error(err));
      return;
    }
    if (tabValue === 0 && apiStr.year && apiStr.make_id && apiStr.model_name && apiStr.engine) {
      await axios
        .get(statics.BaseUrl + "/product-search", { params: apiStr })
        .then((data) => {
          setProductDetails(data?.data?.data || []);
        })
        .catch((err) => console.error(err));
    }
  };

  const generateYearOptions = () => {
    const arr = [];
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= 1959; i--) {
      arr.push(<MenuItem key={i} value={String(i)}>{i}</MenuItem>);
    }
    return arr;
  };

  const vehicleReady =
    apiStr.year && apiStr.make_id && apiStr.model_name && apiStr.engine;
  const partReady = tabValue === 1 && searchPartNo.trim().length > 0;
  const canSearch = tabValue === 0 ? vehicleReady : partReady;

  const makeDisplay = Array.isArray(apiData.make) && apiStr.make_id
    ? apiData.make.find((m) => String(m.id) === String(apiStr.make_id))?.title
    : null;

  return (
    <Container>
      <Title>Find the Perfect Filter for Your Vehicle</Title>

      <StyledTabs
        value={tabValue}
        onChange={(e, v) => setTabValue(v)}
        aria-label="Find by Vehicle or Part Number"
      >
        <Tab label={isMobile ? "Vehicle Search" : "Find by Vehicle"} id="tab-vehicle" aria-controls="panel-vehicle" />
        <Tab label={isMobile ? "Part No." : "Find by Part Number"} id="tab-part" aria-controls="panel-part" />
      </StyledTabs>

      {tabValue === 0 && (
        <FormRow id="panel-vehicle" role="tabpanel">
          {/* On mobile: row-style fields with number + label + chevron; on desktop: standard dropdowns */}
          {isMobile ? (
            <>
            <MobileSelectRow>
              <span className="mobile-row-label">1. {apiStr.year || "Select Year"}</span>
              <span className="mobile-row-chevron">›</span>
              <FormControl size="small" fullWidth variant="outlined" className="mobile-select-overlay">
                <Select
                  value={apiStr.year || ""}
                  onChange={(e) => handleChange("year", e.target.value)}
                  MenuProps={menuProps}
                  displayEmpty
                  renderValue={() => ""}
                >
                  {generateYearOptions()}
                </Select>
              </FormControl>
            </MobileSelectRow>
          {(!isMobile || apiStr.year) && (
            <MobileSelectRow>
              <span className="mobile-row-label">2. {makeDisplay || "Select Make"}</span>
              <span className="mobile-row-chevron">›</span>
              <FormControl size="small" fullWidth variant="outlined" className="mobile-select-overlay" disabled={!apiStr.year}>
                <Select
                  value={apiStr.make_id || ""}
                  onChange={(e) => handleChange("make_id", e.target.value)}
                  MenuProps={menuProps}
                  displayEmpty
                  renderValue={() => ""}
                >
                  {Array.isArray(apiData.make) &&
                    apiData.make.map((item) => (
                      <MenuItem key={item.id} value={String(item.id)}>
                        {item.title}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </MobileSelectRow>
          )}
          {(!isMobile || apiStr.make_id) && (
            <MobileSelectRow>
              <span className="mobile-row-label">3. {apiStr.model_name || "Select Model"}</span>
              <span className="mobile-row-chevron">›</span>
              <FormControl size="small" fullWidth variant="outlined" className="mobile-select-overlay" disabled={!apiStr.make_id}>
                <Select
                  value={apiStr.model_name || ""}
                  onChange={(e) => handleChange("model_name", e.target.value)}
                  MenuProps={menuProps}
                  displayEmpty
                  renderValue={() => ""}
                >
                  {Array.isArray(apiData.name) &&
                    apiData.name.map((m) => (
                      <MenuItem key={m.name} value={m.name}>
                        {m.title}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </MobileSelectRow>
          )}
          {(!isMobile || apiStr.model_name) && (
            <MobileSelectRow>
              <span className="mobile-row-label">4. {apiStr.engine || "Engine"}</span>
              <span className="mobile-row-chevron">›</span>
              <FormControl size="small" fullWidth variant="outlined" className="mobile-select-overlay" disabled={!apiStr.model_name}>
                <Select
                  value={apiStr.engine || ""}
                  onChange={(e) => handleChange("engine", e.target.value)}
                  MenuProps={menuProps}
                  displayEmpty
                  renderValue={() => ""}
                >
                  {Array.isArray(apiData.engine) &&
                    apiData.engine.map((eng) => (
                      <MenuItem key={eng.displacement} value={eng.displacement}>
                        {eng.displacement}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </MobileSelectRow>
          )}
            </>
          ) : (
            <>
          <FormControl size="small" fullWidth variant="outlined">
            <InputLabel id="year-label">Select Year</InputLabel>
              <Select
                labelId="year-label"
                label="Select Year"
                value={apiStr.year || ""}
                onChange={(e) => handleChange("year", e.target.value)}
                sx={selectSx}
                MenuProps={menuProps}
              >
                {generateYearOptions()}
              </Select>
          </FormControl>
          {(!isMobile || apiStr.year) && (
            <FormControl size="small" fullWidth variant="outlined" disabled={!apiStr.year}>
              <InputLabel id="make-label">Select Make</InputLabel>
              <Select
                labelId="make-label"
                label="Select Make"
                value={apiStr.make_id || ""}
                onChange={(e) => handleChange("make_id", e.target.value)}
                sx={selectSx}
                MenuProps={menuProps}
              >
                {Array.isArray(apiData.make) &&
                  apiData.make.map((item) => (
                    <MenuItem key={item.id} value={String(item.id)}>
                      {item.title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
          {(!isMobile || apiStr.make_id) && (
            <FormControl size="small" fullWidth variant="outlined" disabled={!apiStr.make_id}>
              <InputLabel id="model-label">Select Model</InputLabel>
              <Select
                labelId="model-label"
                label="Select Model"
                value={apiStr.model_name || ""}
                onChange={(e) => handleChange("model_name", e.target.value)}
                sx={selectSx}
                MenuProps={menuProps}
              >
                {Array.isArray(apiData.name) &&
                  apiData.name.map((m) => (
                    <MenuItem key={m.name} value={m.name}>
                      {m.title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
          {(!isMobile || apiStr.model_name) && (
            <FormControl size="small" fullWidth variant="outlined" disabled={!apiStr.model_name}>
              <InputLabel id="engine-label">Select Engine</InputLabel>
              <Select
                labelId="engine-label"
                label="Select Engine"
                value={apiStr.engine || ""}
                onChange={(e) => handleChange("engine", e.target.value)}
                sx={selectSx}
                MenuProps={menuProps}
              >
                {Array.isArray(apiData.engine) &&
                  apiData.engine.map((eng) => (
                    <MenuItem key={eng.displacement} value={eng.displacement}>
                      {eng.displacement}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
            </>
          )}
        </FormRow>
      )}

      {tabValue === 1 && (
        <PartNumberRow id="panel-part" role="tabpanel">
          <TextField
            size="small"
            fullWidth
            label="Part Number"
            placeholder="Enter part number"
            value={searchPartNo}
            onChange={(e) => setSearchPartNo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleFindMatching()}
            variant="outlined"
            sx={{ maxWidth: 320 }}
          />
        </PartNumberRow>
      )}

      <FooterRow>
        <Button
          variant="contained"
          onClick={handleFindMatching}
          disabled={!canSearch}
          sx={{
            backgroundColor: BRAND_GREEN,
            "&:hover": { backgroundColor: "#00901c" },
            fontFamily: "Lato, sans-serif",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Find Matching Filters
        </Button>
      </FooterRow>

      {productDetails && (
        <ResultsSection>
          {productDetails.length === 0 ? (
            <p style={{ color: "#666", margin: 0 }}>No products found. Try different selections.</p>
          ) : (
            productDetails.map((product, key) => {
              const selectedEngine =
                apiStr?.engine && apiData?.engine
                  ? apiData.engine.find((eng) => eng.displacement === apiStr.engine) || apiData.engine[0]
                  : null;
              const partTitle = product.title || `Green Filter Part #${product.gfu_part_num || ""}`;
              const imageSrc =
                product.images && product.images.length ? product.images[0].link : "https://via.placeholder.com/150";
              return (
                <ProductCard key={product.id || product.gfu_part_num}>
                  <ProductCardImage>
                    <img src={imageSrc} alt={partTitle} />
                  </ProductCardImage>
                  <ProductCardBody>
                    <div>
                      <ProductCardTitle>{partTitle}</ProductCardTitle>
                      <SpecList>
                        {apiStr?.year && <p><strong>Year:</strong> {apiStr.year}</p>}
                        {selectedEngine && (
                          <>
                            <p><strong>Engine:</strong> {selectedEngine.engine}</p>
                            <p><strong>Disp:</strong> {selectedEngine.displacement}</p>
                            <p><strong>Intake:</strong> {selectedEngine.intake}</p>
                            <p><strong>Fitment Note:</strong> {selectedEngine.description ? `${selectedEngine.description} Models` : "All Models"}</p>
                          </>
                        )}
                        {!selectedEngine && (
                          <p><strong>Fitment Note:</strong> All Models</p>
                        )}
                        {(() => {
                        const shopify = product?.buy_url ? shopifyPrices[product.buy_url] : null;
                        const price = shopify?.price ?? (product?.price != null && product?.price !== "" ? String(product.price) : null);
                        if (price == null) return null;
                        const main = `$${Number(price).toFixed(2)}`;
                        const compareAt = shopify?.compareAtPrice ? Number(shopify.compareAtPrice).toFixed(2) : null;
                        return (
                          <PriceBlock>
                            <span className="price-current">{main}</span>
                            {compareAt != null && <span className="price-compare">${compareAt}</span>}
                          </PriceBlock>
                        );
                      })()}
                      </SpecList>
                    </div>
                    <ButtonGroup>
                      {product.gfu_part_num ? (
                        <ViewDetailsButton
                          as="button"
                          type="button"
                          onClick={() => (window.location.href = `/store/filter/${product.gfu_part_num}`)}
                        >
                           View Product Details
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: 4 }}>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                          </svg>
                        </ViewDetailsButton>
                      ) : (
                        <ViewDetailsButton as="span" style={{ opacity: 0.7, cursor: "not-allowed" }}>
                          View Product Details
                        </ViewDetailsButton>
                      )}
                      <PrimaryButtonWrap>
                        <AddToCart
                          text="Add to Cart"
                          buyButtonId={product?.buy_url}
                          id={product?.id?.toString() + key.toString()}
                          background={BRAND_GREEN}
                          color="#fff"
                          hidePrice
                        />
                      </PrimaryButtonWrap>
                    </ButtonGroup>
                  </ProductCardBody>
                </ProductCard>
              );
            })
          )}
        </ResultsSection>
      )}
    </Container>
  );
}
