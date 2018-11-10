import React, { Component } from "react";
import Nav from "../component/Navbar";
import Footer from "../component/Footer";
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
                  <div id="columns">
                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" />
                      <figcaption>
                        Cinderella wearing European fashion of the mid-1860’s.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet iusto pariatur nostrum quasi atque hic nisi
                        odio quia obcaecati, qui asperiores dolore rerum ipsum
                        illum, nobis repudiandae ex repellat soluta.
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg" />
                      <figcaption>
                        Rapunzel, clothed in 1820’s period fashion
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg" />
                      <figcaption>
                        Belle, based on 1770’s French court fashion
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg" />
                      <figcaption>
                        Mulan, based on the Ming Dynasty period
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg" />
                      <figcaption>
                        Sleeping Beauty, based on European fashions in 1485
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg" />
                      <figcaption>
                        Pocahontas based on 17th century Powhatan costume
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg" />
                      <figcaption>
                        Snow White, based on 16th century German fashion
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" />
                      <figcaption>
                        Ariel wearing an evening gown of the 1890’s
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg" />
                      <figcaption>
                        Tiana wearing the <i>robe de style</i> of the 1920’s
                      </figcaption>
                    </figure>
                    <small>
                      Art &copy; <a href="//clairehummel.com">Claire Hummel</a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="insight">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="insight-container">
                  <div className="row">
                    <div className="img-container">
                      <img
                        className="insight-cover"
                        src={require("../assets/img/hidden.jpg")}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h2 className="insight-title">In a hidden allay</h2>
                    <p className="insight-paragraph">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus ipsum excepturi dolores veritatis, quas
                      obcaecati quod ab officiis provident! Eum magnam
                      consequuntur molestias! Explicabo ut veritatis et? Dolorum
                      voluptatibus facilis libero qui, numquam assumenda ex
                      beatae, aperiam ad debitis atque sequi porro omnis
                      quaerat, deserunt voluptatum eum inventore magni
                      consequatur?
                    </p>
                  </div>
                  <div className="row">
                    <div className="img-container">
                      <img
                        className="insight-cover"
                        src={require("../assets/img/hidden-1.jpg")}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h2 className="insight-title">In a hidden allay</h2>
                    <p className="insight-paragraph">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus ipsum excepturi dolores veritatis, quas
                      obcaecati quod ab officiis provident! Eum magnam
                      consequuntur molestias! Explicabo ut veritatis et? Dolorum
                      voluptatibus facilis libero qui, numquam assumenda ex
                      beatae, aperiam ad debitis atque sequi porro omnis
                      quaerat, deserunt voluptatum eum inventore magni
                      consequatur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tileImage">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="tileImage-container">
                  <div id="columns">
                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" />
                    </figure>

                    <figure>
                      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg" />
                    </figure>
                    <small>
                      Art &copy; <a href="//clairehummel.com">Claire Hummel</a>
                    </small>
                  </div>
                  <button className="read-more">Continue Journey</button>
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

export default Home;
