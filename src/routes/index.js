import React from "react";
import Dashboard from "../pages/Dashboard";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact element={<Dashboard />} />
    </Switch>
  </BrowserRouter>
);
s;
export default Routes;
