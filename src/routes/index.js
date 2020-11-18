import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Marketing from '../pages/Marketing'
// import Marketing from "../pages/Marketing";

const Routes= () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/marketing" component={Marketing} />
  </Switch>
);

export default Routes;
