import React, {Component} from 'react';

class StarButton extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
      </div>
    )
  }
}

export default StarButton;