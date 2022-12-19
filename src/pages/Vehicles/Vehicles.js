import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import VehicleElement1 from "./VehicleElement1";
import Gallery from "../Home/Gallery";
import VehicleElement2 from "./VehicleElement2";
import VehicleElement3 from "./VehicleElement3";
import VehicleElement4 from "./VehicleElement4";
import { brandDetails } from "../../data/cars";
import VehicleElement5 from "./VehicleElement5";
import HomeElement5 from "../Home/HomeElement5.jsx";
import VehicleElement12 from "./VehicleElement12";
import { collection, query, where, getDocs,startAt,endAt, collectionGroup,getDoc} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";

const Vehicles = (props) => {

  const [make,setMake] = React.useState('')
  const [cleaningKit,setCleaningKit] = React.useState('')
  const [loading,setLoading] = React.useState(false)

  useEffect(()=>{

    const url = window.location.pathname;
    const brand = url.split('/')[2];
    getMake(brand);
    getCleaningKit();
  },[])


  const getMake = async (brand) =>
  {
    setLoading(true)

    let makeT = {};
    let response = await GetData(statics.BaseUrl + `/make?slug=${brand}`)
    if(response.ResponseCode === "Success")
    {
      makeT = response?.data;
    }
    setMake(makeT);
    setLoading(false)

  }

  const getCleaningKit = async ( ) =>
  {
    const cleaningKitGFU = 2000;
    let cleaningKitT = {};
    let response = await GetData(statics.BaseUrl + `/product?gfu_part_num=${cleaningKitGFU}`)
    if(response.ResponseCode === "Success")
    {
      cleaningKitT = response?.data?.rows?.[0];
    }
    setCleaningKit(cleaningKitT);
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

      <Header
        isVehicle={true}
        make={make}
        models={make?.models}
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <div className="container-0">
        <Hero categories={make?.models} make={make}/>
        <VehicleElement12 vehicle={make} />
        {/* <VehicleElement1 /> */}
        <Gallery gallery={make?.images} />
        {/* <VehicleElement2 vehicle={vehicle} /> */}
        <VehicleElement4 models={make?.models} make={make} cleaningKit={cleaningKit}/>
        <VehicleElement5 />
        <HomeElement5 />
      </div>
      <Footer />
    </>
  );
};

export default Vehicles;
