import React, {Component} from 'react';

class NextButton extends Component {

  handleOnClick(e) {
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-chevron-right fa-lg" aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default NextButton;