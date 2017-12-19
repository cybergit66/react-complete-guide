import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxil';
import withClass from '../hoc/withClass';


class App extends Component {
    constructor(props) {
        super(props);
        
         this.state = {
            persons: [
                { id: 'adad', name: 'Big T', age: 51 },
                { id: '44ee', name: 'Liz', age: 51 },
                { id: 'lloo', name: 'TommyBoy', age: 11 }
            ],
            showPersons: false,
            toggleClicked: 0
            }
        }
    

    
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
    }
    
    
//    state = {
//        persons: [
//            { id: 'adad', name: 'Big T', age: 51 },
//            { id: '44ee', name: 'Liz', age: 51 },
//            { id: 'lloo', name: 'TommyBoy', age: 11 }
//        ],
//        showPersons: false
//    }
    
    userinputChangeHandler = (event) => { 
        this.setState({ userInput: event.target.value });
        let count = this.state.userInput.length;
        this.setState({ countLetters: count });
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = { ...this.state.persons[personIndex]};
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState({persons: persons});
    }
    
    deletePersonHandler = (personIndex) => {
//        const persons = this.state.persons.slice(); old approach
        const persons = [...this.state.persons]; // ES6 approach create copy of state in an array
        persons.splice(personIndex, 1); // mutate the copy
        this.setState({persons: persons}); // set the state to the copy
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( (prevState, props) => { // ensure we get the latest version of state
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1 
            }
        }   );
    }

  render() {
      let persons = null;
      
      if (this.state.showPersons){
          persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}/>;
      }
      
    return (
        <Aux>
            <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
            {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
