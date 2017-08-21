import React, { Component } from 'react';

class ReadUnread extends Component {
  render() {
    const { action, label } = this.props;

    return <button name={label.toLowerCase()} onClick={action}>{label}</button>
  }
}

export default ReadUnread;