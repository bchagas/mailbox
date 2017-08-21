import React, { Component } from 'react';
import Close from 'material-ui-icons/Close'

class Remove extends Component {
  render() {
    const { removeMessage } = this.props;

    return <button
      name='close'
      onClick={removeMessage}
      title='Delete'
    ><Close/></button>
  }
}

export default Remove;