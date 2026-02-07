import {  useEffect, useState } from "react";
import React from 'react';

import styled from "styled-components";
import img0 from "../../assets/filters.jpg";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import { useHistory } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

const CFBElement1 = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedGreenFilters, setselectedGreenFilters] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loading,setLoading] = useState(false)

  const history = useHistory();

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if(selectedFilter)
    {
      getProductById();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedGreenFilters) {
      setShowModel(!showModel)
    }
    if(selectedCompany)
    {
      getFilterCodes();
    }
  }, [selectedCompany]);

  const getCompanies = async () => {

    setLoading(true)

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
    setLoading(false)

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
    let selectedCompany = companies.filter((item) => item.id === parseInt(id));

    console.log(selectedCompany)
    if (selectedCompany.length) {
      setSelectedCompany(selectedCompany[0]);
      // getFilterCodes(selectedCompany[0].id)
    }
  };

  const onChangeFilterHandler = (id) => {
    setShowModel(false);
    let selectedFilter = selectedCompany.compatitor_products.filter(
      (item) => item.id === parseInt(id)
    );
    if (selectedFilter.length) {
      setSelectedFilter(selectedFilter[0]);
    }
  };

  return (
    <>
    {
      loading &&
      <React.Fragment>
          <div style={{top:"0px",left:"0px",position:"fixed",width:"100vw",height:"100vh",backgroundColor:"rgb(64 57 57 / 20%)" ,backdropFilter:"blur(3px)",zIndex:9999}}> </div>
          <div style = {{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              zIndex:"9999",
              position: "absolute",
              top: "calc(50vh - 75px)",
              left:"calc(50% - 75px)"
            }}>
            <CircleLoader  color={"white"} loading={true} size={150} id="custom-loader-el" />
          </div>
      </React.Fragment>
      }
      <CFBElement1Wrapper>
        <h1 className="heading">
          Cross-Reference for Another Brand to Green Filter
        </h1>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <img src={img0} alt="filter" />
              </td>
              <td width="50"></td>
              <td valign="top">
                <p>
                  Enter the filter's brand and number in the boxes below to see
                  which Green High Performance Air Filter replaces it.
                </p>
                <table style={{ margin: "20px 0" }}>
                  <tbody>
                    <tr>
                      <td>
                        <label
                          for="vehicleYear"
                          title="Please enter the year"
                          style={{ color: "#000", fontSize: 16 }}
                        >
                          Company:
                        </label>
                      </td>
                      <td>
                        &nbsp;&nbsp;
                        <select
                          style={{ width: "194px" }}
                          onChange={(e) => {
                            onChangeCompanyHandler(e.target.value || undefined);
                          }}
                        >
                          <option>Select</option>
                          {companies &&
                            companies?.map((item, index) => (
                              <option value={item.id}>{item.title}</option>
                            ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label
                          for="vehicleYear"
                          title="Please enter the year"
                          style={{ color: "#000", fontSize: 16 }}
                        >
                          Filter Code:
                        </label>
                      </td>
                      <td>
                        &nbsp;&nbsp;
                        <select
                          style={{ width: "194px" }}
                          onChange={(e) => {
                            onChangeFilterHandler(e.target.value || undefined);
                          }}
                        >
                          <option>Select</option>
                          {selectedFilters &&
                            selectedFilters?.map((item, index) => (
                              <option value={item.id}>
                                {item.competitor_part_number}
                              </option>
                            ))}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      {showModel && (
                        <td>
                          {selectedCompany?.title} Filter {selectedFilter?.competitor_part_number} = Green Filter #<span style={{color: "blue", cursor: "pointer" }} onClick={() => {history.push(`/store/filter/${selectedGreenFilters?.gfu_part_num}`)}} >{selectedGreenFilters?.gfu_part_num}</span>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </CFBElement1Wrapper>
    </>
  );
};

export default CFBElement1;

const CFBElement1Wrapper = styled.div`
  padding: 75px 20px 50px;

  .heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 16px;
    color: #000;
    max-width: 550px;
  }
  a {
    color: #14800d;
  }
  img {
    width: 300px;
    height: auto;
  }
`;
