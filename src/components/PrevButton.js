import React, {Component} from 'react';

class PrevButton extends Component {

  handleOnClick(e) {
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-chevron-left fa-lg" aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default PrevButton;