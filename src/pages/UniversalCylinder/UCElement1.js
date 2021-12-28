import React from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/cone-cylinder_chart.jpg";
import img1 from "../../assets/cylinders/vid_measure_350.jpg";
import img2 from "../../assets/cylinders/cone_filter_measurements_s.jpg";
import FilterTable from "../../components/FilterTable";
const tableHeader = [
  {
    id: 0,
    name: "Filter Number",
    maxWidth: 91,
  },
  {
    id: 1,
    name: "Inlet Diameter (ID)",
    maxWidth: 165,
  },
  {
    id: 2,
    name: "Height (H)",
    maxWidth: 82,
  },
  {
    id: 3,
    name: "Outside Diameter - Base (OD-B)",
    maxWidth: 171,
  },
  {
    id: 4,
    name: "Outside Diameter - Top (OD-T)",
    maxWidth: 171,
  },
  {
    id: 5,
    name: "Style",
    maxWidth: 165,
  },
  {
    id: 6,
    name: "End Cap",
    maxWidth: 179,
  },
  {
    id: 7,
    name: "Inlet Type",
    maxWidth: 131,
  },
  {
    id: 8,
    name: "Color",
    maxWidth: 76,
  },
];
const tableData = [
  {
    rowNo: 0,
    rowColumns: [
      {
        id: 0,
        name: 2007,
      },
      {
        id: 1,
        name: 3.75,
      },
      {
        id: 2,
        name: 9.5,
      },
      {
        id: 3,
        name: 6.0,
      },
      {
        id: 4,
        name: 6.0,
      },
      {
        id: 5,
        name: "Cylinder",
      },

      {
        id: 6,
        name: "Rubber",
      },

      {
        id: 7,
        name: "Straight",
      },
      {
        id: 8,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 1,
    rowColumns: [
      {
        id: 0,
        name: 2024,
      },
      {
        id: 1,
        name: 3.5,
      },
      {
        id: 2,
        name: 6.5,
      },
      {
        id: 3,
        name: 5.5,
      },
      {
        id: 4,
        name: 4.0,
      },
      {
        id: 5,
        name: "Cone",
      },

      {
        id: 6,
        name: null,
      },

      {
        id: 7,
        name: "Straight",
      },
      {
        id: 8,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 2,
    rowColumns: [
      {
        id: 0,
        name: 2024,
      },
      {
        id: 1,
        name: 3.5,
      },
      {
        id: 2,
        name: 6.5,
      },
      {
        id: 3,
        name: 5.5,
      },
      {
        id: 4,
        name: 4.0,
      },
      {
        id: 5,
        name: "Cone",
      },

      {
        id: 6,
        name: null,
      },

      {
        id: 7,
        name: "Straight",
      },
      {
        id: 8,
        name: "Green",
      },
    ],
  },
  {
    rowNo: 3,
    rowColumns: [
      {
        id: 0,
        name: 2024,
      },
      {
        id: 1,
        name: 3.5,
      },
      {
        id: 2,
        name: 6.5,
      },
      {
        id: 3,
        name: 5.5,
      },
      {
        id: 4,
        name: 4.0,
      },
      {
        id: 5,
        name: "Cone",
      },

      {
        id: 6,
        name: null,
      },

      {
        id: 7,
        name: "Straight",
      },
      {
        id: 8,
        name: "Green",
      },
    ],
  },
];
const UCElement1 = () => {
  return (
    <>
      <UCElement1Wrapper>
        <h1 style={{ marginTop: 100, marginLeft: 20 }}>
          Find a Cone or Cylinder Filter
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
            width: "30%",
            minWidth: 350,
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=Gz90LhIE08E&ab_channel=GreenFilter"
            className="videomediumpic"
            style={{ color: "green" }}
          >
            <img src={img1} className="resize" alt="video" />
            <br />
            Green Filter USA - Measuring and Finding a Clamp-On Filter
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            float: "left",
            width: "30%",
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
      </UCElement1Wrapper>
    </>
  );
};

export default UCElement1;

const UCElement1Wrapper = styled.div``;
