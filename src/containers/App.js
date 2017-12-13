import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        
         this.state = {
            persons: [
                { id: 'adad', name: 'Big T', age: 51 },
                { id: '44ee', name: 'Liz', age: 51 },
                { id: 'lloo', name: 'TommyBoy', age: 11 }
            ],
            showPersons: false
            }
        }
    
    componentWillMount(){
        console.log('[App.js] Component will mount()');
    }
    
    componentDidMount(){
        console.log('[App.js] Component Did mount()');
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
        const persons = [...this.state.persons]; // ES6 approach
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

  render() {
      console.log('[Inside render] App.js');
      let persons = null;
      
      if (this.state.showPersons){
          persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}/>;
      }
      
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
        </div>
    );
  }
}

export default App;
