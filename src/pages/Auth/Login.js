import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="container">
          <div className="wrapper">
            <div className="container-fixed">
              <div className="form-container">
                <div className="brand-container">
                  <div className="logo-container">
                    <a className="logo">m</a>
                  </div>
                  <span className="brand-text">
                    A photograpic journal _23 photos
                  </span>
                </div>
                <form className="login-form">
                  <div className="input-container">
                    <label class="label">E-mail/ Username</label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="input-container">
                    <label class="label">Password </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="input-container submit-remember">
                    <div class="check-box-container">
                      <input type="checkbox" />
                      <span class="checkmark">Remember Me</span>
                    </div>
                    <button className="submit-button">Log In</button>
                  </div>
                </form>
                <div className="forget-pass-container">
                  <a> Lost your password?</a>
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to
                    Memories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
