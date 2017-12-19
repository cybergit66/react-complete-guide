import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxil';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Persons constructor');
        if (this.props.position === 0) {
            this.inputElement.focus();    
        }
    }
  
    render() {
        
        return (
            <Aux className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                ref={(input) => { this.inputElement = input }}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);