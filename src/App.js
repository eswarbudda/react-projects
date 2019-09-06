import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 29 },
            { name: 'Manu', age: 30 },
            { name: 'Linda', age: 25}
        ],
        otherPerson: 'Some other reason',
        showPersons: false
    };

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Maximillan', age: 29},
                {name: event.target.value, age: 30},
                {name: 'Linda', age: 26}
            ]
        })
    }

    switchPersonsEventHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    }

    deletePersonHandler = (personIndex) => {
        //const p = this.state.persons.slice();  //should work but below is using spread operator more efficient
        const p = [...this.state.persons];
        p.splice(personIndex, 1);
        this.setState({persons: p})
    }

    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '3x solid red',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if( this.state.showPersons === true ) {
            persons = (
                <div>
                {
                    this.state.persons.map((person, index) => {
                    return <Person
                        click= {() => this.deletePersonHandler(index)}
                        name= {person.name}
                        age= {person.age} />
                    })
                }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hello React gurus!</h1>
                <button
                    style={style}
                    onClick={this.switchPersonsEventHandler}> Toggle Persons </button>
                {persons}
            </div>
        );
    }
}

export default App;
