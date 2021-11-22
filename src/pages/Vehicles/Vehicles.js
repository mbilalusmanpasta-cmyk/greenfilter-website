import React from "react";
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
const Vehicles = (props) => {
  const vehicle = brandDetails[0].cars[0];
  return (
    <>
      <Header
        isVehicle={true}
        vehicle={vehicle}
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <Hero vehicle={vehicle} />
      <VehicleElement1 />
      <Gallery gallery={vehicle.gallery} />
      <VehicleElement2 vehicle={vehicle} />
      <VehicleElement3 vehicle={vehicle} />
      <VehicleElement4 vehicle={vehicle} />
      <VehicleElement5 />
      <HomeElement5 />
      <Gallery gallery={vehicle.gallery} />
      <Footer />
    </>
  );
};

export default Vehicles;
