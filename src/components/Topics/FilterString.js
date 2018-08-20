import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: ['Hello', 'I', 'am', 'learning', 'how', 'to', 'code'],
      userInput: '',
      filteredArray: []
    };
  }

  handleChanges(val) {
      this.setState ({userInput: val});
  }

  filterNames(userInput) {
      var unFilteredArray = this.state.unFilteredArray;
      var filteredNames = [];

      for (var i = 0; i < unFilteredArray.length; i++) {
          if (unFilteredArray[i].includes(userInput)) {
            filteredNames.push(unFilteredArray[i]);
          }
      }

      this.setState({filteredNames: filteredNames});

  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(e) => this.handleChanges(e.target.value)}>
        </input>
        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
export default FilterString;
