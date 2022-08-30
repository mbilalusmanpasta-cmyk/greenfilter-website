import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/harley.jpg";
import part from "../../assets/2464.jpg";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
const HFElement1 = () => {

  const [tableData,setTableData] = React.useState([])

  useEffect(()=>{

    getTableData();
  },[])

  const getTableData = async () =>
  {
    const product_type_id = 10;
    let tableDataT = [];
    let response  =  await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200`,200,null)
    if(response.ResponseCode === "Success")
    {
      tableDataT = response?.data?.rows;
    }
    setTableData(tableDataT);
  }


  return (
    <HFElement1Wrapper>
      <h1 className="heading">Find a Harley-Davidson Replacement Filter</h1>
      <img src={img0} alt="harley" />
      <p>
        Select your motorcycle from the fields below to see which Green High
        Performance Air Filter is right for you.
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
                Year:
              </label>
            </td>
            <td>
              &nbsp;&nbsp;
              <select>
                <option>Select</option>
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
                Model:
              </label>
            </td>
            <td>
              &nbsp;&nbsp;
              <select>
                <option>Select</option>
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
                Engine:
              </label>
            </td>
            <td>
              &nbsp;&nbsp;
              <select>
                <option>Select</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <table width="100%" style={{ margin: "0 0 3px 0" }}>
        <tbody>
          <tr style={{ backgroundColor: "rgb(122, 193, 68)" }}>
            <td>2010 Harley-Davidson Heritage Softail Classic 1584 cc</td>
          </tr>
        </tbody>
      </table>
      <table border="1" width="100%" style={{ margin: "0 0 20px 0 " }}>
        <tbody>
          <tr>
            <td width="200" style={{ padding: 3 }}>
              <a className="img-sec">
                <img src={part} alt="part" className="part-img" />
              </a>
            </td>
            <td>
              Green Filter - Part #2464
              <br />
              <a>BUY NOW</a>
            </td>
          </tr>
        </tbody>
      </table>
    </HFElement1Wrapper>
  );
};

export default HFElement1;

const HFElement1Wrapper = styled.div`
  padding: 75px 20px 0;
  .heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  img {
    width: 200px;
    aspect-ratio: auto 200 / 124;
    height: 124px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  select,
  textarea {
    font-family: "Roboto", sans-serif;
    text-align: left;
    font-size: 1em;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    cursor: pointer;
  }

  .part-img {
    padding: 2px;
    border: 1px solid #a1a1a1;
    height: auto;
  }

  a {
    color: #14800d;
  }
`;
