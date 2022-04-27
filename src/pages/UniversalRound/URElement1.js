import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/round.jpg";
import img2 from "../../assets/cylinders/round_filter_measurements.jpg";
import FilterTable from "../../components/FilterTable";
import { collection, query, where, getDocs} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';

const tableHeader = [
  {
    id: 0,
    name: "gfu_part_num",
    label: "Filter Number",
    maxWidth: 161,
  },
  {
    id: 1,
    name: "filter_od_length_inch",
    label: "Outside Diameter (OD)",
    maxWidth: 277,
  },
  {
    id: 2,
    name: "filter_id_length_inch",
    label: "Inside Diameter (ID)",
    maxWidth: 255,
  },
  {
    id: 3,
    name: "filter_height_inch",
    label: "Height (H)",
    maxWidth: 143,
  },
  {
    id: 4,
    label: "Shape",
    name: "filter_shape",
    maxWidth: 236,
  },
  {
    id: 5,
    name: "filter_color",
    label: "Color",
    maxWidth: 130,
  },
];

const URElement1 = () => {

  const [tableData,setTableData] = React.useState([])

  useEffect(()=>{

    getTableData();
  },[])

  const getTableData = async () =>
  {
    const productsRef = collection(db, "product_variants");

    const q = query(productsRef, where("category", "==", "Round Filter"));

    let tableDataT = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      tableDataT.push(doc.data())

    });

    console.log(tableDataT)

    setTableData(tableDataT);
  }

  return (
    <>
      <URElement1Wrapper>
        <h1 style={{ marginTop: 100, marginLeft: 20 }}>Find a Round Filter</h1>
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
      </URElement1Wrapper>
    </>
  );
};

export default URElement1;

const URElement1Wrapper = styled.div``;
