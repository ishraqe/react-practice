import React, { Component } from "react";
import "./assets/style/App.scss";
import { connect } from "react-redux";
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
  componentDidMount() {}
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, "static");
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
