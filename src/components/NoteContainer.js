import React, {Component} from 'react';

export default class NoteContainer extends Component {
  
  handleOnChange = (e) => {
    this.props.updateNote(this.props.currentNote, e.target.name, e.target.value)
  };

  render() {
    const {currentNote, isLoggedIn} = this.props;

    if (!currentNote) {
      return (
        <div>
          {isLoggedIn ? "Select a note on the left or create a new note" : ""}
        </div>
      )
    } else {
      return (
        <div>
          <input
            type="text"
            name="title"
            id="note-title"
            value={currentNote.title}
            onChange={e => this.handleOnChange(e)}
            placeholder="Title"
          />
          <textarea 
            name="text"
            id="note-text"
            value={currentNote.text}
            onChange={e => this.handleOnChange(e)}
            placeholder="Start taking notes here"
            autoFocus
          />
        </div>
      )
    }
  }
}

