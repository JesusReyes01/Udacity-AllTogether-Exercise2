import React, {Component} from 'react';
import { animateScroll } from "react-scroll";

class MessageInput extends Component {
  state = {
    message: ''
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({containerId: "Amy"});
    animateScroll.scrollToBottom({containerId: "John"});
  }

  handleInput = (event) => {
    event.preventDefault()
    this.setState({message: event.target.value})
  }

  isDisabled = () => {
    return this.state.message === '';
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitMessage(this.props.username, this.state.message)
    this.setState({message: ''},this.scrollToBottom)
  }
      
  render(){
    
    return(
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your message..." 
              value={this.state.message}
              onChange={this.handleInput}
              />
          <div className="input-group-append">
              <button className="btn submit-button" disabled={this.isDisabled()}>
                  SEND
              </button>
          </div>
        </form>
      </div>
    ) 
  }
}

export default MessageInput;