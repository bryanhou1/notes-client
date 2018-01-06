import React, {Component} from 'react';

class Messages extends Component {


  render() {
    const {text, style} = this.props.messages;

  	if (text) {
      if (style === "success") {
        return (
          <div className="alert alert-success">
            {text}
          </div>
        )
      }
      if (style === "error") {
        return (
          <div className="alert alert-danger">
            {text}
          </div>
        )
      }
    } else {
      return (<div/>)
    }
    
  }
}



export default Messages;
