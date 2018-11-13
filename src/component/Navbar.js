import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import MenuToggle from "./MenuToggle";
import { closeMenu } from "../store/actions/index";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      menuModal: false
    };
    this.toggleMenuModal = this.toggleMenuModal.bind(this);
  }
  navScrollBackground = () => {
    if (this.props.bgClass) {
      this.setState({
        className: this.props.bgClass
      });
    } else {
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
    }
  };
  toggleMenuModal() {
    this.props.closeMenuModal();
  }
  componentDidMount() {
    this.navScrollBackground();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.toggleMenu !== prevState.menuModal) {
      return {
        menuModal: nextProps.toggleMenu
      };
    }
    return null;
  }

  render() {
    return (
      <nav
        id="nav"
        className={this.state.className ? this.state.className : ""}
      >
        <div className="container">
          <div className="wrapper">
            <div className="container-fixed">
              <div className="brand-container">
                <Link to="/" className="logo">
                  m
                </Link>
                <span className="brand-text">
                  A photograpic journal _23 photos
                </span>
              </div>
              <div className="nav-button-container">
                <button onClick={this.toggleMenuModal} className="menu-toggle">
                  <FontAwesomeIcon className="toggle-icon" icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.menuModal ? (
          <MenuToggle toggleMenuModal={() => this.toggleMenuModal()} />
        ) : (
          ""
        )}
      </nav>
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
)(Navbar);
