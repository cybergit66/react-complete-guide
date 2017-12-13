import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Persons constructor')
    }
    
    componentWillMount(){
        console.log('[Person.js] Component will mount()');
    }
    
    componentDidMount(){
        console.log('[Person.js] Component Did mount()');
    }
    render() {
        console.log('[Person.js] Component Did mount()');
        
        return (
            <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;