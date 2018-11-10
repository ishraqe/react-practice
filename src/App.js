import React, { Component } from "react";
import "./assets/style/App.scss";
import { connect } from "react-redux";
import * as firebase from "firebase";

import Naviagtion from "./routes/routes";
import MenuToggle from "./component/MenuToggle";
import { closeMenu } from "./store/actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuModal: false
    };
    this.toggleMenuModal = this.toggleMenuModal.bind(this);
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD92RCqlVFZPatJsqYNCBVZwGlfrjyleNc",
      authDomain: "memories-91351.firebaseapp.com",
      databaseURL: "https://memories-91351.firebaseio.com",
      projectId: "memories-91351",
      storageBucket: "memories-91351.appspot.com",
      messagingSenderId: "865582910408"
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.toggleMenu !== prevState.menuModal) {
      return {
        menuModal: nextProps.toggleMenu
      };
    }
    return null;
  }
  toggleMenuModal() {
    this.props.closeMenuModal();
  }
  render() {
    return (
      <div className="main-body">
        <Naviagtion />
        {this.state.menuModal ? (
          <MenuToggle toggleMenuModal={() => this.toggleMenuModal()} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ feed }) => {
  return {
    toggleMenu: feed.toggleMenu
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeMenuModal: () => dispatch(closeMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
