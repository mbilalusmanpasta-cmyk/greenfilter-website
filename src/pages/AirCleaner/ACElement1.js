import React from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/round.jpg";
import img2 from "../../assets/cylinders/round_filter_measurements.jpg";
import FilterTable from "../../components/FilterTable";
const tableHeader = [
  {
    id: 0,
    name: "Filter Number",
    maxWidth: 156,
  },
  {
    id: 1,
    name: "Outside Diameter (OD)",
    maxWidth: 270,
  },
  {
    id: 2,
    name: "Inside Diameter (ID)",
    maxWidth: 249,
  },
  {
    id: 3,
    name: "Height (H)",
    maxWidth: 139,
  },
  {
    id: 4,
    name: "Style",
    maxWidth: 126,
  },
  {
    id: 5,
    name: "Shape",
    maxWidth: 136,
  },

  {
    id: 6,
    name: "Color",
    maxWidth: 126,
  },
];
const tableData = [
  {
    rowNo: 0,
    rowColumns: [
      {
        id: 0,
        name: 2175,
      },
      {
        id: 1,
        name: "0.00 x 14.00",
      },
      {
        id: 2,
        name: 12.0,
      },
      {
        id: 3,
        name: 5.0,
      },
      {
        id: 4,
        name: "Round",
      },
      {
        id: 5,
        name: null,
      },
      {
        id: 6,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 1,
    rowColumns: [
      {
        id: 0,
        name: 2175,
      },
      {
        id: 1,
        name: "0.00 x 14.00",
      },
      {
        id: 2,
        name: 12.0,
      },
      {
        id: 3,
        name: 5.0,
      },
      {
        id: 4,
        name: "Round",
      },
      {
        id: 5,
        name: null,
      },
      {
        id: 6,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 2,
    rowColumns: [
      {
        id: 0,
        name: 2175,
      },
      {
        id: 1,
        name: "0.00 x 14.00",
      },
      {
        id: 2,
        name: 12.0,
      },
      {
        id: 3,
        name: 5.0,
      },
      {
        id: 4,
        name: "Round",
      },
      {
        id: 5,
        name: null,
      },
      {
        id: 6,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 3,
    rowColumns: [
      {
        id: 0,
        name: 2175,
      },
      {
        id: 1,
        name: "0.00 x 14.00",
      },
      {
        id: 2,
        name: 12.0,
      },
      {
        id: 3,
        name: 5.0,
      },
      {
        id: 4,
        name: "Round",
      },
      {
        id: 5,
        name: null,
      },
      {
        id: 6,
        name: "Green",
      },
    ],
  },
];
const ACElement1 = () => {
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
        <h4>
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
