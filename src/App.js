import React, { Component } from "react";
import "./assets/style/App.scss";
// import * as firebase from "firebase";

import RootRoutes from "./routes/index";

class App extends Component {
  componentDidMount() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyD92RCqlVFZPatJsqYNCBVZwGlfrjyleNc",
    //   authDomain: "memories-91351.firebaseapp.com",
    //   databaseURL: "https://memories-91351.firebaseio.com",
    //   projectId: "memories-91351",
    //   storageBucket: "memories-91351.appspot.com",
    //   messagingSenderId: "865582910408"
    // });
    console.log(this.props);
  }

  render() {
    return (
      <div className="main-body">
        <RootRoutes />
      </div>
    );
  }
}

export default App;
