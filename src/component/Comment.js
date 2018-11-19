import React, { Component } from "react";
class Comment extends Component {
  state = {
    toggleButton: false
  };
  toggleButton = () => {
    this.setState({
      toggleButton: !this.state.toggleButton
    });
  };
  render() {
    return (
      <div className="comment-container">
        <div className="comment-form-container">
          <form className="comment-form">
            <div className="input-container">
              <label>Response</label>
              <textarea name="response" onFocus={this.toggleButton} />
              {this.state.toggleButton ? (
                <button className="outline-button">Submit</button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
        <div className="response-list-container">
          <ul className="lists">
            <li className="list">
              <div className="responses">
                <div className="info">
                  <img
                    src="https://cdn-images-1.medium.com/fit/c/36/36/1*IrkuhZMsMBczX7KrokEtwQ.jpeg"
                    alt=""
                    srcset=""
                  />
                  <div className="title">
                    <h6 className="name">Doglous Mare</h6>
                    <span className="time">Jan 25, 2017</span>
                  </div>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, commodi!
                </p>
              </div>
            </li>
            <li className="list">
              <div className="responses">
                <div className="info">
                  <img
                    src="https://cdn-images-1.medium.com/fit/c/36/36/1*IrkuhZMsMBczX7KrokEtwQ.jpeg"
                    alt=""
                    srcset=""
                  />
                  <div className="title">
                    <h6 className="name">Doglous Mare</h6>
                    <span className="time">Jan 25, 2017</span>
                  </div>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, commodi!
                </p>
              </div>
            </li>
            <li className="list">
              <div className="responses">
                <div className="info">
                  <img
                    src="https://cdn-images-1.medium.com/fit/c/36/36/1*IrkuhZMsMBczX7KrokEtwQ.jpeg"
                    alt=""
                    srcset=""
                  />
                  <div className="title">
                    <h6 className="name">Doglous Mare</h6>
                    <span className="time">Jan 25, 2017</span>
                  </div>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, commodi!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Comment;
