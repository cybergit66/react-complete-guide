import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Persons constructor')
    }
    
    componentWillMount(){
        console.log('[Persons.js] Component will mount()');
    }
    
    componentDidMount(){
        console.log('[Persons.js] Component Did mount()');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('Update Persons.js; inside component will receive props');
    }
    
    render() {
        console.log('[Persons.js] rendered');
        
        return this.props.persons.map((person, index) => {
                return <Person click={() => this.props.clicked(index)} 
                                changed={(event) => this.props.changed(event, person.id)} 
                                name={person.name} 
                                age={person.age} 
                                key={person.id} />
              });
    }
}

export default Persons;