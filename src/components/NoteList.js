import React, {Component} from 'react';
import NoteListItem from './NoteListItem';
import AddNewButton from './AddNewButton';
class NoteList extends Component {
  arrayToList() {
    const {notes, switchCurrentNote, currentNoteId} = this.props;
    if (Object.keys(notes).length === 0) {
      return null;
    } else {
      const list = [];

      for (let key in notes) {
        list.push(<NoteListItem
          key={notes[key].id}
          note={notes[key]}
          switchCurrentNote={switchCurrentNote}
          isActive={currentNoteId === notes[key].id}
        />)
      }

      return (
        <ul>
          {list}
        </ul>
      )
    }
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
