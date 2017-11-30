import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: 'adad', name: 'Big T', age: 51 },
            { id: '44ee', name: 'Liz', age: 51 },
            { id: 'lloo', name: 'TommyBoy', age: 11 }
        ],
        showPersons: false
    }
    
    userinputChangeHandler = (event) => { 
        this.setState({ userInput: event.target.value });
        let count = this.state.userInput.length;
        this.setState({ countLetters: count });
        console.log(this.state.countLetters, this.state.userInput);
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
      
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer' 
      };
      
      let persons = null;
      
      if (this.state.showPersons){
          persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person click={() => this.deletePersonHandler(index)} 
                                changed={(event) => this.nameChangeHandler(event, person.id)} 
                                name={person.name} 
                                age={person.age} 
                                key={person.id} />
              })}
            </div>
          );
      }
      
    return (
      <div className="App">
        <h1>My Customized React App</h1>
        <p>Starting to come into Shape!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show/Hide Persons</button> 
        {persons}
        <p><input type="text" onChange={this.userinputChangeHandler}/></p>
        </div>
    );
  }
}

export default App;
