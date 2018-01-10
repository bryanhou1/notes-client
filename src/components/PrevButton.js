import React, {Component} from 'react';

class PrevButton extends Component {

  handleOnClick(e) {
    const {switchCurrentNote, currentNoteId} = this.props;
    const prevNoteId = this.prevNoteId();
    if (prevNoteId) {
      switchCurrentNote(prevNoteId);
    }
  }

  prevNoteId() {
    const {notesArr, currentNoteId} = this.props;
    const prevIndex = notesArr.findIndex((note) => note.id === currentNoteId)-1;
    return (prevIndex === -1) ? null : notesArr[prevIndex].id;
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