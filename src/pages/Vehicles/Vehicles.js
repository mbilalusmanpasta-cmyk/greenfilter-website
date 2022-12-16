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
import HomeElement5 from "../Home/HomeElement5";
import VehicleElement12 from "./VehicleElement12";
import { collection, query, where, getDocs,startAt,endAt, collectionGroup,getDoc} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";

const Vehicles = (props) => {

  const [make,setMake] = React.useState('')
  const [cleaningKit,setCleaningKit] = React.useState('')

  useEffect(()=>{

    const url = window.location.pathname;
    const brand = url.split('/')[2];
    getMake(brand);
    getCleaningKit();
  },[])


  const getMake = async (brand) =>
  {
    let makeT = {};
    let response = await GetData(statics.BaseUrl + `/make?slug=${brand}`)
    if(response.ResponseCode === "Success")
    {
      makeT = response?.data;
    }
    setMake(makeT);
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
