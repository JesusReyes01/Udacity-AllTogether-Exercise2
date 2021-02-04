import React from 'react';
import PropTypes from 'prop-types';
import MessageWindow from './MessageWindow';
import MessageInput from './MessageInput';

const Screen = (props) => {

     
        const {username} = props.user
		const {messages} = props
        

  		return (
      		<div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{username}</div>

                <MessageWindow 
                	username={username}
                	messages={messages}/>
                <MessageInput
                	submitMessage={props.submitMessage}
                	username={username}/>
			</div>
      
      	)
	
}

Screen.propTypes = {
  submitMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default Screen;