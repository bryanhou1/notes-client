import React, {Component} from 'react';

class StarButton extends Component {

  handleOnClick(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-star fa-lg" aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default StarButton;