const initialState = {notes: [], currentNoteId: null}

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      return Object.assign({}, state, {notes: action.notes});
    case "DEFINE_CURRENT_NOTE":
      return Object.assign({}, state, {currentNoteId: action.currentNoteId})
    case "UPDATE_NOTE":
      const {currentNote, attr, value} = action;
      const index = state.notes.findIndex((note) => note.id === currentNote.id)
      const modifiedNote = Object.assign({}, currentNote, {[attr]: value, modified: true})
      
      return Object.assign({},state, {notes: [
        ...state.notes.slice(0,index),
        modifiedNote,
        ...state.notes.slice(index+1)
      ]})
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

