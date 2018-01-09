import React, {Component} from 'react';

class StarButton extends Component {
  render() {
    return (
      <span className="statusBarComponent">
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
      </span>
    )
  }
}

export default StarButton;