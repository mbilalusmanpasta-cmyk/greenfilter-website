import React from "react";
import styled from "styled-components";
import img0 from "../../assets/filters.jpg";
const CRFElement1 = () => {
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
                        <select>
                          <option>Select</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="xref">
                  <tbody>
                    <tr>
                      <th>Brand</th>
                      <th>Filter Number</th>
                    </tr>
                    <tr>
                      <td>AC Delco</td>
                      <td>A1517C</td>
                    </tr>
                    <tr>
                      <td>AEM</td>
                      <td>AE09045</td>
                    </tr>
                    <tr>
                      <td>Ford</td>
                      <td>F50Z9601BA</td>
                    </tr>
                    <tr>
                      <td>Ford</td>
                      <td>F5UZ9601BA</td>
                    </tr>
                    <tr>
                      <td>Ford</td>
                      <td>F6ZX9601AA</td>
                    </tr>
                    <tr>
                      <td>Ford</td>
                      <td>F6ZX9601AB</td>
                    </tr>
                    <tr>
                      <td>Ford</td>
                      <td>F6ZZ9601A</td>
                    </tr>
                    <tr>
                      <td>Fram</td>
                      <td>CA7730</td>
                    </tr>
                    <tr>
                      <td>Fram</td>
                      <td>CA8039</td>
                    </tr>
                    <tr>
                      <td>K&amp;N</td>
                      <td>E-0945</td>
                    </tr>
                    <tr>
                      <td>Mighty</td>
                      <td>A34877</td>
                    </tr>
                    <tr>
                      <td>Motorcraft</td>
                      <td>FA1615</td>
                    </tr>
                    <tr>
                      <td>Motorcraft</td>
                      <td>FA1632</td>
                    </tr>
                    <tr>
                      <td>Motorcraft</td>
                      <td>FA1634</td>
                    </tr>
                    <tr>
                      <td>Napa</td>
                      <td>6418</td>
                    </tr>
                    <tr>
                      <td>Purolator</td>
                      <td>A34878</td>
                    </tr>
                    <tr>
                      <td>Spectre</td>
                      <td>HPR8039</td>
                    </tr>
                    <tr>
                      <td>WIX</td>
                      <td>46418</td>
                    </tr>
                  </tbody>
                </table>
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
