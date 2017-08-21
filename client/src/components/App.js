import React, { Component } from 'react';
import MailBoxContainer from '../containers/MailBoxContainer';
import '../stylesheets/App.css';

import Api from '../services/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    Api.get('/messages')
      .then(response => {
        const { messages } = response.data;

        this.setState({
          messages: messages
        });
      }).catch(this.error);
  }
  render() {
    const { messages, loaded } = this.state;

    return <MailBoxContainer
      messages={messages}
      loaded={loaded}
    />
  }
}

export default App;
