import React, {Component} from 'react';

class NoteList extends Component {

  arrayToList() {
    const {notes} = this.props.notes;
    return (
      <ul>
        {notes.map((note, i) => <li key={i}>{note.title}</li>)}
      </ul>
    )
  }

  render() {
    debugger;
    return (
      <div>
        {this.arrayToList()}
      </div>
    )
  }
}

export default NoteList;
