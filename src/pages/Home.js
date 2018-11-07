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
        <section id="news">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="news-container">
                  <div className="items equal-width ">
                    <div className="item horizontal-item">
                      <div className="img-container">
                        <img
                          className="news-image"
                          src={require("../assets/img/news-1.jpeg")}
                          alt=""
                        />
                      </div>

                      <div className="info-container">
                        <h2 className="sub-title">park life</h2>
                        <h1 className="main-title">N 1</h1>
                        <p className="info-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est illo, perferendis sequi numquam ad ut
                          ratione possimus voluptates deleniti eaque quo,
                          laboriosam quos itaque tempora delectus error
                          assumenda et. Perspiciatis?
                        </p>
                      </div>
                    </div>
                    <div className="item horizontal-item">
                      <div className="img-container">
                        <img
                          className="news-image"
                          src={require("../assets/img/news-2.jpg")}
                          alt=""
                        />
                      </div>

                      <div className="info-container">
                        <h2 className="sub-title">park life</h2>
                        <h1 className="main-title">N 1</h1>
                        <p className="info-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est illo, perferendis sequi numquam ad ut
                          ratione possimus voluptates deleniti eaque quo,
                          laboriosam quos itaque tempora delectus error
                          assumenda et. Perspiciatis?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items small-container">
                    <div className="item full-item">
                      <div className="img-container">
                        <img
                          className="news-image"
                          src={require("../assets/img/news-2.jpg")}
                          alt=""
                        />
                      </div>

                      <div className="info-container">
                        <h2 className="sub-title">park life</h2>
                        <h1 className="main-title">N 1</h1>
                        <p className="info-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est illo, perferendis sequi numquam ad ut
                          ratione possimus voluptates deleniti eaque quo,
                          laboriosam quos itaque tempora delectus error
                          assumenda et. Perspiciatis?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items equal-width ">
                    <div className="item vertical-item">
                      <div className="img-container">
                        <img
                          className="news-image"
                          src={require("../assets/img/news-1.jpeg")}
                          alt=""
                        />
                      </div>

                      <div className="info-container">
                        <h2 className="sub-title">park life</h2>
                        <h1 className="main-title">N 1</h1>
                        <p className="info-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est illo, perferendis sequi numquam ad ut
                          ratione possimus voluptates deleniti eaque quo,
                          laboriosam quos itaque tempora delectus error
                          assumenda et. Perspiciatis?
                        </p>
                      </div>
                    </div>
                    <div className="item horizontal-item">
                      <div className="img-container">
                        <img
                          className="news-image"
                          src={require("../assets/img/news-2.jpg")}
                          alt=""
                        />
                      </div>

                      <div className="info-container">
                        <h2 className="sub-title">park life</h2>
                        <h1 className="main-title">N 1</h1>
                        <p className="info-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est illo, perferendis sequi numquam ad ut
                          ratione possimus voluptates deleniti eaque quo,
                          laboriosam quos itaque tempora delectus error
                          assumenda et. Perspiciatis?
                        </p>
                      </div>
                    </div>
                  </div>
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
