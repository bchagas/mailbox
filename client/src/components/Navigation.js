import React, { Component } from 'react';
import Application from '../utils/Application';
import Remove from './Remove';

class Navigation extends Component {
  render() {
    const {
      messages,
      displayMessage,
      removeMessage
    } = this.props;
    const messageList = messages.map((message) =>
      <li
        className={message.read ? null : 'read' }
        onClick={() => displayMessage(message.uid)}
        key={message.uid}
      >
        <span className='sender'>
          <b>{message.sender}</b>
        </span>
        <span className='subject'>
          <b>Subject:</b> {message.subject}
        </span>
        <span className='date'>{Application.formatDate(message.time_sent)}</span>
        <Remove removeMessage={() => removeMessage(message.uid)} />
      </li>
    );

    return(
      <aside id="navigation">
        {messages
          ? (<ul>{messageList}</ul>)
          : (null)
        }
      </aside>
    )
  }
}

export default Navigation;