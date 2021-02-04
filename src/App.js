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
			{users.map( e => {
             	return (
				  <Screen
                    messages={messages}
                    user={e}
                    submitMessage={this.submitMessage}/>
             	) 
            })}

        </div>
      </div>
    );
  }
}

export default App;
