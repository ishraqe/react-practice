import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav id="nav">
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
};

export default Navbar;
