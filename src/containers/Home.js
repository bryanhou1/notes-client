import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNotes, switchCurrentNote} from '../actions/index';
import './Home.css'
import NoteList from '../components/NoteList';
import StatusAndActionBar from '../components/StatusAndActionBar';
import NoteContainer from '../containers/NoteContainer';

class Home extends Component {
	componentDidMount() {
    this.props.fetchNotes(localStorage.token);
  }

	render () {
    const {notes, switchCurrentNote, currentNoteId} = this.props;

		return (
      <div className="container-fluid">
        <div className="sidenav">
          <NoteList notes={notes} switchCurrentNote={switchCurrentNote}/>
        </div>

        <div id="main">
          <StatusAndActionBar/>
          <NoteContainer notes={notes} currentNoteId={currentNoteId}/>
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    notes: state.notesReducer.notes,
    currentNoteId: state.notesReducer.currentNoteId
  }
}

export default connect(mapStateToProps, {fetchNotes, switchCurrentNote})(Home);



