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

    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Test';
    this.setState({persons: [
        { name: newName, age: 30},
        { name: "Dragan", age: 31},
        { name: "Pepsi", age: 7},      
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: "Maja", age: 25},
      { name: event.target.value, age: 26},
      { name: "Pepsi", age: 2},      
    ]
  }) 
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        
        {/* this way is *** NOT *** recommended, but is to be used if necessary.
        It's not recommended because React can render too often*/}
        
        <button onClick={() => this.switchNameHandler("Maja3")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          
          // this way is recommended
          
          click={this.switchNameHandler.bind(this, "Dragan2")}
          changed={this.nameChangedHandler}>
          My Hobbies: being annoying</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
