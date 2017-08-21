import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Message from '../components/Message';

class MailBoxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages,
      loaded: nextProps.loaded
    })
  }

  find(messageId) {
    const { messages } = this.state;

    return messages.find((message, index) => {
      return message && message.uid === messageId;
    });
  }

  delete(messageId) {
    const { messages } = this.state;
    messages.map((message, index) => {
      if(message.uid === messageId) {
        delete messages[index];
      }

      return false;
    });

    return messages;
  }

  displayMessage(messageId) {
    const { messages } = this.state;
    const message = this.find(messageId);

    if(message) {
      message.read = true;
    }

    this.setState({
      message: message,
      messages: messages
    });
  }

  removeMessage(messageId) {
    const messages = this.delete(messageId);

    this.setState({
      message: null,
      messages: messages
    });
  }

  markRead(messageId) {
    const { messages } = this.state;
    const message = this.find(messageId);

    if (message) {
      message.read = true;
    }

    this.setState({
      message: message,
      messages: messages
    });
  }

  markUnread(messageId) {
    const { messages } = this.state;
    const message = this.find(messageId);

    if (message) {
      delete message.read;
    }

    this.setState({
      message: message,
      messages: messages
    });
  }

  render() {
    const { messages, message, loaded } = this.state;

    return(
      <section id='mailbox'>
        <header>
          <h2>Inbox</h2>
        </header>

        <Navigation
          messages={messages}
          loaded={loaded}
          displayMessage={this.displayMessage.bind(this)}
          removeMessage={this.removeMessage.bind(this)}
        />

        <Message
          message={message}
          removeMessage={this.removeMessage.bind(this)}
          markUnread={this.markUnread.bind(this)}
          markRead={this.markRead.bind(this)}
        />
      </section>
    );
  }

}

export default MailBoxContainer;