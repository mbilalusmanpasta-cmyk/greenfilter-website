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

import downIcon from "../assets/downIcon.gif";
import PropTypes from 'prop-types';

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


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headers } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
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
                orderBy === header.name && order === "asc"
                  ? `url(${upperIcon})`
                  : orderBy === header.name && order === "desc" ? `url(${downIcon})` : `url(${sortIcon})`,
              whiteSpace: "normal",
              backgroundColor:
                orderBy === header.name ? "#46ff3d" : "#14800d",
              color: orderBy === header.name ? "#3d3d3d" : "#ffffff",
            }}
            sortDirection={orderBy === header.name ? order : false}
            onClick={createSortHandler(header.name)}
          >
            <div class="tablesorter-header-inner">{header.label}</div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};




const FilterTable = ({ headers, tableData }) => {

  const history = useHistory();
  const [sortedColumn, setSortedColumn] = React.useState(-1);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleRequestSort = (event, property) => {
    // alert(property)
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleClick = (row) => {
    if (row?.id) {

      history.push(`/store/filter/${row.gfu_part_num}`);
    }
  }

  return (
    <FilterTableWrapper>
      <div className="fakeiframe">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            {/* <TableHead>
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
            </TableHead> */}

            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headers={headers}
            />

            <TableBody>
              {stableSort(tableData, getComparator(order, orderBy))
                .map((row, id) => (

                  // <Link to={`/store/${row?.id}`} class="link-block w-inline-block">
                  <TableRow
                    key={row.rowNo}
                    style={{ background: id % 2 === 0 ? "#ebfaeb" : "#fff" }}
                    onClick={() => handleClick(row)}
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
