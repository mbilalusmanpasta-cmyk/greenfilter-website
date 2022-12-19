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
import { useHistory } from "react-router-dom";

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


const tableHeader = [
  {
    id: 0,
    name: "attribute",
    label: "Attribute",
    maxWidth: 91,
  },
  {
    id: 1,
    name: "value",
    label: "Value",
    maxWidth: 82,
  },
];

const tableRows = [
  {
    id: 0,
    name: "product_type_name",
    label: "Product Type",
    maxWidth: 91,
  },
  {
    id: 1,
    name: "filter_color",
    label: "Filter Color",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_od_top_width_inch",
    label: "Outside Diameter (Top)",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_od_base_width_inch",
    label: "Outside Diameter (Base)",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_height_inch",
    label: "Height",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_id_width_inch",
    label: "Inside Diameter (Inlet)",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_inlet_type",
    label: "Inlet Type",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_inlet_angle_deg",
    label: "Inlet Angle",
    maxWidth: 82,
  },

  {
    id: 1,
    name: "filter_shape",
    label: "Filter Shape",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_style",
    label: "Filter Style",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_end_cap",
    label: "Cap Material",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_base",
    label: "Base Material",
    maxWidth: 82,
  },
  {
    id: 1,
    name: "filter_installation",
    label: "Install Method",
    maxWidth: 82,
  },
];




const ProductInformationTable = ({ tableData }) => {

  const history = useHistory();
  const [sortedColumn, setSortedColumn] = React.useState(-1);

  const handleClick = (row) =>
  {
    if(row?.id)
    {

      history.push(`/store/filter/${row.gfu_part_num}`);
    }
  }

  return (
    <ProductInformationTableWrapper>
      <div className="fakeiframe">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow rowSpan={2}>
                <TableCell colSpan={2} style={{background:"#000",color:"#fff",textAlign:"center", fontSize:"12pt"}} >
                  <div>
                    Product Information

                  </div>
                </TableCell>

              </TableRow>
             
              <TableRow>
                {tableHeader.map((header, id) => (
                  <TableCell
                    className="table-head-cell"
                    key={header.id}
                    style={{
                      width: header.maxWidth,
                      background: "no-repeat 5px center",
                      textAlign:"center",
                      whiteSpace: "normal",
                      backgroundColor:
                      sortedColumn === id ? "black" : "black",
                      color: sortedColumn === id ? "#fff" : "#ffffff",
                    }}
                  >
                    <div class="tablesorter-header-inner">{header.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>

              
              {tableData && tableRows.map((row, id) => (


                tableData[row?.name] && (

                // <Link to={`/store/${row?.id}`} class="link-block w-inline-block">
                  <TableRow
                    key={id}
                    style={{ background: id % 2 === 0 ? "lightgrey" : "#fff" }}
                  >
                     <TableCell
                      key={0}
                      className="table-row-cell"
                      style={{ color: "#3d3d3d" }}
                    >
                      {row['label']}
                    </TableCell>
                    <TableCell
                      key={1}
                      className="table-row-cell"
                      style={{ color: "#3d3d3d" }}
                    >
                      {tableData[row?.name]}
                    </TableCell>
                  </TableRow>)
                // </Link>
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
    </ProductInformationTableWrapper>
  );
};

export default ProductInformationTable;

const ProductInformationTableWrapper = styled.div`
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
