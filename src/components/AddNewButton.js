import React, {Component} from 'react';

class AddNewButton extends Component {

  handleOnClick(e) {
    debugger
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i class="fa fa-plus add-new-btn" aria-hidden="true" onClick={(e) => this.handleOnClick(e)}/>
      </span>
    )
  }
}

export default AddNewButton;




