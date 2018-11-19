import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
//Auth
import Error from "../pages/404";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Contact from "../pages/Contact";

import Home from "../pages/Home";
import MemoryDetail from "../pages/MemoryDetail";

// Dashboard Routes
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/DashboardPages/Dashboard";
import Create from "../pages/DashboardPages/Create";

const Routes = props => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/password-recovery" component={ForgotPassword} />
        <Route path="/contact" component={Contact} />
        <Route path="/memory-detail/:slug" component={MemoryDetail} />
        <Route
          path="/dashboard"
          render={({ match: { url } }) => (
            <DashboardLayout>
              <Route exact path={`${url}/`} component={Dashboard} />
              <Route path={`${url}/create`} component={Create} />
            </DashboardLayout>
          )}
        />
        <Route path="*" component={Error} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default Routes;
