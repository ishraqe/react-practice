import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
class SignUp extends Component {
  render() {
    return (
      <div id="SignUp" className="Auth">
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
                  <div className="input-container">
                    <label class="label">Confirm Password </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="input-container submit-remember">
                    <button className="submit-button">Sign Up</button>
                  </div>
                  <div className="input-container social-login">
                    <button className="submit-button facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </button>
                    <button className="submit-button google">
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </button>
                  </div>
                </form>
                <div className="forget-pass-container">
                  <a> Already Signed Up?</a>
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

export default SignUp;
