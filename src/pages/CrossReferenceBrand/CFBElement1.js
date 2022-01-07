import React from "react";
import styled from "styled-components";
import img0 from "../../assets/filters.jpg";
const CFBElement1 = () => {
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
                          Filter Code:
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
                <table>
                  <tbody>
                    <tr>
                      <td>
                        AEM Filter #2820042 = Green Filter #<a>2009</a>
                      </td>
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
