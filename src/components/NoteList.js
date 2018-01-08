import React, {Component} from 'react';

class NoteList extends Component {

  arrayToList() {
    const {notes} = this.props;
    return (
      <ul>
        {notes.map((note, i) => <li key={i}>{note.title}</li>)}
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
