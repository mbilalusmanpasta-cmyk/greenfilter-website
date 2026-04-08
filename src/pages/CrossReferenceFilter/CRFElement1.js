import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img0 from "../../assets/filters.webp";
import CircleLoader from "react-spinners/CircleLoader";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";

const CRFElement1 = () => {

  const [loading,setLoading] = React.useState(false)
  const [greenFilters,setGreenFilters] = React.useState([])
  const [showModel, setShowModel] = useState(false);
  const [selectedFilter,setSelectedFilter] = React.useState(null)
  const [filterCodes,setFilterCodes] = React.useState([])


  useEffect(()=>{
    _GetGreenFilters();
  },[])


  useEffect(() => {
    if(selectedFilter)
    {
      getFilterCodes();
    }
  }, [selectedFilter]);

  const _GetGreenFilters = async() =>{
    let response  =  await GetData(statics.BaseUrl + `/product?pageNo=1&pageSize=10000&is_active=1`,200,null);
    let tableDataT = [];
    if(response.ResponseCode === "Success")
    {
      tableDataT = response?.data?.rows;
    }
    console.log(tableDataT);
    setGreenFilters(tableDataT);
    setLoading(false)

  }    


  const onChangeGreenFilter = (id) => {
    setShowModel(false);
    setSelectedFilter(undefined);
    let selectedFilterT = greenFilters.filter((item) => item.id === parseInt(id));

    console.log(selectedFilterT)
    if (selectedFilterT.length) {
      setSelectedFilter(selectedFilterT[0]);
      // getFilterCodes(selectedCompany[0].id)
    }
  };

  const getFilterCodes = async() =>{
    let tableDataT = [];
    let response = await GetData(
      statics.BaseUrl + `/competitor-products?product_id=${selectedFilter?.id}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      tableDataT = response?.data;
    }
    console.log(response);
    setFilterCodes(tableDataT);
    setShowModel(true);
  }


  
  return (
    <>
      <CRFElement1Wrapper>
        <h1 className="heading">
          Cross-Reference for Green Filter to Another Brand
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
                  Enter a Green High Performance Air Filter to see which other
                  brands replace it.
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
                          Green Filter:
                        </label>
                      </td>
                      <td>
                        &nbsp;&nbsp;
                        <select
                          onChange={(e) => {
                            onChangeGreenFilter(e.target.value || undefined);
                          }}
                        >
                          <option>Select</option>
                          {greenFilters &&
                            greenFilters?.map((item, index) =>
                              {
                                if(item.gfu_part_num)
                                {
                                  return  (<option value={item.id}> {item.gfu_part_num} </option>)
                                }
                              }
                              
                            )}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {
                  showModel &&
                
                <table className="xref">
                  <tbody>
                    <tr>
                      <th>Brand</th>
                      <th>Filter Number</th>
                    </tr>

                    {
                      filterCodes.map((item)=>(
                      <tr>
                        <td>{item?.compatitor?.title}</td>
                        <td>{item?.competitor_part_number}</td>
                      </tr>))
                    }
                    
                    
                  </tbody>
                </table>
              }
              </td>
            </tr>
          </tbody>
        </table>
      </CRFElement1Wrapper>
    </>
  );
};

export default CRFElement1;

const CRFElement1Wrapper = styled.div`
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

  table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  table.xref {
    font-size: 16px;
  }

  table.xref tr:nth-child(even) {
    background-color: #a0a0a0;
  }
`;
