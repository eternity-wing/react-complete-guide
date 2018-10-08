import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id:"sd1", name: 'Max', age: 28},
      {id:"sd2", name: 'Stephanie', age: 26},
      {id:"sd3", name: 'Manu', age: 29},
    ],
    otherstate: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons}); 
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons ];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };



    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)}
             click={() => this.deletePersonHandler(index)}
               />
          })}
      </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>  
          <p className={classes.join(' ')}>This is realy working!</p>
          <button 
          style={style}
          onClick={() => this.togglePersonsHandler('Maximilian!!')}>Toggle Persons</button>
          {persons}
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App!!!"));
  }
}

export default App;
