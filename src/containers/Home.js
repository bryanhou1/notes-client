import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import './Home.css'
import NoteList from '../components/NoteList';
import NoteContainer from '../components/NoteContainer';

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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



