import React, {Component} from 'react';

class SaveStatus extends Component {

  displayMessage(){
    debugger;
    const {isSaving, last_updated} = this.props.currentNote;
    if (isSaving) {
      return (<span>Saving...</span>)
    } else {
      return (<span>Last updated at {last_updated}</span>)
    }
  }

  render() {
    return (
      <span className="statusBarComponent">
        {this.displayMessage()}
      </span>
    )
  }
}

export default SaveStatus;




