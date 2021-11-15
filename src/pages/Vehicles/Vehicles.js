import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import VehicleElement1 from "./VehicleElement1";
import Gallery from "../Home/Gallery";
import VehicleElement2 from "./VehicleElement2";
const Vehicles = ({ vehicle }) => {
  return (
    <>
      <Header isVehicle={true} vehicle={vehicle} />
      <Hero vehicle={vehicle} />
      <VehicleElement1 />
      <Gallery gallery={vehicle.gallery} />
      <VehicleElement2 vehicle={vehicle} />
      <Footer />
    </>
  );
};

export default Vehicles;
