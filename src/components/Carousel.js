import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    index: 0,
    btnColor: true,
  };

  prevPic(currentIndex) {
    this.setState({ index: currentIndex - 1 });
  }

  nextPic(currentIndex) {
    this.setState({ index: currentIndex + 1 });
  }

  render() {
    let containerStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    };
    let innerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div className="carousel-container" style={containerStyle}>
        <div style={innerStyle}>
          <button
            style={{ margin: "5px" }}
            onClick={() => this.prevPic(this.state.index)}
            disabled={this.state.index === 0}
          >
            Prev
          </button>
          <div className="carousel-item">
            <img
              src={this.props.picList[this.state.index]}
              style={{ width: "500px", height: "500px" }}
            ></img>
          </div>
          <button
            style={{ margin: "5px" }}
            onClick={() => this.nextPic(this.state.index)}
            disabled={this.state.index === this.props.picList.length - 1}
          >
            Next
          </button>
        </div>
        <h4>รูปที่ {this.state.index + 1}</h4>
        <div className="tab-button">
          <button
            style={{ marginRight: "5px" }}
            onClick={() => {
              this.setState({ index: 0 });
            }}
          >
            รูปที่ 1
          </button>
          <button
            style={{ marginRight: "5px" }}
            onClick={() => {
              this.setState({ index: 1 });
            }}
          >
            รูปที่ 2
          </button>
          <button
            style={{ marginRight: "5px" }}
            onClick={() => {
              this.setState({ index: 2 });
            }}
          >
            รูปที่ 3
          </button>
          <button
            onClick={() => {
              this.setState({ index: 3 });
            }}
          >
            รูปที่ 4
          </button>
        </div>
      </div>
    );
  }
}
