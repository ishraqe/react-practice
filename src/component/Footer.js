import React from "react";

const Navbar = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper">
          <div className="container-fixed">
            <div className="brand-container">
              <a className="logo">m</a>
              <span className="brand-text">
                Created MMXIV. All rights reserved
              </span>
            </div>
            <div className="nav-button-container">
              <ul>
                <li>
                  <a href="#" target="" rel="noopener noreferrer">
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#" target="" rel="noopener noreferrer">
                    Archive
                  </a>
                </li>
                <li>
                  <a href="#" target="" rel="noopener noreferrer">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
