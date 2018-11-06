import React, { Component } from "react";
import { Button } from "reactstrap";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button outline color="success" className="myButton">
          Hello
        </Button>
      </div>
    );
  }
}

export default App;
