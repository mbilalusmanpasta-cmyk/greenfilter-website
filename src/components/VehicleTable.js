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


const tableHeader = [
  {
    id: 0,
    name: "years",
    label: "Years",
    maxWidth: 91,
  },
  {
    id: 1,
    name: "make",
    label: "Make",
    maxWidth: 82,
  },
  {
      id: 2,
      name: "title",
      label: "Model",
      maxWidth: 82,
  },
  {
      id: 3,
      name: "displacement",
      label: "Disp.",
      maxWidth: 82,
  },
  {
      id: 4,
      name: "engine",
      label: "Engine",
      maxWidth: 82,
  },
  {
      id: 5,
      name: "intake",
      label: "Intake",
      maxWidth: 82,
  },
  {
      id: 6,
      name: "description",
      label: "Fits",
      maxWidth: 82,
  },
];


const VehicleTable = ({ tableData }) => {
  const [sortedColumn, setSortedColumn] = React.useState(-1);

  return (
    <VehicleTableWrapper>

      {console.log(tableData.models)}
      <div className="fakeiframe">
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableHeader.map((header, id) => (
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
                      sortedColumn === id ? "black" : "black",
                      color: sortedColumn === id ? "#fff" : "#ffffff",
                    }}
                    onClick={() => setSortedColumn(id)}
                  >
                    <div class="tablesorter-header-inner">{header.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.models.map((row, id) => (
                <TableRow
                  key={row.id}
                  style={{ background: id % 2 === 0 ? "lightgrey" : "#fff" }}
                >
                  
                  {
                    tableHeader.map((header, id) => (
                        <TableCell
                        key={header.id}
                        className="table-row-cell"
                        style={{ color: "#3d3d3d" }}
                      >
                        {
                          header.name === "make" ? 
                            row["make"]?.title
                          :
                          header.name === "years" ? 
                          ( <span> {(row?.['start_year'] || "")}  {row?.['end_year'] && ("-" + row?.['end_year'])} </span>)
                          :
                          row?.[header.name || ""]
                        }
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
    </VehicleTableWrapper>
  );
};

export default VehicleTable;

const VehicleTableWrapper = styled.div`
  .fakeiframe {
    width: 100%;
    margin-bottom: 50px;
  }
  .MuiTableContainer-root {
    width: 100%;
    max-width: 1200px;
    font: 12px/18px Arial, Sans-serif;
    border: #cdcdcd 0px solid;
    border-spacing: 0;
    padding: 0;
    margin: 0 auto;
    max-height:calc(100vh - 500px);
    min-height:300px;
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
