import React, {Component} from 'react';
import NoteListItem from './NoteListItem';
import AddNewButton from './AddNewButton';
class NoteList extends Component {
  arrayToList() {
    const {notes,notesArr, switchCurrentNote, currentNoteId} = this.props;

    return (
      <ul>
        {notesArr.map((lookup) => <NoteListItem
          key={lookup.id}
          switchCurrentNote={switchCurrentNote}
          note={notes[lookup.id]}
          isActive={currentNoteId === lookup.id}/>
        )}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <ul>
          <li id="note-list-title">Notes  
            <AddNewButton createNewNote={this.props.createNewNote}/>
          </li>
        </ul>
        {this.arrayToList()}
      </div>
    )
  }
}

export default NoteList;
