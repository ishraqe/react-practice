import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Auth

import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";

import Home from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/password-recovery" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
