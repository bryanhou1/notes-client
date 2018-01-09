import React, {Component} from 'react';

class NoteList extends Component {

  handleOnClick(e) {
    const {noteId} = e.currentTarget.dataset;
    this.props.switchCurrentNote(noteId);
  }

  arrayToList() {
    const {notes} = this.props;
    return (
      <ul>
        {notes.map((note) => <li
          key={note.id}
          data-note-id={note.id}
          onClick={(e) => this.handleOnClick(e)}>
            {note.title}
        </li>)}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.arrayToList()}
      </div>
    )
  }
}

export default NoteList;
