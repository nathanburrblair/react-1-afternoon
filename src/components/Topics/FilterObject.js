import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [{
                name: "Nathan",
                age: 37,
                hair_color: "brown",
                food: "tacos",
            },
            {
                name: "Dave",
                interests: "foosball", 
                hobbies: "darts",
                faveColor: "green",
            },
            {
                name: "Chad",
                sport: "football",
                drink: "bud light",
                clothing: "bedazzled jeans",
            }
            ],

            userInput: '',
            filteredArray: []
        }

    }

    people (val) {
        this.setState({ userInput: val });
    }

    filteredPeople (prop) {
        var unFilteredArray = this.state.unFilteredArray;
        var filteredPeople = [];

        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].hasOwnProperty(prop)) {
                filteredPeople.push(unFilteredArray[i]);
            }
        }

        this.setState({filteredPeople: filteredPeople });

    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.people, null, 10) }</span>
                <input className="inputLine" type="text" onChange={ (e) => this.people(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filteredPeople(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPeople, null, 10) }</span>
            </div>
        )
    }
}
export default FilterObject;