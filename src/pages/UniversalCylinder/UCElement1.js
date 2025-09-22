import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/cylinders/cone-cylinder_chart.jpg";
import img1 from "../../assets/cylinders/vid_measure_350.jpg";
import img2 from "../../assets/cylinders/cone_filter_measurements_s.jpg";
import FilterTable from "../../components/FilterTable";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../helper/firebase';
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";

const tableHeader = [
  {
    id: 0,
    name: "title",
    label: "Filter Number",
    maxWidth: 91,
    numeric: false,
  },
  {
    id: 1,
    name: "filter_id_length_inch",
    label: "Inlet Diameter (ID)",
    maxWidth: 165,
    numeric: true,

  },
  {
    id: 2,
    name: "filter_height_inch",
    label: "Height (H)",
    maxWidth: 82,
    numeric: true,

  },
  {
    id: 3,
    name: "filter_od_base_length_inch",
    label: "Outside Diameter - Base (OD-B)",
    maxWidth: 171,
    numeric: true,

  },
  {
    id: 4,
    name: "filter_od_top_length_inch",
    label: "Outside Diameter - Top (OD-T)",
    maxWidth: 171,
    numeric: true,

  },
  {
    id: 5,
    name: "filter_style",
    label: "Style",
    maxWidth: 165,
    numeric: false,

  },
  {
    id: 6,
    name: "filter_end_cap",
    label: "End Cap",
    maxWidth: 179,
    numeric: false,

  },
  {
    id: 7,
    name: "filter_inlet_type",
    label: "Inlet Type",
    maxWidth: 131,
    numeric: false,

  },
  {
    id: 8,
    name: "filter_color",
    label: "Color",
    maxWidth: 76,
    numeric: false,

  },
];


const UCElement1 = () => {


  const [tableData, setTableData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {

    getTableData();
  }, [])

  const getTableData = async () => {
    setLoading(true)
    const product_type_id = 7;
    let tableDataT = [];
    let response = await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200&is_active=1`, 200, null)
    if (response.ResponseCode === "Success") {
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
          <div style={{ top: "0px", left: "0px", position: "fixed", width: "100vw", height: "100vh", backgroundColor: "rgb(64 57 57 / 20%)", backdropFilter: "blur(3px)", zIndex: 9999 }}> </div>
          <div style={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
            zIndex: "9999",
            position: "absolute",
            top: "calc(50vh - 75px)",
            left: "calc(50% - 75px)"
          }}>
            <CircleLoader color={"white"} loading={true} size={150} id="custom-loader-el" />
          </div>
        </React.Fragment>
      }
      <UCElement1Wrapper>

        <div className="static-mfx-div">
          <h1>
            Cone and Cylinder Air Filters: Boost
            Performance, Horsepower, and MPG
          </h1>
          <div className="static-mfx-text-div">
            Green Filter offers a wide selection of air filters to fit custom or non-standard intakes, as well as
            replacements for other brands. Green Filter air filters are proudly made in the USA and
            engineered to deliver superior performance. Our filters trap particles as small as 5 microns,
            ensuring a cleaner engine and increased airflow for a more potent air/fuel mixture.
          </div>
          <div className="static-mfx-text-div">
            Experience the benefits of increased horsepower, better fuel mileage, improved throttle response,
            and greater torque throughout your engine's revolutions per minute (RPM) range. Plus, our filters
            are designed for easy installation, cleaning, and maintenance, making them a smart choice for any
            vehicle. They can be cleaned and reused repeatedly, giving them a longer lifespan and benefiting
            the environment.
          </div>
          <h3>
            How to Measure Your Cone Air Filter
          </h3>
          <div className="static-mfx-text-div">
            The dimensions of your available space and intake size will determine the cone filter sizes needed
            for proper fit and function. To <a className="mfx-static-text-a" href="https://greenfilter.com/measure-filter" target="_blank" >find the right air filter</a> cone for your custom or standard intake,
            Green Filter recommends measuring four crucial dimensions:
          </div>
          <div className="static-mfx-text-div">
            <div>
              <b>The inside diameter (ID):</b> Determine the necessary inside diameter by measuring the opening of
              the intake tube across the widest part of the outside edges. The filter you select will need an
              inside diameter larger than this to fit correctly. If measuring for a replacement filter, measure
              across the inside opening of the filter, not from the outside of the flange.
            </div>
            <div>
              <b>The outside diameter top (ODT):</b> To determine the outside diameter of the top of the filter,
              measure across the widest part of the outside edges. Cone filters will have a base wider than the
              top, while a cylinder filter has an equally sized top and bottom.
            </div>
            <div>
              <b>The outside diameter base (ODB):</b> To determine the outside diameter of the base of the filter,
              measure across the widest part of the outside edges. Since the filter's flange will likely be in the
              way, you will need to measure across the top of the flange to get the dimension.
            </div>
            <div>
              <b>The filter's height (H):</b> Filter height is measured from the top of the end cap to the bottom of the
              base of the filter, not including the flange.
            </div>
          </div>

          <h4>
            Cone and Cylinder Air Filter Number Table
          </h4>
          <div className="static-mfx-text-div">
            Clicking on the column headers will sort the filters by your most important dimensions to find a
            filter that fits securely with a clamp. Clicking the column header a second time will sort the
            column in reverse order. Find a filter with an inside diameter that is the same size or slightly
            larger than the cold air intake tube. The clamp used with the filter will help make a secure fit.
          </div>
        </div>


        <h2 style={{ marginTop: 100, marginLeft: 20 }}>
          Find a Cone or Cylinder Filter
        </h2>
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


        <div className="static-mfx-div" style={{ marginBottom: "50px", marginTop: "0px" }}>
          <h3>
            Buy a High-Quality Air Filter Cylinder
          </h3>
          <div className="static-mfx-text-div">
            Green Filter is a leading manufacturer of world-class filters used by many world-renowned racing
            engineers, engine builders and drivers. Purchase yours today or  <a className="mfx-static-text-a" href="http://greenfilter.com/contact-us" target="_blank" >contact us for help</a> finding what
            you are looking for.
          </div>
        </div>
      </UCElement1Wrapper>
    </>
  );
};

export default UCElement1;

const UCElement1Wrapper = styled.div``;
