import React from "react";
import Nav from "../component/Navbar";

const Contact = () => {
  return (
    <>
      <Nav />
      <section id="contact" className="margin-top-4">
        <div className="container">
          <div className="wrapper">
            <div className="container-fixed">
              <div className="auto-vertical">
                <div className="contact-container">
                  <h2 className="title">Get In Touch</h2>
                  <h6 className="sub-title">
                    {" "}
                    Were here for you, and wearing our thinking caps..
                  </h6>
                  <form className="form">
                    <div className="input-container">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name..."
                      />
                    </div>
                    <div className="input-container">
                      <input
                        className="input"
                        type="text"
                        placeholder="Email..."
                      />
                    </div>
                    <div className="input-container">
                      <textarea
                        className="message"
                        type="text"
                        placeholder="Message..."
                        rows="7"
                      />
                    </div>
                    <button className="send-button">Send It!</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
