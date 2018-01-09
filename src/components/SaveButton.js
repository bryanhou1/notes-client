import React, {Component} from 'react';

class SaveButton extends Component {
  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-floppy-o fa-lg" aria-hidden="true"/>
      </span>
    )
  }
}

export default SaveButton;