import React, { useState } from "react";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import ShopByVehicle from "../pages/ShopByVehicle/ShopByVehicle";
import Vehicles from "../pages/Vehicles/Vehicles";
import MeasureFilter from "../pages/MeasureFilter/MeasureFilter";
import CleanerCare from "../pages/CleanerCare/CleanerCare";
import UniversalCylinder from "../pages/UniversalCylinder/UniversalCylinder";
import UniversalRound from "../pages/UniversalRound/UniversalRound";
import AirCleaner from "../pages/AirCleaner/AirCleaner";
import AboutUs from "../pages/AboutUs/AboutUs";
import Guarantee from "../pages/Guarantee/Guarantee";
import WhyGoGreen from "../pages/WhyGoGreen/WhyGoGreen";
import Contact from "../pages/ContactUs/Contact";
import Career from "../pages/Careers/Career";
const Routes = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [vehicle, setVehicle] = useState({});
  const handleClickIndex = (value) => {
    setClickedIndex(value);
  };
  const handleVehicleRoute = (value) => {
    setVehicle(value);
  };
  console.log("Vehicle Route >> ", vehicle);
  console.log("Clicked Index >>>", clickedIndex);
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
            />
          )}
        />
        <Route
          exact
          path="/shop-by-vehicle"
          component={() => (
            <ShopByVehicle
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/vehicles"
          component={() => (
            <Vehicles
              vehicle={vehicle}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/measure-filter"
          component={() => (
            <MeasureFilter
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/cleaner-care"
          component={() => (
            <CleanerCare
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/universal-cylinder"
          component={() => (
            <UniversalCylinder
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/universal-round"
          component={() => (
            <UniversalRound
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/air-cleaner"
          component={() => (
            <AirCleaner
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/about-us"
          component={() => (
            <AboutUs
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/our-guarantee"
          component={() => (
            <Guarantee
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/why-go-green"
          component={() => (
            <WhyGoGreen
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/contact-us"
          component={() => (
            <Contact
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/careers"
          component={() => (
            <Career
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Routes;
