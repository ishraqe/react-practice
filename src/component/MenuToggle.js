import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const MenuToggle = props => {
  return (
    <div className="menu-toogle-container">
      <div className="menu-container">
        <ul className="lists">
          <li className="list">
            <a className="buttons">Login</a>
          </li>
          <li className="list">
            <a className="buttons">Feed</a>
          </li>
          <li className="list">
            <a className="buttons">About</a>
          </li>
          <li className="list">
            <a className="buttons">Contact</a>
          </li>
        </ul>
        <button className="closeToggle" onClick={props.toggleMenuModal}>
          <FontAwesomeIcon className="close-toggle-icon" icon={faTimesCircle} />
        </button>
      </div>
    </div>
  );
};

export default MenuToggle;
