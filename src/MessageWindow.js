import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from "react-scroll";

const MessageWindow = (props) => {
  
  	let scrollToBottom = () => {
      animateScroll.scrollToBottom({
        containerId: "message-list"
      });
	}
  
  	
	return (
      <ul id={props.username} className="message-list">
        {props.messages.map((message, index) => (
        	<li
        		key={index}
  				className={
    				message.username === props.username ? 'message sender' : 'message recipient'
                }>
				<p>{`${message.username}: ${message.text}`}</p>
  			</li>
  		))}
  	  </ul>            
   )    
}

MessageWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};
export default MessageWindow;