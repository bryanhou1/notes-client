import React, {Component} from 'react';
import SaveStatus from './SaveStatus';
import SaveButton from './SaveButton';
import StarButton from './StarButton';
import DeleteButton from './DeleteButton';
class StatusAndActionBar extends Component {

  render() {
    const {currentNote, submitNote} = this.props;
    if (!!currentNote) {
      return (
        <div id="status-and-action-bar">
          <SaveStatus />
          <StarButton />
          <SaveButton currentNote={currentNote} submitNote={submitNote}/>
          <DeleteButton />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default StatusAndActionBar;
