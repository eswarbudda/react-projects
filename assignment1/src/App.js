import React, {Component} from 'react';
import './App.css';
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";


class App extends Component {
  state = {
    paragraphs: [
      {text1: 'Doing my first ever assignment in ReactJs'},
      {text2: 'I intend to do it without help as much as possible'},
      {username: 'Eswar'}
    ]
  };

  changeEventHandler = (event) => {
      this.setState( {
          paragraphs: [
              {text1: 'Doing my first ever assignment in ReactJs'},
              {text2: 'I intend to do it without help as much as possible'},
              {username: event.target.value}
          ]
      });
  }

  render() {
    const userinputStyle = {
        backgroundColor: 'red',
        font: 'inherent',
        border: '2px solid blue',
        padding: '5px',
        cursor: 'pointer'
    }


    return (
        <div className="App">
          <h1>Assignment 1</h1>
          <UserInput username={this.state.paragraphs[2].username}
              change={this.changeEventHandler}></UserInput>
          <button style={userinputStyle}>Dummy</button>
          <UserOutput para1={this.state.paragraphs[0].text1} username={this.state.paragraphs[2].username}/>
          <UserOutput para2={this.state.paragraphs[1].text2} username={this.state.paragraphs[2].username}/>
        </div>

    );
  }
}

export default App;
