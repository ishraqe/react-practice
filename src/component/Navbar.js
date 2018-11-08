import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {
    className: "",
    toggleMenu: false
  };
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
  toggleMenuAction = () => {
    console.log("ok");
  };
  componentDidMount() {
    this.navScrollBackground();
  }
  render() {
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
                <button className="menu-toggle">
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

export default Navbar;
