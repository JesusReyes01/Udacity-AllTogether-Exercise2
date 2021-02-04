import React, {Component} from 'react';

class Screen extends Component {
	state = {
      message: ''
    }

    handleInput = (event) => {
      event.preventDefault()
      this.setState({...this.state, [event.target.name]: event.target.value})
    }

    isDisabled = () => {
      return this.state.message === '';
    };

	handleSubmit = (event) => {
      event.preventDefault();
      this.props.submitMessage(this.props.user.username, this.state.message)
      this.setState({message: ''})
    }
      
    render() {
        const {username} = this.props.user
		const {messages} = this.props

  		return (
      		<div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{username}</div>

              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === username ? 'message sender' : 'message recipient'
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>

              <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter your message..." 
                      value={this.state.message}
                      onChange={this.handleInput}
                      name='message'/>
                  <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
			</div>
      
      	)
    }
}

export default Screen