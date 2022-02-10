import React from "react";
import styled from "styled-components";
import img0 from "../../assets/panel.jpg";
import img2 from "../../assets/panel.jpg";
import FilterTable from "../../components/FilterTable";
const tableHeader = [
  {
    id: 0,
    name: "Filter Number",
    maxWidth: 156,
  },
  {
    id: 1,
    name: "Length (L)",
    maxWidth: 270,
  },
  {
    id: 2,
    name: "Width (W)",
    maxWidth: 249,
  },
  {
    id: 3,
    name: "Height (H)",
    maxWidth: 139,
  },
  {
    id: 4,
    name: "Type",
    maxWidth: 126,
  },
  {
    id: 5,
    name: "Weight",
    maxWidth: 136,
  },
];
const tableData = [
  {
    rowNo: 0,
    rowColumns: [
      {
        id: 0,
        name: 2004,
      },
      {
        id: 1,
        name: "13.50",
      },
      {
        id: 2,
        name: 6.73,
      },
      {
        id: 3,
        name: 0.97,
      },
      {
        id: 4,
        name: "Panel",
      },
      {
        id: 5,
        name: 1.6,
      },
    ],
  },
  {
    rowNo: 1,
    rowColumns: [
      {
        id: 0,
        name: 2004,
      },
      {
        id: 1,
        name: "13.50",
      },
      {
        id: 2,
        name: 6.73,
      },
      {
        id: 3,
        name: 0.97,
      },
      {
        id: 4,
        name: "Panel",
      },
      {
        id: 5,
        name: 1.6,
      },
    ],
  },
  {
    rowNo: 2,
    rowColumns: [
      {
        id: 0,
        name: 2004,
      },
      {
        id: 1,
        name: "13.50",
      },
      {
        id: 2,
        name: 6.73,
      },
      {
        id: 3,
        name: 0.97,
      },
      {
        id: 4,
        name: "Panel",
      },
      {
        id: 5,
        name: 1.6,
      },
    ],
  },
  {
    rowNo: 3,
    rowColumns: [
      {
        id: 0,
        name: 2004,
      },
      {
        id: 1,
        name: "13.50",
      },
      {
        id: 2,
        name: 6.73,
      },
      {
        id: 3,
        name: 0.97,
      },
      {
        id: 4,
        name: "Panel",
      },
      {
        id: 5,
        name: 1.6,
      },
    ],
  },
];
const UPElement1 = () => {
  return (
    <>
      <UPElement1Wrapper>
        <h1 style={{ marginTop: 100, marginLeft: 20 }}>Find a Panel Filter</h1>
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

        {/* <div
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
        </div> */}
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
      </UPElement1Wrapper>
    </>
  );
};

export default UPElement1;

const UPElement1Wrapper = styled.div``;
