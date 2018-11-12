import React from "react";

import dashboardRoutes from "../routes/dashboardRoutes";
import { Switch, Route } from "react-router-dom";

const Dashboard = props => {
  console.log(props);
  return (
    <>
      {dashboardRoutes.map((prop, key) => {
        return (
          <>
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          </>
        );
      })}
    </>
  );
};

export default Dashboard;
