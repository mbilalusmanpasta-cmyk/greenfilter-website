import { React, useEffect, useState } from "react";
import styled from "styled-components";
import img0 from "../../assets/filters.jpg";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import { useHistory } from "react-router-dom";

const CFBElement1 = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedGreenFilters, setselectedGreenFilters] = useState();
  const [showModel, setShowModel] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if (selectedGreenFilters) {
      setShowModel(!showModel)
    }
  }, [selectedGreenFilters]);

  const getCompanies = async () => {
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
  };

  const getProductById = async (id) => {
    let tableDataT = {};
    let response = await GetData(
      statics.BaseUrl + `/product?id=${id}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      tableDataT = response?.data?.rows;
    }
    setselectedGreenFilters(tableDataT[0]);
  };

  const onChangeCompanyHandler = (id) => {
    setShowModel(false);
    setSelectedCompany(undefined);
    setSelectedFilters(undefined);
    let selectedCompany = companies.filter((item) => item.id === parseInt(id));
    if (selectedCompany.length) {
      setSelectedCompany(selectedCompany[0]);
    }
  };

  const onChangeFilterHandler = (id) => {
    setShowModel(false);
    let selectedFilters = selectedCompany.compatitor_products.filter(
      (item) => item.id === parseInt(id)
    );
    if (selectedFilters.length) {
      setSelectedFilters(selectedFilters[0]);
      getProductById(selectedFilters[0].product_id);
    }
  };

  return (
    <>
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
                          {selectedCompany &&
                            selectedCompany.compatitor_products?.map((item, index) => (
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
                          {selectedCompany?.title} Filter {selectedFilters?.competitor_part_number} = Green Filter #<span style={{color: "blue", cursor: "pointer" }} onClick={() => {history.push(`/store?product_id=${selectedGreenFilters?.gfu_part_num}`)}} >{selectedGreenFilters?.gfu_part_num}</span>
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
