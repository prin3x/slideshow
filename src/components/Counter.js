import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let appStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    };
    let divCounterStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      width: "20%",
      margin: "5px auto",
    };
    let counterButtonStyle = {
      width: "50px",
    };
    return (
      <div className="App" style={appStyle}>
        <div style={divCounterStyle}>
          <button
            style={counterButtonStyle}
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <h1>{this.state.count}</h1>
          <button
            style={counterButtonStyle}
            disabled={this.state.count === 0}
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </div>
        <button
          style={counterButtonStyle}
          onClick={() => this.setState({ count: 0 })}
        >
          Reset
        </button>
      </div>
    );
  }
}
