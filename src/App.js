import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
    state = {
        inputText: ''
    };

    deleteCharHandler = (charIndex) => {
        const userInput = this.state.inputText.split('');
        userInput.splice(charIndex, 1);
        const updatedText = userInput.join('');
        console.log('deleteCharHandler');
        this.setState({inputText: updatedText})
    }

    textChangedHandler = (event) => {
        this.setState({inputText: event.target.value});
    };

    render() {
        const charList = this.state.inputText.split('').map((ch, index) => {
            return (
              <Char charactor={ch} key={index}
              deleted={() => this.deleteCharHandler(index)}/>
            );
        });


        return (
            <div className="App">
                <h1>Hello React gurus!</h1>
                <input type='text'
                onChange={this.textChangedHandler} value={this.state.inputText}/>
                <p>{this.state.inputText}</p>
                <Validation inputLength={this.state.inputText.length}/>
                {charList}
            </div>
        );
    }
}

export default App;
