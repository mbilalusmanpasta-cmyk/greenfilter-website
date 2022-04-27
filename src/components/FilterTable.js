import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import sortIcon from "../assets/download.gif";
import upperIcon from "../assets/upperIcon.gif";

import { DataGrid } from "@mui/x-data-grid";
// const useStyles = makeStyles({
//   table: {
//     width: "100%",
//     maxWidth: "1200px",
//     font: "12px/18px Arial, Sans-serif",
//     border: "#cdcdcd 1px solid",
//     borderSpacing: 0,
//     padding: 0,
//   },
// });
const FilterTable = ({ headers, tableData }) => {
  const [sortedColumn, setSortedColumn] = React.useState(-1);

  return (
    <FilterTableWrapper>
      <div className="fakeiframe">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headers.map((header, id) => (
                  <TableCell
                    className="table-head-cell"
                    key={header.id}
                    style={{
                      width: header.maxWidth,
                      background: "no-repeat 5px center",
                      backgroundImage:
                        sortedColumn === id
                          ? `url(${upperIcon})`
                          : `url(${sortIcon})`,
                      whiteSpace: "normal",
                      backgroundColor:
                        sortedColumn === id ? "#46ff3d" : "#14800d",
                      color: sortedColumn === id ? "#3d3d3d" : "#ffffff",
                    }}
                    onClick={() => setSortedColumn(id)}
                  >
                    <div class="tablesorter-header-inner">{header.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, id) => (
                <TableRow
                  key={row.rowNo}
                  style={{ background: id % 2 === 0 ? "#ebfaeb" : "#fff" }}
                >
                  {
                    headers.map((header, id) => (
                        <TableCell
                        key={header.id}
                        className="table-row-cell"
                        style={{ color: id === 0 ? "green" : "#3d3d3d" }}
                      >
                        {row[header.name]}
                      </TableCell>
                    ))

                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        /> */}
      </div>
    </FilterTableWrapper>
  );
};

export default FilterTable;

const FilterTableWrapper = styled.div`
  .fakeiframe {
    width: 100%;
    margin-bottom: 50px;
  }
  .MuiTableContainer-root {
    width: 100%;
    max-width: 1200px;
    font: 12px/18px Arial, Sans-serif;
    border: #cdcdcd 1px solid;
    border-spacing: 0;
    padding: 0;
    margin: 0 auto;
  }
  .table-head-cell,
  .table-row-cell {
    padding: 6px !important;
    border: #cdcdcd 1px solid;
    border-collapse: collapse;
    font: 12px/18px Arial, Sans-serif;
    font-weight: 600;
    cursor: pointer;
  }
  .table-row-cell {
    background-color: transparent !important;
    font-weight: 500;
  }
  .tablesorter-header-inner {
    padding-left: 23px;
  }
`;
