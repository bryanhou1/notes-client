import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';

class NoteContainer extends Component {
  
  handleOnChange = (e) => {
    this.props.updateNote(this.props.currentNote, e.target.name, e.target.value)
  };

  render() {
    const {currentNote} = this.props;

    if (!currentNote) {
      return (
        <div>
          {localStorage.token ? "Select a note on the left or create a new note" : ""}
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

const mapStateToProps = (state) => {
  const {notes, currentNoteId} = state.notesReducer;
  return {
    currentNote: notes.find((n) => n.id === parseInt(currentNoteId,10))
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
