import React from "react";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
