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
import upperIcon from "../assets/upperWhiteIcon.gif";
import downIcon from "../assets/downWhiteIcon.gif";
import PropTypes from 'prop-types';
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
    numeric: false
  },
  {
    id: 1,
    name: "make",
    label: "Make",
    maxWidth: 82,
    numeric: false

  },
  {
    id: 2,
    name: "title",
    label: "Model",
    maxWidth: 82,
    numeric: false

  },
  {
    id: 3,
    name: "displacement",
    label: "Disp.",
    maxWidth: 82,
    numeric: true

  },
  {
    id: 4,
    name: "engine",
    label: "Engine",
    maxWidth: 82,
    numeric: false

  },
  {
    id: 5,
    name: "intake",
    label: "Intake",
    maxWidth: 82,
    numeric: false

  },
  {
    id: 6,
    name: "description",
    label: "Fits",
    maxWidth: 82,
    numeric: false

  },
];

function descendingComparator(a, b, orderBy) {

  if (orderBy === "make") {
    if (b[orderBy]?.title < a[orderBy]?.title) {
      return -1;
    }
    if (b[orderBy]?.title > a[orderBy]?.title) {
      return 1;
    }
    return 0;
  }

  else if (orderBy === "years") {

    if (b['start_year'] < a['start_year']) {
      return -1;
    }
    if (b['start_year'] > a['start_year']) {
      return 1;
    }
    return 0;
  }

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
                orderBy === header.name ? "black" : "black",
              color: orderBy === header.name ? "#fff" : "#ffffff",
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


const VehicleTable = ({ tableData }) => {
  const [sortedColumn, setSortedColumn] = React.useState(-1);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleRequestSort = (event, property) => {
    // alert(property)
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  return (
    <VehicleTableWrapper>

      <div className="fakeiframe">
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            {/* <TableHead>
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
            </TableHead> */}

            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headers={tableHeader}
            />
            <TableBody>
              {tableData && tableData.models && stableSort(tableData.models, getComparator(order, orderBy)).map((row, id) => (
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
                              (<span> {(row?.['start_year'] || "")}  {row?.['end_year'] && ("-" + row?.['end_year'])} </span>)
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
