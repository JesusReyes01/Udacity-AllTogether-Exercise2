import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './Screen';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [],
  };

  submitMessage = (username, message) => {
    let entry = {
      username: username,
      text: message
    }
    this.setState((prevState) => ({
     	 messages: [...prevState.messages, entry]
    }))
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">   
    	  <Screen
				messages={messages}
				user={users[0]}
				submitMessage={this.submitMessage}/>
			<Screen
				messages={messages}
				user={users[1]}
				submitMessage={this.submitMessage}/>
          
        </div>
      </div>
    );
  }
}

export default App;
