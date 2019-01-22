import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    // može i kod iz person.css-a, ali taj kod je globalan. AKO želim da promene budu scope-ovane u komponenti
    // ILI ako želim da ih dinamički menjam onda ovde koristim Radium
    
    //in styles components we define the styles as JS objects and tie them to components as properties
    // between the ' ' is javascript PROPERTY name, since it's a string it's valid
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div> 
    )
};

export default Radium(person);

//for pseudo selectors, wrapping components in Radium is enough.
// BUT for some, eg. some animations and media queries, whole app has to be wrapped in StyleRoot Radium object