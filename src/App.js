import React, { Component } from "react";
import "./assets/style/App.scss";
import Naviagtion from "./routes/routes";
import NavBar from "./component/Navbar";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Naviagtion />
      </>
    );
  }
}

export default App;
