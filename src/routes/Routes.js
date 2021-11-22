import React, { useState } from "react";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import ShopByVehicle from "../pages/ShopByVehicle/ShopByVehicle";
import Vehicles from "../pages/Vehicles/Vehicles";
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
      </Switch>
    </>
  );
};

export default Routes;
