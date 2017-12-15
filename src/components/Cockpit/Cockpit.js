import React from 'react';
import classes from './Cockpit.css';
import Auxil from '../../hoc/Auxil';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    
    if (props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
          assignedClasses.push(classes.red); // classes = ['red'];
      }
    
    if (props.persons.length <= 1) {
          assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
      } 
    
    return(
        <Auxil>
            <h1>My Customized React App</h1>
            <p className={assignedClasses.join(' ')}>Starting to come into Shape!</p>
            <button className={btnClass} onClick={props.clicked}>Show/Hide Persons</button>
        </Auxil>
    );
}

export default cockpit;