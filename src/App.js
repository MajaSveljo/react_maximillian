import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Maja", age: 25},
      { name: "Dragan", age: 26},
      { name: "Pepsi", age: 2},      
    ],

    otherState: 'some other value',

    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: "Maja", age: 25},
      { name: event.target.value, age: 26},
      { name: "Pepsi", age: 2},      
    ]
  }) 
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
      cursor : 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)} 
                name={person.name}
                age={person.age} />
            })}
          </div>
        )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>        
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
