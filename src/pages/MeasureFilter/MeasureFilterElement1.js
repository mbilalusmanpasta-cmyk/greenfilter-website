import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.png";
import thumbnail from "../../assets/vid_measure_350.jpg";
import tImg1 from "../../assets/id-right_s.jpg";
import tImg2 from "../../assets/id-wrong_s.jpg";
import tImg3 from "../../assets/od-t_s.jpg";
import tImg4 from "../../assets/od-b-right_s.jpg";
import tImg5 from "../../assets/od-b-wrong_s.jpg";
import tImg6 from "../../assets/h-right_s.jpg";
import tImg7 from "../../assets/h-wrong_s.jpg";

const MeasureFilterElement1 = () => {
  return (
    <>
      <MeasureFilterElement1Wrapper bgImg={bgImg}>
        <div className="container-4 w-container">
          <h1 style={{ marginTop: 100, marginLeft: 20 }}>
            Watch our video on how to measure a filter.
          </h1>
          <center>
            <div
              style={{ textAlign: "center", width: "30%", minWidth: "350px" }}
            >
              <a
                href="https://www.youtube.com/watch?v=Gz90LhIE08E&ab_channel=GreenFilter"
                className="videomediumpic"
                style={{ color: "green" }}
              >
                <img src={thumbnail} className="resize" alt="video" />
                <br />
                Green Filter USA - Measuring and Finding a Clamp-On Filter
              </a>
            </div>
          </center>
        </div>
        <div style={{ clear: "both", display: "table" }}>
          <h1>HOW TO MEASURE A FILTER</h1>
          <p className="large-paragraph gray left">
            If you are looking to add a Green High Performance Air Filter to a
            custom project, measuring properly is an important step in
            determining the correct filter to fit your application. Following
            the steps below will help to ensure you select the correct filter.
          </p>
          <br />
          <ul className="measure">
            <left>
              <li>
                <b>Measuring the Inside Diameter (ID)</b> - Make sure to measure
                across the inside opening of the filter and NOT from the
                outsides of the flange.
                <br />
                <center>
                  <a href="https://greenfilter.com/images/framework/measure/id-right.jpg">
                    <img src={tImg1} alt="table" />
                  </a>
                  <a href="https://greenfilter.com/images/framework/measure/id-wrong.jpg">
                    <img src={tImg2} alt="table" />
                  </a>
                </center>
              </li>
              <br />
              <li>
                <b>Measuring the Outside Diameter - Top (OD-T)</b> - Measure
                across the widest part of the top of the filter from the outside
                edges.
                <br />
                <center>
                  <a href="https://greenfilter.com/images/framework/measure/od-t.jpg">
                    <img src={tImg3} alt="table" />
                  </a>
                </center>
              </li>
              <br />
              <li>
                <b>Measuring the Outside Diameter - Base (OD-B)</b> - Measure
                across the base of the filter. Since the filter's flange will
                likely be in the way you will need to measure across the top of
                the flange to get the dimension.
                <br />
                <center>
                  <a href="https://greenfilter.com/images/framework/measure/od-b-right.jpg">
                    <img src={tImg4} alt="table" />
                  </a>
                  <a href="https://greenfilter.com/images/framework/measure/od-b-wrong.jpg">
                    <img src={tImg5} alt="table" />
                  </a>
                </center>
              </li>
              <br />
              <li>
                <b>Measuring the Height (H)</b> - Measure from the base of the
                filter (not the flange) to the top of the filter, including the
                filter end cap.
                <br />
                <center>
                  <a href="https://greenfilter.com/images/framework/measure/h-right.jpg">
                    <img src={tImg6} alt="table" />
                  </a>
                  <a href="https://greenfilter.com/images/framework/measure/h-wrong.jpg">
                    <img src={tImg7} alt="table" />
                  </a>
                </center>
              </li>
            </left>
          </ul>
        </div>
      </MeasureFilterElement1Wrapper>
    </>
  );
};

export default MeasureFilterElement1;

const MeasureFilterElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 15%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .container-4 {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .large-paragraph.gray.left {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  .large-paragraph.gray.center {
    text-align: center;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
    // color: #fff;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }

  ul {
    margin-top: 0px;
    margin-bottom: 10px;
    padding-left: 40px;
  }

  ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;
