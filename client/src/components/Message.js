import React, { Component } from 'react';
import Application from '../utils/Application';
import Remove from './Remove';
import ReadUnread from './ReadUnread'

const ToolBar = ({read, handleRemoveMessage, handleMarkUnread, handleMarkRead, content}) => {
  let readUnreadButton = read
    ? <ReadUnread action={handleMarkUnread} label='Mark as Unread' />
    : <ReadUnread action={handleMarkRead} label='Mark as Read' />

  return (
    <header>
      {content}

      <ul className='actions'>
        <li>{readUnreadButton}</li>
        <li><Remove removeMessage={handleRemoveMessage} /></li>
      </ul>
    </header>
  )

}

class Message extends Component {
  render() {
    const { message, removeMessage, markRead, markUnread } = this.props;

    if(message) {
      return(
        <div className='message'>
          <ToolBar
            read={message.read}
            handleRemoveMessage={() => removeMessage(message.uid)}
            handleMarkRead={() => markRead(message.uid)}
            handleMarkUnread={() => markUnread(message.uid)}
            content={
              <div>
                <h1>Subject: {message.subject}</h1>
                <h2>From: {message.sender}</h2>
                <h3>{Application.formatDate(message.time_sent)}</h3>
              </div>
            }
          />
          <p>
            {message.message}
          </p>
        </div>
      );
    }

    return(null);
  }
}

export default Message;