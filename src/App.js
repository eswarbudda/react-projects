import React, {Component} from 'react';
import logo from './logo.svg';
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

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: 'Maximillan', age: 29 },
                { name: 'Manu', age: 30 },
                { name: 'Linda', age: 26}
            ]
        })
    }

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

    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '3x solid red',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hello React gurus!</h1>
                <button
                    style={style}
                    onClick={this.switchPersonsEventHandler}> Toggle Persons </button>
                {
                    this.state.showPersons === true ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            change={this.changeNameHandler}>My hobbies: sports</Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;
