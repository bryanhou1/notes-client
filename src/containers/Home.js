import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNotes, switchCurrentNote, updateNote, submitNote} from '../actions/index';
import './Home.css'
import NoteList from '../components/NoteList';
import StatusAndActionBar from '../components/StatusAndActionBar';
import NoteContainer from '../components/NoteContainer';

class Home extends Component {
	render () {
    const {notes, switchCurrentNote, isLoggedIn, currentNote, updateNote, submitNote} = this.props;
		return (
      <div className="container-fluid">
        <div className="sidenav">
          <NoteList notes={notes} switchCurrentNote={switchCurrentNote}/>
        </div>

        <div id="main">
          <StatusAndActionBar currentNote={currentNote} submitNote={submitNote} updateNote={updateNote} />
          <NoteContainer currentNote={currentNote} updateNote={updateNote} isLoggedIn={isLoggedIn}/>
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  const {notes, currentNoteId} = state.notesReducer;
  return {
    notes: notes,
    currentNote: notes[currentNoteId],
    isLoggedIn: !!state.currentUser.user.jwt
  }
}

export default connect(mapStateToProps, {fetchNotes, switchCurrentNote, updateNote, submitNote})(Home);

