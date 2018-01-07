import React, {Component} from 'react';

class Messages extends Component {

  arrayToList() {
    const {text} = this.props.messages;

    return (
      <ul>
        {text.map((str) => <li>{str}</li>)}
      </ul>
    )
  }

  render() {
    const {text, style} = this.props.messages;

  	if (text) {

      if (style === "success") {
        return (
          <div className="alert alert-success">
            <ul>
              {this.arrayToList()}
            </ul>
          </div>
        )
      }
      if (style === "error") {
        return (
          <div className="alert alert-danger">
            {this.arrayToList()}
          </div>
        )
      }
    } else {
      return (<div/>)
    }
    
  }
}



export default Messages;
