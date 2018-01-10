import * as constants from '../constants/constants';
const initialState = {notes: {}, notesArr: [], currentNoteId: null}
//notesArr is used to sort note on the side bar;

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case constants.FETCH_NOTES_SUCCESS: {
      const {notes} = action;
      const dictionary = {};
      for (let i = 0; i < notes.length; i++) {
        dictionary[notes[i].id] = notes[i];
      }
      return {...state, notes: dictionary, notesArr: notes};
    }

    case constants.DEFINE_CURRENT_NOTE:
      return {...state, currentNoteId: action.currentNoteId}

    case constants.UPDATE_NOTE: {
      const {currentNote, attr, value} = action;
      const modifiedNote = {...currentNote, [attr]: value, modified: true}
      if (state.notesArr[0] === currentNote) {
        return {...state, notes: {...state.notes, [modifiedNote.id]: modifiedNote}};
      } else {
        const {notesArr} = state;
        const mostRecentIndex = notesArr.findIndex((note)=> note.id === currentNote.id)
        const shiftedArr = [
          notesArr[mostRecentIndex],
          ...notesArr.slice(0,mostRecentIndex),
          ...notesArr.slice(mostRecentIndex+1)
        ];
        return {...state, notes: {...state.notes, [modifiedNote.id]: modifiedNote}, notesArr: shiftedArr}
      }
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

    case constants.CREATE_NEW_NOTE_SUCCESS: {
      const {note} = action;
      return {...state, currentNoteId: note.id, notes: {...state.notes, [note.id]: note}, notesArr:[note, ...state.notesArr]}
    }

    case constants.DELETE_NOTE_SUCCESS: {
      const {currentNoteId, notesArr} = state;
      const newState = {...state, currentNoteId: null, notesArr: notesArr.filter((note) => note.id!== parseInt(currentNoteId,10))};
      delete newState.notes[currentNoteId];
      return newState;
    }

    case constants.LOGOUT:
      return initialState;

    default:
      return state;
  }
}


