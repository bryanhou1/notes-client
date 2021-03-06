import React, {Component} from 'react';


class NoteListItem extends Component {

  handleOnClick(e) {
    const {noteId} = e.currentTarget.dataset;
    const {switchCurrentNote} = this.props;
    switchCurrentNote(noteId);
  }

  render() {
    const {note, isActive} = this.props;
    return (
      <li data-note-id={note.id}
        className={isActive ? "current-note": ""}
        onClick={(e) => this.handleOnClick(e)}
        >
        {note.title === "" ? "untitled" : note.title}
      </li>
    )
  }
}

export default NoteListItem;
