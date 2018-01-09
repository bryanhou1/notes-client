import React, {Component} from 'react';
import NoteListItem from './NoteListItem';


class NoteList extends Component {
  state = {
    activeId: null
  }


  handleOnClick(activeId) {
    this.setState({activeId: activeId})
  }

  arrayToList() {
    const {notes, switchCurrentNote} = this.props;
    return (
      <ul>
        {notes.map((note) => <NoteListItem
          key={note.id}
          note={note}
          switchCurrentNote={switchCurrentNote}
          isActive={this.state.activeId === note.id}
          onClick={(e) => this.handleOnClick(e)}
        />)}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <ul>
          <li id="note-list-title">Notes</li>
        </ul>
        {this.arrayToList()}
      </div>
    )
  }
}

export default NoteList;
