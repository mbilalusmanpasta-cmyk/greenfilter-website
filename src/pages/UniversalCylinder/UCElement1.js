import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/cone-cylinder_chart.jpg";
import img1 from "../../assets/cylinders/vid_measure_350.jpg";
import img2 from "../../assets/cylinders/cone_filter_measurements_s.jpg";
import FilterTable from "../../components/FilterTable";
import { collection, query, where, getDocs} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";

const tableHeader = [
  {
    id: 0,
    name: "title",
    label: "Filter Number",
    maxWidth: 91,
  },
  {
    id: 1,
    name: "filter_id_length_inch",
    label: "Inlet Diameter (ID)",
    maxWidth: 165,
  },
  {
    id: 2,
    name: "filter_height_inch",
    label: "Height (H)",
    maxWidth: 82,
  },
  {
    id: 3,
    name: "filter_od_base_length_inch",
    label: "Outside Diameter - Base (OD-B)",
    maxWidth: 171,
  },
  {
    id: 4,
    name: "filter_od_top_length_inch",
    label: "Outside Diameter - Top (OD-T)",
    maxWidth: 171,
  },
  {
    id: 5,
    name: "filter_style",
    label: "Style",
    maxWidth: 165,
  },
  {
    id: 6,
    name: "filter_end_cap", 
    label: "End Cap",
    maxWidth: 179,
  },
  {
    id: 7,
    name: "filter_inlet_type",
    label: "Inlet Type",
    maxWidth: 131,
  },
  {
    id: 8,
    name: "filter_color",
    label: "Color",
    maxWidth: 76,
  },
];


const UCElement1 = () => {
  

  const [tableData,setTableData] = React.useState([])

  useEffect(()=>{

    getTableData();
  },[])

  const getTableData = async () =>
  {
    
    const product_type_id = 7;
    let tableDataT = [];
    let response  =  await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200`,200,null)
    if(response.ResponseCode === "Success")
    {
      tableDataT = response?.data?.rows;
    }
    setTableData(tableDataT);
  }
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
              href="images/cone_filter_measurements.jpg"
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
