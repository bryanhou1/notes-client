import React, {Component} from 'react';

class SaveButton extends Component {
  
  handleOnClick(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-floppy-o fa-lg" aria-hidden="true" onClick={(e) => this.handleOnClick(e)}/>
      </span>
    )
  }
}

export default SaveButton;