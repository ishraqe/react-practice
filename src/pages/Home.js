import React, { Component } from "react";
import Nav from "../component/Navbar";
class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <section id="info">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="info-container">
                  <h5>Drift and lets rediscover ours</h5>
                  <h1>memories</h1>
                  <span className="year">1986 to NOW</span>
                  <p>
                    A reflective year through the last fifteeen years of service{" "}
                    <br />
                    person I am today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
