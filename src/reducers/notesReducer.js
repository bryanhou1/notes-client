import * as constants from '../constants/constants';
const initialState = {notes: {}, currentNoteId: null}

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case constants.FETCH_NOTES_SUCCESS: {
      const {notes} = action;
      const dictionary = {};
      for (let i = 0; i < notes.length; i++) {
        dictionary[notes[i].id] = notes[i];
      }
      return {...state, notes: dictionary};
    }
    case constants.DEFINE_CURRENT_NOTE:
      return {...state, currentNoteId: action.currentNoteId}
    case constants.UPDATE_NOTE: {
      const {currentNote, attr, value} = action;
      const modifiedNote = {...currentNote, [attr]: value, modified: true}

      return {...state, notes: {...state.notes, [modifiedNote.id]: modifiedNote}};
    }
    case constants.SUBMIT_NOTE_START:{
      const {id} = action;
      return {...state, notes: {...state.notes, [id]: {...state.notes[id], isSaving: true, modified: false}}}
    }
    case constants.SUBMIT_NOTE_SUCCESS: {
      const {id, last_updated} = action;
      return {...state, notes: {...state.notes, [id]: {...state.notes[id], isSaving: false, last_updated: last_updated}}}
    }
    case constants.SUBMIT_NOTE_FAILURE: {
      const {id} = action;
      return {...state, notes: {...state.notes, [id]: {...state.notes[id], isSaving: false, modified: true}}}
    }
    case constants.CREATE_NEW_NOTE_SUCCESS:
        // note: response.data
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}


