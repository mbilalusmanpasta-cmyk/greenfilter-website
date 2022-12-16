import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/round.jpg";
import img2 from "../../assets/cylinders/round_filter_measurements.jpg";
import FilterTable from "../../components/FilterTable";
import { statics } from "../../data/store";
import { GetData } from "../../helper/request";
const tableHeader = [
  {
    id: 0,
    name: "title",
    label: "Filter Number",
    maxWidth: 156,
  },
  {
    id: 1,
    name: "filter_height_inch",
    label: "Height (H)",
    maxWidth: 139,
  },
  {
    id: 2,
    name: "assemblie_mounting_dia_inch",
    label: "Assemblie Mounting Diameter (Inch)",
    maxWidth: 270,
  },
  {
    id: 3,
    name: "assemblie_type",
    label: "Assemblie Type",
    maxWidth: 249,
  },

  {
    id: 4,
    name: "assemblie_installed_height_inch",
    label: "Assemblie Installed Height (Inch)",
    maxWidth: 126,
  },
  {
    id: 6,
    name: "filter_color",
    label: "Color",
    maxWidth: 126,
  },
];

const ACElement1 = () => {

  const [tableData,setTableData] = React.useState([])

  useEffect(()=>{

    getTableData();
  },[])

  const getTableData = async () =>
  {
    const product_type_id = 1;
    let tableDataT = [];
    let response  =  await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200`,200,null)
    if(response.ResponseCode === "Success")
    {
      tableDataT = response?.data?.rows;
    }
    setTableData(tableDataT);
  }



  return (
    <>
      <ACElement1Wrapper>
        <h1 style={{ marginTop: 100, marginLeft: 20 }}>
          Air Cleaner Assemblies
        </h1>
        <div
          style={{
            textAlign: "center",
            float: "left",
            width: "30%",
            minWidth: 300,
          }}
        >
          <img className="resize" alt="" src={img0} />
        </div>

        <div
          style={{
            textAlign: "center",
            float: "left",
            width: "20%",
            minWidth: 300,
          }}
        >
          <center>
            <a
              href="https://greenfilter.com/images/cone_filter_measurements.jpg"
              style={{ color: "green" }}
            >
              <img src={img2} className="resize" alt="" />
            </a>
            <br />
            <a
              href="images/cone_filter_measurements.jpg"
              style={{ color: "green" }}
              title="Green Filter USA - Cone &amp; Cylinder Filter Dimensions"
            >
              Click here
            </a>{" "}
            for a picture showing how cone and cylinder filters are measured.
          </center>
        </div>
        <div style={{ clear: "both", display: "table" }}></div>
        <br />
        <h4 style={{ padding: "0 10px" }}>
          Select a filter from the list below. The list can be sorted by
          clicking on a column heading. Clicking the heading again will sort it
          in the opposite direction. The table will scroll left and right for
          smaller screens.
        </h4>
        <p style={{ textAlign: "center" }}>
          <strong>All measurements are in inches.</strong>
        </p>

        <FilterTable headers={tableHeader} tableData={tableData} />
      </ACElement1Wrapper>
    </>
  );
};

export default ACElement1;

const ACElement1Wrapper = styled.div``;
