import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Auth

import Login from "../pages/Auth/Login";

import Home from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
