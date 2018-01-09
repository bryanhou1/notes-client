import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNotes, switchCurrentNote, updateNote} from '../actions/index';
import './Home.css'
import NoteList from '../components/NoteList';
import StatusAndActionBar from '../components/StatusAndActionBar';
import NoteContainer from '../components/NoteContainer';

class Home extends Component {
	render () {
    const {notes, switchCurrentNote, currentNote, updateNote} = this.props;

		return (
      <div className="container-fluid">
        <div className="sidenav">
          <NoteList notes={notes} switchCurrentNote={switchCurrentNote}/>
        </div>

        <div id="main">
          <StatusAndActionBar/>
          <NoteContainer currentNote={currentNote} updateNote={updateNote}/>
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  const {notes, currentNoteId} = state.notesReducer;
  return {
    notes: notes,
    currentNote: notes.find((n) => n.id === parseInt(currentNoteId,10))
  }
}

export default connect(mapStateToProps, {fetchNotes, switchCurrentNote, updateNote})(Home);

