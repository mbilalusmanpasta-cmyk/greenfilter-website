import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/panel.jpg";
import img2 from "../../assets/panel.jpg";
import FilterTable from "../../components/FilterTable";
import { collection, query, where, getDocs} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";

const tableHeader = [
  {
    id: 0,
    label: "Filter Number",
    name: "gfu_part_num",

    maxWidth: 156,
  },
  {
    id: 1,
    label: "Length (L)",
    name: "filter_length_inch",

    maxWidth: 270,
  },
  {
    id: 2,
    label: "Width (W)",
    name: "filter_width_inch",

    maxWidth: 249,
  },
  {
    id: 3,
    label: "Height (H)",
    name: "filter_height_inch",

    maxWidth: 139,
  },
  {
    id: 4,
    label: "Type",
    name: "filter_style",
    maxWidth: 126,
  },
  {
    id: 5,
    label: "Weight",
    name: "filter_weight_lbs",

    maxWidth: 136,
  },
];

const UPElement1 = () => {
  const [tableData,setTableData] = React.useState([])
  const [loading,setLoading] = React.useState(false)

  useEffect(()=>{

    getTableData();
  },[])


  const getTableData = async () =>
  {
    setLoading(true)
    const product_type_id = 2;
    let tableDataT = [];
    let response  =  await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200&is_active=1`,200,null)
    if(response.ResponseCode === "Success")
    {
      tableDataT = response?.data?.rows;
    }
    setTableData(tableDataT);
    setLoading(false)

  }

  return (
    <>
    {
      loading &&
      <React.Fragment>
          <div style={{top:"0px",left:"0px",position:"fixed",width:"100vw",height:"100vh",backgroundColor:"rgb(64 57 57 / 20%)" ,backdropFilter:"blur(3px)",zIndex:9999}}> </div>
          <div style = {{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              zIndex:"9999",
              position: "absolute",
              top: "calc(50vh - 75px)",
              left:"calc(50% - 75px)"
            }}>
            <CircleLoader  color={"white"} loading={true} size={150} id="custom-loader-el" />
          </div>
      </React.Fragment>
      }
      <UPElement1Wrapper>
        <h1 style={{ marginTop: 100, marginLeft: 20 }}>Find a Panel Filter</h1>
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

        {/* <div
          style={{
            textAlign: "center",
            float: "left",
            width: "20%",
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
        </div> */}
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
      </UPElement1Wrapper>
    </>
  );
};

export default UPElement1;

const UPElement1Wrapper = styled.div``;
