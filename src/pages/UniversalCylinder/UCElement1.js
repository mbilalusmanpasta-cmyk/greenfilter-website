import React from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/cone-cylinder_chart.jpg";
import img1 from "../../assets/cylinders/vid_measure_350.jpg";
import img2 from "../../assets/cylinders/cone_filter_measurements_s.jpg";
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
        <h4>
          Select a filter from the list below. The list can be sorted by
          clicking on a column heading. Clicking the heading again will sort it
          in the opposite direction. The table will scroll left and right for
          smaller screens.
        </h4>
        <p style={{ textAlign: "center" }}>
          <strong>All measurements are in inches.</strong>
        </p>
      </UCElement1Wrapper>
    </>
  );
};

export default UCElement1;

const UCElement1Wrapper = styled.div``;
