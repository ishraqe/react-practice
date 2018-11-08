import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { closeMenu } from "../store/actions/index";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
    this.closeModal = this.closeModal.bind(this);
  }
  navScrollBackground = () => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      let addClassName = "";
      if (newScrollHeight > 100) {
        addClassName += "nav-background";
      } else if (newScrollHeight < 100) {
        addClassName = "";
      }
      this.setState({
        className: addClassName
      });
    };
  };
  closeModal() {
    this.props.closeMenuModal();
  }
  componentDidMount() {
    this.navScrollBackground();
  }

  render() {
    console.log(this.props);
    return (
      <nav id="nav" className={this.state.className}>
        <div className="container">
          <div className="wrapper">
            <div className="container-fixed">
              <div className="brand-container">
                <a className="logo">m</a>
                <span className="brand-text">
                  A photograpic journal _23 photos
                </span>
              </div>
              <div className="nav-button-container">
                <button onClick={this.closeModal} className="menu-toggle">
                  <FontAwesomeIcon className="toggle-icon" icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    closeMenuModal: () => dispatch(closeMenu())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
