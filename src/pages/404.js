import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Nav from "../component/Navbar";
import Footer from "../component/Footer";

class NotFound extends Component {
  render() {
    return (
      <>
        <Nav bgClass="nav-background" />
        <section id="errorContainer" className="margin-top-4">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="error-container">
                  <h1 className="heading">404</h1>
                  <h4 className="heading-explan">Component Not Found</h4>
                  <h3 className="sub-heading">Oh My Gosh! You Found It!!!</h3>
                  <p>
                    Looks like the page you're trying to visit doesn't exists.
                    Please check the <br />
                    URL and try your luck again
                  </p>
                  <button className="primary-button">
                    <FontAwesomeIcon
                      icon={faLongArrowAltLeft}
                      className="primary-icon"
                    />
                    Take me home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default NotFound;
