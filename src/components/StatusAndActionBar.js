import React, {Component} from 'react';
import SaveStatus from './SaveStatus';
import SaveButton from './SaveButton';
import StarButton from './StarButton';
import DeleteButton from './DeleteButton';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
class StatusAndActionBar extends Component {

  render() {
    const {currentNote, submitNote, updateNote, deleteNote} = this.props;
    if (!!currentNote) {
      return (
        <div id="status-and-action-bar">
          <SaveStatus currentNote={currentNote}/>
          <StarButton currentNote={currentNote} updateNote={updateNote}/>
          <SaveButton currentNote={currentNote} submitNote={submitNote}/>
          <DeleteButton deleteNote={deleteNote}/>
          <PrevButton/>
          <NextButton/>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default StatusAndActionBar;
