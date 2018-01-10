import React, {Component} from 'react';

class AddNewButton extends Component {

  handleOnClick(e) {
    this.props.createNewNote();
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-plus add-new-btn" aria-hidden="true" onClick={(e) => this.handleOnClick(e)}/>
      </span>
    )
  }
}

export default AddNewButton;




