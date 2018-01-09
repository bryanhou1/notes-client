import React, {Component} from 'react';

class NoteContainer extends Component {
  currentNote() {
    const {notes, currentNoteId} = this.props;
    const note = notes.find((n) => n.id === parseInt(currentNoteId,10))
    return note;
  }

  render() {
    const {notes, currentNoteId} = this.props;
    if (notes.length === 0 || currentNoteId === null) {
      return (
        <div>
          Select a note on the right or create a new note
        </div>
      )
    } else {
      return (
        <div>
          <textarea name="" id="" cols="30" rows="10">{this.currentNote().text}</textarea>
        </div>
      )
    }
    
  }
}

export default NoteContainer;
