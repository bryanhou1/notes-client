import React, {Component} from 'react';

class DeleteButton extends Component {

  handleOnClick(e) {
    this.props.deleteNote();
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-trash-o fa-lg" aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default DeleteButton;