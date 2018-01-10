import React, {Component} from 'react';
import NoteListItem from './NoteListItem';
import AddNewButton from './AddNewButton';
class NoteList extends Component {
  state = {
    activeId: null
  }

  handleOnClick(activeId) {
    this.setState({activeId: activeId})
  }

  arrayToList() {
    const {notes, switchCurrentNote} = this.props;
    if (Object.keys(notes).length === 0) {
      return null;
    } else {
      const list = [];

      for (let key in notes) {
        list.push(<NoteListItem
          key={notes[key].id}
          note={notes[key]}
          switchCurrentNote={switchCurrentNote}
          isActive={this.state.activeId === notes[key].id}
          onClick={(e) => this.handleOnClick(e)}
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
