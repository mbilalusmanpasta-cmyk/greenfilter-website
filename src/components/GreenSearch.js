import React, { Component, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { statics } from "../data/store";
import AddToCart from "./AddToCart";
import { Select, Input, Button } from "antd";
import logo from "../assets/gflogo.png";
import { CaretDownOutlined } from "@ant-design/icons";
import axios from "axios";
import styled from "styled-components";

const { Option } = Select;

const keys = [
  { name: "year" },
  { name: "make_id", listName: "make" },
  { name: "model_name", listName: "name" },
  { name: "engine", listName: "engine" },
];

function compare(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

const GreenSearch = ({ Sticky }) => {
  const [apiStr, setApiStr] = React.useState({
    year: "",
    make_id: "",
    model_name: "",
    engine: "",
  });

  const [apiData, setApiData] = React.useState({});
  const stickyComponentRef = React.useRef();
  const [sticky, setSticky] = React.useState(false);
  const [finalSelectedId, setFinalSelectedId] = React.useState(null);
  const [searchpartNo, setSearchPartNo] = React.useState("");
  const [makes, setMakes] = React.useState([]);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const [productDetails, setProductDetails] = React.useState(null);
  const [modelsId, setModelsId] = useState([]);

  useEffect(() => {
    if (Sticky) {
      setSticky(true);
    } else {
      window.addEventListener("scroll", checkSticky);
    }
    return () => window.removeEventListener("scroll", checkSticky);
  }, []);

  useEffect(() => {
    continueFetch();
  }, [apiStr]);

  const checkSticky = () => {
    const getTop = stickyComponentRef.current.getBoundingClientRect();
    if (getTop.top <= 153) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleChange = (key, value) => {
    const tempArr = ["year", "make_id", "model_name", "engine"];

    const index = tempArr.indexOf(key);
    tempArr.splice(0, index + 1);

    let tempData = apiData;
    let tempStr = apiStr;

    tempArr.map((k) => {
      delete tempData[k];
      tempStr[k] = "";
    });

    /* Delete list after previous data selection */
    keys.find((k, i) => {
      if (k.name.toString() === key.toString()) {
        for (let j = i + 1; j < keys.length; j++) {
          delete tempData[keys[j].listName];
        }
      }
    });
    /* ------------------------------------------------ */

    setProductDetails(null);
    setFinalSelectedId(null);
    setApiData({ ...tempData });
    setApiStr({ ...tempStr, [key]: value });
  };

  const finalSearch = async () => {
    setApiData({});
    setProductDetails(null);
    setFinalSelectedId(null);
    setApiStr({
      year: "",
      make_id: "",
      model_name: "",
      engine: "",
    });

    let filters = {};
    // if(modelsId){
    //   filters.push({accessor:"model",value:modelsId})
    // }
    if (searchpartNo) {
      filters["gfu_part_num"] = searchpartNo;
      filters["is_active"] = 1;
    }

    await axios
      .get(statics.BaseUrl + `/product-search`, {
        params: filters,
      })
      .then((data) => {
        console.log(data?.data?.data);
        setProductDetails(data?.data?.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
    // fetch(`https://us-central1-greenfilter-admin.cloudfunctions.net/products?hitsPerPage=${setModelsId.length+1}&page=0&keyword=${finalSelectedId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     if(data.hits) {
    //       setProductDetails(data.hits);
    //     }
    //   })
  };

  const reset = () => {
    setApiData({});
    setProductDetails(null);
    setFinalSelectedId(null);
    setApiStr({
      year: "",
      make_id: "",
      model_name: "",
      engine: "",
    });
    setSearchPartNo("");
  };

  const continueFetch = async () => {
    // try {
    //   const data = await axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/models',
    //   ).catch(error=>this._handleError(error))
    //   console.log(data.data,"daaaattaaaa")

    const filterArray = [];

    let url = statics.BaseUrl + "/product-search";

    const filterKeys = ["make", "name", "engine"];

    let index = -1;
    Object.keys(apiStr).map((key) => {
      if (apiStr[key] !== "-1" && apiStr[key] !== "") {
        const temp = { accessor: key, value: apiStr[key] };
        filterArray.push(temp);
        index++;
      }
    });

    await axios
      .get(url, {
        params: apiStr,
      })
      .then((data) => {
        let response = data.data;

        if (response?.data?.length > 0) {
          let filteredData = [];

          const getKey = filterKeys[index];
          let objectKey = getKey;

          let bunchOfArray = response.data;
          filteredData = response.data;
          // console.log("data", data);
          // console.log("filteredData", filteredData);

          if (!getKey && apiData.make && apiData.name && apiData.engine) {
            setProductDetails(filteredData);
          } else {
            if (getKey === "engine" && filteredData.length) {
              setFinalSelectedId(filteredData[0].id);
              const modelIds = filteredData.map((item) => ({
                objectID: item.id,
              }));
              setModelsId([...modelIds]);
              // setProductDetails(filteredData)
            }

            /* SORTING LIST */
            if (getKey === "engine") {
              filteredData.sort((a, b) => compare(a, b, "displacement"));
            } else if (getKey === "make" || getKey === "name") {
              filteredData.sort((a, b) => compare(a, b, "name"));
            }
            /* --------------------- */
            setApiData({ ...apiData, [objectKey]: filteredData });
          }
        }
      })
      .catch((error) => console.log(error));

    // else if(index>=0){
    //   await  axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/makes', {
    //   params:{
    //     page:0,
    //     hitsPerPage:90
    //   }
    //       }).then((data)=>{

    //         if(data?.data?.hits.length>0) {
    //           let filteredData = [];

    //           const getKey = filterKeys[index];

    //           filteredData=[...data.data.hits]

    //           setApiData({...apiData, [getKey]:filteredData});
    //         }

    //       }).catch(error=>console.log(error))
    // }
  };

  const generateYearOptions = () => {
    const arr = [];

    const startYear = 1959;
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<Option value={i}>{i}</Option>);
    }

    return arr;
  };

  const handleKeyPress = (event) => {
    if (searchpartNo.length > 0) {
      if (event.key === "Enter") {
        finalSearch();
      }
    }
  };

  const clickInputRef1 = () => {
    if (!dropdownOpen1) {
      // Dropdown is closed, so focus the input
      if (inputRef1.current) {
        inputRef1.current.focus();
      }
    } else {
      // Dropdown is open, so unfocus the input
      if (inputRef1.current) {
        inputRef1.current.blur();
      }
    }
  };
  const clickInputRef2 = () => {
    if (!dropdownOpen2) {
      // Dropdown is closed, so focus the input
      if (inputRef2.current) {
        inputRef2.current.focus();
      }
    } else {
      // Dropdown is open, so unfocus the input
      if (inputRef2.current) {
        inputRef2.current.blur();
      }
    }
  };
  const clickInputRef3 = () => {
    if (!dropdownOpen3) {
      // Dropdown is closed, so focus the input
      if (inputRef3.current) {
        inputRef3.current.focus();
      }
    } else {
      // Dropdown is open, so unfocus the input
      if (inputRef3.current) {
        inputRef3.current.blur();
      }
    }
  };
  const clickInputRef4 = () => {
    if (!dropdownOpen4) {
      // Dropdown is closed, so focus the input
      if (inputRef4.current) {
        inputRef4.current.focus();
      }
    } else {
      // Dropdown is open, so unfocus the input
      if (inputRef4.current) {
        inputRef4.current.blur();
      }
    }
  };

  return (
    <GreenSearchWrapper>
      <div ref={stickyComponentRef}></div>

      <div
        className={`customFilters ${
          sticky || (productDetails && productDetails.length) ? "sticky" : ""
        }`}
      >
        <h3>
          <img src={logo} alt="logo" width="150" />
          Find a Filter
        </h3>

        <div className="selectController">
          <Select
            defaultValue="-1"
            value={(apiStr.year.toString().length && apiStr.year) || "-1"}
            className="customSelects"
            onChange={(v) => handleChange("year", v)}
            ref={inputRef1}
            suffixIcon={<CaretDownOutlined onClick={clickInputRef1} />}
            showAction={["click", "focus"]}
            onDropdownVisibleChange={(open) => setDropdownOpen1(open)}
          >
            <Option value="-1">Select Year</Option>
            {generateYearOptions()}
          </Select>

          <Select
            defaultValue="-1"
            value={(apiStr.make_id.length && apiStr.make_id) || "-1"}
            className="customSelects"
            onChange={(v) => handleChange("make_id", v)}
            disabled={apiStr.year === "-1" || apiStr.year === ""}
            ref={inputRef2}
            suffixIcon={<CaretDownOutlined onClick={clickInputRef2} />}
            showAction={["click", "focus"]}
            onDropdownVisibleChange={(open) => setDropdownOpen2(open)}
          >
            <Option value="-1">Select Make...</Option>
            {apiData.make &&
              apiData.make.length &&
              apiData.make.map((item, index) => {
                return <Option value={item.id.toString()}>{item.title}</Option>;
              })}
            {/* {makes && makes.length && makes.map(({name})=>{
                  return <Option value={name}>{name}</Option>
                })}             */}
          </Select>

          <Select
            defaultValue="-1"
            value={(apiStr.model_name.length && apiStr.model_name) || "-1"}
            className="customSelects"
            onChange={(v) => handleChange("model_name", v)}
            disabled={apiStr.make_id === "-1" || apiStr.make_id === ""}
            ref={inputRef3}
            suffixIcon={<CaretDownOutlined onClick={clickInputRef3} />}
            showAction={["click", "focus"]}
            onDropdownVisibleChange={(open) => setDropdownOpen3(open)}
          >
            <Option value="-1">Select Model...</Option>
            {apiData.name &&
              apiData.name.length &&
              apiData.name.map(({ name, title }) => {
                return <Option value={name}>{title}</Option>;
              })}
          </Select>

          <Select
            defaultValue="-1"
            value={(apiStr.engine.length && apiStr.engine) || "-1"}
            className="customSelects"
            onChange={(v) => {
              handleChange("engine", v);
            }}
            disabled={apiStr.model_name === "-1" || apiStr.model_name === ""}
            ref={inputRef4}
            suffixIcon={<CaretDownOutlined onClick={clickInputRef4} />}
            showAction={["click", "focus"]}
            onDropdownVisibleChange={(open) => setDropdownOpen4(open)}
          >
            <Option value="-1">Select Engine...</Option>
            {apiData.engine &&
              apiData.engine.length &&
              apiData.engine.map((engine) => {
                return (
                  <Option value={engine.displacement}>
                    {engine.displacement}
                  </Option>
                );
              })}
          </Select>

          <span>OR</span>

          <Input
            placeholder="Search Part No here"
            onKeyDown={handleKeyPress}
            className="customSelects"
            value={searchpartNo}
            onChange={(e) => setSearchPartNo(e.target.value)}
          />
        </div>
        <div className="selectActions">
          <Button type="link" className="customBtns" onClick={reset}>
            Clear
          </Button>
          <Button
            type="primary"
            // disabled={!finalSelectedId}
            className={
              searchpartNo.length < 1
                ? "customBtns disabledSearch"
                : "customBtns"
            }
            onClick={finalSearch}
            disabled={searchpartNo.length < 1}
          >
            Search
          </Button>
        </div>

        {Boolean(productDetails) && (
          <div className="productRenderContainer">
            {productDetails.length < 1 ? (
              <div
                className="searchedItems"
                style={{
                  height: "100px",
                  position: "relative",
                  paddingTop: "10px",
                }}
              >
                <div style={{ color: "black", fontSize: "large" }}>
                  Product Removed or Replaced, Search Another.
                </div>

                <div
                  style={{
                    top: "calc(50% + 20px)",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    position: "absolute",
                    color: "#ddd",
                  }}
                >
                  No Product Found
                </div>
              </div>
            ) : (
              productDetails.map((product, key) => {
                return (
                  <div key={key} className="searchedItems">
                    {console.log(product)}

                    <h2>{product.title}</h2>
                    <div className="searchedProductDetails">
                      <div className="searchProductLeftContainer">
                        <div className="searchProductImage">
                          <img
                            className="filter-table-thumb right"
                            src={
                              product.images && product.images.length
                                ? product?.images[0]?.link
                                : "https://via.placeholder.com/150"
                            }
                            alt=""
                          />
                        </div>
                        <div className="searchProductPrice">
                          {/* <h5>{product?.price || '$00.00'}</h5> */}

                          {window.location.pathname.includes(
                            "/store/filter/"
                          ) ? (
                            <p
                              className="cust-link"
                              onClick={() =>
                                (window.location.href = `/store/filter/${product.gfu_part_num}`)
                              }
                            >
                              {" "}
                              Click here for more product information{" "}
                            </p>
                          ) : (
                            <p>
                              {" "}
                              <Link
                                to={`/store/filter/${product.gfu_part_num}`}
                              >
                                {" "}
                                Click here for more product information{" "}
                              </Link>{" "}
                            </p>
                          )}
                          <AddToCart
                            isLeft
                            text="ADD TO CART"
                            buyButtonId={product?.buy_url}
                            id={product?.id?.toString() + key.toString()}
                            background="white"
                            color="#00ad23"
                          />

                          {/* <Button type="primary">Add To Cart</Button> */}
                        </div>
                      </div>
                      <div className="searchedProductRight">
                        {apiStr?.year && <p>Year: {apiStr?.year} </p>}
                        {apiStr?.engine && (
                          <p>Engine: {apiData?.engine?.[0]?.engine}</p>
                        )}
                        {apiStr?.engine && (
                          <p>Disp: {apiData?.engine?.[0]?.displacement}</p>
                        )}
                        {apiStr?.engine && (
                          <p>Intake: {apiData?.engine?.[0]?.intake}</p>
                        )}
                        {apiStr?.engine && (
                          <p>
                            Fitment Note: - {apiData?.engine?.[0]?.description}{" "}
                            Models
                          </p>
                        )}

                        {/* <p><Link to={`/store/filter/${product.gfu_part_num}`}>Click here for more product information </Link> </p> */}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </GreenSearchWrapper>
  );
};

export default GreenSearch;

const GreenSearchWrapper = styled.div`
  .searchProductImage {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    display: inline-block;
    justify-content: center;
    align-items: center;
    transform-origin: bottom left;
    transition: transform 0.25s ease-in-out;
    border: 1px solid white;
  }
  .searchProductImage:hover {
    transform: scale(1.8);
    transform-origin: bottom left;
    transition-delay: 0.2s;
    border: 1px solid grey;
  }

  .cust-link {
    color: white;
    cursor: pointer;
  }
  .cust-link:hover {
    color: blue;
  }

  .disabledSearch {
    background: #ffffff7a !important;
  }
`;
