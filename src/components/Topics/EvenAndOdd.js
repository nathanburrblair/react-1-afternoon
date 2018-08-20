import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    }

    handleChange(val){
        this.setState({userInput: val })
    }

    assignEvenAndOdds (userInput) {
        var newEvens = []
        var newOdds = []
        
         var arr = userInput.split(',') ;
          for(var i = 0; i < arr.length; i++) {
           if(arr[i] % 2 === 0) {
             newEvens.push(arr[i]);
           } else {
             arr[i] % 2 !== 0;
             newOdds.push(arr[i]);
          }
        }

        this.setState({ evenArray: newEvens, oddArray: newOdds })

    }

    render () {
        return (
            <div className={"puzzleBox evenAndOddPB"}>
                <h4>"Evens and Odds"</h4>
                <input className="inputLine" type="text" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
} 
export default EvenAndOdd;