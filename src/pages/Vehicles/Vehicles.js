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
import { collection, query, where, getDocs, startAt, endAt, collectionGroup, getDoc } from "firebase/firestore";
import { db } from '../../helper/firebase';
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";
import { Helmet } from "react-helmet";

const Vehicles = (props) => {

  const [make, setMake] = React.useState('')
  const [cleaningKit, setCleaningKit] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {

    const url = window.location.pathname;
    const brand = url.split('/')[2];
    getMake(brand);
    getCleaningKit();
  }, [])


  const getMake = async (brand) => {
    setLoading(true)

    let makeT = {};
    let response = await GetData(statics.BaseUrl + `/make?slug=${brand}`)
    if (response.ResponseCode === "Success") {
      makeT = response?.data;
    }
    setMake(makeT);
    setLoading(false)

  }

  const getCleaningKit = async () => {
    const cleaningKitGFU = 2000;
    let cleaningKitT = {};
    let response = await GetData(statics.BaseUrl + `/product?gfu_part_num=${cleaningKitGFU}`)
    if (response.ResponseCode === "Success") {
      cleaningKitT = response?.data?.rows?.[0];
    }
    setCleaningKit(cleaningKitT);
  }


  function getSeo() {
    const url = window.location.pathname;
    const brand = url.split('/')[2];
    if (brand === "mustang") {
      return {
        title: "Mustang Engine Air Filters - Green Filter USA",
        description: "Green Filter USA: Precisely engineered air filters for Mustang performance. Experience better MPG, more power, and a lifetime of savings. Shop now!",
        h1: "Mustang Engine Air Filters"
      }
    }

    else if (brand === "toyota") {
      return {
        title: "Toyota Engine Air Filters",
        description: "Upgrade your Toyota's performance with Green Filter USA! Find air filters for Camry, Tundra, Corolla & more. Increase horsepower & fuel economy",
        h1: "Toyota Engine Air Filters - Green Filter USA"
      }
    }

    else if (brand === "subaru") {
      return {
        title: "Subaru Engine Air Filters - Green Filter USA",
        description: "Green Filter USA: Explore our reusable Engine filters for Subaru. Find filters for Forester, Outback, Impreza & more. Shop our Subaru air filters today!",
        h1: "Subaru Engine Air Filters"
      }
    }

    else if (brand === "jeep") {
      return {
        title: "Jeep Engine Air Filters - Green Filter USA",
        description: "Unleash your Jeep's potential with Green Filter USA! Discover air filters for Cherokee, Wrangler, Grand Cherokee & more. Maximize horsepower & MPG",
        h1: "Jeep Engine Air Filters"
      }
    }

    else if (brand === "bmw") {
      return {
        title: "BMW Engine Air Filters - Green Filter USA",
        description: "Upgrade your BMW M-Series with a Green Filter! Our reusable engine air filters are designed for maximum power and efficiency. Shop BMW Engine FIlters!",
        h1: "BMW ENgine AIr Filters"
      }
    }

    else {
      return {
        title: `${make?.title || brand?.toUpperCase() || ""} Engine Air Filters - Green Filter USA`,
        description: make?.hero_text || `Upgrade your ${brand?.toUpperCase() || ""} with a Green Filter! Our reusable engine air filters are designed for maximum power and efficiency. Shop ${brand?.toUpperCase() || ""} Engine FIlters!`,
        h1: `${make?.title || brand?.toUpperCase() || ""} Engine Air Filters`
      }
    }
  }


  const { title, h1, description } = getSeo()
  const canonicalUrlClean = window.location.href.split(/[/]]/)[0]; // removes ?utm= or #hash
  const canonicalUrlArr = canonicalUrlClean.split("/"); // removes ?utm= or #hash

  const canonicalUrlLastObj = canonicalUrlArr[canonicalUrlArr.length - 1]; // removes ?utm= or #hash

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


      <Helmet>
        <title>{title || "Green Filter - High Performance Air Filters"} </title>
        <meta name="description" content={description || "Upgrade your ride with Green Filter! Explore our range of high-performance cone & cylinder air filters. Click to watch our measuring guide video and Shop Now!"} />
        <meta property="og:title" content={title || "Universal Cylinder Air Filters - Green Filter USA"} />
        <meta property="og:description" content={description || "Upgrade your ride with Green Filter! Explore our range of high-performance cone & cylinder air filters. Click to watch our measuring guide video and Shop Now!"} />
        {/* <meta property="og:image" content={img0} /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://greenfilter.com/brand/${canonicalUrlLastObj}`} />

      </Helmet>

      <Header
        isVehicle={true}
        make={make}
        models={make?.models}
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <div className="container-0">
        <Hero categories={make?.models} make={make} />
        <VehicleElement12 vehicle={make} />
        {/* <VehicleElement1 /> */}
        <Gallery gallery={make?.images} />
        {/* <VehicleElement2 vehicle={vehicle} /> */}
        <VehicleElement4 models={make?.models} make={make} cleaningKit={cleaningKit} />
        <VehicleElement5 />
        <HomeElement5 />
      </div>
      <Footer />
    </>
  );
};

export default Vehicles;
