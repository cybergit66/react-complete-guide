import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Persons constructor')
    }
    
    
//    shouldComponentUpdate(nextProps, nextState) {
//        console.log('Update Persons.js Inside shouldComponentUpdate', nextProps, nextState);
//        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
//    }
    
    render() {
        
        return this.props.persons.map((person, index) => {
                return <Person click={() => this.props.clicked(index)} 
                                position={index}
                                changed={(event) => this.props.changed(event, person.id)} 
                                name={person.name} 
                                age={person.age} 
                                key={person.id} />
              });
    }
}

export default Persons;