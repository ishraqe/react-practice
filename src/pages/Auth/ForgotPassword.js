import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

class ForgotPassword extends Component {
  render() {
    return (
      <div id="ForgotPassword" className="Auth">
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
                    <label class="label">Enter Recovery E-mail</label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="input-container submit-remember">
                    <button className="submit-button">Submit</button>
                  </div>
                </form>
                <div className="forget-pass-container">
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

export default ForgotPassword;
