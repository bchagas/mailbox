import React, { Component } from 'react';
import close from '../images/close.svg'

class Remove extends Component {
  render() {
    const { removeMessage } = this.props;

    return <button
      name='close'
      onClick={removeMessage}
      title='Delete'
    ><img src={close} alt="Remove Message" width="10" height="10"/></button>
  }
}

export default Remove;