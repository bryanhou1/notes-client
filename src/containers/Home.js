import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNotes, switchCurrentNote, updateNote, submitNote, createNewNote, deleteNote} from '../actions/index';
import './Home.css'
import NoteList from '../components/NoteList';
import StatusAndActionBar from '../components/StatusAndActionBar';
import NoteContainer from '../components/NoteContainer';

class Home extends Component {
	render () {
    const {notesArr, notes, switchCurrentNote, currentNote, updateNote, submitNote, createNewNote, deleteNote} = this.props;
		return (
      <div className="container-fluid">
        <div className="sidenav">
          <NoteList notesArr={notesArr} notes={notes} currentNoteId={(currentNote || {}).id} switchCurrentNote={switchCurrentNote} createNewNote={createNewNote}/>
        </div>

        <div id="main">
          <StatusAndActionBar currentNote={currentNote} submitNote={submitNote} updateNote={updateNote} deleteNote={deleteNote} notesArr={notesArr} switchCurrentNote={switchCurrentNote}/>
          <NoteContainer currentNote={currentNote} updateNote={updateNote} />
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  const {notes, currentNoteId, notesArr} = state.notesReducer;
  return {
    notes: notes,
    currentNote: notes[currentNoteId],
    notesArr : notesArr
  }
}

export default connect(mapStateToProps, {fetchNotes, switchCurrentNote, updateNote, submitNote, createNewNote, deleteNote})(Home);

