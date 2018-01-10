import React, {Component} from 'react';

class SaveStatus extends Component {

  displayMessage(){
    const {modified, isSaving, last_updated} = this.props.currentNote;
    if (isSaving) {
      return (<span>Saving...</span>)
    } else if (modified){
      return (<span>Not Saved. Last saved at {last_updated}</span>)
    } else {
      return (<span>Saved.</span>)
    }
  }

  render() {
    return (
      <span>
        {this.displayMessage()}
      </span>
    )
  }
}

export default SaveStatus;




