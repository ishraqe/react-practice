import React from "react";

const Dashboard = props => {
  console.log(props);
  return (
    <>
      <p>Nav</p>
      {props.children}
      <p>footer</p>
    </>
  );
};

export default Dashboard;
