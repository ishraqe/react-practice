import React, { Component } from "react";
import Nav from "../component/Navbar";
import Footer from "../component/Footer";
import Comment from "../component/Comment";

class MemoryDetail extends Component {
  render() {
    console.log("detail page");
    return (
      <>
        <Nav />
        <section
          id="info"
          style={{
            background: `url(
              "https://cdn-images-1.medium.com/max/1000/0*XJq7btvmRjwn3Poz.jpg"
            ) no-repeat`,
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="info-container">
                  <h1>Best Camera Settings for Landscape Photography</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog-details" className="padding-2">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <div className="detail-container">
                  <p className="detail-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita autem incidunt aliquam tenetur? Eaque ipsam harum
                    cupiditate vel quo exercitationem in modi laboriosam laborum
                    voluptatibus dolore odit, totam distinctio corporis odio ad
                    accusamus non veritatis. Cumque, officiis quas. Optio
                    expedita, fuga eaque, tempora corporis iure enim hic
                    voluptate molestiae eum pariatur repellat modi nisi sed
                    officiis rem cum, delectus sit. Repudiandae doloremque
                    reprehenderit aspernatur accusamus? Aperiam earum minima,
                    nisi cum doloremque harum molestias dolore non quia animi
                    commodi aut possimus recusandae necessitatibus. Aliquid
                    dignissimos corporis incidunt rem commodi. Mollitia vero
                    pariatur libero obcaecati veniam unde aliquam cupiditate
                    suscipit iste maiores!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="response-container" className="padding-2">
          <div className="container">
            <div className="wrapper">
              <div className="container-fixed">
                <Comment />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default MemoryDetail;
