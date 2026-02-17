import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  @media (max-width: 767px) {
    padding: 16px;
    margin: 0 16px;
  }
`;

const Title = styled.h3`
  margin: 0 0 20px;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #333;
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
    .MuiFormControl-root {
      min-width: 100%;
    }
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e8e8e8;
  flex-wrap: wrap;
  gap: 12px;
`;

const StepIndicator = styled.div`
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  .line {
    flex: 1;
    max-width: 200px;
    height: 1px;
    background: #ddd;
  }
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
    min-height: 120px;
  }
`;

const ProductCardBody = styled.div`
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Lato, sans-serif;
`;

const ProductCardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
`;

const SpecList = styled.div`
  margin: 0 0 16px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  p {
    margin: 0 0 4px;
  }
  strong {
    font-weight: 600;
    margin-right: 6px;
  }
`;

const ViewDetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 20px;
  background-color: ${BRAND_GREEN};
  color: #fff !important;
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s;
  &:hover {
    background-color: #00901c;
    color: #fff !important;
  }
`;

export default function PerfectFilter() {
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
    setApiData(tempData);
    setApiStr({ ...tempStr, [key]: value });
  };

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
            if (allSelected) {
              setProductDetails(filteredData);
            } else {
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

  return (
    <Container>
      <Title>Find the Perfect Filter for Your Vehicle</Title>

      <StyledTabs
        value={tabValue}
        onChange={(e, v) => setTabValue(v)}
        aria-label="Find by Vehicle or Part Number"
      >
        <Tab label="Find by Vehicle" id="tab-vehicle" aria-controls="panel-vehicle" />
        <Tab label="Find by Part Number" id="tab-part" aria-controls="panel-part" />
      </StyledTabs>

      {tabValue === 0 && (
        <FormRow id="panel-vehicle" role="tabpanel">
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
        <StepIndicator>
          <span>Step 1 of 4</span>
          <span className="line" />
        </StepIndicator>
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
            productDetails.map((product) => {
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
                      </SpecList>
                    </div>
                    <ViewDetailsButton to={`/store/filter/${product.gfu_part_num}`}>
                      View Product Details
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: 4 }}>
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </ViewDetailsButton>
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
