import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  handleChange1(value) {
    this.setState({ number1: parseInt(value, 10) });
  }

  handleChange2(value) {
    this.setState({ number2: parseInt(value, 10) });
  }

  calculateSum(numone, numtwo) {
    this.setState({ sum: numone + numtwo });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          type="text"
          onChange={e => this.handleChange1(e.target.value)}
        />
        <input
          className="inputLine"
          type="text"
          onChange={e => this.handleChange2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.calculateSum(this.state.number1, this.state.number2)}
        >
          Sum
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
export default Sum;
