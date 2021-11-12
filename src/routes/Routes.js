import React, { useState } from "react";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import ShopByVehicle from "../pages/ShopByVehicle/ShopByVehicle";
const Routes = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const handleClickIndex = (value) => {
    setClickedIndex(value);
  };
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
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Routes;
